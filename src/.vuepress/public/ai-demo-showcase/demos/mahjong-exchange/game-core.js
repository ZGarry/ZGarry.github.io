(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.MahjongCore = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SUITS = ["B", "T", "W"];
  const HONORS = ["E", "S", "W", "N", "Z", "F", "B"];
  const SUIT_NAMES = { B: "饼", T: "条", W: "万" };
  const HONOR_NAMES = {
    E: "东风",
    S: "南风",
    W: "西风",
    N: "北风",
    Z: "红中",
    F: "发财",
    B: "白板",
  };

  const TILE_ORDER = [
    ...SUITS.flatMap((suit) => Array.from({ length: 9 }, (_, i) => `${i + 1}${suit}`)),
    ...HONORS,
  ];
  const TILE_INDEX = new Map(TILE_ORDER.map((tile, index) => [tile, index]));

  function createDeck() {
    const deck = [];
    for (const tile of TILE_ORDER) {
      for (let i = 0; i < 4; i += 1) deck.push(tile);
    }
    return deck;
  }

  function tileLabel(tile) {
    if (isSuitTile(tile)) return `${tile[0]}${SUIT_NAMES[tile[1]]}`;
    return HONOR_NAMES[tile] || tile;
  }

  function isSuitTile(tile) {
    return tile.length === 2 && /\d/.test(tile[0]);
  }

  function tileSuit(tile) {
    return isSuitTile(tile) ? tile[1] : "H";
  }

  function tileRank(tile) {
    return isSuitTile(tile) ? Number(tile[0]) : 0;
  }

  function sortTiles(hand) {
    return hand.slice().sort((a, b) => TILE_INDEX.get(a) - TILE_INDEX.get(b));
  }

  function hashString(input) {
    let h = 1779033703 ^ input.length;
    for (let i = 0; i < input.length; i += 1) {
      h = Math.imul(h ^ input.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return function nextHash() {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
    };
  }

  function createRng(seed = String(Date.now())) {
    const seedHash = hashString(String(seed))();
    let t = seedHash;
    return function rng() {
      t += 0x6d2b79f5;
      let r = Math.imul(t ^ (t >>> 15), t | 1);
      r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(deck, rng) {
    const result = deck.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function emptyDetails() {
    return { score: 0, melds: 0, pairs: 0, links: 0 };
  }

  function addDetails(a, b) {
    return {
      score: a.score + b.score,
      melds: a.melds + b.melds,
      pairs: a.pairs + b.pairs,
      links: a.links + b.links,
    };
  }

  function betterDetails(a, b) {
    if (!b) return a;
    const diff = a.score - b.score;
    if (Math.abs(diff) > 0.0001) return diff > 0 ? a : b;
    if (a.melds !== b.melds) return a.melds > b.melds ? a : b;
    if (a.pairs !== b.pairs) return a.pairs > b.pairs ? a : b;
    if (a.links !== b.links) return a.links > b.links ? a : b;
    return a;
  }

  function bestSuitDetails(counts) {
    const memo = new Map();

    function walk(current) {
      const key = current.slice(1).join("");
      if (memo.has(key)) return memo.get(key);

      let first = 0;
      for (let i = 1; i <= 9; i += 1) {
        if (current[i] > 0) {
          first = i;
          break;
        }
      }
      if (!first) return emptyDetails();

      let best = null;

      current[first] -= 1;
      best = betterDetails(walk(current), best);
      current[first] += 1;

      if (current[first] >= 3) {
        current[first] -= 3;
        best = betterDetails(addDetails({ score: 1, melds: 1, pairs: 0, links: 0 }, walk(current)), best);
        current[first] += 3;
      }

      if (first <= 7 && current[first + 1] > 0 && current[first + 2] > 0) {
        current[first] -= 1;
        current[first + 1] -= 1;
        current[first + 2] -= 1;
        best = betterDetails(addDetails({ score: 1, melds: 1, pairs: 0, links: 0 }, walk(current)), best);
        current[first] += 1;
        current[first + 1] += 1;
        current[first + 2] += 1;
      }

      if (current[first] >= 2) {
        current[first] -= 2;
        best = betterDetails(addDetails({ score: 0.5, melds: 0, pairs: 1, links: 0 }, walk(current)), best);
        current[first] += 2;
      }

      for (const gap of [1, 2]) {
        const other = first + gap;
        if (other <= 9 && current[other] > 0) {
          current[first] -= 1;
          current[other] -= 1;
          best = betterDetails(addDetails({ score: 0.5, melds: 0, pairs: 0, links: 1 }, walk(current)), best);
          current[first] += 1;
          current[other] += 1;
        }
      }

      memo.set(key, best || emptyDetails());
      return memo.get(key);
    }

    return walk(counts.slice());
  }

  function bestHonorDetails(counts) {
    const memo = new Map();

    function walk(current) {
      const key = HONORS.map((honor) => current[honor] || 0).join("");
      if (memo.has(key)) return memo.get(key);

      const first = HONORS.find((honor) => current[honor] > 0);
      if (!first) return emptyDetails();

      let best = null;

      current[first] -= 1;
      best = betterDetails(walk(current), best);
      current[first] += 1;

      if (current[first] >= 3) {
        current[first] -= 3;
        best = betterDetails(addDetails({ score: 1, melds: 1, pairs: 0, links: 0 }, walk(current)), best);
        current[first] += 3;
      }

      if (current[first] >= 2) {
        current[first] -= 2;
        best = betterDetails(addDetails({ score: 0.5, melds: 0, pairs: 1, links: 0 }, walk(current)), best);
        current[first] += 2;
      }

      memo.set(key, best || emptyDetails());
      return memo.get(key);
    }

    return walk({ ...counts });
  }

  function evaluateHand(hand, laizi) {
    const suitedCounts = {
      B: Array(10).fill(0),
      T: Array(10).fill(0),
      W: Array(10).fill(0),
    };
    const honorCounts = Object.fromEntries(HONORS.map((honor) => [honor, 0]));
    let laiziCount = 0;

    for (const tile of hand) {
      if (tile === laizi) {
        laiziCount += 1;
      } else if (isSuitTile(tile)) {
        suitedCounts[tile[1]][Number(tile[0])] += 1;
      } else {
        honorCounts[tile] += 1;
      }
    }

    let details = { score: laiziCount, melds: 0, pairs: 0, links: 0 };
    for (const suit of SUITS) {
      details = addDetails(details, bestSuitDetails(suitedCounts[suit]));
    }
    details = addDetails(details, bestHonorDetails(honorCounts));

    details.laizi = laiziCount;
    details.score = Math.round(details.score * 10) / 10;
    return details;
  }

  function countNormalTiles(hand, laizi) {
    const counts = new Map();
    let wild = 0;
    for (const tile of hand) {
      if (tile === laizi) {
        wild += 1;
      } else {
        counts.set(tile, (counts.get(tile) || 0) + 1);
      }
    }
    return { counts, wild };
  }

  function serializeCounts(counts, wild) {
    return `${wild}|${TILE_ORDER.map((tile) => counts.get(tile) || 0).join("")}`;
  }

  function canFormMelds(counts, wild, memo = new Map()) {
    const key = serializeCounts(counts, wild);
    if (memo.has(key)) return memo.get(key);

    const first = TILE_ORDER.find((tile) => (counts.get(tile) || 0) > 0);
    if (!first) {
      const ok = wild % 3 === 0;
      memo.set(key, ok);
      return ok;
    }

    const firstCount = counts.get(first) || 0;
    const useForTriplet = Math.min(3, firstCount);
    const tripletNeed = 3 - useForTriplet;
    if (tripletNeed <= wild) {
      counts.set(first, firstCount - useForTriplet);
      if (canFormMelds(counts, wild - tripletNeed, memo)) {
        counts.set(first, firstCount);
        memo.set(key, true);
        return true;
      }
      counts.set(first, firstCount);
    }

    if (isSuitTile(first)) {
      const rank = tileRank(first);
      const suit = tileSuit(first);
      if (rank <= 7) {
        const sequence = [`${rank}${suit}`, `${rank + 1}${suit}`, `${rank + 2}${suit}`];
        let need = 0;
        const used = [];
        for (const tile of sequence) {
          const count = counts.get(tile) || 0;
          if (count > 0) {
            counts.set(tile, count - 1);
            used.push(tile);
          } else {
            need += 1;
          }
        }
        if (need <= wild && canFormMelds(counts, wild - need, memo)) {
          for (const tile of used) counts.set(tile, (counts.get(tile) || 0) + 1);
          memo.set(key, true);
          return true;
        }
        for (const tile of used) counts.set(tile, (counts.get(tile) || 0) + 1);
      }
    }

    memo.set(key, false);
    return false;
  }

  function canWin(hand, laizi) {
    if (hand.length % 3 !== 2) return false;
    const { counts, wild } = countNormalTiles(hand, laizi);

    if (wild >= 2 && canFormMelds(new Map(counts), wild - 2)) return true;

    for (const tile of TILE_ORDER) {
      const count = counts.get(tile) || 0;
      if (count >= 2) {
        const next = new Map(counts);
        next.set(tile, count - 2);
        if (canFormMelds(next, wild)) return true;
      }
      if (count >= 1 && wild >= 1) {
        const next = new Map(counts);
        next.set(tile, count - 1);
        if (canFormMelds(next, wild - 1)) return true;
      }
    }

    return false;
  }

  function winningTiles(hand, laizi) {
    if (hand.length % 3 !== 1) return [];
    return TILE_ORDER.filter((tile) => canWin(hand.concat(tile), laizi));
  }

  function removeIndices(hand, indices) {
    const selected = new Set(indices);
    return hand.filter((_, index) => !selected.has(index));
  }

  function getTilesAt(hand, indices) {
    return indices.map((index) => hand[index]);
  }

  function chooseThreeIndices(hand) {
    const combos = [];
    const seen = new Set();
    for (let i = 0; i < hand.length - 2; i += 1) {
      for (let j = i + 1; j < hand.length - 1; j += 1) {
        for (let k = j + 1; k < hand.length; k += 1) {
          const tiles = sortTiles([hand[i], hand[j], hand[k]]);
          const key = tiles.join(",");
          if (!seen.has(key)) {
            seen.add(key);
            combos.push([i, j, k]);
          }
        }
      }
    }
    return combos;
  }

  function selectBestGift(source, target, laizi) {
    const targetBase = evaluateHand(target, laizi).score;
    const sourceBase = evaluateHand(source, laizi).score;
    let best = null;

    for (const indices of chooseThreeIndices(source)) {
      const tiles = getTilesAt(source, indices);
      const targetAfter = target.concat(tiles);
      const sourceAfter = removeIndices(source, indices);
      const receiverDelta = evaluateHand(targetAfter, laizi).score - targetBase;
      const donorLoss = sourceBase - evaluateHand(sourceAfter, laizi).score;
      const candidate = {
        indices,
        tiles,
        receiverDelta: Math.round(receiverDelta * 10) / 10,
        donorLoss: Math.round(donorLoss * 10) / 10,
      };
      if (
        !best ||
        candidate.receiverDelta > best.receiverDelta ||
        (candidate.receiverDelta === best.receiverDelta && candidate.donorLoss < best.donorLoss) ||
        (candidate.receiverDelta === best.receiverDelta &&
          candidate.donorLoss === best.donorLoss &&
          tileComboKey(candidate.tiles) < tileComboKey(best.tiles))
      ) {
        best = candidate;
      }
    }

    return best || { indices: [], tiles: [], receiverDelta: 0, donorLoss: 0 };
  }

  function selectReturnCards(source, recipient, laizi) {
    const sourceBase = evaluateHand(source, laizi).score;
    const recipientBase = evaluateHand(recipient, laizi).score;
    let best = null;

    for (const indices of chooseThreeIndices(source)) {
      const tiles = getTilesAt(source, indices);
      const sourceAfter = removeIndices(source, indices);
      const recipientAfter = recipient.concat(tiles);
      const sourceLoss = sourceBase - evaluateHand(sourceAfter, laizi).score;
      const recipientDelta = evaluateHand(recipientAfter, laizi).score - recipientBase;
      const candidate = {
        indices,
        tiles,
        sourceLoss: Math.round(sourceLoss * 10) / 10,
        recipientDelta: Math.round(recipientDelta * 10) / 10,
      };
      if (
        !best ||
        candidate.sourceLoss < best.sourceLoss ||
        (candidate.sourceLoss === best.sourceLoss && candidate.recipientDelta > best.recipientDelta) ||
        (candidate.sourceLoss === best.sourceLoss &&
          candidate.recipientDelta === best.recipientDelta &&
          tileComboKey(candidate.tiles) < tileComboKey(best.tiles))
      ) {
        best = candidate;
      }
    }

    return best || { indices: [], tiles: [], sourceLoss: 0, recipientDelta: 0 };
  }

  function tileComboKey(tiles) {
    return sortTiles(tiles)
      .map((tile) => String(TILE_INDEX.get(tile)).padStart(2, "0"))
      .join("-");
  }

  function getExchangeAnalysis(state) {
    const meScore = evaluateHand(state.hands.me, state.laizi).score;
    const teammateScore = evaluateHand(state.hands.teammate, state.laizi).score;
    const meToTeammate = selectBestGift(state.hands.me, state.hands.teammate, state.laizi);
    const teammateToMe = selectBestGift(state.hands.teammate, state.hands.me, state.laizi);
    let target = meScore >= teammateScore ? "me" : "teammate";

    if (teammateToMe.receiverDelta > meToTeammate.receiverDelta) target = "me";
    if (meToTeammate.receiverDelta > teammateToMe.receiverDelta) target = "teammate";

    const source = target === "me" ? "teammate" : "me";
    const gift = target === "me" ? teammateToMe : meToTeammate;

    return {
      meScore,
      teammateScore,
      protect: meScore >= teammateScore ? "me" : "teammate",
      target,
      source,
      gift,
      meToTeammate,
      teammateToMe,
      quality: gift.receiverDelta >= 1.5 ? "good" : gift.receiverDelta >= 1 ? "playable" : "thin",
    };
  }

  function applySmartExchange(state) {
    const analysis = getExchangeAnalysis(state);
    const source = analysis.source;
    const target = analysis.target;
    const giftIndices = analysis.gift.indices.slice();
    const giftTiles = getTilesAt(state.hands[source], giftIndices);

    state.hands[source] = removeIndices(state.hands[source], giftIndices);
    state.hands[target] = state.hands[target].concat(giftTiles);

    const returnPick = selectReturnCards(state.hands[target], state.hands[source], state.laizi);
    const returnTiles = getTilesAt(state.hands[target], returnPick.indices);
    state.hands[target] = removeIndices(state.hands[target], returnPick.indices);
    state.hands[source] = state.hands[source].concat(returnTiles);

    state.hands.me = sortTiles(state.hands.me);
    state.hands.teammate = sortTiles(state.hands.teammate);
    state.stage = "playing";
    state.currentPlayer = "me";
    state.lastExchange = {
      mode: "smart",
      source,
      target,
      giftTiles,
      returnTiles,
      receiverDelta: analysis.gift.receiverDelta,
      returnLoss: returnPick.sourceLoss,
    };
    state.log.unshift(
      `${playerLabel(source)}给${playerLabel(target)} ${formatTiles(giftTiles)}，回给 ${formatTiles(returnTiles)}。`
    );
    state.log.unshift(`预给牌收益 ${analysis.gift.receiverDelta.toFixed(1)} 分，进入摸打。`);
    return state;
  }

  function applyManualExchange(state, meIndices, teammateIndices) {
    const meTiles = getTilesAt(state.hands.me, meIndices);
    const teammateTiles = getTilesAt(state.hands.teammate, teammateIndices);
    state.hands.me = removeIndices(state.hands.me, meIndices).concat(teammateTiles);
    state.hands.teammate = removeIndices(state.hands.teammate, teammateIndices).concat(meTiles);
    state.hands.me = sortTiles(state.hands.me);
    state.hands.teammate = sortTiles(state.hands.teammate);
    state.stage = "playing";
    state.currentPlayer = "me";
    state.lastExchange = {
      mode: "manual",
      meTiles,
      teammateTiles,
    };
    state.log.unshift(`手动换三张：我给 ${formatTiles(meTiles)}，队友给 ${formatTiles(teammateTiles)}。`);
    return state;
  }

  function recommendDiscard(hand, laizi) {
    if (hand.length % 3 !== 2) return null;
    let best = null;

    for (let index = 0; index < hand.length; index += 1) {
      const tile = hand[index];
      const nextHand = hand.filter((_, i) => i !== index);
      const evalScore = evaluateHand(nextHand, laizi).score;
      const waits = winningTiles(nextHand, laizi).length;
      const keepLaiziBonus = tile === laizi ? -0.7 : 0;
      const isolatedPenalty = isIsolated(tile, nextHand, laizi) ? 0.2 : 0;
      const value = evalScore + waits * 0.35 + keepLaiziBonus + isolatedPenalty;
      const candidate = { index, tile, value, score: evalScore, waits };
      if (
        !best ||
        candidate.value > best.value ||
        (candidate.value === best.value && TILE_INDEX.get(candidate.tile) > TILE_INDEX.get(best.tile))
      ) {
        best = candidate;
      }
    }

    return best;
  }

  function isIsolated(tile, hand, laizi) {
    if (tile === laizi) return false;
    if (!isSuitTile(tile)) return !hand.includes(tile);
    const rank = tileRank(tile);
    const suit = tileSuit(tile);
    return ![-2, -1, 0, 1, 2].some((offset) => {
      const other = rank + offset;
      return other >= 1 && other <= 9 && hand.includes(`${other}${suit}`);
    });
  }

  function drawTile(state, player = state.currentPlayer) {
    if (state.stage !== "playing" || state.wall.length === 0) return null;
    if (state.hands[player].length % 3 !== 1) return null;
    const tile = state.wall.shift();
    state.hands[player].push(tile);
    state.hands[player] = sortTiles(state.hands[player]);
    state.lastDraw = { player, tile };
    state.log.unshift(`${playerLabel(player)}摸到 ${tileLabel(tile)}。`);
    return tile;
  }

  function discardTile(state, player, index) {
    if (state.stage !== "playing" || state.hands[player].length % 3 !== 2) return null;
    const [tile] = state.hands[player].splice(index, 1);
    state.discards.push({ player, tile });
    state.currentPlayer = player === "me" ? "teammate" : "me";
    state.turn += 1;
    state.log.unshift(`${playerLabel(player)}打出 ${tileLabel(tile)}。`);
    return tile;
  }

  function claimWin(state, player) {
    if (!canWin(state.hands[player], state.laizi)) return false;
    state.stage = "ended";
    state.winner = player;
    state.log.unshift(`${playerLabel(player)}和牌，队伍获胜。`);
    return true;
  }

  function autoStep(state) {
    if (state.stage === "exchange") {
      applySmartExchange(state);
      return "exchange";
    }
    if (state.stage !== "playing") return "done";

    for (const player of ["me", "teammate"]) {
      if (canWin(state.hands[player], state.laizi)) {
        claimWin(state, player);
        return "win";
      }
    }

    const player = state.currentPlayer;
    if (state.hands[player].length % 3 === 1) {
      drawTile(state, player);
      if (canWin(state.hands[player], state.laizi)) {
        claimWin(state, player);
        return "win";
      }
      return "draw";
    }

    const recommendation = recommendDiscard(state.hands[player], state.laizi);
    if (!recommendation) return "blocked";
    discardTile(state, player, recommendation.index);
    return "discard";
  }

  function autoComplete(state, maxSteps = 400) {
    const startWall = state.wall.length;
    for (let i = 0; i < maxSteps; i += 1) {
      const result = autoStep(state);
      if (result === "win" || state.stage === "ended") {
        return { won: true, steps: i + 1, winner: state.winner, wallUsed: startWall - state.wall.length };
      }
      if (result === "blocked" || state.wall.length === 0) break;
    }
    return { won: false, steps: maxSteps, winner: null, wallUsed: startWall - state.wall.length };
  }

  function playerLabel(player) {
    return player === "me" ? "我" : "队友";
  }

  function formatTiles(tiles) {
    return tiles.map(tileLabel).join("、") || "无";
  }

  function removeTiles(deck, tiles) {
    const rest = deck.slice();
    for (const tile of tiles) {
      const index = rest.indexOf(tile);
      if (index < 0) throw new Error(`Verification scenario overuses tile ${tile}`);
      rest.splice(index, 1);
    }
    return rest;
  }

  function createVerificationState() {
    const laizi = "B";
    const me = sortTiles(["1B", "2B", "3B", "4B", "5B", "7W", "8W", "9W", "E", "E", "5T", "6T", "N", "F"]);
    const teammate = sortTiles(["6B", "4T", "B", "2W", "3W", "4W", "6W", "7W", "8W", "3T", "3T", "Z", "9T"]);
    const used = me.concat(teammate);
    const wall = shuffle(removeTiles(createDeck(), used), createRng("verification-wall"));
    return {
      seed: "verification",
      laizi,
      hands: { me, teammate },
      wall,
      stage: "exchange",
      currentPlayer: "me",
      dealer: "me",
      turn: 0,
      discards: [],
      lastDraw: null,
      lastExchange: null,
      winner: null,
      log: ["验证局已就绪。"],
    };
  }

  function createInitialState(options = {}) {
    if (options.scenario === "verification") return createVerificationState();

    const seed = options.seed || String(Date.now());
    const rng = createRng(seed);
    const deck = shuffle(createDeck(), rng);
    const laizi = options.laizi || TILE_ORDER[Math.floor(rng() * TILE_ORDER.length)];
    const me = sortTiles(deck.slice(0, 14));
    const teammate = sortTiles(deck.slice(14, 27));
    const wall = deck.slice(27);
    const state = {
      seed,
      laizi,
      hands: { me, teammate },
      wall,
      stage: "exchange",
      currentPlayer: "me",
      dealer: "me",
      turn: 0,
      discards: [],
      lastDraw: null,
      lastExchange: null,
      winner: null,
      log: [`新局开始，癞子为 ${tileLabel(laizi)}。`],
    };

    if (canWin(me, laizi)) {
      state.stage = "ended";
      state.winner = "me";
      state.log.unshift("庄家天胡，队伍获胜。");
    }

    return state;
  }

  return {
    SUITS,
    HONORS,
    TILE_ORDER,
    createDeck,
    createInitialState,
    createVerificationState,
    tileLabel,
    sortTiles,
    evaluateHand,
    canWin,
    winningTiles,
    getExchangeAnalysis,
    applySmartExchange,
    applyManualExchange,
    recommendDiscard,
    drawTile,
    discardTile,
    claimWin,
    autoStep,
    autoComplete,
    formatTiles,
    playerLabel,
  };
});
