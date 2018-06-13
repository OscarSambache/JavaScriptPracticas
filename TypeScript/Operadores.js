var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [23, 123.32, 23, 43, 123, 43, 50, 1];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
};
var facultades = function () {
    return ['Facultad1', 'Facultad2'];
};
var facultadesDos = function (a, b) { return ['Facultad1', 'Facultad2']; };
//facultadesDos();
var sumar = 0;
var resultadoForEach = arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
//console.log(resultadoForEach);
var resultadoDeLaSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('resultadoDeLaSuma', resultadoDeLaSuma);
var resultadoDeLaSumaDos = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) { return totalAcumulado - valorArreglo; }, 20);
var arregloUsuarios = [
    {
        nombre: 'Oscar',
        edad: 28
    },
    {
        nombre: 'Vicente',
        edad: 10
    },
    {
        nombre: 'Wendy',
        edad: 70
    },
    {
        nombre: 'Carolina',
        edad: 32
    },
    {
        nombre: 'Raul',
        edad: 25
    }
];
//transformar un arreglo
var usuariosConCincoAniosMenos = arregloUsuarios
    .map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
    //console.log(usuario);
    return usuario;
})
    .filter(function (usuario) {
    return (usuario.deuda < 100);
});
console.log('usuarios con 5 años menos', usuariosConCincoAniosMenos);
function calcularDeudaDeUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + (((edad) / 100) * deuda);
    }, 0);
}
var resultadoDeLasEdades = arregloUsuarios.reduce(function (totalAcumulado, usuarioArreglo) {
    return totalAcumulado + usuarioArreglo.edad;
}, 0);
console.log('resultadoDeLaSuma', resultadoDeLasEdades);
//filter
