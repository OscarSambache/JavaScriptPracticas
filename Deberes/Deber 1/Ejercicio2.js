var numeroDeGeneradores = 19;
var generador = 1;
var megawatts = 62;
var totalDeMegawatts = 0;

while (generador < 5) {
    if (generador % 2 == 0) {
        console.log('Generador ', generador, 'está apagado');
        generador++;
    }
    else {
        totalDeMegawatts = totalDeMegawatts + megawatts;
        console.log('Generador ', generador, 'está prendido, añadiendo', megawatts, 'MW para un total de ', totalDeMegawatts, ' MW');
        generador++;
    }
}
for (generador = 5; generador <= 19; generador++) {
    if (generador % 2 == 0) {
        console.log('Generador ', generador, 'está apagado');
    }
    else {
        totalDeMegawatts = totalDeMegawatts + megawatts;
        console.log('Generador ', generador, 'está prendido, añadiendo', megawatts, 'MW para un total de ', totalDeMegawatts, ' MW');
    }
}