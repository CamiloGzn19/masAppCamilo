export const mostrarDTMensajes = async (datos, espacios) => {
    const mensajes = await datos;
    mensajes.forEach(mensaje => {
        const {imagen, usuario, hora_recibido, enviado, id} = mensaje;
        espacios.innerHTML += `
        <div class="card-content">
            <img src="${imagen}" class="ellipse9" alt="" />
            <div class="card-text">
                <h2>${usuario}</h2>
                <!-- <p class="hora">${hora_recibido}</p> -->
                <p id="${id}" class="mensaje">
                    ${enviado}
                </p>
            </div>
        </div>
        `
    })
}

export default mostrarDTMensajes