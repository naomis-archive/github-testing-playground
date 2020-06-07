var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d', { alpha: false });
var arr = ['#752c77',
  '#dea4d2',
  '#b962bd',
  '#250420',
  '#c73bbe'];
var radius = 1;
var color = 0;
/**function draw() {
  c.fillStyle = 'black';
  color = color + 0.2;
  c.beginPath();
  c.arc(0, 0, radius, 0, 2 * Math.PI, false);
  c.fill();
  radius += 1;
  if (radius < 175) {
    requestAnimationFrame(draw);
  }
  console.log('w')
}
function draw2() {
  c.fillStyle = 'black';
  color = color + 0.2;
  c.beginPath();
  c.arc(285, 150, radius + 20, 0, 2 * Math.PI, false);
  c.fill();
  radius += 1;
  if (radius < 175) {
    requestAnimationFrame(draw2);
  }
  console.log('z')
}
draw()
draw2();**/
console.log(window.innerHeight,window.innerWidth)
function circle(){
  c.fillStyle = 'hsl('+ color++ +',100%,50%)';
  c.beginPath();
  c.arc(130,75,radius,0,2*Math.PI);
  c.fill();
  radius+=0.4;
  if(radius<73){
    requestAnimationFrame(circle);
  }
}
circle()
