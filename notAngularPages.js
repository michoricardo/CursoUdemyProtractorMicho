/*Esto debe hacerse para correr paginas que no estan hechas con angular, por ejemplo que no tienen clase de ng
Se utilizan los timeouts*/
//webdriver-manager start
//protractor configuration.js
describe('Non angular apps',function(){
    it('locators', function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://google.com");

        
    })
})