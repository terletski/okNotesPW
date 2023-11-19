const options = [
  "--require-module ts-node/register",
  "--require ./tests/steps/*.ts",
  "--format ./config/reporter.mjs",
  "--require ./config/hooks.ts",
  "--require ./config/reporter.mjs:OUTPUT.txt"
].join(" ");

const run_features = [
  "./tests/features/*.feature",
  options,
].join(" ");

module.exports = {
  test_runner: run_features
};
