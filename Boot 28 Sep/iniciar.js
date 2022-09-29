let nombre, correo, contraseña, contraseña2, numero;

let formulario = document.querySelector('#registro')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('name').value
    correo = document.getElementById('email').value
    contraseña = document.getElementById('password').value
    contraseña2 = document.getElementById('password2').value
    numero = document.getElementById('number').value

    ValidarDatos(nombre, correo, contraseña, contraseña2, numero)

    guardarLocalStorage(nombre, correo, contraseña, contraseña2, numero)

}

function ValidarDatos(nombre, correo, contraseña, contraseña2, numero) {
    if (nombre.length == 0 || correo.length == 0 || contraseña.length == 0 || contraseña2.length == 0 || numero.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: '¡Algo salió mal!',
        })
    }
}

function ListarDatos() {
    let nombreusu = localStorage.getItem('Nombre')
    let correousu = localStorage.getItem('Correo')
    let contraseñausu = localStorage.getItem('Contraseña')
}

