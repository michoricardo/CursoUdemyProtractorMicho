
// Asegurate de correr el siguiente codigo en la command prompt:webdriver-manager start

describe ('Protractor Element Demo',function(){

	
	it('Locators', function(){

		browser.get("http://juliemr.github.io/protractor-demo");
		//aqui no necesitare promise porque protractor si maneja lo siguiente que usare
		element(by.model('first')).sendKeys(3);
		element(by.model('second')).sendKeys(5);
		element(by.id('gobutton')).click(); //suma 1
		element(by.model('first')).sendKeys(6);
		element(by.model('second')).sendKeys(4);
		element(by.id('gobutton')).click(); //suma 2
		element.all(by.repeater("result in memory")).count().then(function(text){

		console.log("Numero de operaciones hechas ",text);
		}) //busca todos los elementos generados que digan "result in memory" en la consola
		//se usa una promesa porque es algo que protractor regresa, no es una accion directa del browser
		console.log("Imprimiendo resultados de la columna result\n");
		element.all(by.repeater("result in memory")).each(function(item){ //para cada elemento
			item.element(by.css("td:nth-child(1)")).getText().then(function(hour){
				console.log('Hora de operacion',hour);

			})
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){ //El html que tiene el resultado es el nth-child(3) de la tabla
				console.log('resultado de la operacion',text);
			})
		})

	})//it

	
	
}) //describe
