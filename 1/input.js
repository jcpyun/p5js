var rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15)
  noStroke();
////// TEXT BOX
  input = createInput();
  input.position(600, 600);

  button = createButton('submit');
  button.position(150, 605);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
/////////////////////////

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(80, 80);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(80, 100);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(80, 120);
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);
}