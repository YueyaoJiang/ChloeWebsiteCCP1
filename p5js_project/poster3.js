let points = [];
let font;

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}


class TextPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    
    let angle = atan2(mouseY - this.y, mouseX - this.x);

   
    this.lineLength = 15;
    this.x1 = this.x + cos(angle) * this.lineLength;
    this.y1 = this.y + sin(angle) * this.lineLength;
    this.x2 = this.x - cos(angle) * this.lineLength;
    this.y2 = this.y - sin(angle) * this.lineLength;
  }

  display() {
    stroke(255);
    strokeWeight(2);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  textAlign(CENTER, CENTER);

  let textPoints = font.textToPoints('KING', width / 2 - 250, height / 2 + 50, 200, {
    sampleFactor: 0.2
  });

  for (let p of textPoints) {
    points.push(new TextPoint(p.x, p.y));
  }
}

function draw() {
  background(0);

  for (let p of points) {
    p.update();
    p.display();
  }
}
