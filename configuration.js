/**
 * Archivo de configuracion
 */
 exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub', /*Si no se especifica esta ruta no hay problema,
	se puee ejecutar de todos  modos, pero en chrome */
	//specs:['spec1.js','archivoprueba2.js']		
	specs:['Leccion44-listofelementswithallmethod.js'],
	capabilities:{
		'browserName':'chrome' //para especificar un navegador
		//'browserName':'firefox' //para especificar firefox
		//cuando se corrio el comando webdriver-manager update se obtiene geckodriver y chromedriver
	}
};
