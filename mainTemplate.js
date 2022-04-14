describe ('Protractor baby steps',function(){
	
	it('Open Angular js website', function(){
		browser.get('https://angularjs.org');

		browser.get("http://juliemr.github.io/protractor-demo"); //segunda pagina que se tiene que visitar
		browser.sleep(5000); // sleep de 5 segundos
		console.log("Esto fue lo ultimo en ejecutarse");
	})

	
})

