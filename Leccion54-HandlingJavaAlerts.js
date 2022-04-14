
describe ('Protractor alert steps',function(){
	
	it('Open non angular website', function(){
		

        browser.waitForAngularEnabled(false); //dont wait till the angular components are loaded.
        browser.get('https://qaclickacademy.com/practice.php');
        element(by.id("confirmbtn")).click();
        browser.sleep(3000); // para que se vea la alerta
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(5000);
        }) //accept() es para positivos , dismiss() es para negativos
	
    })

	
})

