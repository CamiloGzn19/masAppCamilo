import getData from "./getData.js";
import {mostrarMensajes} from './mostrar.js'

const endpoint= "http://localhost:1000/mensajes"
const espacio = document.querySelector('.card-mensaje');

document.addEventListener('DOMContentLoaded', () => {

    const data = getData(endpoint);
    mostrarMensajes(data, espacio);

})

espacio.addEventListener("click", async (e) => {
  const btnDetalle = e.target.classList.contains('mensaje');
  const id = e.target.id;
  
  if (btnDetalle) {
    let url = 'http://localhost:1000/mensajes'
    const lista = await getData(url);
    const objeto = lista.find((list) => list.id === Number(id));
    localStorage.setItem("mensaje", JSON.stringify(objeto));
    window.location.href = "DTmensaje.html";
  }
});