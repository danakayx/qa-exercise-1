const { Builder, By, until } = require("selenium-WebDriver");
const assert = require("assert");
const {Select} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    
    /* NEGATIVE SCENARIO - FAILED LOGIN 1 - BLANK */
    try {
        await driver.get('http://www.saucedemo.com');

        let loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();

        await driver.findElement(By.className('error-message-container error'))
    } catch (error) {
        console.error('Test failed:', error);
    } 
    
    /* NEGATIVE SCENARIO - FAILED LOGIN 2 - CAPS */
    try {
        await driver.get('http://www.saucedemo.com');

        email = await driver.findElement(By.id("user-name"))
        email.sendKeys("Standard_user")

        password = driver.findElement(By.id("password"))
        password.sendKeys("secret_sauce")

        let loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();

        await driver.findElement(By.className('error-message-container error'))
    } catch (error) {
        console.error('Test failed:', error);
    }
    
    /* POSITIVE SCENARIO - SUCCESSFUL LOGIN */
    try {
        await driver.get('http://www.saucedemo.com');

        email = driver.findElement(By.id("user-name"))
        email.sendKeys("standard_user")

        password = driver.findElement(By.id("password"))
        password.sendKeys("secret_sauce")

        let loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();

    } catch (error) {
        console.error('Test failed:', error);
    }
    
    /* SUCCESSFUL PAGE NAVIGATION (LOGIN TO HOME) - PAGE ELEMENTS VISIBLE */
    try {
        await driver.get('http://www.saucedemo.com');

        email = driver.findElement(By.id("user-name"))
        email.sendKeys("standard_user")

        password = driver.findElement(By.id("password"))
        password.sendKeys("secret_sauce")

        let loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();

        await driver.findElement(By.className('header_label'));
        await driver.findElement(By.id('shopping_cart_container'));
        await driver.findElement(By.id('menu_button_container'));
        

    } catch (error) {
        console.error('Test failed:', error);
    }

     /* SORT PRODUCTS */
    try {
        await driver.get('http://www.saucedemo.com');

        email = driver.findElement(By.id("user-name"))
        email.sendKeys("standard_user")

        password = driver.findElement(By.id("password"))
        password.sendKeys("secret_sauce")

        let loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();

        let sortFilterBtn = await driver.findElement(By.className('select_container'));
        await sortFilterBtn.click();

        const selectElement = await driver.findElement(By.className('product_sort_container'))
        const select = new Select(selectElement)

        const sortZA = await driver.findElement(By.css("option[value='za']"))
        await select.selectByValue('za')

    } catch (error) {
        console.error('Test failed:', error);
    }

    /* ADD TO CART, ACCESS CART, CHECKOUT CART */
    try {
        await driver.get('http://www.saucedemo.com');

        email = driver.findElement(By.id("user-name"))
        email.sendKeys("standard_user")

        password = driver.findElement(By.id("password"))
        password.sendKeys("secret_sauce")

        let loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();

        let addBackpack = await driver.findElement(By.id('add-to-cart-sauce-labs-backpack'));
        await addBackpack.click();

        let addBikeLight = await driver.findElement(By.id('add-to-cart-sauce-labs-bike-light'));
        await addBikeLight.click();

        let shoppingCartBadge = await driver.findElement(By.className("shopping_cart_badge"));
        await shoppingCartBadge.click();

        let shoppingCart = await driver.findElement(By.css('.shopping_cart_link'))
        await shoppingCart.click();

        let checkoutBtn = await driver.findElement(By.css('.checkout_button'))
        await checkoutBtn.click();

        let firstName = await driver.findElement(By.id('first-name'))
        await firstName.sendKeys('Cat');
        let lastName = await driver.findElement(By.id('last-name'))
        await lastName.sendKeys('Pult');
        let zipCode = driver.findElement(By.id('postal-code'))
        await zipCode.sendKeys('75254');

        await driver.findElement(By.css('.cart_button')).click();

    } catch (error) {
        console.error('Test failed:', error);
    }
    
})();