

setInterval(function(){
var curDate = new Date();
if(curDate.getHours() > 12){
document.getElementById("hour").innerHTML = curDate.getHours() - 12;
}
else if(curDate.getHours() == 0){
	document.getElementById("hour").innerHTML = "12";
}
else{
	document.getElementById("hour").innerHTML = curDate.getHours(); 
}
if(curDate.getMinutes() < 10 && curDate.getMinutes()%2===1){
	document.getElementById("bg").style.background = "gray";
	document.getElementById("minutes").innerHTML = "0"+curDate.getMinutes()
}
else if(curDate.getMinutes() < 10 && curDate.getMinutes()%2===0){
	document.getElementById("bg").style.background = "lightgray";
	document.getElementById("minutes").innerHTML = "0"+curDate.getMinutes()
}
else if(curDate.getMinutes()%2===1){
	document.getElementById("bg").style.background = "gray";
	document.getElementById("minutes").innerHTML = curDate.getMinutes();
}
else if(curDate.getMinutes()%2===0){
	document.getElementById("bg").style.background = "lightgray";
	document.getElementById("minutes").innerHTML = curDate.getMinutes();
}
document.getElementById("seconds").innerHTML = curDate.getSeconds();
document.getElementById("milliseconds").innerHTML = curDate.getMilliseconds();
}, 1000)


