let points = [];
let font;

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}


class TextPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.origX = x;
    this.origY = y;
    this.vx = 0;
    this.vy = 0;
  }

  update() {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = sqrt(dx * dx + dy * dy);
    
    let force = map(distance, 0, 200, -5, 2);
    force = constrain(force, -5, 2);

    let angle = atan2(dy, dx);
    this.vx += cos(angle) * force;
    this.vy += sin(angle) * force;

   
    this.vx *= 0.9;
    this.vy *= 0.9;

    
    this.x += this.vx;
    this.y += this.vy;

    
    let returnForce = 0.02;
    this.vx += (this.origX - this.x) * returnForce;
    this.vy += (this.origY - this.y) * returnForce;
  }

  display() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  textAlign(CENTER, CENTER);

  let textPoints = font.textToPoints('POTATO', width / 2 - 250, height / 2 + 50, 200, {
    sampleFactor: 0.15
  });

  for (let p of textPoints) {
    points.push(new TextPoint(p.x, p.y)); 
  }
}

function draw() {
  background(255);
  
  for (let p of points) {
    p.update();
    p.display();
  }
}
