// angle of each circle relative to last
const CHG_ANGLE = 10;

// length of the spiral chain
chainLen = 0;
const MAX_CHAIN_LEN = 50;

// percent to decrease each circle by
const RAD_DEC_RATE = 0.92;

// deternimes number of sub-legs to generate
const MAX_REC_DEPTH = 2;

// radius of biggest (center) circles
initRad = window.innerWidth * 0.04;

// center of the spiral
const rootX = window.innerWidth * 0.5;
const rootY = window.innerHeight * 0.5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // no border on circles
  strokeWeight(0);

  // generate all 4 legs
  for (let i = 0; i < 4; i++) {
    spiral(rootX, rootY, initRad, 90 * i, 0, chainLen, 0);
  }

  // animate (increasing chain length)
  if (chainLen < MAX_CHAIN_LEN) {
    chainLen++;
  }
}

// generate a spiral of circles
// first circle at (x, y) with given radius
// consecutive circles `angle' farther counterclockwise
function spiral(x, y, radius, angle, chainStep, chainMax, recLvl) {
  if (chainStep >= chainMax || recLvl >= MAX_REC_DEPTH) {
    return;
  }

  // smaller radius of next circle
  let newRad = radius * RAD_DEC_RATE;

  // new x and y coords in direction of angle, touching prev. circle
  let newX = x + cos(angle) * (newRad + radius);
  let newY = y - sin(angle) * (newRad + radius);

  // generate branch leg off this circle
  if (recLvl <= MAX_REC_DEPTH) {
    spiral(x, y, radius / 2, angle - 90, chainStep, chainMax, recLvl + 1);
  }

  // next circle in main leg
  spiral(newX, newY, newRad, angle + CHG_ANGLE, chainStep + 1, chainMax, recLvl);

  fill(lerpColor(color(255, 255, 255), color(0, 0, 255), 1.0 * chainStep / chainMax))

  circle(x, y, radius * 2);
}