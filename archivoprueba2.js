/**
 * Importancia de promesas en javascript y como se soluciona este problema  
 * Segundo codigo Acuerdate que el describe es el test suite, cada it es una pruebita osea un testcase
 * cada spec es un archivo de prueba que se debe mandar a llamar en el configuration cuando se corra
 * Node server: webdriver-manager start
 */

//Cada paso en javascript regresa una promesa, la cual significa el estado actual de ese paso
describe ('Segunda test suite',function(){
	//Protractor e, el segundo es la funcion esta funcion va a tener todas las pruebas (it blocks)
	
    //Javascript asincrono tiene tres pasos: 1.-pending 2.-resolve 3.-reject
	it('Open Angular js website', function(){
	// Primer parametro es el nombre del test case, en este caso se llama basic program, en el segundo argumento se tiene la funcion que tiene el core
		browser.get('https://unam.mx');
		browser.sleep(5000); // sleep de 5 segundos
		console.log("hola de nuevo");
	})
	//la cosa es que java y python son sincronos pero javascript no
	it('Close browser', function(){
		//aqui va el codigo para cerrar el browser
	})	
})

//En python y java, se puede mover al siguiente step unicamente si se completa el paso que se esta buscando
//En javascript se mueve al siguiente paso incluso si la promesa esta pending
//90% del protractor API no se va a mover si el siguiente paso no se completa

