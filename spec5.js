/*
browser - A wrapper around an instance of WebDriver, used for navigation and page-wide information. The browser.get method loads a page. Protractor expects Angular to be present on a page, so it will throw an error if the page it is attempting to load does not contain the Angular library. (If you need to interact with a non-Angular page, you may access the wrapped webdriver instance directly with browser.driver).

element - A helper function for finding and interacting with DOM elements on the page you are testing. The element function searches for an element on the page. It requires one parameter, a locator strategy for locating the element. See Using Locators for more information. See Protractor's ElementFinder test suite (elements_spec.js) for more examples.

by - A collection of element locator strategies. For example, elements can be found by CSS selector, by ID, or by the attribute they are bound to with ng-model. See Using Locators.

protractor - The Protractor namespace which wraps the WebDriver namespace. Contains static variables and classes, such as protractor.Key which enumerates the codes for special keyboard signals.
 */
/* 
// Find an element using a css selector.
by.css('.myclass')

// Find an element with the given id.
by.id('myid')

// Find an element using an input name selector.
by.name('field_name')

// Find an element with a certain ng-model.
// Note that at the moment, this is only supported for AngularJS apps.
by.model('name')

// Find an element bound to the given variable.
// Note that at the moment, this is only supported for AngularJS apps.
by.binding('bindingname')

*/
describe('Protractor element demo',function(){
    it('sumar dos numeros en la calculadora', function(){
        browser.get("http://juliemr.github.io/protractor-demo");
        element(by.model("first")).sendKeys("3"); //element (locator(propiedad));
        element(by.css(".input-small.ng-pristine")).sendKeys("2");
        element(by.id("gobutton")).click()
        //tagname[attribute='value']
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log("El resultado de la operacion es: ",text);
            browser.sleep(5000);
            //lo pusimos en una promesa porque aunque la mayoria de todo se ejecuta como promesa
            //el sleep no y el get text tampoco
        })
        
    })
})