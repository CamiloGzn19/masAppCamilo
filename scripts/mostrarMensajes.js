


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

export default mostrarMensajes