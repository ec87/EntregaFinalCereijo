let menstruantesJSON = [];

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

// Inicio Funciones
function proximoPeriodo(fechaMenstruacion, duracionUltimoPeriodo) {
    let fecha = new Date(fechaMenstruacion);
    let p = new Periodo(new Date, duracionUltimoPeriodo, "");
    p.fechaInicioPeriodo = new Date(fecha.setDate(fecha.getDate() + duracionUltimoPeriodo));
    p.mesPeriodo = monthNames[p.fechaInicioPeriodo.getMonth()];
    return p
}

function validarFormulario(data) {
    console.log("Formulario enviado");
    menstruante1.nombre = document.getElementById("nombre").value;
    menstruante1.cicloInicial = new Date(document.getElementById("fechaUltimaMenstruacion").value.replaceAll("-", "/"));
    menstruante1.duracionUltimoPeriodo = document.getElementById("duracionUltimoPeriodo").valueAsNumber;
    menstruante1.duracionSangrado = document.getElementById("duracionUltimoSangrado").valueAsNumber;
    menstruante1.cicloInicial = new Date(menstruante1.cicloInicial);
    menstruante1.listaProximosPeriodos = new Array(new Periodo(menstruante1.cicloInicial, menstruante1.duracionUltimoPeriodo, monthNames[menstruante1.cicloInicial.getMonth()]));
    //Inicio Ciclo para calculo de fechas de menstruación
    for (let i = 0; i < 11; i++) {
        let periodoGenerado = proximoPeriodo(menstruante1.listaProximosPeriodos[i].fechaInicioPeriodo, menstruante1.duracionUltimoPeriodo);
        menstruante1.listaProximosPeriodos.push(periodoGenerado);
    }
    localStorage.setItem("menstruantes", JSON.stringify(menstruante1));
}

function filtrarPeriodoPorMes(mes) {
    return menstruante1.listaProximosPeriodos.filter((periodo) => periodo.mesPeriodo == mes)
}

function mostrarProximoPeriodo () {
    let fechaProximoPeriodo = filtrarPeriodoPorMes(monthNames[new Date ().getMonth()]);
    document.getElementById("proximaMenstruacion").textContent= fechaProximoPeriodo[0].fechaInicioPeriodo.toLocaleDateString();
    }

//Inicio constantes
const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

//Instanciación de objeto clase Menstruante
let menstruante1 = new Menstruante("", Date, 0, 0, []);
if (!(localStorage.getItem("menstruantes"))) {
    localStorage.setItem("menstruantes", JSON.stringify(menstruante1));
}

//Recuperación de cada uno de los input del formulario
const formulario = document.getElementById("formulario");

//Ejecución evento submit
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario(event.target);
    mostrarProximoPeriodo();

});

menstruantesJSON = JSON.parse(localStorage.getItem("menstruantes"));
menstruante1 = menstruantesJSON;