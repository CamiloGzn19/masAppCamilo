import getData from "./getData.js";
const grupo = document.querySelector('.MascotaDetalle');
let url = "http://localhost:3500/mascotas"
let fav = "http://localhost:2500/favoritos"

const getLocalStorage = () => {
   const det = JSON.parse(localStorage.getItem("Detalle"));
   const {imagen,nombre,raza,edad,ubicacion,imgusuario,personalidad,imgpersonalidad,historia,usuario,id,genero } = det;
   grupo.innerHTML += `
   <img class="back" src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644086158/Sprint%201/back_nccoa3.png">
   <div>
   <img class="principal" src="${imagen}" alt="">
 </div>
 <div class="tarjeta">
   <div class="head">
     <div class="line1">
       <h1 class="name">${nombre}</h1>
       <img class="genero" src="${genero}" alt="">
       <button><img class="favorito" id="${id} "src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644164133/Sprint%201/Property_1_Guardado2_hgumxc.png"></button>
     </div>
     <div class="line2">
       <div class="raza">
         <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644086162/Sprint%201/Property_1_raza_fscxm7.png" alt="">
         <p>${raza}</p>
       </div>
       <div class="edad">
         <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644086161/Sprint%201/Property_1_edad_hmvsc8.png" alt="">
         <p>${edad}</p>
       </div>
       <div class="address">
         <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644086168/Sprint%201/dijogc1eimoybxcw6osm.png" alt="">
         <p>${ubicacion}</p>
       </div>
     </div>
   </div>
   <div class="personalidad">
     <h2>Personalidad</h2>
     <div>
       <img src="${imgpersonalidad [0]}" alt="">
       <p>${personalidad [0]}</p>
     </div>
     <div>
       <img src="${imgpersonalidad [1]}" alt="">
       <p>${personalidad [1]}</p>
     </div>
     <div>
       <img src="${imgpersonalidad [2]}" alt="">
       <p>${personalidad [2]}</p>
     </div>
   </div>
   <div class="historia">
     <h2>Historia de Rocky</h2>
     <p>${historia}</p>
   </div>
   <div class="contacto">
     <div class="publicador">
       <img src="${imgusuario}" alt="">
       <div class="textos">
         <p class="nom_por">Publicado por</p>
         <h3 class="nom_publicador">${usuario}</h3>
       </div>
     </div>
     <button class="contact">Contactar</button>
   </div>
 </div>
   `
}

document.addEventListener('DOMContentLoaded',getLocalStorage)

grupo.addEventListener('click', (e) => {

    if(e.target.classList.contains('contact')){
        window.location.href = "mensajes.html";
    }else if(e.target.classList.contains('back')){
      window.location.href = "home.html";
    }
 
})

grupo.addEventListener("click", async (e) => {
  const btnDetalle = e.target.classList.contains('favorito');
  const id = e.target.id;
  console.log(id)

  if (btnDetalle) {
    const lista = await getData(url);
    const objeto = lista.find((list) => list.id === Number(id));
    console.log(objeto);
  
    await fetch(fav, {
      method: 'POST',
      body: JSON.stringify(objeto),
      headers: {
      "Content-Type": "application/json; charset=utf-8"
      }
    })
    window.location.href = "favoritos.html";
  }
})
