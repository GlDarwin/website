var name = prompt('what is your name?');
document.write('<h1>' + name + '</h1>');

var hourNow = prompt('what time is now');
 
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow >12) {
    greeting  = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var many = prompt('flowers');
document.write('<h1>' + many + '</h1>');