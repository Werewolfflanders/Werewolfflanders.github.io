//generate random password
function generate(){

    //set password length/complexity
    var complexity = document.getElementById("slider").value;

    //possible password values
    var values = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password="";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    //add password to textbox/display area
    document.getElementById("display").value = password;

}
//funtion copy password to clipboard
function copyPassword(){

    document.getElementById("display").select;

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}