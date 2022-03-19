describe('Protractor Element Demo',function() {  
    function Add(a,b,type)
    {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);

    element.all(by.tagName("option")).each(function(item)  //tag name para encontrar los elementos del dropdown
    {
    item.getAttribute("value").then(function(value){
        if (value==type){
            console.log("Se selecciono: ",value);
            item.click()  //se hace click la opcion del dropdown de multiplicacion

        }
    })
    
    }) //del each
    
    element(by.id("gobutton")).click();
    
    }  //Las funciones deben hacerse afuera del it pero dentro del describe 
    
    it('Locators',function() {

    browser.get('http://juliemr.github.io/protractor-demo/');
        
    Add(2,3,"MULTIPLICATION");
    Add(4,3,"DIVISION");
    element.all(by.repeater("result in memory")).each(function(item)
    {
        item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text);
    })
    
    })

    






    }) //del it (prueba)
    
    
    })// del describe (Test suite)