/**
 * Propiedad all 
 * webdriver-manager start
 */
describe ('Propiedad all',function(){
	//propiedad all es la test suite
	it('Abrir pagina demostrativa', function(){

		browser.get("http://juliemr.github.io/protractor-demo"); //pagina demostracion
        element(by.model("first")).sendKeys("3");//primera vez
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("7"); //segunda vez
        element(by.model("second")).sendKeys("10");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("2"); //tercera vez
        element(by.model("second")).sendKeys("12");
        element(by.id("gobutton")).click();
        //Para imprimir la informacion de cuantos procesos se hicieron, necesitamos manejar una promesa
        element.all(by.repeater("result in memory")).count().then(function(text) {
            console.log("Se encontraron: ", text, "Procesos!!!");
          });
        //.all manda todos los resultados a un arreglo, entonces tenemos que usar un .each para manejar cada cosa del arreglo
                //Para imprimir la informacion de cuantos procesos se hicieron, necesitamos manejar una promesa
        element.all(by.repeater("result in memory")).each(function(elemento){
            elemento.element(by.css("td:nth-child(3)")).getText().then(function(text){ //se agarra a 3ra columna que es el resultado
                console.log("Valor ", text);
            })//get text
        }) //del each

	}) //it
	
}) //describe