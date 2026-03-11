#!/usr/bin/env node

/*
  Scores an opportunity using a simple revenue-first model.
  Usage:
    node scripts/score-opportunity.js --revenue 5 --confidence 4 --time 4 --complexity 2 --pull 5
*/

function readArgs(argv) {
  const result = {};

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];

    if (!arg.startsWith("--")) {
      continue;
    }

    const key = arg.slice(2);
    const value = argv[i + 1];
    result[key] = value;
    i += 1;
  }

  return result;
}

function toScore(value, label) {
  const n = Number(value);

  if (!Number.isInteger(n) || n < 1 || n > 5) {
    throw new Error(label + " must be an integer from 1 to 5.");
  }

  return n;
}

function usage() {
  console.log("Usage: node scripts/score-opportunity.js --revenue 1-5 --confidence 1-5 --time 1-5 --complexity 1-5 --pull 1-5");
}

function main() {
  const args = readArgs(process.argv);

  if (
    !args.revenue ||
    !args.confidence ||
    !args.time ||
    !args.complexity ||
    !args.pull
  ) {
    usage();
    process.exitCode = 1;
    return;
  }

  const revenue = toScore(args.revenue, "revenue");
  const confidence = toScore(args.confidence, "confidence");
  const time = toScore(args.time, "time");
  const complexity = toScore(args.complexity, "complexity");
  const pull = toScore(args.pull, "pull");

  const score =
    revenue * 0.35 +
    confidence * 0.2 +
    time * 0.2 +
    pull * 0.15 +
    (6 - complexity) * 0.1;

  const rounded = Math.round(score * 100) / 100;

  let recommendation = "Queue";
  if (rounded >= 4.2) recommendation = "Build now";
  else if (rounded >= 3.4) recommendation = "Validate fast";
  else if (rounded < 2.5) recommendation = "Reject";

  console.log(JSON.stringify({
    inputs: {
      revenue,
      confidence,
      time,
      complexity,
      pull
    },
    score: rounded,
    recommendation
  }, null, 2));
}

main();
