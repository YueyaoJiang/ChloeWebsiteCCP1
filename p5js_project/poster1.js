let points = [];
let font;

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}

class TextPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.offsetX = 0;
    this.offsetY = 0;
    this.color = color(120, 0, 0); 
  }

  update() {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = sqrt(dx * dx + dy * dy);

    
    let redValue = map(distance, 0, 200, 255, 120);
    this.color = color(redValue, 0, 0);

    
    let jitterAmount = map(distance, 0, 200, 3, 0);
    this.offsetX = random(-jitterAmount, jitterAmount);
    this.offsetY = random(-jitterAmount, jitterAmount);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x + this.offsetX, this.y + this.offsetY, 6, 6);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  textAlign(CENTER, CENTER);

  let textPoints = font.textToPoints('EVIL', width / 2 - 250, height / 2 + 50, 200, {
    sampleFactor: 0.15
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
