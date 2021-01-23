var particles=[];
var plinkos=[];
var divisions=[]

function setup() {
  createCanvas(800,400);
  ground=new groundDirt();
}
var divisionHeight=300;
function draw() {
  background(255,255,255);  
  drawSprites();
}