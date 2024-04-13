import $ from 'jquery';
import './style.scss';
// Define a function to be executed
let num = 0;
function update() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds`);
}
// Call the function every second
setInterval(update, 1000);
