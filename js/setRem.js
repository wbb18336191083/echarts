function setRem(){
var clientWidth=document.documentElement.clientWidth||document.body.clientWidth;
console.log(clientWidth);
clientWidth=clientWidth>1920?1920:clientWidth;
clientWidth=clientWidth<1024?1024:clientWidth;
var rem=clientWidth/19;
var html=document.getElementsByTagName('html')[0];
html.style.fontSize=rem+'px';
}
window.onresize=setRem;
window.onload=setRem;