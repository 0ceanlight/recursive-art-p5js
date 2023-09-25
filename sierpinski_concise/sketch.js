function setup() {
  winSize = min(window.innerWidth, window.innerHeight);
  len = floor(winSize * 0.75);

  createCanvas(winSize, winSize);
  noStroke();
  // triangle color
  fill(255);
}

function draw() {
  // background: black
  background(0);
  // start with big triangle, recursion depth determined by mouse pos
  divide(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, floor(map(mouseX, 0, width, 1, 10)));
}

// input: 
// (x, y) = bottom left corner of triangle
// l = length/size of triangle
// lvl = level of recursive depth
function divide(x, y, l, lvl) {
  // base case: just draw triangle
  if (lvl <= 1) {
    tri(x, y, l);
  } else {
    // Make 3 smaller triangles within current big one
    // bottom left
    divide(x, y, l / 2, lvl - 1);
    // bottom right
    divide(x + l / 2, y, l / 2, lvl - 1);
    // top
    divide(x + l / 4, y - l * sqrt(3) / 4, l / 2, lvl - 1);
  }
}

// create triangle with bottom left corner on (x, y) and length determines size
function tri(x, y, l) {
  triangle(x, y, x + l / 2, y - l * sqrt(3) / 2, x + l, y);
}