import getData from "./getData.js";
import mostrarDTMensajes from './mostrarDTMensajes.js'
let espacio = document.querySelector('.contenedor')

const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("mensaje"));
    const {imagen,usuario,hora_enviado,hora_recibido,enviado,recibido} = det;
    espacio.innerHTML += `
        <div class="header">
          <button class="btnVolver"><img class="btnVolver"
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644086158/Sprint%201/back_nccoa3.png"
            alt=""
          /></button>
          <img
            src="${imagen}"
            alt=""
          />
          <h2>${usuario}</h2>
        </div>
        <div class="mensajes">
          <h4 class="hora">${hora_enviado [0]}</h4>
          <p class="salida">${enviado [0]}</p>
          <h4 class="hora">${hora_recibido [0]}</h4>
          <p class="entrada">${recibido [0]}</p>
          <h4 class="hora">${hora_enviado [1]}</h4>
          <p class="salida">${enviado [1]}</p>
          <h4 class="hora">${hora_recibido [1]}</h4>
          <p class="entrada">${recibido [1]}</p>
          <input type="text" name="Mensaje" id="enviar_texto" placeholder="Aa">
        </div>
        <div class="interaccion">
          
        </div>
    `
}

document.addEventListener('DOMContentLoaded',getLocalStorage)

espacio.addEventListener("click", async (e) => {
  const btnDetalle = e.target.classList.contains('btnVolver');
  if (btnDetalle){
    window.location.href = "mensajes.html";
  }
});