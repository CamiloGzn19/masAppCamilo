import getData from "./getData.js";
import { mostrarMascotas } from "./mostrarMascotas.js";
let url = "http://localhost:2500/favoritos"

let mostrarElementos = document.querySelector(".FMascotas");

let data =  getData(url)
mostrarMascotas(data, mostrarElementos)

mostrarElementos.addEventListener("click", async (e) => {
    const btnDetalle = e.target.classList.contains('card-img-overlay');
    const id = e.target.id;
    console.log(id)
    
    if (btnDetalle) {
      let url = 'http://localhost:3500/mascotas'
      const lista = await getData(url);
      const objeto = lista.find((list) => list.id === Number(id));
      localStorage.setItem("Detalle", JSON.stringify(objeto));
      window.location.href = "detalleFav.html";
    }
  });
  