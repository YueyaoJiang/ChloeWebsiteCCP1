let font;
let fontSize = 80;

function preload() {
  font = loadFont('myFont.ttf');
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255, random(100, 255));
  let x = width / 2 + random(-5, 5);
  let y = height / 2 + random(-5, 5);
  
  text('EVIL', x, y);
}
