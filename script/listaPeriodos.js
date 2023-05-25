const cargarDatosJson = async () => {
    const respuesta = await fetch('../json/menstruante.json');
    const data = await respuesta.json();
    if (data != null) {
        menstruante1 = data;
        let listaConfirmada = filtrarPeriodoConfirmacionMenstruacion(data.listaProximosPeriodos);
        menstruante1.listaProximosPeriodos = listaConfirmada;
    }
    guardarEnLocalStorage();
}

cargarDatosJson().then((data) => {
    // Se recuperan los datos del LocalStorage
    let menstruantesJSON = JSON.parse(localStorage.getItem("menstruantes"));
    menstruante1 = menstruantesJSON;
    
    actualizarPromedioDuracionMenstruacion(menstruante1);
    calcularPeriodosDelAnio(menstruante1);
    guardarEnLocalStorage();
    cargarDatosEnTabla(menstruante1.listaProximosPeriodos)
})
.catch((reason) => {
    console.log("Message:" + reason.message)
});
















