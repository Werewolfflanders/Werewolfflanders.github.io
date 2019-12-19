//generate random password

var passKeys="abcdefghijklmnopqrstuvwxyz123456789"
var result=''

function generatePass(plength){
result=''
for (i = 0; i < plength; i++)
result += passKeys.charAt(Math.floor(Math.random()*passKeys.length))
return result
}

function populateform(enterlength){
document.pgenerate.output.value=generatePass(enterlength)
}

function copyPassword(){

    document.getElementById("output");


    document.execCommand("copy");

    alert("Password copied to clipboard");
}