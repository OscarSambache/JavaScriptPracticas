//clase 4
var segundoNombre = 'Eduardo';
var cedula = '1724155914'; //normalmente no se puede cambiar
segundoNombre = 'Oscar';
//cedula = '124245435';
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123;
var edad = 22;
var fecha = new Date();
var casado = false;
//let mascotas: object = {};
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //template Strings, se puden utilizar variables, no se necesita concatenar nada
        console.log("el usuario se llama " + this.mNombre + " la cedula del usuario es " + this.mCedula + " la edad es " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Oscar', 22, '1724987635');
var usuarioOtro = {
    mNombre: 'Oscar',
    mEdad: 22,
    mCedula: '1724155914'
};
console.log(usuario.imprimirEnConsola());
console.log(usuarioOtro);
function noHagoNada() {
}
console.log('no hago nada; ', noHagoNada());
var usuarioTres;
var usuarioCuatro;
var UsuarioTres = /** @class */ (function () {
    function UsuarioTres(mNombre, mEdad, mCedula) {
        this.mNombre = mNombre;
        this.mEdad = mEdad;
        this.mCedula = mCedula;
    }
    return UsuarioTres;
}());
