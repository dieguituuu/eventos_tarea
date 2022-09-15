const nombre = document.querySelector('#name')
const apellido = document.querySelector('#surname')
const boton = document.querySelector('#btn-login')
const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')

boton.onclick = () => {
    const datos = {
        nombre: nombre.value,
        apellido: apellido.value
    }
    console.log(datos)
    div1.remove()
    saludar(datos)
}

function saludar(usuario) {
    const saludo = document.createElement('h2')
    saludo.innerText = `¡Bienvenido/a ${usuario.nombre} ${usuario.apellido}, espero que te encuentres bien!`
    div2.append(saludo)
}