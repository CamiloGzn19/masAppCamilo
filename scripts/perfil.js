
let btnMod = document.getElementById('button');
let usuario = document.getElementById('usuario');
const Editar = document.getElementById('btnEditar');

let endpoint = "http://localhost:2000/perfiles/"

const resp = await fetch(endpoint)
const data = await resp.json();
data.forEach(element => {
    const {nombre, apellido} = element;
    usuario.innerHTML += `
    <h6>${nombre} ${apellido}</h6>
    `
})

const capturaDatos = () => {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;

      const user = {
            nombre,
            apellido,
            correo
        }
    return user;
}

Editar.addEventListener('click', async () => {

    const input = document.getElementById('nombre').value;
    const resp = await fetch(endpoint);
    const lista = await resp.json()
    const buscado = lista.find(element => element.nombre.toLocaleLowerCase() === input.toLocaleLowerCase())
    if (buscado !== undefined) {
        const {nombre, apellido,correo,id } = buscado;
        document.getElementById('nombre').value = nombre;
        document.getElementById('apellido').value = apellido;
        document.getElementById('correo').value = correo;
        document.getElementById('inputId').value = id;
    } else {
        alert('Usuario no encontrado')
    }
})


btnMod.addEventListener('click', async () => {

    const ModDatos = capturaDatos();
    const {nombre,apellido,correo} = ModDatos;
   
    if(nombre === "",apellido === "",correo === ""){
        alert('Llenar todos los campos')
    }
    else{
        const id = document.getElementById('inputId').value;
        await fetch(endpoint + id, {
            method: 'PUT',
            body: JSON.stringify(ModDatos),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }

})