/**
 * (pages/loginCommand.js)
 *
 * Page object amazon.com login page.
 *
 */module.exports = {
    url: function () {
        return `https://www.amazon.com/`;
    },
    elements: {
        signIn: {
            selector: '#nav-link-accountList'
        },
        form: {
            selector: '.a-section'
        },
        email: {
            selector: '#ap_email',
        },
        password: {
            selector: '#ap_password',
        },
        continue: {
            selector: '#continue',
        },
        signInButton: {
            selector: '#signInSubmit',
        },
        errorMessageAlert: {
            selector: '.a-box-inner.a-alert-container',
        },
        loggedInSuccess: {
            selector: '#nav-link-accountList .nav-line-1',
        },
        logout: {
            selector: '#nav-item-signout',
        },
    },
    commands: [{
        /*
         * Test Case-1:
         *
         * check all fields visibility title/body.
         * */
        checkAmazonMainPage: function () {
            return this
                .assert.title('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
                .assert.visible('body')
        },
        /*
         * Test Case-2:
         *
         * check all fields visibility title/username/password/submit.
         * */
        verifyLoginElements: function () {
            return this
                .click('@signIn')
                .assert.title('Amazon Sign-In')
                .assert.visible('@form')
                .assert.visible('@email')
                .assert.visible('@continue')
        },
        /*
         * Test Case-3:
         *
         * login fail check, with invalid username/password and error message.
         * */
        invalidUsernamePassword: function() {
            return this
                .click('@signIn')
                .setValue('@email', 'test@test.com')
                .click('@continue')
                .setValue('@password', '1234567890')
                .click('@signInButton');
        },
        loginErrorMessage: function() {
            return this
                .assert.elementPresent('@errorMessageAlert')
                .assert.containsText('@errorMessageAlert', 'To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.')
        },
        /*
         * Test Case-4:
         *
         * login success check, with valid username/password, user profile page check and logout success.
         * */
        validUsernamePassword: function() {
            return this
                .click('@signIn')
                .setValue('@email', 'mithatozturk34@gmail.com')
                .click('@continue')
                .setValue('@password', 'Test12345')
                .click('@signInButton');
        },
        successUserLogin: function() {
            return this
                .assert.visible('@loggedInSuccess')
        },
    }],
};