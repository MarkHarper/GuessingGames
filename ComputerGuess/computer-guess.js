var talk = document.querySelector('.talk');
var st = document.querySelector('.start');
var th = document.querySelector('.th');
var tl = document.querySelector('.tl');
var jr = document.querySelector('.jr')

function numGen (u,l) {
  return Math.floor(Math.random() * (u - l + 1)) + l;
}

var arr = [];

function popArray (x) {
for (var i = 0; i<10; i++) {
    x[i]=i+1;
}
}

popArray(arr);

console.log("Check A " + arr);

st.addEventListener('click', function  () {
  var guess = numGen(10,1);
  talk.textContent= 'Is your number '+guess + "?";
  th.addEventListener('click', function () {
    for(var i = 0; i<10; i++) {
      if (guess==arr[i]) {
        arr.splice(i,1);
      }
    }
    console.log("Check B " + arr);
    guess = arr[numGen(arr.length,1)-1];
    talk.textContent= 'Is your number '+guess + "?";
  })
  tl.addEventListener('click', function () {
    for(var i = 0; i<10; i++) {
      if (guess==arr[i]) {
        arr.splice(i,1);
      }
    }
    console.log("Check C " + arr);
    guess = arr[numGen(arr.length,1)-1];
    talk.textContent= 'Is your number '+guess + "?";
  })
  jr.addEventListener('click', function () {
    popArray(arr);
    console.log("Check D " + arr);
    talk.textContent= 'I am awesome!';
  })
  })
