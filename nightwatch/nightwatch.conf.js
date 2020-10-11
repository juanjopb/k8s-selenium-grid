module.exports = {
  beforeEach: function (browser, done) {
    require('nightwatch-record').start(browser, done);
  },

  afterEach: function (browser, done) {
    require('nightwatch-record').stop(browser, done);
  },

  "src_folders": ["tests"],
  "page_objects_path": "",
  "globals_path": "",

    //"webdriver": {
    //    "start_process": true,
    //    "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver",
    //    "port": 9515
    //},

  "selenium": {
      "start_process": false,
      "host" : process.env.SELENIUM_REMOTE_HOST,
      "port" : process.env.SELENIUM_REMOTE_PORT,
      "cli_args" : {
        "webdriver.chrome.driver" : "./bin/chromedriver"
      }
  },



  "test_settings": {
      "default": {
        "screenshots": {
          "enabled": true,
          "path": 'tests_output/screenshots',
          },
          "videos": {
            "fileName": "example", // Required field
            "nameAfterTest": true,
            "format": "mp4",
            "enabled": true,
            "deleteOnSuccess": false,
            "path": "tests_output/screenshots",
            "resolution": "1440x900",
            "fps": 15,
            "input": "video=screen-capture-recorder",
            "videoCodec": "mpeg4"
          },
          "desiredCapabilities": {
              "browserName": "chrome"
          }
      }
  }
}

