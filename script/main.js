//inicio declaracion de las funciones

//función para calcular en cuantos días totales comienza el periodo menstrual
function calculoPeriodoTotal(diaUltimoPeriodo, duracionCiclo) {
    duracionPeriodoTotal = diaUltimoPeriodo + duracionCiclo;
    console.log("La duración del periodo es de: " + duracionPeriodoTotal + " días");
}

//función para calcular el día que comienza el periodo mentrual adaptado al calendario
function calculoDiaProxPeriodo(cantidadDiasMes) {
    if (duracionPeriodoTotal > cantidadDiasMes) {
        diaProximaMenstruacion = duracionPeriodoTotal - cantidadDiasMes;
    } else {
        diaProximaMenstruacion = duracionPeriodoTotal;
    }
    console.log("El día de tu próximo periodo es: " + diaProximaMenstruacion);
}

//función para calcular el mes que comienza el periodo mentrual adaptado al calendario
function calculoMesProxPeriodo(cantidadDiasMes) {
    if (duracionPeriodoTotal > cantidadDiasMes) {
        switch (mes) {
            case "ENERO":
                proximoMesPeriodo = "FEBRERO"
                break;
            case "FEBRERO":
                proximoMesPeriodo = "MARZO"
                break;
            case "MARZO":
                proximoMesPeriodo = "ABRIL"
                break;
            case "ABRIL":
                proximoMesPeriodo = "MAYO"
                break;
            case "MAYO":
                proximoMesPeriodo = "JUNIO"
                break;
            case "JUNIO":
                proximoMesPeriodo = "JULIO"
                break;
            case "JULIO":
                proximoMesPeriodo = "AGOSTO"
                break;
            case "AGOSTO":
                proximoMesPeriodo = "SEPTIEMBRE"
                break;
            case "SEPTIEMBRE":
                proximoMesPeriodo = "OCTUBRE"
                break;
            case "OCTUBRE":
                proximoMesPeriodo = "NOVIEMBRE"
                break;
            case "NOVIEMBRE":
                proximoMesPeriodo = "DICIEMBRE"
                break;
            case "DICIEMBRE":
                proximoMesPeriodo = "ENERO"
                break;
            default:
                break;
        }

    } else {
        proximoMesPeriodo = mes
    }
    console.log("El mes de tu próximo periodo es: " + proximoMesPeriodo);
}

// fin declaracion de funciones

//inicio declaracion de las variables
let duracionPeriodoTotal = 0;
let duracionCiclo = 0;
let diaUltimoPeriodo = 0;
let diaProximaMenstruacion = 0;
let mes = "";
let proximoMesPeriodo;
let cantidadDiasMes;
//fin de declaracion de las variables

//Ciclo de ingreso de dias periodo y día de última mentruación
do {
    duracionCiclo = parseInt(prompt("¿Cuántos días dura tu ciclo?"));
    console.log("Tu ciclo dura " + duracionCiclo + " días");
    diaUltimoPeriodo = parseInt(prompt("Día de inicio de tu útimo periodo"));
    console.log("El día de tu último periodo es " + diaUltimoPeriodo);
} while ((isNaN(duracionCiclo)) || (isNaN(diaUltimoPeriodo)));

//Condicional y cálculo en cuantos días totales comienza el periodo menstrual
if (duracionCiclo > 0 && diaUltimoPeriodo > 0) {
    calculoPeriodoTotal(diaUltimoPeriodo, duracionCiclo);
}

//Ciclo de ingreso del mes menstruación
do {
    mes = prompt("Mes de tu útimo periodo").toUpperCase();
} while (!((mes == ("ENERO")) || (mes == ("MARZO")) || (mes == ("MAYO")) || (mes == ("JULIO")) || (mes == ("AGOSTO")) || (mes == ("OCTUBRE")) || (mes == ("DICIEMBRE")) || (mes == ("FEBRERO")) || (mes == ("ABRIL")) || (mes == ("JUNIO")) || (mes == ("SEPTIEMBRE")) || (mes == ("NOVIEMBRE"))));

// Indicación de los dias del mes
if ((mes == "ENERO") || (mes == "MARZO") || (mes == "MAYO") || (mes == "JULIO") || (mes == "AGOSTO") || (mes == "OCTUBRE") || (mes == "DICIEMBRE")) {
    let cantidadDiasMes = 31;
    calculoDiaProxPeriodo(cantidadDiasMes);
    calculoMesProxPeriodo(cantidadDiasMes);
    console.log("El mes ingresado es " + mes + ", que tiene " + cantidadDiasMes +  " dias")
} else if (mes == "FEBRERO") {
    let cantidadDiasMes = 28;
    calculoDiaProxPeriodo(cantidadDiasMes);
    calculoMesProxPeriodo(cantidadDiasMes);
    console.log("El mes ingresado es " + mes + ", que tiene " + cantidadDiasMes +  " dias")
} else {
    let cantidadDiasMes = 30;
    calculoDiaProxPeriodo(cantidadDiasMes);
    calculoMesProxPeriodo(cantidadDiasMes);
    console.log("El mes ingresado es " + mes + ", que tiene " + cantidadDiasMes +  " dias")
}


console.log("Tu próximo periodo va a ser el " + diaProximaMenstruacion + " de " + proximoMesPeriodo);
alert("Tu próximo periodo va a ser el " + diaProximaMenstruacion + " de " + proximoMesPeriodo);


