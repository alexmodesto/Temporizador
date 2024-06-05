// Mostrar la hora actual
let divHora = mostrarHora;
const actualizarHora = () => {
    let fechaActual = new Date()
    let horaActual = formatearTiempo(fechaActual.getHours());
    let minActual = formatearTiempo(fechaActual.getMinutes());
    let segActual = formatearTiempo(fechaActual.getSeconds());
    divHora.innerHTML = `${horaActual} : ${minActual} : ${segActual}`
}

const formatearTiempo = (tiempo) => {
    if (tiempo < 10) {
        return `0${tiempo}`
    }
    return tiempo
}
setInterval(actualizarHora, 1000)

// Sección de Temporizador
const iniciarTemporizador = () => {
    // Obtener todos los inputs.
    let horaUsuario = horaUsuario.value
    let minUsuario = minUsuario.value
    let segUsuario = segUsuario.value
    segUsuario--;
    segUsuario.value = segUsuario
    setTimeout(iniciarTemporizador, 1000)
    if (segUsuario < 0 && minUsuario == 0 && horaUsuario == 0) {
        clearTimeout(iniciarTemporizador)
        horaUsuario.value = "00"
        minUsuario.value = "00"
        segUsuario.value = "00"
    }
    if (segUsuario < 0 && minUsuario > 0) {
        segUsuario.value = 59;
    }
    if (segUsuario < 0 && minUsuario > 0) {
        minUsuario.value--
    }
    if (segUsuario < 0 && minUsuario >= 0 && horaUsuario > 0 ) {
        segUsuario.value = 59;
        minUsuario.value = 59
        horaUsuario--
    }
}
