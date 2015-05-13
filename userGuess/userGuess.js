var h1 = document.querySelector('h1');
var txt = document.querySelector('.name');
var btn = document.querySelector('button');
var num = Math.ceil(Math.random()*10);
console.log(num);
btn.addEventListener('click', function  () {
var guess = parseInt(txt.value);
console.log(guess);
console.log(txt.value);
if (guess<num) {
  h1.textContent='Too low, try again.';
}
else if (guess>num) {
  h1.textContent='Too high, try again.';
}
else if (guess==num) {
  h1.textContent='Just right';
}
});
