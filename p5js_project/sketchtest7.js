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
  noStroke();

  for (let p of points) {
    let hue = map(p.x, 50, width, 0, 360);
    fill(color(`hsl(${hue}, 80%, 60%)`));
    circle(p.x, p.y, 5);
  }
}
