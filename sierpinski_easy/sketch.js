// - -- --- NOTES --- -- -
// triangle coords: bottom left, top, then bottom right
// let, const = local, no keyword = global

const MAX_REC_DEPTH = 16;

function setup() {
  // blue-ish
  C1 = color("#2591F6")
  // green-ish
  C2 = color("#5ACF71")

  height_width = min(windowWidth, windowHeight)
  createCanvas(height_width, height_width)
}

function draw() {
  background(0)

  noStroke()
  
  // distance from edge
  d = 20
  recursion_depth = floor(map(mouseX, 0, height_width, 1, 10))
  rec_triangle(recursion_depth, d, height_width - d, height_width / 2, d, height_width - d, height_width - d)
}


function rec_triangle(rec_depth, x1, y1, x2, y2, x3, y3) {
  if (rec_depth <= 1) {
    fill(lerpColor(C1, C2, x1 / height_width))

    triangle(x1, y1, x2, y2, x3, y3)
    return
  }

  let x12 = (x1 + x2) / 2
  let y12 = (y1 + y2) / 2

  let x13 = (x1 + x3) / 2
  let y13 = (y1 + y3) / 2

  let x23 = (x3 + x2) / 2
  let y23 = (y3 + y2) / 2

  // create three smaller triangles
  // bottom left
  rec_triangle(rec_depth - 1, x1, y1, x12, y12, x13, y13)

  // top
  rec_triangle(rec_depth - 1, x12, y12, x2, y2, x23, y23)

  // bottom right
  rec_triangle(rec_depth - 1, x13, y13, x23, y23, x3, y3)
}
