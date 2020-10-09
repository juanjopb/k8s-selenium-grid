module.exports = {
    'Demo test ecosia.org' : function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .saveScreenshot('./tests_output/screenshots/searchvisible.png')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .saveScreenshot('./tests_output/screenshots/submitbutton.png')
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    }
  };