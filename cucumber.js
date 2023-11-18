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

// const config = {
//   requireModule: ["ts-node/register"],
//   require: ["./tests/steps/*.ts", "config/*.ts"],
//   format: [
//     "summary",
//     "progress-bar",
//     // '@cucumber/pretty-formatter',
//     "./config/reporter.mjs:OUTPUT.txt"
//   ],
//   formatOptions: { snippetInterface: "async-await" }
// };
//
// module.exports = config;