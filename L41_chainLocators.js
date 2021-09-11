
// Asegurate de correr el siguiente codigo en la command prompt:webdriver-manager start

describe ('Protractor baby steps',function(){

	
	it('Open Angular js website', function(){

		browser.get("http://juliemr.github.io/protractor-demo");
		//aqui no necesitare promise porque protractor si maneja lo siguiente que usare
		element(by.model('first')).sendKeys(3);
		element(by.model('second')).sendKeys(5);
		element(by.id('gobutton')).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text){
			console.log(text);
		}); //de la propiedad ng-repeater, la busca y luego a esa busqueda
		//le agrega la busqueda del css, pero solo a lo que ya encontro





	})
	//

	

	
})
