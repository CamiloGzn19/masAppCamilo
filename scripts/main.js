import getData from "./getData.js";
import { mostrarMascotas } from "./mostrar.js";

let btnPerro = document.getElementById("btnPerro");
let btnGato = document.getElementById("btnGato");
let mostrarElementos = document.querySelector(".space");

const getEle = async (url) => {
  mostrarElementos.innerHTML = ''
  let data = getData(url)
  mostrarMascotas(data, mostrarElementos)
}

btnPerro.addEventListener("click", () => {
  getEle('http://localhost:3001/perros')
});

btnGato.addEventListener("click", () => {
  getEle('http://localhost:3000/gatos')
  
});

mostrarElementos.addEventListener("click", async (e) => {
  const btnDetalle = e.target.classList.contains('card-img-overlay');
  const id = e.target.id;
  
  if (btnDetalle) {
    let url = 'http://localhost:3500/mascotas'
    const lista = await getData(url);
    const objeto = lista.find((list) => list.id === Number(id));
    localStorage.setItem("Detalle", JSON.stringify(objeto));
    window.location.href = "detalle.html";
  }
});

