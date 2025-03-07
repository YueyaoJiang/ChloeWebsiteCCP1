let font;

function preload() {
  font = loadFont('myFont.ttf');
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(80);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  let hue = map(mouseX, 0, width, 0, 360);
  fill(color(`hsl(${hue}, 80%, 60%)`));
  text('POTATO', width / 2, height / 2);
}
