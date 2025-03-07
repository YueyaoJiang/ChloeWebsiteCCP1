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
    let yOffset = random(-3, 3);
    let hue = map(p.y, 150, 250, 0, 60); 
    fill(color(`hsl(${hue}, 100%, 50%)`));
    circle(p.x, p.y + yOffset, 5);
  }
}
