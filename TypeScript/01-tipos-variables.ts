//clase 4
let segundoNombre = 'Eduardo';
const cedula = '1724155914'; //normalmente no se puede cambiar
segundoNombre = 'Oscar';
//cedula = '124245435';
const URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123;
let edad: number = 22;
let fecha: Date = new Date();
let casado: boolean = false;

//let mascotas: object = {};

class Usuario {
    public mNombre: String;
    private mEdad: number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    public imprimirEnConsola(){
        //template Strings, se puden utilizar variables, no se necesita concatenar nada
        console.log(`el usuario se llama ${this.mNombre} la cedula del usuario es ${this.mCedula} la edad es ${this.mEdad}`);
    }
}
let usuario: Usuario = new Usuario('Oscar', 22, '1724987635');

let usuarioOtro ={
    mNombre: 'Oscar',
    mEdad: 22,
    mCedula: '1724155914'
};

console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);

function  noHagoNada (){

}

console.log('no hago nada; ', noHagoNada());

let usuarioTres: Usuario;

interface  UsuarioDos{ //sirve para craer nuevos objetos y consumir API y ayudar a tipar la informacion que llega
    mNombre: String;
    mEdad: Number;
    mCedula: String;
    imprimirEnConsola(nombre:String): void;
    usuario: Usuario;
}

let usuarioCuatro : UsuarioDos;

class UsuarioTres {
    constructor(public mNombre: String,
    private mEdad: number,
    protected mCedula: String){
    }
}

