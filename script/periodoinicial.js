//Recuperación de cada uno de los input del formulario
const formulario = document.getElementById("formulario");

//Ejecución evento submit
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (document.getElementById("nombre").value == "" || document.getElementById("fechaUltimaMenstruacion").value == "" ||
        document.getElementById("duracionUltimoPeriodo").value == "" || document.getElementById("duracionUltimoSangrado").value == "") {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Alguno de tus datos no se han cargado',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tus datos se han cargado correctamente',
            showConfirmButton: false,
            timer: 1500
        });
        validarFormulario(event.target);
        calcularPeriodosDelAnio();
        mostrarProximoPeriodo();
        guardarEnLocalStorage("PeriodoInicial", JSON.stringify(menstruante1));
    }
});

formulario.addEventListener("reset", (event) => {
    event.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Limpiaste el formulario',
        showConfirmButton: false,
        timer: 1500
    });
    validarFormulario(event.target);
});


menstruantesJSON = JSON.parse(localStorage.getItem("menstruantes"));
menstruante1 = menstruantesJSON;