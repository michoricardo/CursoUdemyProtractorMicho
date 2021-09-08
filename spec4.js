describe('Protractor asincrono',function(){
it("Abre angular website y console log sincrono",function(){
browser.get("https://angularjs.org").then(function(){
    console.log('Estoy corriendo este mensaje despues de abrir la pagina de angular');
});

})


})