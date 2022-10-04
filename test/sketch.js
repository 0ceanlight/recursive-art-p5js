function setup() {
  createCanvas(500, 500);
}

function draw() {
  // set background to black
  background(0);

  // Cyan circle
  stroke(0);
  fill(0, 255, 255);
  circle(80, 70, 40);

  // Blue 3/4 circle
  fill(50, 100, 255);
  angleMode(DEGREES);
  arc(50, 100, 70, 70, 0, 270);

  // Orange square with red 4px border
  stroke(255, 0, 0); // border color
  strokeWeight(4); // border width
  fill(255, 150, 0);
  square(350, 100, 60);

  // White equilateral triangle
  // set border to black
  stroke(0);
  fill(255);
  // position of bottom left corner
  let x = 100;
  let y = 300;
  let len = 70; // side length
  triangle(x, y, x + len / 2, y - len * sin(60), x + len, y);
}
