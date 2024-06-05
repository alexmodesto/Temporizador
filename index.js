//Display current time
// create an instance that we can use to manipulate the div inside HTML to display current time
let displayDiv = displayTime;
const clock = () => {
    let newDate = new Date()
    var currentHour = formatTime(newDate.getHours());
    var currentMin = formatTime(newDate.getMinutes());
    var currentSec = formatTime(newDate.getSeconds());
    displayDiv.innerHTML = `${currentHour} : ${currentMin} : ${currentSec}`
}

// Let us concatenate a leading zero everytime sec, min or hr is less than 10
const formatTime = (currentTime) => {
    if (currentTime < 10) {
        return `0 ${currentTime}`
    }
    return currentTime
}
setInterval(clock, 1000)

//Our Sound to be played once the countdown reaches zero.
// let newSound = new Audio()
//Countdown Section
const countDown = () => {
    //Get all the inputs.
    let countedUserHour = userInputHr.value
    let countedUserMin = userInputMin.value
    let countedUserSec = userInputSec.value
    //Reduce the userInput for seconds by 1
    countedUserSec--;
    //Set the reduced value back to the user
    userInputSec.value = countedUserSec
    //Reduce the userInput for seconds by 1 everysecond.
    setTimeout(countDown, 1000)
    //First case is when there is no user input for hour and input boxes and the seconds value is < 0
    if (countedUserSec < 0 && countedUserMin == 0 && countedUserHour == 0) {
        clearTimeout(countDown)
        userInputHr.value = "00"
        userInputMin.value = "00"
        userInputSec.value = "00"
    }
    //Second case where the seconds is < 0 but the minute box is greater than zero. Seconds becomes 59.
    if (countedUserSec < 0  && userInputMin.value > 0) {
        userInputSec.value = 59;
    }
    // And we reduce the the minute also.
    if (countedUserSec < 0 && countedUserMin > 0) {
        userInputMin.value--
    }
    // When the hour box is greater than zero, we want both minute and seconds boxes to return to 59
    if (countedUserSec < 0 && userInputMin.value >= 0 && countedUserHour > 0 ) {
        userInputSec.value = 59;
        userInputMin.value = 59
        userInputHr.value--
    }
}

// Stopwatch Section

// The specified value "0 4" cannot be parsed, or is out of range.
// Start Watch
const startWatch = () => {
    mywatchmillisec.value++
    timeout = setTimeout(startWatch, 10);
    if (mywatchmillisec.value == 60) {
        mywatchsec.value++
        mywatchmillisec.value = 0
    }
    if (mywatchsec.value == 60) {
        mywatchmin.value++
        mywatchsec.value = 0;
        mywatchmillisec.value = 0
    }
    if (mywatchmin.value == 60) {
        mywatchhr.value++
        mywatchmin.value = 0
        mywatchsec.value = 0
        mywatchmillisec.value = 0
    }
}

// Pause watch
const isPaused = () => {
    let timeCondition = false
    if (timeCondition == false) {
        clearTimeout(timeout)
    }
}

//Reset watch
const resetWatch = () => {
    clearTimeout(timeout)
    mywatchhr.value = "00";
    mywatchmin.value = "00";
    mywatchsec.value = "00";
    mywatchmillisec.value = "00";
}

//Alarm Section

let mySound = new Audio("audio1.mp3")

const setAlarm = ()=>{
    let alarmTime = new Date()
    let alarmHour = alarmHr.value
    let alarmMinutes = alarmMin.value
    document.getElementById("disp").innerHTML = `Alarm is set to ${alarmHour} : ${alarmMinutes}`
    document.getElementById("disp").style.visibility = "visible"
    document.getElementById("alarmHr").style.visibility = "hidden"
    document.getElementById("alarmMin").style.visibility = "hidden"
    if(alarmHour == alarmTime.getHours() && alarmMinutes == alarmTime.getMinutes()){
      mySound.play()
    }
    else{
        setTimeout(setAlarm,1000)
    }
}
const stopAlarm = ()=>{
    let alarmQuestion = Math.floor(Math.random() * 10000)
    let alarmAnswer = prompt(`Prove that you are awake: Type this number(s):  ${alarmQuestion}`)
    if (alarmAnswer == alarmQuestion) {
        
    document.getElementById("disp").style.visibility = "hidden"
    document.getElementById("alarmHr").style.visibility = "visible"
    document.getElementById("alarmMin").style.visibility = "visible"
        alarmHr.value = ""
        alarmMin.value = ""
        mySound.pause()
    }
    else{
        mySound.play()
        setTimeout(5000)
    }
}

















































//  10 : 47 : 0 0
//  10 : 47 : 0 1
//  10 : 47 : 0 2
//  10 : 47 : 0 3
//  10 : 47 : 0 4
//  10 : 47 : 0 5
//  10 : 47 : 0 6
//  10 : 47 : 0 7
//  10 : 47 : 0 8
//  10 : 47 : 0 9
//  10 : 47 : 10
//  10 : 47 : 11
//  10 : 47 : 12
//  10 : 47 : 13
//  10 : 47 : 14
//  10 : 47 : 15
//  10 : 47 : 16
//  10 : 47 : 17
//  10 : 47 : 18
//  10 : 47 : 19
//  10 : 47 : 20
//  10 : 47 : 21


