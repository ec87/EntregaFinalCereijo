class Menstruante {
    constructor(nombre, cicloInicial, duracionUltimoPeriodo, duracionSangrado, listaProximosPeriodos, esRegular, promedioDuracion) {
        this.nombre = nombre.toUpperCase();
        this.cicloInicial = new Date(cicloInicial);
        this.duracionUltimoPeriodo = parseInt(duracionUltimoPeriodo);
        this.duracionSangrado = parseInt(duracionSangrado);
        this.listaProximosPeriodos = listaProximosPeriodos;
        this.esRegular = esRegular;
        this.promedioDuracion = promedioDuracion;
    }
}

class Periodo {
    constructor(fechaInicioPeriodo, duracionPeriodo, mesPeriodo, confirmado) {
        this.fechaInicioPeriodo = new Date(fechaInicioPeriodo);
        this.duracionPeriodo = parseInt(duracionPeriodo);
        this.mesPeriodo = mesPeriodo;
        this.confirmado = confirmado;
    }
}