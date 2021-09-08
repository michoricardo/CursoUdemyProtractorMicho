describe('Protractor element demo',function(){
    it('sumar dos numeros en la calculadora', function(){
        browser.get("http://juliemr.github.io/protractor-demo");
        element(by.model("first")).sendKeys("3"); //element (locator(propiedad));
        element(by.css(".input-small.ng-pristine")).sendKeys("2");
        element(by.id("gobutton")).click()
//Trabajaremos con esperados para saber si una prueba es correcta o no
//Jasmine se asegura de que la promesa se resuelva
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
expect(element(by.css("h2[class='ng-binding']")).getText()).not.toBe(null);

element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log("El resultado de la operacion es: ",text);

        }) 
        
    })
})