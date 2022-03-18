/**
 * Propiedad all 
 * webdriver-manager start
 */
 describe ('testusers',function(){
	//propiedad all es la test suite
	it('Abrir pagina demostrativa', function(){

		browser.get("https://sd-perflab01.playground.local:448/server/apps/erp/home/"); //pagina login
        //browser.get("https://google.com");
        browser.sleep(5000);

	}) //it
	
}) //describe