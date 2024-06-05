// Actualizar reloj en tiempo real
let displayArea = document.getElementById("timeDisplay");
const updateClock = () => {
    let today = new Date();
    let hrs = addLeadingZero(today.getHours());
    let mins = addLeadingZero(today.getMinutes());
    let secs = addLeadingZero(today.getSeconds());
    displayArea.innerHTML = `${hrs} : ${mins} : ${secs}`;
}

// Función para agregar ceros delante
const addLeadingZero = (timeUnit) => {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}
setInterval(updateClock, 1000);

// Función para manejar la cuenta regresiva
const startCountdown = () => {
    let hrsCount = document.getElementById("inputHours").value;
    let minsCount = document.getElementById("inputMinutes").value;
    let secsCount = document.getElementById("inputSeconds").value;
    secsCount--;
    document.getElementById("inputSeconds").value = secsCount;

    setTimeout(startCountdown, 1000);

    if (secsCount < 0 && minsCount == 0 && hrsCount == 0) {
        clearTimeout(startCountdown);
        resetInputs();
    } else if (secsCount < 0) {
        if (minsCount > 0) {
            document.getElementById("inputSeconds").value = 59;
            document.getElementById("inputMinutes").value--;
        } else if (hrsCount > 0) {
            document.getElementById("inputSeconds").value = 59;
            document.getElementById("inputMinutes").value = 59;
            document.getElementById("inputHours").value--;
        }
    }
}

const resetInputs = () => {
    document.getElementById("inputHours").value = "00";
    document.getElementById("inputMinutes").value = "00";
    document.getElementById("inputSeconds").value = "00";
}

// Cronómetro
const operateWatch = () => {
    let ms = document.getElementById("millisecondsWatch");
    ms.value++;
    timeout = setTimeout(operateWatch, 10);

    if (ms.value == 100) {
        let s = document.getElementById("secondsWatch");
        s.value++;
        ms.value = 0;
    }
    if (document.getElementById("secondsWatch").value == 60) {
        let m = document.getElementById("minutesWatch");
        m.value++;
        document.getElementById("secondsWatch").value = 0;
    }
    if (document.getElementById("minutesWatch").value == 60) {
        let h = document.getElementById("hoursWatch");
        h.value++;
        document.getElementById("minutesWatch").value = 0;
    }
}

const pauseWatch = () => {
    clearTimeout(timeout);
}

const resetWatch = () => {
    clearTimeout(timeout);
    document.getElementById("hoursWatch").value = "00";
    document.getElementById("minutesWatch").value = "00";
    document.getElementById("secondsWatch").value = "00";
    document.getElementById("millisecondsWatch").value = "00";
}

// Alarma
let mySound = new Audio("audio1.mp3");

const activateAlarm = () => {
    let setHour = document.getElementById("alarmHours").value;
    let setMin = document.getElementById("alarmMinutes").value;
    let currentTime = new Date();
    document.getElementById("disp").innerHTML = `Alarma configurada para las ${setHour}:${setMin}`;
    document.getElementById("disp").style.visibility = "visible";

    if (setHour == currentTime.getHours() && setMin == currentTime.getMinutes()) {
        mySound.play();
    } else {
        setTimeout(activateAlarm, 60000); // Revisar cada minuto
    }
}

const deactivateAlarm = () => {
    mySound.pause();
    document.getElementById("alarmHours").value = "";
    document.getElementById("alarmMinutes").value = "";
    document.getElementById("disp").style.visibility = "hidden";
}
