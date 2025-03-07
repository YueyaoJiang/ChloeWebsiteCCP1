let font;
let fontSize = 65;
let lineSpacing = fontSize * 1.3;

function preload() {
  font = loadFont('myFont.ttf');
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(fontSize);
}

function draw() {
  background(0);
  fill(255);
  
  for (let i = 0; i < height / lineSpacing; i++) {
    let y = (i + 1) * lineSpacing;
    let x = width / 2 + sin(frameCount * 0.02 + i) * (mouseX / 10);
    textAlign(CENTER, CENTER);
    text('POTATO', x, y);
  }
}
