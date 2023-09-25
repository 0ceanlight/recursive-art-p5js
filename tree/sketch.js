let initLen = 0;

let COLORS = []

let r_angle = 0.0;
const R_ANGLE = 0.5;

let l_angle = 0.0;
const L_ANGLE = 0.56;

let r_len_scale = 0.47;
const R_LEN_SCALE = 0.60;

let l_len_scale = 0.74;
const L_LEN_SCALE = 0.89;

// let MAX_REC_DEPTH = 16;
let MAX_REC_DEPTH = 14;

function setup() {
  let width_height = min(window.innerWidth, window.innerHeight)

  rootX = 0.65 * width_height;
  rootY = 0.75 * width_height;

  initLen = floor(width_height * 0.15);
  COLORS = [color(255, 0, 255), color(128, 0, 255), color(0, 0, 255), color(0, 128, 255), color(0, 255, 255), color(0, 255, 255, 60), color(0, 255, 255, 0)];

  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);

  // call recursive function
  recTree(rootX, rootY, PI * 3 / 2, initLen, 0, MAX_REC_DEPTH);

  // animation
  // r_len_scale += (r_len_scale < R_LEN_SCALE) ? 0.01 : 0.0;
  if (r_len_scale < R_LEN_SCALE) {
    r_len_scale += 0.01;
  }
  
  if (l_len_scale < L_LEN_SCALE) {
    l_len_scale += 0.01;
  }

  if (r_angle < R_ANGLE) {
    r_angle += 0.01;
  }

  if (l_angle < L_ANGLE) {
    l_angle += 0.01;
  }
}

// params:
// (int: x, int: y) = x y coords of vector origin
// float: angle = angle of vector
// length: length of vector
function recTree(x, y, angle, length, lvl, max) {
  // base case
  if (lvl >= max) {
    return;
  }

  let endX = floor(x + length * cos(angle));
  let endY = floor(y + length * sin(angle));

  // set color to gradient between colors
  stroke(lerpColors(COLORS, 1.0 * lvl / max));
  // stroke(lerpColor(COLORS[0], COLORS[1], 1.0 * lvl / max));
  // line width decreases with each step
  strokeWeight(max - lvl);
  line(x, y, endX, endY);

  // right branch
  recTree(endX, endY, angle + r_angle, length * r_len_scale, lvl + 1, max);
  // left branch
  recTree(endX, endY, angle - l_angle, length * l_len_scale, lvl + 1, max);
}