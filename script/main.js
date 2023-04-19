//Inicio Clases
class Menstruante {
    constructor(nombre, cicloInicial, duracionUltimoPeriodo, duracionSangrado, listaProximosPeriodos) {
        this.nombre = nombre.toUpperCase();
        this.cicloInicial = new Date(cicloInicial);
        this.duracionUltimoPeriodo = parseInt(duracionUltimoPeriodo);
        this.duracionSangrado = parseInt(duracionSangrado);
        this.listaProximosPeriodos = listaProximosPeriodos;
    }
}

class Periodo {
    constructor(fechaInicioPeriodo, duracionPeriodo, mesPeriodo) {
        this.fechaInicioPeriodo = new Date(fechaInicioPeriodo);
        this.duracionPeriodo = parseInt(duracionPeriodo);
        this.mesPeriodo = mesPeriodo;
    }
}
// Fin Clases

// Inicio Funciones
function proximoPeriodo(fechaMenstruacion, duracionUltimoPeriodo) {
    let fecha = new Date(fechaMenstruacion);
    let p = new Periodo(new Date, duracionUltimoPeriodo, "");
    p.fechaInicioPeriodo = new Date(fecha.setDate(fechaMenstruacion.getDate() + duracionUltimoPeriodo));
    p.mesPeriodo = monthNames[p.fechaInicioPeriodo.getMonth()];
    return p
}

function filtroMes(mesBuscado, listaEspecifica) {
    return listaEspecifica.filter((unPeriodo) => unPeriodo.mesPeriodo.includes(mesBuscado.toUpperCase()));
}

//Fin Funciones

//Inicio constantes
const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];
//Fin constantes

//Instanciación de objeto clase Menstruante
let menstruante1 = new Menstruante("", Date, 0, 0, []);
menstruante1.nombre = prompt("¿Cuál es tu nombre?");
//Inicio Control Datos
do {
    let dia = parseInt(prompt("Día de tu última menstruación"));
    let mes = parseInt(prompt("Número de mes de tu última menstruación (sin 0)"));
    let anio = parseInt(prompt("Año de tu última menstruación"));
    menstruante1.duracionUltimoPeriodo = parseInt(prompt("Días de duración de tu último periodo"));
    menstruante1.duracionSangrado = parseInt(prompt("Días de duración de tu último sangrado"));
} while ((isNaN(dia)) || (isNaN(mes)) || (isNaN(anio)) || (isNaN(menstruante1.duracionUltimoPeriodo)) || (isNaN(menstruante1.duracionSangrado)));
//Fin Control Datos
menstruante1.cicloInicial = new Date(anio, mes - 1, dia);
menstruante1.listaProximosPeriodos.push(new Periodo(menstruante1.cicloInicial, menstruante1.duracionUltimoPeriodo, monthNames[mes - 1]));
console.log("Datos de persona mentruante: ", menstruante1);
//Fin de objeto

//Inicio Ciclo para calculo de fechas de menstruación
for (let i = 0; i < 11; i++) {
    let periodoGenerado = proximoPeriodo(menstruante1.listaProximosPeriodos[i].fechaInicioPeriodo, menstruante1.duracionUltimoPeriodo);
    menstruante1.listaProximosPeriodos.push(periodoGenerado);
}
console.log("Lista de los siguientes 12 periodos ", menstruante1.listaProximosPeriodos);
//Fin Ciclo para calculo de fechas de menstruación

//Inicio filtro del mes a consultar.
let mesBuscado = prompt("mes a buscar");
console.log("La/s fecha/s de menstruación del mes buscado es/son ", filtroMes(mesBuscado, menstruante1.listaProximosPeriodos));
//fin filtro del mes a consultar