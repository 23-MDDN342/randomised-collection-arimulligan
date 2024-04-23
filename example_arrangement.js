/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(RADIANS);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [71, 222, 219]

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      // draw face using values mapped from 3 sliders
      let face_size = random(10, 15);
      let ear_tilt;
      if (face_size >= 13){
        ear_tilt = random(0.8, 1.1);
      } else {
        ear_tilt = random(0.3, 0.8);
      }
      let wool_colour = int(getAveragedRandom(1, 4, 2));
      let earrings = int(random(1, 4));
      let eyeSize = getAveragedRandom(1, 3.5, 2);
      let eye_direction_x = random(-0.5, 0.5);
      let eye_direction_y = random(0, 2);
      // make a list of random coordinates for head fluff
      let fluffyList = getRandomCoordinates(20);
      
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      push();
      translate(x, y);
      scale(w/25, h/25);
      mostJoyfulSheep(fluffyList, eyeSize, face_size, ear_tilt, wool_colour, eye_direction_x, eye_direction_y, earrings);
      pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

// from ChatGBT
function getRandomCoordinates(numCoordinates) {
  const coordinates = [];
  const minY = -10;
  const maxY = -4;
  const minX = -5;
  const maxX = 5;

  for (let i = 0; i < numCoordinates; i++) {
      const x = random(minX, maxX);
      const y = random(minY, maxY);
      coordinates.push({ x, y });
  }

  return coordinates;
}

// from in class
function getAveragedRandom(min, max, n) {
  let sum = 0;
  for(let i=0; i<n; i++) {
    sum = sum + random(min, max);
  }

  return sum / n;
}