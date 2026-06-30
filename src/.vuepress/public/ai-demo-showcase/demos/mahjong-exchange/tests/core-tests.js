const assert = require("assert");
const Core = require("../game-core");

function countByTile(deck) {
  return deck.reduce((acc, tile) => {
    acc[tile] = (acc[tile] || 0) + 1;
    return acc;
  }, {});
}

function testDeck() {
  const deck = Core.createDeck();
  const counts = countByTile(deck);
  assert.strictEqual(deck.length, 136, "deck has 136 tiles");
  assert.strictEqual(Object.keys(counts).length, 34, "deck has 34 unique tiles");
  for (const tile of Core.TILE_ORDER) assert.strictEqual(counts[tile], 4, `${tile} appears four times`);
}

function testEvaluation() {
  const hand = ["1B", "2B", "3B", "5T", "5T", "E", "E", "E", "7W", "9W", "B"];
  const details = Core.evaluateHand(hand, "B");
  assert.strictEqual(details.melds, 2, "sequence and honor triplet score as melds");
  assert.strictEqual(details.pairs, 1, "pair scores");
  assert.strictEqual(details.links, 1, "gap wait scores");
  assert.strictEqual(details.laizi, 1, "laizi scores");
  assert.strictEqual(details.score, 4, "total heuristic score");
}

function testWinWithLaizi() {
  const winning = ["1B", "3B", "B", "4B", "5B", "6B", "4T", "5T", "6T", "7W", "8W", "9W", "E", "E"];
  assert.strictEqual(Core.canWin(winning, "B"), true, "laizi completes 1-2-3");

  const notWinning = ["1B", "3B", "4B", "5B", "6B", "4T", "5T", "6T", "7W", "8W", "9W", "E", "N", "F"];
  assert.strictEqual(Core.canWin(notWinning, "B"), false, "unmatched honors do not win");
}

function testExchangeRecommendation() {
  const state = Core.createInitialState({ scenario: "verification" });
  const analysis = Core.getExchangeAnalysis(state);
  assert.strictEqual(analysis.target, "me", "verification protects my hand");
  assert.ok(analysis.gift.receiverDelta >= 1.5, "gift produces a strong pre-give score");
  assert.ok(analysis.gift.tiles.includes("B"), "gift can include laizi when it completes the target");

  Core.applySmartExchange(state);
  assert.strictEqual(state.stage, "playing", "smart exchange enters play");
  assert.strictEqual(state.hands.me.length, 14, "dealer keeps 14 tiles");
  assert.strictEqual(Core.canWin(state.hands.me, state.laizi), true, "smart exchange creates a winning hand");
}

function testAutoComplete() {
  const state = Core.createInitialState({ scenario: "verification" });
  const result = Core.autoComplete(state, 20);
  assert.strictEqual(result.won, true, "verification game can be completed");
  assert.strictEqual(state.stage, "ended", "state ends after win");
  assert.strictEqual(state.winner, "me", "verification winner is me");
}

testDeck();
testEvaluation();
testWinWithLaizi();
testExchangeRecommendation();
testAutoComplete();

console.log("All core tests passed.");
