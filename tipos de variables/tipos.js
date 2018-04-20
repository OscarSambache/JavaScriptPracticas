//para defirni una variable, no se define el tipo
var nombre = "28";
//no se usan clases si no prototypes
//mas tipos de datos
var edad = 28; //eno existe tipo int, decimaltodo es tipo number
//para compilar se puede hacer  de 2 formas : el navegador o  con node js

//abrir una cnsola cmd y escribir node y pegar el siguiene codigo
//var nombre = "oscar";
//var edad = 28;

if (nombre == edad) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

// triple === aparte de compara el contenido tambien compara el tipo de valor

var fecha = new Date();
console.log(fecha);
//trl +alt + l se identan el codigo

//para cmopilar en la terminal de websttrom, aplastamos ALT + F12 y aparcera una terminal , donde nos dirigimos  a la carpeta donde se enuctar el archivo .js y escrbimos el comando node "nombre del archivo".js

var casado = false; // true
var casa = undefined;
var carro = null;
console.log(casa ? "verdadero":"Falso"); //if rapido
if (casa){
    console.log("Verdadero");
}else {
    console.log("Falso");
}
//no se llama a la clase arreglo

var arreglo = [];
console.log(-1 ? "verdadero":"Falso"); //if rapido
//null, undefnided, arreglo vacio , 0 devuelven falso

//abrir llaves y escrbir las prpiedades
var sumarDosNumerosVersionDos = function amigo ( numeroUno, numeroDos) { // si la funcion no posee nombre, en javascrpit se las conocen como dunciones anonimas
    return numeroUno + numeroDos;
}; //no hay casting de datos, debido a que no hay tipeo de datos

console.log(sumarDosNumerosVersionDos(1,2));


//metodos dentro del usuario con funtion
function sumarDosNumeros( numeroUno, numeroDos ) { //no es necesario colocar var
    return numeroUno + numeroDos ;
}
console.log(sumarDosNumeros(1,2));
var usuario = {
    "nombre" : "Oscar",
    apellido : "Sambache",
    cedula : '1724155914', //buena practica usar comillas simpes

    imprimirEnConsola : function () {
        console.log(this.nombre + ' ' + this.apellido + ' '+ this.cedula)
    },

    imprimirEnConsola2 : sumarDosNumeros
};
console.log(usuario.imprimirEnConsola2); //se imrime la definicion  de la funcion, con los paraentesis se realiza la ejecucion de la funcion
// en javascrpit se tiene la posibildad de utilizar funciones como parametros de otras funciones



console.log("Usuario: ", usuario.nombre); // no es ncesario toString
console.log(usuario.imprimirEnConsola2);


console.log(sumarDosNumeros(1,2));

//sumar dos numeros 2, crear una variable e igualar a una funcion


console.log(sumarDosNumerosVersionDos(1,2));

var arregloDeNumeros = [1,'EPN', fecha, carro, casa, casado, usuario, arreglo, sumarDosNumerosVersionDos(1,2), function nombreDeFuncion ( ) {
    return 1;
}] ;// no es ncesario defirnir el tipo de datos que tendra el arreglo
console.log(arregloDeNumeros);


//for solo se debe iniciar la variable con  var

for (var aux = 0; aux < 10 ; aux++) {
    console.log('Aux', aux);
}