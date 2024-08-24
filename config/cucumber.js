module.exports = {
    default: {
      tags: process.env.npm_config_TAGS || "",
   default: `--timeout 10000`,
      formatOptions: {
        snippetInterface: "async-await"
      }, 
      paths: [
        "src/test/features/"
      ],
      dryRun: false,
      require: [
        "src/test/steps/*.ts",
        "src/hooks/hooks.ts"
      ],
      requireModule: [
        "ts-node/register"
      ],
      format: [
        "progress",  // Updated formatter
        "html:test-results/cucumber-report.html",
        "json:test-results/cucumber-report.json",
        "rerun:@rerun.txt"
      ],
      parallel: 1
    }
  };
  