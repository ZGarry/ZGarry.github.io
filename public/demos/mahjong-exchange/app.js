(function () {
  "use strict";

  const Core = window.MahjongCore;
  const app = document.querySelector("#app");

  const ui = {
    state: Core.createInitialState(),
    exchangeSelection: { me: new Set(), teammate: new Set() },
    selectedDiscard: null,
    pendingSmart: false,
  };

  function resetUi(nextState) {
    ui.state = nextState;
    ui.exchangeSelection = { me: new Set(), teammate: new Set() };
    ui.selectedDiscard = null;
    ui.pendingSmart = false;
    render();
  }

  function cloneState(state) {
    return JSON.parse(JSON.stringify(state));
  }

  function playerName(player) {
    return player === "me" ? "我的手牌" : "队友手牌";
  }

  function shortPlayer(player) {
    return player === "me" ? "我" : "队友";
  }

  function stageLabel() {
    if (ui.state.stage === "exchange") return "换三张";
    if (ui.state.stage === "ended") return "已通关";
    return "摸打";
  }

  function tileClass(tile) {
    if (tile === ui.state.laizi) return "tile laizi";
    if (tile.length === 1) return "tile honor";
    return `tile suit-${tile[1].toLowerCase()}`;
  }

  function formatScore(details) {
    return `${details.score.toFixed(1)} 分 · 成牌 ${details.melds} · 对子 ${details.pairs} · 搭子 ${details.links} · 癞子 ${details.laizi}`;
  }

  function renderTileButton(player, tile, index, mode) {
    const selected =
      mode === "exchange"
        ? ui.exchangeSelection[player].has(index)
        : ui.selectedDiscard && ui.selectedDiscard.player === player && ui.selectedDiscard.index === index;
    const currentCanDiscard =
      ui.state.stage === "playing" &&
      ui.state.currentPlayer === player &&
      ui.state.hands[player].length % 3 === 2;
    const selectable = ui.state.stage === "exchange" || currentCanDiscard;
    const disabled = !selectable || ui.state.stage === "ended";
    return `
      <button
        class="${tileClass(tile)}${selected ? " selected" : ""}"
        type="button"
        data-player="${player}"
        data-index="${index}"
        ${disabled ? "disabled" : ""}
        aria-label="${Core.tileLabel(tile)}"
        title="${Core.tileLabel(tile)}"
      >
        <span>${Core.tileLabel(tile)}</span>
      </button>
    `;
  }

  function renderGroup(player, label, entries, mode) {
    const tiles = entries
      .map(({ tile, index }) => renderTileButton(player, tile, index, mode))
      .join("");
    return `
      <div class="tile-row">
        <div class="row-label">${label}</div>
        <div class="tiles">${tiles || '<span class="empty-row">--</span>'}</div>
      </div>
    `;
  }

  function groupedEntries(hand) {
    const groups = {
      laizi: [],
      B: [],
      T: [],
      W: [],
      H: [],
    };
    hand.forEach((tile, index) => {
      if (tile === ui.state.laizi) groups.laizi.push({ tile, index });
      else if (tile.length === 2) groups[tile[1]].push({ tile, index });
      else groups.H.push({ tile, index });
    });
    return groups;
  }

  function renderHand(player) {
    const hand = ui.state.hands[player];
    const details = Core.evaluateHand(hand, ui.state.laizi);
    const waits = Core.winningTiles(hand, ui.state.laizi);
    const groups = groupedEntries(hand);
    const exchangeCount = ui.exchangeSelection[player].size;
    const turn = ui.state.currentPlayer === player && ui.state.stage === "playing";
    const canHu = Core.canWin(hand, ui.state.laizi);

    return `
      <section class="hand-panel ${turn ? "active-turn" : ""}">
        <header class="hand-header">
          <div>
            <h2>${playerName(player)}${player === ui.state.dealer ? '<span class="badge">庄</span>' : ""}</h2>
            <p>${formatScore(details)}</p>
          </div>
          <div class="hand-count">
            <strong>${hand.length}</strong>
            <span>${ui.state.stage === "exchange" ? `已选 ${exchangeCount}/3` : canHu ? "可胡" : waits.length ? `听 ${waits.length}` : "未听"}</span>
          </div>
        </header>
        <div class="hand-groups">
          ${renderGroup(player, "癞子", groups.laizi, ui.state.stage)}
          ${renderGroup(player, "饼", groups.B, ui.state.stage)}
          ${renderGroup(player, "条", groups.T, ui.state.stage)}
          ${renderGroup(player, "万", groups.W, ui.state.stage)}
          ${renderGroup(player, "花牌", groups.H, ui.state.stage)}
        </div>
      </section>
    `;
  }

  function renderExchangePanel() {
    const analysis = Core.getExchangeAnalysis(ui.state);
    const smartPreview = getSmartPreview();
    const readyManual = ui.exchangeSelection.me.size === 3 && ui.exchangeSelection.teammate.size === 3;
    const canConfirm = readyManual || ui.pendingSmart;
    const qualityText = analysis.quality === "good" ? "很好" : analysis.quality === "playable" ? "可用" : "偏薄";

    return `
      <section class="action-band">
        <div class="action-summary">
          <span>保牌：${shortPlayer(analysis.protect)}</span>
          <span>我给队友 +${analysis.meToTeammate.receiverDelta.toFixed(1)}</span>
          <span>队友给我 +${analysis.teammateToMe.receiverDelta.toFixed(1)}</span>
          <span>预给牌 ${qualityText}</span>
        </div>
        ${
          smartPreview
            ? `<div class="exchange-preview">${shortPlayer(smartPreview.source)}给${shortPlayer(smartPreview.target)} ${Core.formatTiles(
                smartPreview.giftTiles
              )}，回给 ${Core.formatTiles(smartPreview.returnTiles)}</div>`
            : ""
        }
        <div class="controls">
          <button type="button" data-action="smart-exchange">智能换三张</button>
          <button type="button" data-action="confirm-exchange" ${canConfirm ? "" : "disabled"}>确认交换</button>
          <button type="button" data-action="new-random">新随机局</button>
          <button type="button" data-action="verification">验证局</button>
        </div>
      </section>
    `;
  }

  function getSmartPreview() {
    if (!ui.pendingSmart || ui.state.stage !== "exchange") return null;
    const preview = cloneState(ui.state);
    Core.applySmartExchange(preview);
    return preview.lastExchange;
  }

  function renderPlayPanel() {
    const player = ui.state.currentPlayer;
    const hand = ui.state.hands[player];
    const mustDraw = hand.length % 3 === 1;
    const selectedValid =
      ui.selectedDiscard &&
      ui.selectedDiscard.player === player &&
      Number.isInteger(ui.selectedDiscard.index) &&
      ui.selectedDiscard.index < hand.length;
    const meCanHu = Core.canWin(ui.state.hands.me, ui.state.laizi);
    const mateCanHu = Core.canWin(ui.state.hands.teammate, ui.state.laizi);
    const recommendation = !mustDraw ? Core.recommendDiscard(hand, ui.state.laizi) : null;

    return `
      <section class="action-band">
        <div class="action-summary">
          <span>当前：${shortPlayer(player)}</span>
          <span>牌墙 ${ui.state.wall.length}</span>
          <span>回合 ${ui.state.turn + 1}</span>
          ${recommendation ? `<span>推荐 ${Core.tileLabel(recommendation.tile)}</span>` : ""}
        </div>
        <div class="controls">
          <button type="button" data-action="draw" ${mustDraw ? "" : "disabled"}>摸牌</button>
          <button type="button" data-action="recommend-discard" ${mustDraw ? "disabled" : ""}>推荐出牌</button>
          <button type="button" data-action="discard" ${selectedValid && !mustDraw ? "" : "disabled"}>出牌</button>
          <button type="button" data-action="hu-me" ${meCanHu ? "" : "disabled"}>我胡牌</button>
          <button type="button" data-action="hu-teammate" ${mateCanHu ? "" : "disabled"}>队友胡牌</button>
          <button type="button" data-action="auto-complete">托管至胡</button>
          <button type="button" data-action="new-random">新随机局</button>
          <button type="button" data-action="verification">验证局</button>
        </div>
      </section>
    `;
  }

  function renderEndPanel() {
    const winner = ui.state.winner || "me";
    return `
      <section class="victory">
        <div>
          <h2>队伍获胜</h2>
          <p>${shortPlayer(winner)}完成 4*3 + 2，癞子 ${Core.tileLabel(ui.state.laizi)} 生效。</p>
        </div>
        <div class="controls">
          <button type="button" data-action="new-random">新随机局</button>
          <button type="button" data-action="verification">验证局</button>
        </div>
      </section>
    `;
  }

  function renderDiscards() {
    const latest = ui.state.discards.slice(-14).reverse();
    return `
      <section class="side-panel">
        <h2>牌河</h2>
        <div class="discard-pile">
          ${
            latest.length
              ? latest
                  .map(
                    (item) =>
                      `<span class="discard ${item.tile === ui.state.laizi ? "laizi-mark" : ""}" title="${shortPlayer(
                        item.player
                      )}">${Core.tileLabel(item.tile)}</span>`
                  )
                  .join("")
              : '<span class="empty-row">--</span>'
          }
        </div>
      </section>
    `;
  }

  function renderLog() {
    return `
      <section class="side-panel">
        <h2>牌局记录</h2>
        <ol class="log-list">
          ${ui.state.log
            .slice(0, 8)
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ol>
      </section>
    `;
  }

  function render() {
    const state = ui.state;
    const actionPanel =
      state.stage === "exchange" ? renderExchangePanel() : state.stage === "ended" ? renderEndPanel() : renderPlayPanel();

    app.innerHTML = `
      <main class="game-shell">
        <header class="topbar">
          <div>
            <p class="eyebrow">对门协作麻将</p>
            <h1>换三张</h1>
          </div>
          <div class="round-strip">
            <div class="laizi-tile">
              <span>${Core.tileLabel(state.laizi)}</span>
              <small>癞子</small>
            </div>
            <div class="round-meta">
              <strong>${stageLabel()}</strong>
              <span>种子 ${state.seed}</span>
            </div>
          </div>
        </header>
        ${actionPanel}
        <div class="table-grid">
          <div class="hands-stack">
            ${renderHand("me")}
            ${renderHand("teammate")}
          </div>
          <aside class="side-stack">
            ${renderDiscards()}
            ${renderLog()}
          </aside>
        </div>
      </main>
    `;
  }

  function toggleExchangeTile(player, index) {
    if (ui.pendingSmart) ui.pendingSmart = false;
    const selection = ui.exchangeSelection[player];
    if (selection.has(index)) {
      selection.delete(index);
    } else if (selection.size < 3) {
      selection.add(index);
    }
    render();
  }

  function selectDiscard(player, index) {
    if (ui.state.currentPlayer !== player || ui.state.hands[player].length % 3 !== 2) return;
    ui.selectedDiscard = { player, index };
    render();
  }

  function handleTileClick(button) {
    const player = button.dataset.player;
    const index = Number(button.dataset.index);
    if (ui.state.stage === "exchange") toggleExchangeTile(player, index);
    else if (ui.state.stage === "playing") selectDiscard(player, index);
  }

  function confirmExchange() {
    if (ui.pendingSmart) {
      Core.applySmartExchange(ui.state);
    } else {
      const meIndices = Array.from(ui.exchangeSelection.me).sort((a, b) => a - b);
      const teammateIndices = Array.from(ui.exchangeSelection.teammate).sort((a, b) => a - b);
      if (meIndices.length !== 3 || teammateIndices.length !== 3) return;
      Core.applyManualExchange(ui.state, meIndices, teammateIndices);
    }
    ui.exchangeSelection = { me: new Set(), teammate: new Set() };
    ui.pendingSmart = false;
    render();
  }

  function drawCurrent() {
    Core.drawTile(ui.state, ui.state.currentPlayer);
    render();
  }

  function recommendDiscard() {
    const player = ui.state.currentPlayer;
    const recommendation = Core.recommendDiscard(ui.state.hands[player], ui.state.laizi);
    if (recommendation) ui.selectedDiscard = { player, index: recommendation.index };
    render();
  }

  function discardSelected() {
    if (!ui.selectedDiscard) return;
    Core.discardTile(ui.state, ui.selectedDiscard.player, ui.selectedDiscard.index);
    ui.selectedDiscard = null;
    render();
  }

  function claim(player) {
    Core.claimWin(ui.state, player);
    render();
  }

  function autoComplete() {
    const result = Core.autoComplete(ui.state, 500);
    if (!result.won) ui.state.log.unshift("牌墙耗尽，本局流局。");
    render();
  }

  app.addEventListener("click", (event) => {
    const tileButton = event.target.closest("[data-player][data-index]");
    if (tileButton) {
      handleTileClick(tileButton);
      return;
    }

    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) return;

    if (action === "smart-exchange") {
      ui.pendingSmart = true;
      render();
    } else if (action === "confirm-exchange") {
      confirmExchange();
    } else if (action === "new-random") {
      resetUi(Core.createInitialState());
    } else if (action === "verification") {
      resetUi(Core.createInitialState({ scenario: "verification" }));
    } else if (action === "draw") {
      drawCurrent();
    } else if (action === "recommend-discard") {
      recommendDiscard();
    } else if (action === "discard") {
      discardSelected();
    } else if (action === "hu-me") {
      claim("me");
    } else if (action === "hu-teammate") {
      claim("teammate");
    } else if (action === "auto-complete") {
      autoComplete();
    }
  });

  window.__mahjongGame = {
    core: Core,
    getState: () => ui.state,
    startVerification: () => resetUi(Core.createInitialState({ scenario: "verification" })),
    startRandom: (seed) => resetUi(Core.createInitialState({ seed })),
    smartExchange: () => {
      Core.applySmartExchange(ui.state);
      render();
    },
    autoComplete: () => {
      const result = Core.autoComplete(ui.state, 500);
      render();
      return result;
    },
  };

  render();
})();
