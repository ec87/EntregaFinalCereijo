const usuariaNueva = document.getElementById("usuariaNueva");
usuariaNueva.addEventListener("click", () => {
    let timerInterval
    Swal.fire({
        title: 'Te estamos redireccionando...',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        location.href = "./pages/periodoinicial.html";
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
    
})

const usuariaConDatos = document.getElementById("usuariaConDatos");
usuariaConDatos.addEventListener("click", () => {
    let timerInterval
    Swal.fire({
        title: 'Te estamos redireccionando...',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        location.href = "./pages/listaPeriodos.html";
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
    
})