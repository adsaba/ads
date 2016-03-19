/**
 * @name conf.js
 * @description Standard conf.
 *
 */

//var HtmlReporter = require('protractor-html-screenshot-reporter');
var jasmine2ScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var baseConf = function () {
    this.timeout= {
        global: 10000,
        pageLoad: 20000,
        implicitWait: 15000,
        angularDelay: 1000,
        defaultTimeoutInterval: 200000,
        allScriptsTimeout: 120000
    };
};
var baseConfig = new baseConf();

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: '',

    //Please use --browser=chrome to run; uncomment if you want to run it locally with these options
    multiCapabilities: [
        {'browserName': 'chrome'}
        //{'browserName': 'firefox'}
    ],

    specs: [
        '../specs/adsT.js'
    ],

    //suites: {
    //  ads: ['./specs/*.js']
    //},

    params: {
        report: 'report',
        globalTimeout: baseConfig.timeout.pageLoad,
        waitForAngular: {
            angularFlag: true,  //Only use false if timeout/interval for polling is failing.
            angularDelay: baseConfig.timeout.angularDelay //this only goes into affect if angularFlag=false
        }
    },

    allScriptsTimeout: baseConfig.timeout.allScriptsTimeout,

    framework: 'jasmine2',

    onPrepare: function () {
        //browser.ignoreSynchronization = true;
        browser.manage().timeouts().pageLoadTimeout(baseConfig.timeout.pageLoad);
        browser.manage().timeouts().implicitlyWait(baseConfig.timeout.implicitWait);
        browser.driver.manage().window().setSize(1000,1000);
        // jasmine2 screenshot reporter
        jasmine.getEnv().addReporter(
            new jasmine2ScreenshotReporter({
                dest: browser.params.report,
                filename: 'report.html',
                reportOnlyFailedSpecs: false,
                captureOnlyFailedSpecs: true
            }));

        var jasmineReporters = require('jasmine-reporters');

        jasmine.getEnv().addReporter(
            new jasmineReporters.JUnitXmlReporter({
                savePath: browser.params.report,
                consolidateAll: false
            }));

        jasmine.getEnv().addReporter(
            new jasmineReporters.NUnitXmlReporter({
                savePath: browser.params.report
            }));

        jasmine.getEnv().addReporter(
            new jasmineReporters.TapReporter());

        jasmine.getEnv().addReporter(
            new jasmineReporters.TerminalReporter({
                verbosity: 3,
                color: true,
                showStack: true
            }));
    },

// Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: baseConfig.timeout.defaultTimeoutInterval
    }

};
