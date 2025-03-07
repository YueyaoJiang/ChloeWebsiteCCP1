let font;
let words = [];

function preload() {
  font = loadFont('myFont.ttf');
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  
  for (let word of words) {
    text(word.text, word.x, word.y);
  }
}

function mousePressed() {
  words.push({
    text: 'POTATO',
    x: mouseX,
    y: mouseY
  });
}
