const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-html-reporter",
    ignoreBadJson: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "",
        },
    },
});