function setup() {
  createCanvas(700, 700)
  doug = new Dragon(100, 100, 25, 25, 5, 15);
  craig = new Sheep(400, 300, -20, -20);
  frameRate(5);
}

function draw() {
  background(0);

  doug.speak("Hey friend!");
  doug.display();
  
  craig.speak("You're not cool");
  craig.display();

  if (mouseIsPressed) {
    background(100, 30, 3);
    doug.update();
    doug.speak("Yum!");
    doug.display();

    craig.update();
    craig.speak("You can't catch me");
    craig.display();

  }

}

// OOP doesn't seem to work, unless I write the entire thing on sketch.js

function Dragon(x, y, a, b) {

  this.position = createVector(x, y)
  this.velocity = createVector(a, b);
  this.acceleration = createVector(mouseX/100, 0);

  this.update = function() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }

  this.speak = function(h) {

    fill(20, 20, 20);
    text(h, this.position.x + 120, this.position.y + 50);
  }


  this.display = function() {
    fill(127, 0, 30);
    rect(this.position.x, this.position.y, 100, 100);
    fill(100, 100, 30);
    ellipse(this.position.x, this.position.y, 20, 20);
    ellipse(this.position.x + 100, this.position.y, 20, 20);

  }

}


function Sheep(c, d, e, f) {

  this.position = createVector(c, d)
  this.velocity = createVector(e, f);
  this.acceleration = createVector(10, 0);

  this.update = function() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }
  
   this.speak = function(g) {

    fill(20, 20, 20);
    text(g, this.position.x + 220, this.position.y + 50);
  }



  this.display = function() {
    fill(200, 200, 0);
    rect(this.position.x, this.position.y, 200, 90);

    line(this.position.x - 25, this.position.y - 20, this.position - 15, this.position.y - 20); //left eyebrow
    line(this.position.x + 20, this.position.y - 20, this.position.x + 25, this.position.y - 20); //right eyebrow

    stroke(321, 87, 77);
    strokeWeight(5);
    fill(127, 0, 127);
    ellipse(this.position.x, this.position.y, 60, 70); //head
    fill(100, 100, 100);
    ellipse(this.position.x - 20, this.position.y, 2, 2); //left e
    fill(100, 100, 100);
    ellipse(this.position.x + 20, this.position.y, 2, 2); //right eye



    point(this.position.x + 35, this.position.y + 40);
    point(this.position.x + 35, this.position.y + 70);
    point(this.position.x + 75, this.position.y + 40);
    point(this.position.x + 75, this.position.y + 70);
    point(this.position.x + 115, this.position.y + 40);
    point(this.position.x + 115, this.position.y + 70);
    point(this.position.x + 155, this.position.y + 40);
    point(this.position.x + 155, this.position.y + 70);

    fill(100, 20, 30);
    quad(this.position.x + 200, this.position.y - 50,
      this.position.x + 210, this.position.y - 20,
      this.position.x + 200, this.position.y,
      this.position.x + 190, this.position.y - 20);
    line(this.position.x + 35, this.position.y + 90, this.position.x + 35, this.position.y + 140);
    line(this.position.x + 155, this.position.y + 90, this.position.x + 155, this.position.y + 140); //tail


  }
}