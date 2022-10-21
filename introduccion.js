// comentar una linea

/*
abre comentario

cierro comentario
*/


// Variables
/*

Lenguajes de programacion tipados: Java, c++, C sharp
integer
string 
boolean

Lenguaje de programacion no tipado: javascript
--Superset TypeScript  esto se vera mas adelante para el error

let: declara la variable en su entorno local
var: declara la variable en un entorno global
const: es una variable estatica o fija osea nunca lo podes
cambiar si lo pusiste 5 sera 5 esa variable siempre.

this.    este prefijo se usa ya despues de declarar una variable
*/

const NUMERODIA=5;
//NUMERODIA=10; para las constantes trata de usar MAYUSCULA y cortos nombres
//aqui daria error ya que declare como constante NUMERODIA=5
console.log(NUMERODIA)

let nombre='Pedro';
console.log(nombre)
nombre='Luis';
console.log(nombre)

if(true){
    let nombre='Juan';
    nombre='Maria';
}
console.log(nombre)

if(true){
    let edad=20;
    console.log(edad)
}
//edad=15
//console.log(edad)

var saludo='Hola';

console.log(saludo)

function saludar(){
// aqui nos demuestra que usa nombre y el this la hace otra variable diferente
    this.nombre='Gustavo';
    console.log(this.nombre);
    let nombre='Linda';
    console.log(this.nombre,nombre)
}
//asi se manda a llamar funciones
saludar();