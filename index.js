// Función principal para mostrar la hora actual
let displayArea = displayTime;
const updateClock = () => {
    let today = new Date();
    let hrs = addLeadingZero(today.getHours());
    let mins = addLeadingZero(today.getMinutes());
    let secs = addLeadingZero(today.getSeconds());
    displayArea.innerHTML = `${hrs} : ${mins} : ${secs}`;
}

// Agregar ceros delante si es necesario
const addLeadingZero = (timeUnit) => {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}
setInterval(updateClock, 1000);

// Sección de cuenta regresiva
const startCountdown = () => {
    let hrsCount = userInputHr.value;
    let minsCount = userInputMin.value;
    let secsCount = userInputSec.value;
    secsCount--;
    userInputSec.value = secsCount;
    setTimeout(startCountdown, 1000);
    
    if (secsCount < 0 && minsCount == 0 && hrsCount == 0) {
        clearTimeout(startCountdown);
        resetInputs();
    }
    if (secsCount < 0 && minsCount > 0) {
        userInputSec.value = 59;
        userInputMin.value--;
    }
    if (secsCount < 0 && hrsCount > 0) {
        userInputSec.value = 59;
        userInputMin.value = 59;
        userInputHr.value--;
    }
}

const resetInputs = () => {
    userInputHr.value = "00";
    userInputMin.value = "00";
    userInputSec.value = "00";
}

// Sección de cronómetro
const operateWatch = () => {
    mywatchmillisec.value++;
    timeout = setTimeout(operateWatch, 10);
    updateWatchValues();
}

const updateWatchValues = () => {
    if (mywatchmillisec.value == 100) {
        mywatchsec.value++;
        mywatchmillisec.value = 0;
    }
    if (mywatchsec.value == 60) {
        mywatchmin.value++;
        mywatchsec.value = 0;
    }
    if (mywatchmin.value == 60) {
        mywatchhr.value++;
        mywatchmin.value = 0;
    }
}

const pauseWatch = () => {
    clearTimeout(timeout);
}

const resetWatch = () => {
    clearTimeout(timeout);
    mywatchhr.value = "00";
    mywatchmin.value = "00";
    mywatchsec.value = "00";
    mywatchmillisec.value = "00";
}

// Sección de alarma
const activateAlarm = () => {
    let currentTime = new Date();
    let setHour = alarmHr.value;
    let setMin = alarmMin.value;
    updateAlarmDisplay(`Alarm set for ${setHour}:${setMin}`);
    checkAlarmTime(setHour, setMin);
}

const checkAlarmTime = (hour, minute) => {
    let currentTime = new Date();
    if (hour == currentTime.getHours() && minute == currentTime.getMinutes()) {
        mySound.play();
    } else {
        setTimeout(() => checkAlarmTime(hour, minute), 1000);
    }
}

const deactivateAlarm = () => {
    mySound.pause();
    resetAlarmInputs();
}

const resetAlarmInputs = () => {
    alarmHr.value = "";
    alarmMin.value = "";
    updateAlarmDisplay("");
}

const updateAlarmDisplay = (message) => {
    document.getElementById("disp").innerHTML = message;
    document.getElementById("disp").style.visibility = "visible";
}
