var d = new Date("Dec 31, 2021 00:00:00").getTime();
var myFunc = setInterval(function(){
var now = new Date().getTime();
var timeLeft = d-now;
var days = Math.floor(timeLeft/(1000*60*60*24));
var hours = Math.floor((timeLeft % (1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((timeLeft % (1000*60*60))/(1000*60));
var seconds = Math.floor((timeLeft % (1000*60))/1000);
document.getElementById("days").innerHTML = days+1;
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
},1000)
