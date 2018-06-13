var arreglo = [1,3,'hola', 45,'perro'];
function validarNumeroDeStringsEnArreglo(  arreglo ) {
    var numeroDeStrings =0;
    console.log(arreglo);
    for (var i=0;i< arreglo.length; i++){
       // console.log(arreglo[i]);
        if (typeof arreglo[i] == "string" ){
            numeroDeStrings ++;
        }
    }
    console.log('numero de string: ' , numeroDeStrings);
}
validarNumeroDeStringsEnArreglo(arreglo);
