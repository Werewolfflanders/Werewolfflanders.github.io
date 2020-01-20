let description =$('.description');
let textInput =$('#textInput');
let saveButton = $('.saveBtn');


var m = moment();
var pastTime = m.format('LLL') - 1;
console.log(m.format('LLL'));
$("#currentDay").text(m.format('LLL'));

// let time = function(){

// }


$(document).ready(function() {
$('.saveBtn').on('click', function() {
console.log("I've been clicked!");
// var userInput = textInput.textContent;
// console.log(userInput);

// Save the list to localStorage
localStorage.setItem('#textInput', textInput.val());
console.log(localStorage);






});
});

if(m.format('LLL') > pastTime) {
	$(this).removeClass('description');
	$(this).addClass('present');

}


// Check 
var saved = localStorage.getItem('#textInput');

