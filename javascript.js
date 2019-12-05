/*STRINGS*/
/*-----------------------------------------*/
/*Los strings son cadenas de texto. Para indicar que estamos usando una cadena de texto debemos de colocar las comillas simples.

En este curso utilizaremos los métodos:

toUpperCase, que sirve para transformar un String a mayúsculas.
toLowerCase, que sirve para transformar el string a minúsculas.
También usaremos el atributo:

length, que nos indica la cantidad de caractéres que tiene un string.
Para concatenar dos strings se utiliza el símbolo (+)
var nombreCompleto = nombre + ’ ’ + apellido

Desafío: Encuentra la última letra de su nombre*/
var nombre = 'Mariana', apellido= 'Palacios'
/* al poner coma se pueden nombrar varias variables en un var*/
var NombreEnMayuscula = nombre.toLowerCase()
var apellidoEnMinuscula = apellido.toLoweCase()

var primeraLetraDelNombre = nombre.charArt(0) /*posición del string que deseamos visualizar lo que va entre parentesis*/
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + " " + apellido 
/*manera de concatenar mas facil, interpolación de textos*/
var nombreCompleto = `${nombre} ${apellido}`
var str = nombre.substr(1,2) /*parametros de las posiciones de el string que deseo ver*/ 
/*-----------------------------------------*/
/*-----------------------------------------*/
/*-----------------------------------------*/
/*-----------------------------------------*/
/*NUMEROS*/

var edad = 27
//edad = edad +1
edad += 1

var peso = 75 

//peso = peso -2
peso -= 2

//En JavaScript se debe tomar en cuenta que se debe dividir y multiplicar ya que no es tan exacto con los
//decimales.

//para redondear 


//FUNCIONEEEEEES

var nombre = 'Mariana', apellido= 'Palacios'

funtion imprimirEdad(n,e){
    console.log(nombre,edad)
}

//OBJETOS
// reunen caracteristicas en una variable

var mariana = {
    nombre:'mariana',
    apellido: 'palacios',
    edad: 19
} 
