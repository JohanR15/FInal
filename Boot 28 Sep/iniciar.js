let correo, contraseña;

let formulario = document.querySelector('#iniciar')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    correo = document.getElementById('email').value
    contraseña = document.getElementById('password').value

    ValidarDatos(correo, contraseña)

}

function ValidarDatos(correo, contraseña) {
    if (correo.length == 0 || contraseña.length == 0) {
    }

    ListarDatos(correo, contraseña)
}


function ListarDatos(correo, contraseña) {
    let correoUs = localStorage.getItem('Correo')
    let contraseñaUs = localStorage.getItem('Contraseña')

    if (correo == correoUs && contraseña == contraseñaUs) {
        Swal.fire(
            'Buen Trabajo',
            'You clicked the button!',
            'success'
        )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: '¡Algo salió mal!',
        })

    }
}