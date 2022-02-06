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
