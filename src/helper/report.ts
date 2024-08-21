const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
  //  reportPath: "test-results/reports/",
  reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "BookCart App test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Riyaz Basha Shaik - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Regression Test Info",
        data: [
            { label: "Project", value: "Book Cart Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});