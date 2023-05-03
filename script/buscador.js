//Inicio Funciones
function filtrarPeriodoPorMes(mes) {
    return menstruante1.listaProximosPeriodos.filter((periodo) => periodo.mesPeriodo == mes)
}

function elementoSeleccionado() {
    if (!(selector.options[selector.selectedIndex].value == 0)) {

        for (const unPeriodo of filtrarPeriodoPorMes(selector.options[selector.selectedIndex].value)) {
            let nuevoItem = document.createElement("p");
            nuevoItem.textContent = new Date(unPeriodo.fechaInicioPeriodo).toLocaleDateString();
            listaPeriodos.append(nuevoItem);
        }
    }
}

//Inicio Variables
const buscador = document.getElementById("buscador");
const selector = document.getElementById("selector");
menstruantesJSON = JSON.parse(localStorage.getItem("menstruantes"));
menstruante1 = menstruantesJSON;
let listaPeriodos = document.getElementById("listaPeriodos");
console.log("ver objeto", menstruante1);

//Ejecución evento submit
buscador.addEventListener("submit", (event) => {
    event.preventDefault();
    let parrafo = document.getElementsByTagName("P");
    for (var i = 0, len = parrafo.length; i < len; i++) {
        parrafo[i].remove();
    }
    elementoSeleccionado(event.target);
})