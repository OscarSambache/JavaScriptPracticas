let arregloNumeros = [1,2,3,4,5];
let arregloDeudas = [23, 123.32, 23, 43, 123,43, 50, 1];
let sumarDosNumeros = (numeroUno: number, numeroDos : number) => {// fat arrow function
    return numeroUno + numeroDos;
};

let totalEdades =  arregloDeNumeros => { // no es ncesario escribir paratesis para un solo parametro

};

let facultades = function () {
    return ['Facultad1', 'Facultad2'];
};

let facultadesDos = (a: number, b:number) => ['Facultad1', 'Facultad2'];
//facultadesDos();
let sumar=0;

let resultadoForEach = arregloNumeros.forEach(
    (valor, indice, arreglo ) => {
        sumar = sumar + valor;
        console.log(sumar);
    }
);

//console.log(resultadoForEach);

let resultadoDeLaSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo) =>{ //recibe una funcion y un valor inicial
        return totalAcumulado - valorArreglo;
    }, 20
);

console.log('resultadoDeLaSuma', resultadoDeLaSuma);


let resultadoDeLaSumaDos = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo) => totalAcumulado - valorArreglo, 20
);

let arregloUsuarios: UsuarioArreglo[] = [
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

let usuariosConCincoAniosMenos = arregloUsuarios
    .map(
        (usuario:UsuarioArreglo)=>{
            usuario.edad = usuario.edad -5;
            usuario.deuda = calcularDeudaDeUsuario(usuario.edad);
            //console.log(usuario);
            return usuario;

        }
    )
    .filter( (usuario:UsuarioArreglo) =>{
        return (usuario.deuda<100);

})
    //.every( // AND
      //  (usuario: UsuarioArreglo) => {
        //    return (usuario.edad > 18);
        //}

    //)
    .some( //OR
        (usuario: UsuarioArreglo) => {
            return (usuario.edad<= 18);
        }
    )

;

console.log('usuarios con 5 años menos', usuariosConCincoAniosMenos);


function calcularDeudaDeUsuario(edad: number) {
    return arregloDeudas.reduce(
        (totalAcumulado, deuda: number) => {
            return totalAcumulado + (
                ((edad) / 100) * deuda
            )
        }, 0);
}

let resultadoDeLasEdades = arregloUsuarios.reduce(
    (totalAcumulado, usuarioArreglo: UsuarioArreglo) =>{ //recibe una funcion y un valor inicial
        return totalAcumulado + usuarioArreglo.edad;
    }, 0
);
console.log('resultadoDeLaSuma', resultadoDeLasEdades);

//tipar arrglos de objetod
    interface UsuarioArreglo {
        nombre: string;
        edad: number;
        deuda?: number;
    }


//filter




