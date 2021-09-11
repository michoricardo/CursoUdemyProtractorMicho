# Protractor
### _Codigo Axolotl_
### Agunas cosas a considerar:
Protractor debe estar instalado globalmente, tambien debe estar agregado al path del sistema para que pueda reconocerse el comando desde la terminal
## Instalacion
Se requiere [Node.js](https://nodejs.org/)
## Informacion:

## RUN RUN!!!!
Para correr una prueba en protractor, es necesario haber definido previamente las test suite y los test cases.
- Agregar un configuration.js en el cual agregaremos las test suites que vamos a corer
- Correr el siguiente comando en una terminal CMD (no powershell)
```sh
webdriver-manager start
```
- Y en otra terminal correr: 
```sh
protractor configuration.js
```
## Troubleshooting
Si se llega a tener el problema que dice: 
```sh
Unable to create new service: ChromeDriverService
```
Tratar de instalar una nueva version de chrome driver con:
```sh
webdriver-manager update --chromedriver
```
Terminar el proceso en la terminal y volver a intentar... Si no se soluciona, correr:
```sh
npm update -g protractor
webdriver-manager update
```
