//Inicio Variables
const buscador = document.getElementById("buscador");
const selector = document.getElementById("selector");
menstruantesJSON = JSON.parse(localStorage.getItem("menstruantes"));
menstruante1 = menstruantesJSON;
let listaPeriodos = document.getElementById("listaPeriodos");
//Ejecución evento submit
buscador.addEventListener("submit", (event) => {
    event.preventDefault();
    let timerInterval
    Swal.fire({
        title: 'Buscando...',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    })
    let parrafo = document.getElementsByTagName("P");
    for (var i = 0, len = parrafo.length; i < len; i++) {
        parrafo[i].remove();
    }
    elementoSeleccionado(event.target);

})