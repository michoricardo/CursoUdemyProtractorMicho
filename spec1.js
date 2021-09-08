/**
 * Primer codigo
 */

// Asegurate de correr el siguiente codigo en la command prompt:webdriver-manager start

describe ('Protractor baby steps',function(){
	//Protractor baby steps el primer arg, es el nombre de la test suite, el segundo es la funcion esta funcion va a tener todas las pruebas (it blocks)
	
	it('Open Angular js website', function(){
	// Primer parametro es el nombre del test case, en este caso se llama basic program, en el segundo argumento se tiene la funcion que tiene el core
		browser.get('https://angularjs.org');
		//ctrl + space para el autocompletado!
		//browser.
		browser.get("http://juliemr.github.io/protractor-demo"); //segunda pagina que se tiene que visitar
		browser.sleep(5000); // sleep de 5 segundos
		console.log("Esto fue lo ultimo en ejecutarse");
	})
	// Aqui va el raw protractor code
	

	//la cosa es que java y python son sincronos pero javascript no
	it('Close browser', function(){
		//aqui va el codigo para cerrar el browser
	})
	
})

//Cada it block es un spec

//Describe es test suite , it es testcase, spec es test file