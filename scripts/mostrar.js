export const mostrarMascotas = async (datos, espacios) => {
    const mascotas = await datos;
    mascotas.forEach(mascota => {
        const {id, imagen, nombre, raza} = mascota;
        espacios.innerHTML += `
        <div class="card mb-3" style="width: 10rem">
            <img src="${imagen}" class="card-img" alt="..." />
                <div id="${id}" class="card-img-overlay">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${raza}</p>
                </div>
        </div>  
        
        `
    })
}

export const mostrarMensajes = async (datos, espacios) => {
    const mensajes = await datos;
    mensajes.forEach(mensaje => {
        const {imagen, usuario, hora_recibido, enviado, id} = mensaje;
        espacios.innerHTML += `
        <div class="card-content">
            <img src="${imagen}" class="ellipse9" alt="" />
            <div class="card-text">
                <div class="head">
                    <h2>${usuario}</h2>
                    <!--<p class="hora">${hora_recibido [0]}</p>-->
                </div>
                <p id="${id}" class="mensaje">
                    ${enviado [0]}
                </p>
            </div>
        </div>
        `
    })
}
