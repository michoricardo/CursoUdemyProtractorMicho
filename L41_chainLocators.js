
// Asegurate de correr el siguiente codigo en la command prompt:webdriver-manager start

describe ('Protractor baby steps',function(){

	
	it('Open Angular js website', function(){

		browser.get('https://angularjs.org');
		browser.get("http://juliemr.github.io/protractor-demo").then(function(){
            console.log("Last to execute");
        })

	})
	// Aqui va el raw protractor code
	

	//la cosa es que java y python son sincronos pero javascript no
	it('Close browser', function(){
		//aqui va el codigo para cerrar el browser
	})
	
})

//Cada it block es un spec

//Describe es test suite , it es testcase, spec es test file