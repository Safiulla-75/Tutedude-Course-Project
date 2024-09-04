// Reaction tester js code
let start = new Date().getTime();
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for ( let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move(){
  let left;
  let top;
  let wh;
  left = Math.random() *300;
  top = Math.random() *300;
  wh = ((Math.random() *400) + 100);
  document.getElementById("shape").style.left = left;
  document.getElementById("shape").style.top = top;
  document.getElementById("shape").style.width = wh;
  document.getElementById("shape").style.height = wh;
  document.getElementById("shape").style.display = "block";
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  start = new Date().getTime();
  
}
move();
document.getElementById("shape").onclick = function(){
  document.getElementById("shape").style.display = "none";
  let end = new Date().getTime();
  let timeTaken = (end - start)/1000;
  alert(timeTaken);
  move();
}