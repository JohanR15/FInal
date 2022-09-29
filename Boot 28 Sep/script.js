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

function guardarLocalStorage(nombre, correo, contraseña, contraseña2, numero) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Contraseña', contraseña)
    localStorage.setItem('Contraseña2', contraseña2)
    localStorage.setItem('Numero', numero)

    ListarDatos()
}

