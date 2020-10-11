module.exports = {


    'Test Case: Log into automationpractice.com, make actions, take screenshots': (browser) => {
        browser
            .url('http://automationpractice.com')
            .waitForElementVisible('body', 1000)
            .assert.title('My Store')
            .assert.elementPresent( 'a[class="login"]') 
            .click('a[class="login"]')
            .saveScreenshot('./tests_output/screenshots/01signinpage.png')
            .pause(1000)
            .setValue('input[id=email]', 'test1249@test.com')
            .setValue('input[id=passwd]', 'PKR@PKR')
            .click('button[name=SubmitLogin]')
            .saveScreenshot('./tests_output/screenshots/02loginsuccess.png')
            .pause(1000)
            .setValue('input[name=search_query]', 'Skirt')
            .click('button[name=submit_search]')
            .pause(500)
            .assert.title('Search - My Store')
            .saveScreenshot('./tests_output/screenshots/03searchvisible.png')
            .pause(1000)
            .assert.elementPresent('a[class="product_img_link"]')
            .assert.elementPresent('a[class="button ajax_add_to_cart_button btn btn-default"]')
            .assert.elementPresent('a[title="Add to cart')
            .click('a[title="Add to cart"]')
            .pause(500)
            .assert.elementPresent('div[id="layer_cart')
            .saveScreenshot('./tests_output/screenshots/04addtocart.png')
            .pause(1000)
            .assert.elementPresent('span[class="continue btn btn-default button exclusive-medium')
            .click('span[class="continue btn btn-default button exclusive-medium')
            .pause(5000)
            .saveScreenshot('./tests_output/screenshots/05backshopping.png')
            .pause(1000)
            .assert.elementPresent('div[id="header_logo')
            .click('a[title="My Store"]')
            .saveScreenshot('./tests_output/screenshots/06backmystore.png')
            .pause(1000)
            .assert.elementPresent( 'a[class="logout"]') 
            .click('a[class="logout"]')
            .saveScreenshot('./tests_output/screenshots/07logout.png')
            .pause(1000)
            .end();
    },

  };
