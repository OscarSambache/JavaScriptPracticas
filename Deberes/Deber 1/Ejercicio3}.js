var numeroDeMeses=32;
var numeroDeOsos=3;
for (var i = 1; i<= numeroDeMeses; i++){
    if (numeroDeOsos >1000){
        console.log('mes ',i,'Removiendo', (numeroDeOsos/2) , 'osos de anteojos de la población');
        numeroDeOsos = numeroDeOsos/2;
        console.log('mes ',i, ': Van a existir', numeroDeOsos, ' osos de anteojos después del mes 1' );

    }
    else{
        numeroDeOsos= numeroDeOsos * 4;
        console.log('mes ',i, ': Van a existir', numeroDeOsos, ' osos de anteojos después del mes 1' );

    }
}
