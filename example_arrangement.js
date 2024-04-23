/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;
let bookImg;
let sheepEmotion = 'full of joy';

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in radians
  angleMode(RADIANS);

  // load background
  bookImg = loadImage('openBookImg.png');
  
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [27, 42, 107]

function mouseClicked() {
  changeRandomSeed();
  changeSheepEmotions();
}

function changeSheepEmotions(){
  sheepEmotion = 'tired';
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  push();
  rotate(PI/7)
  translate(100, -400)
  image(bookImg, 0, 0, bookImg.width, bookImg.height);
  
  noStroke();

  translate(720, 180)
  // draw a 7x4 grid of faces
  let w = canvasWidth / 10.5;
  let h = canvasHeight / 6;
  for(let i=0; i<3; i++) {
    for(let j=0; j<1; j++) {
      // how dense the sheeps wool will be
      let wool_density = getAveragedRandom(20, 30, 2);
      if (wool_density < 21.5){ wool_density = 0; } // bald!!
      let face_size = random(10, 15);
      // make a list of random coordinates for head fluff based on face size
      let fluffyList;
      if (face_size >= 13){
        // big and wide
        fluffyList = getRandomCoordinates(-face_size+2, -7, 7, wool_density);
      } else if (face_size <= 11){
        // tall and skinny
        fluffyList = getRandomCoordinates(-15, -3, 3, wool_density);
      } else {
        fluffyList = getRandomCoordinates(-face_size+2, -5, 5, wool_density);
      }
      let ear_tilt = random(0.3, 1.1);
      let wool_colour = int(getAveragedRandom(1, 4.3, 2));
      let earrings = int(getAveragedRandom(1, 4, 3));
      let eyeSize = getAveragedRandom(1, 3.5, 2);
      let eye_direction_x = random(-0.5, 0.5);
      let eye_direction_y = random(0, 2);
      
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      push();
      translate(x, y);
      scale(w/25, h/25);
      mysheep = new Sheep(fluffyList, eyeSize, face_size, ear_tilt, wool_colour, eye_direction_x, eye_direction_y, earrings);
      mysheep.drawSheepFace(sheepEmotion);
      pop();
      
    }
  }

  pop();
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
function getRandomCoordinates(minY, minX, maxX, density) {
  const coordinates = [];
  const maxY = -4;

  for (let i = 0; i < density; i++) {
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