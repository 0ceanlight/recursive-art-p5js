// max len before reversing animation
let animationLength = 20;
initLen = 0.1;

// higher = more complexity
let MAX_REC_DEPTH = 16;

// center of the spiral
let rootX = window.innerWidth / 2;
let rootY = window.innerHeight / 2;

// keep track of whether the shape is expanding or not
let expand = true;

function setup() {
  // initLen = floor(window.innerWidth * 0.03);

  createCanvas(window.innerWidth, window.innerWidth);

  // toggle for no animation
  // noLoop();
}

function draw() {
  // 
  background(30);
  // make fill invisible (looks pretty cool either way though)
  fill(0, 0, 0, 0);
  stroke(200, 200, 255);

  angleMode(DEGREES);
  // center the spiral
  translate(rootX, rootY);
  
  // start the sequence: 0 1 1 2 3 5 8...
  fib(0, 1, initLen, 15);

  if ((initLen > animationLength || expand == false) && initLen > -animationLength) {
    expand = false;
    initLen -= 0.1;
  } else {
    expand = true;
    initLen += 0.1;
  }
}

function fib(n1, n2, len, recDepth) {
  if (recDepth == 0) {
    return;
  }

  // strokeWeight(10);
  // point(0, 0);
  strokeWeight(2);
  // square(0, 0, len * n2);

  let size = n2 * len * 2;
  // draw arc with one end at this origin, and next at next origin
  arc(size / 2, 0, size, size, 90, 180);

  // translate next origin to bottom right corner of square we just made
  translate(n2 * len, n2 * len);
  rotate(-90);

  // recurse with next fibonacci numberss
  fib(n2, n1 + n2, len, recDepth - 1);
}