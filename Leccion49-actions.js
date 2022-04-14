http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
describe ('Protractor baby steps',function(){
	
	it('Open Angular js website', function(){

		browser.get("http://posse.com/");
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform()
        browser.actions().sendkeys(protractor.key.ARROW_DOWN).perform(); //perform da la orden de que se completen las acciones
        browser.actions().sendkeys(protractor.key.ENTER).perform().then(function(){
            browser.sleep(5000);

            expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver'")).count()).toEqual(7); //este es un regex que dice que todos los elementos que tengan onSearchResultOver
            //Esperara 7 elementos que tengan ese css
            element.all(by.css("div[ng-mouseover*='onSearchResultOver'")).get(0).click();
            element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
                browser.sleep(5000);
            });
        });
	})

	
})
