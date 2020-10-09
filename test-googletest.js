var https = require('https');
 
module.exports = {
 
    '@tags': ['test'],
 
    'Google': function(client) {
        client
            .url('https://www.google.com')
//            .waitForElementVisible('body', 10000)
//            .assert.visible('input[type=text]')
//            .click('input[type=text]')
            .setValue('input[type=text]', 'LambdaTest')
            .pause(1000)
            .assert.title('Google')
            .end();
    },
 
    afterEach: function(client, done) {
        setTimeout(function() {
            done();
        }, 1000);
    }
};
