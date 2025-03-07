let font;
let points = [];

function preload() {
  font = loadFont('myFont.ttf'); 
}

function setup() {
  createCanvas(600, 300);
  textFont(font);
  textSize(150);

  points = font.textToPoints('KING', 50, 200, 150, {
    sampleFactor: 0.2
  });
}

function draw() {
  background(0);
  fill(255);
  noStroke();

  for (let p of points) {
    let offsetX = sin(frameCount * 0.02 + p.y * 0.1) * 5;
    let offsetY = cos(frameCount * 0.02 + p.x * 0.1) * 5;
    circle(p.x + offsetX, p.y + offsetY, 5);
  }
}
