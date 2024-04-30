/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 20000;
let constLastSwapTime = 0;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in radians
  angleMode(RADIANS);

  // load background
  bookImg = loadImage('jesus-the-good-shepherd.png');
}

function changeRandomSeed(mouseClicked) {
  if (mouseClicked){
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
    return;
  }
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();

  // so shepherd doesn't go back to start when the mouse is clicked
  constLastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [237, 174, 47]

function mouseClicked() {
  changeRandomSeed(true);
}

function draw () {
  if(millis() > constLastSwapTime + millisPerSwap) {
    changeRandomSeed(false);
  }
  
  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);
  
  // clear screen
  background(bg_color1);

  // draw background
  strokeWeight(6);
  stroke(10, 10, 10, 50);
  drawBackground();

  let shepherd_gliding = map(millis(), constLastSwapTime, constLastSwapTime+millisPerSwap, -500, 2000);
  
  // draw flock of sheep
  drawAllSheep(shepherd_gliding);

  // draw shepherd
  image(bookImg, shepherd_gliding, 200, bookImg.width/5, bookImg.height/5);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

/**
 * From ChatGBT, altered to my code.
 * @param {*} minY 
 * @param {*} minX 
 * @param {*} maxX 
 * @param {*} maxY 
 * @param {*} density 
 * @returns coordinates
 */
function getRandomCoordinates(minY, minX, maxX, maxY, density) {
  const coordinates = [];

  for (let i = 0; i < density; i++) {
      const x = random(minX, maxX);
      const y = random(minY, maxY);
      coordinates.push({ x, y });
  }

  return coordinates;
}

/**
 * From in class.
 * @param {*} min min  number
 * @param {*} max max number
 * @param {*} n number of dice rolled (how average)
 * @returns averaged random
 */
function getAveragedRandom(min, max, n) {
  let sum = 0;
  for(let i=0; i<n; i++) {
    sum = sum + random(min, max);
  }

  return sum / n;
}

/**
 * Makes sheep appear around the hills. Randomly, but not too bunched up.
 * @param {*} minY 
 * @param {*} minX 
 * @param {*} maxX 
 * @param {*} maxY 
 * @returns 
 */
function getOrganisedCoordinates(minY, minX, maxX, maxY) {
  const coordinates = [];

  for (let i = minY; i < maxY; i++) {
    for (let j = minX; j < maxX; j++) {
      const x = random(j-1, j);
      const y = random(i-1, i);
      coordinates.push({ x, y });
    }
  }

  return coordinates;
}

function drawBackground(){
  fill(237, 142, 47)
  ellipse(500, 120, 200);
  fill(22, 46, 17)
  ellipse(500, canvasHeight-100, 800, 600);
  fill(37, 69, 30)
  ellipse(100, canvasHeight-100, 800, 500);
  ellipse(canvasWidth, canvasHeight-100, 1000, 600);
  fill(50, 99, 40)
  ellipse(100, canvasHeight, 900, 400);
  ellipse(canvasWidth-100, canvasHeight, 700, 400);
}

/**
 * Draws the flock of sheep.
 * @param {*} shepherd_gliding x-coordinate for following sheep from shepherd
 */
function drawAllSheep(shepherd_gliding){
  let sheepPlacements = getOrganisedCoordinates(1.2, 0.2, 9, 2.2);
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<sheepPlacements.length; i++) {
    // how dense the sheeps wool will be
    let wool_density = getAveragedRandom(20, 30, 2);
    if (wool_density < 21.5){ wool_density = 0; } // bald!!
    let face_size = random(10, 15);
    // make a list of random coordinates for head fluff based on face size
    let fluffyList;
    if (face_size >= 13){
      // big and wide
      fluffyList = getRandomCoordinates(-face_size+2, -7, 7, -4, wool_density);
    } else if (face_size <= 11){
      // tall and skinny
      fluffyList = getRandomCoordinates(-15, -3, 3, -4, wool_density);
    } else {
      fluffyList = getRandomCoordinates(-face_size+2, -5, 5, -4, wool_density);
    }
    let ear_tilt = random(0.3, 1.1);
    let wool_colour = int(getAveragedRandom(1, 4.3, 2));
    let earrings = int(getAveragedRandom(1, 4, 3));
    let eyeSize = random(1, 3.5);
    let eye_direction_x = random(-0.5, 0.5);
    let eye_direction_y = random(0, 2);
    let following_the_shepherd = int(random(0, 3));
    
    let y = h + h*sheepPlacements[i].y*1.5;
    let x = w + w*sheepPlacements[i].x/1.5;
    push();
    mysheep = new Sheep(fluffyList, eyeSize, face_size, ear_tilt, wool_colour, eye_direction_x, eye_direction_y, earrings);
    
    let sheep_gliding_behind_shepherd = shepherd_gliding - sheepPlacements[i].x*w/2;
    // made the sheeps size according to their emotion and how far away they are (the y coord)
    let joyful_w = w/25 * sheepPlacements[i].y;
    let joyful_h = h/25 * sheepPlacements[i].y;
    let sad_w = w/28 * sheepPlacements[i].y;
    let sad_h = h/28 * sheepPlacements[i].y;
    
    if (x < sheep_gliding_behind_shepherd){
      if (following_the_shepherd == 1){
        translate(sheep_gliding_behind_shepherd, y);
        scale(joyful_w, joyful_h);
        mysheep.drawSheepBody(true);
        mysheep.drawSheepFace('full of joy');
      } else {
        translate(x, y);
        scale(sad_w, sad_h);
        mysheep.drawSheepBody(false);
        mysheep.drawSheepFace('tired');
      }
      
    } else if (x < shepherd_gliding + 500 && x > sheep_gliding_behind_shepherd){
      translate(x, y);
      scale(joyful_w, joyful_h);
      mysheep.drawSheepBody(false);
      mysheep.drawSheepFace('full of joy');
    } else {
      translate(x, y);
      scale(sad_w, sad_h);
      mysheep.drawSheepBody(false);
      mysheep.drawSheepFace('depressed');
    }
    
    pop();
  }
}