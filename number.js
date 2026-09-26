
var orangePrice = 20;
var chocolatePrice = 25;

// If i want the string number as integer then i need to put parseInt()
// But if i want as floating number then I need to use ParseFloat()
// var applePrice = parseInt('20.5');

var applePrice = parseFloat('20.5');


console.log("Total price", orangePrice + chocolatePrice);



console.log(typeof chocolatePrice);
console.log(typeof applePrice)


console.log("Total price", orangePrice + chocolatePrice + applePrice);

var first = 0.1;
var second = 0.2;
var total = first + second;

// .toFixed(5) For i only want the 5 number after the (.) .
console.log(total.toFixed(5));
