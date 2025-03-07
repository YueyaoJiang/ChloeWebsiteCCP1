let font;

function preload() {
  font = loadFont('myFont.ttf');
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(60);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  background(0, 50);
  fill(255, 150);
  text('EVIL', mouseX, mouseY);
}
