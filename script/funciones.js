// Inicio Funciones
function proximoPeriodo(fechaMenstruacion, promedioDuracion) {
    let fecha = new Date(fechaMenstruacion);
    let p = new Periodo(new Date, promedioDuracion, "", false);
    p.fechaInicioPeriodo = new Date(fecha.setDate(fecha.getDate() + promedioDuracion));
    p.mesPeriodo = monthNames[p.fechaInicioPeriodo.getMonth()];
    return p
}

function filtrarPeriodoConfirmacionMenstruacion(listaDePeriodosConfirmados) {
    return listaDePeriodosConfirmados.filter((periodo) => periodo.confirmado == true);
}

function condicionRegular() {
    menstruante1.esRegular == true ? menstruante1.promedioDuracion = menstruante1.duracionUltimoPeriodo : actualizarPromedioDuracionMenstruacion(menstruante1);
}

function actualizarPromedioDuracionMenstruacion(menstruante) {
    let suma = 0;
    let listaConfirmada = filtrarPeriodoConfirmacionMenstruacion(menstruante.listaProximosPeriodos);
    for (let i = 0; i < listaConfirmada.length; i++) {
        suma += parseInt(listaConfirmada[i].duracionPeriodo);
    }
    menstruante1.promedioDuracion = Math.round(suma / listaConfirmada.length);
}

function validarFormulario(data) {
    console.log("Formulario enviado");
    menstruante1.nombre = document.getElementById("nombre").value;
    menstruante1.cicloInicial = new Date(document.getElementById("fechaUltimaMenstruacion").value.replaceAll("-", "/"));
    menstruante1.duracionUltimoPeriodo = document.getElementById("duracionUltimoPeriodo").valueAsNumber;
    menstruante1.duracionSangrado = document.getElementById("duracionUltimoSangrado").valueAsNumber;
    menstruante1.cicloInicial = new Date(menstruante1.cicloInicial);
    //Creacion del primer componente de la lista con los datos del formulario
    menstruante1.listaProximosPeriodos = new Array(new Periodo(menstruante1.cicloInicial, menstruante1.duracionUltimoPeriodo, monthNames[menstruante1.cicloInicial.getMonth()], true));
    menstruante1.esRegular = document.getElementById("esRegular").checked;
    condicionRegular();
}

function calcularPeriodosDelAnio() {
    if (menstruante1.listaProximosPeriodos.length == 0) {
        console.log("Todavia no hay cargados datos");
    } else {
        let indexInicial = parseInt(menstruante1.listaProximosPeriodos.length);
        for (let i = indexInicial; i < 11; i++) {
            let periodoGenerado = proximoPeriodo(menstruante1.listaProximosPeriodos[i - 1].fechaInicioPeriodo, menstruante1.promedioDuracion);
            menstruante1.listaProximosPeriodos.push(periodoGenerado);
        }
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem("menstruantes", JSON.stringify(menstruante1));
    Toastify({
        text: "Los datos se han guardado correctamente en Storage",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #6B0041, #E069B1)",
        }
      }).showToast();
}

function filtrarPeriodoPorMes(mes) {
    return menstruante1.listaProximosPeriodos.filter((periodo) => periodo.mesPeriodo == mes)
}

function mostrarProximoPeriodo() {
    let fechaProximoPeriodo = filtrarPeriodoPorMes(monthNames[new Date().getMonth()]);
    let fechaActual = new Date();
    if (fechaProximoPeriodo.length == 2) {
        document.getElementById("proximaMenstruacion").textContent = fechaProximoPeriodo[1].fechaInicioPeriodo.toLocaleDateString();
    } else {
        fechaProximoPeriodo = filtrarPeriodoPorMes(monthNames[new Date().getMonth() + 1]);
        document.getElementById("proximaMenstruacion").textContent = fechaProximoPeriodo[0].fechaInicioPeriodo.toLocaleDateString();
    }
}

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

function cargarDatosEnTabla() {
    let bodyTable = document.getElementById("tableBody");
    menstruante1.listaProximosPeriodos.forEach((periodo) => {
        let fechaLocal = new Date(periodo.fechaInicioPeriodo);
        const tr = document.createElement('tr')
        if (periodo.confirmado) {
            tr.innerHTML = `
            <tr>
                <th>${periodo.mesPeriodo}</th>
                <th>${fechaLocal.toLocaleDateString()}</th>
                <div class="">
                    <img src="../src/img/checked.png" alt="" height='18' width='18'>
                </div>
            </tr>             
            `
        } else {
            tr.innerHTML = `
            <tr>
                <th>${periodo.mesPeriodo}</th>
                <th>${fechaLocal.toLocaleDateString()}</th>
            </tr>             
        `
        }

        bodyTable.append(tr);
    })
}
