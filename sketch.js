let streams = [];
let symbols = "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(20);

  for (let x = 0; x < width; x += 20) {
    streams.push(new Stream(x));
  }
}

function draw() {
  background(0, 150);
  for (let s of streams) {
    s.update();
    s.render();
  }
}

class Stream {
  constructor(x) {
    this.x = x;
    this.y = random(-1000, 0);
    this.speed = random(4, 10);
    this.length = int(random(5, 20));
  }

  update() {
    this.y += this.speed;
    if (this.y > height + 200) {
      this.y = random(-500, 0);
    }
  }

  render() {
    for (let i = 0; i < this.length; i++) {
      let char = random(symbols);
      fill(0, 255, 70, 150 - i * 7);
      text(char, this.x, this.y - i * 20);
    }
  }
}
