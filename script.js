// Mostrar la hora actual en el div correspondiente
let displayDiv = document.getElementById("displayTime");
const clock = () => {
    let now = new Date();
    let currentHour = formatTime(now.getHours());
    let currentMinute = formatTime(now.getMinutes());
    let currentSecond = formatTime(now.getSeconds());
    displayDiv.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`;
    setTimeout(clock, 1000); // Actualizar la hora cada segundo
}

// Formatear la hora para asegurar dos dígitos
const formatTime = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
}

// Inicializar el reloj
clock();

// Sonido a ser reproducido una vez que el temporizador alcance cero.
let audio = new Audio('audio1.mp3'); // Asegúrate de reemplazar 'tu_archivo_de_sonido.mp3' con la ruta correcta

// Función para el temporizador de cuenta regresiva
const countDown = () => {
    let hours = parseInt(document.getElementById("userInputHr").value, 10);
    let minutes = parseInt(document.getElementById("userInputMin").value, 10);
    let seconds = parseInt(document.getElementById("userInputSec").value, 10);

    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0 && seconds === 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0 && minutes === 0 && seconds === 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    }

    document.getElementById("userInputHr").value = hours;
    document.getElementById("userInputMin").value = minutes;
    document.getElementById("userInputSec").value = seconds;

    // Comprobar si el temporizador ha llegado a cero y reproducir el sonido
    if (hours === 0 && minutes === 0 && seconds === 0) {
        audio.play();
        alert("¡Tiempo finalizado!");
        return; // Detener la función cuando el temporizador llega a cero
    }

    setTimeout(countDown, 1000); // Continuar el temporizador
}

// Controladores para cronómetro
let stopwatchInterval;
const startWatch = () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            let millis = parseInt(document.getElementById("mywatchmillisec").value, 10) + 1;
            let seconds = parseInt(document.getElementById("mywatchsec").value, 10);
            let minutes = parseInt(document.getElementById("mywatchmin").value, 10);
            let hours = parseInt(document.getElementById("mywatchhr").value, 10);

            if (millis >= 100) {
                millis = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            document.getElementById("mywatchmillisec").value = millis;
            document.getElementById("mywatchsec").value = seconds;
            document.getElementById("mywatchmin").value = minutes;
            document.getElementById("mywatchhr").value = hours;
        }, 10);
    }
}

const pauseWatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

const resetWatch = () => {
    pauseWatch();
    document.getElementById("mywatchmillisec").value = "00";
    document.getElementById("mywatchsec").value = "00";
    document.getElementById("mywatchmin").value = "00";
    document.getElementById("mywatchhr").value = "00";
}

// Inicializar los controladores de eventos para los botones del temporizador y cronómetro
document.getElementById("startButton").addEventListener("click", countDown);
document.getElementById("startWatchButton").addEventListener("click", startWatch);
document.getElementById("pauseWatchButton").addEventListener("click", pauseWatch);
document.getElementById("resetWatchButton").addEventListener("click", resetWatch);

