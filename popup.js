const bbcThemeTime = 87630;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
let ms = Date.now();
let minutes = 60 - ms/minute %60;
let msRemaining = (minutes * minute) - bbcThemeTime;
let minutesRemaining = msRemaining / minute;
document.getElementById("demo").innerHTML = minutesRemaining;