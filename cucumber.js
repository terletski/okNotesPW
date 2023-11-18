const options = [
  "--require-module ts-node/register",
  "--require ./tests/steps/*.ts",
  "--format progress",
  "--require ./config/hooks.ts",
].join(" ");

const run_features = [
  "./tests/features/*.feature",
  options,
].join(" ");

module.exports = {
  test_runner: run_features
};