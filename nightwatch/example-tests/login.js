/**
 * (test/loginTest.js)
 *
 * Amazon.com login page test...
 *
 */
module.exports = {
    tags: ['login'],
    before: (browser) => console.log('Test is starting...'),
    beforeEach: (browser) => console.log('Amazon.com login page testing...'),
    after: (browser) => console.log('Test is finished...'),
    'Test Case-1: Go to Amazon.com, check elements, take screenshots': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .checkAmazonMainPage()
            .saveScreenshot('test/screenshots/' + 'amz-main-page.png')
            .end();
    },
    'Test Case-2: Go to login page, check elements, take screenshots': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .verifyLoginElements()
            .saveScreenshot('test/screenshots/' + 'amz-login-page.png')
            .end();
    },
    'Test Case-3: Login fail, invalid email/pass, take screenshots': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .invalidUsernamePassword()
            .loginErrorMessage()
            .saveScreenshot('test/screenshots/' + 'login-fail.png')
            .end();
    },
    'Test Case-4: Login success, valid email/pass, take screenshots': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .validUsernamePassword()
            .successUserLogin()
            .saveScreenshot('test/screenshots/' + 'login-success.png')
            .end();
    },
};
3.141.59-xenon3.141.59-xenon