$(document).ready(function(){

function getOS(){
var OS;
if (navigator.appVersion.indexOf("Win")!=-1) OS="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OS="Mac OSX";
if (navigator.appVersion.indexOf("X11")!=-1) OS="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OS="Linux";

	document.write('Your Operating System: '+OS+'<br><br>');
}

function getBrowser(){
	document.write('Your browser information <br>');
	document.write('Your browser name: '+window.navigator.appName+'<br>');
	document.write('Your browser version: '+window.navigator.appVersion+'<br><br>');
}

getOS();
getBrowser();

var width = window.innerWidth;
var height = window.innerHeight;
document.write('width: '+width+" "+"height: "+height+"<br><br>");
document.write('CHECK CONSOLE FOR RESIZE');

$(window).resize(function() {
    width = $(this).width();
    height = $(this).height();
    console.log('width: '+width+" "+"height: "+height);
})

})

