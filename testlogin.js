var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('http://localhost/myWebsite?newwindow=0')
      .waitForElementVisible('body', 6000)
      .waitForElementVisible('input[name="txtLogin"]', 6000)
      .setValue('input[name="txtLogin"]', 'login')
      .setValue('input[name="txtPassword"]', 'password')
      .waitForElementVisible('input.btnLogin', 2000)
      .click('button[id="btnLogin"]')
      .assert.elementPresent("#selectTitle")
      .assert.containsText('#selectTitle', 'schedules')
      .assert.urlContains('login/login_start.asp')
      .saveScreenshot(conf.imgpath(browser) + 'titleScreen.png')
      .end();

  }
};