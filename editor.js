/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [71, 222, 219];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7;
let faceSelector;
let faceGuideCheckbox;
let fluffyList
function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // make random coordinates for head fluff
  fluffyList = getRandomCoordinates(20);
  
  // create sliders
  slider1 = createSlider(0, 100, 70);
  slider2 = createSlider(0, 100, 25);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');
  bodyCheckbox = createCheckbox('', false);
  bodyCheckbox.parent('checkbox2Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}

function draw () {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();

  let show_face_guide = faceGuideCheckbox.checked();
  let show_body_guide = bodyCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  push();

  // create new sheep
  let ear_tilt = map(s1, 0, 100, 0.3, 1.1);
  let sheep_face_size = map(s2, 0, 100, 10, 15);
  let wool_colour = int(map(s3, 0, 100, 1, 4));
  let earrings = int(map(s4, 0, 100, 1, 4));
  let eyeSize = map(s5, 0, 100, 1, 4);
  let eye_direction_x = map(s6, 0, 100, -0.5, 0.5);
  let eye_direction_y = map(s7, 0, 100, 0, 2);
  mysheep = new Sheep(fluffyList, eyeSize, sheep_face_size, ear_tilt, wool_colour, eye_direction_x, eye_direction_y, earrings);
  
  // can show body if u want
  if (mode == '1') {
    if (show_body_guide){mysheep.drawSheepBody();}
    mysheep.drawSheepFace('full of joy');
  }
  if (mode == '2') {
    if (show_body_guide){mysheep.drawSheepBody();}
    mysheep.drawSheepFace('tired');
  }
  if (mode == '3') {
    if (show_body_guide){mysheep.drawSheepBody();}
    mysheep.drawSheepFace('depressed');
  }

  pop();

  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

  pop();
}

/**
 * From ChatGBT, altered to my code.
 * @param {*} numCoordinates max coords you want
 * @returns coordinates
 */
function getRandomCoordinates(numCoordinates) {
  const coordinates = [];
  const minY = -10;
  const maxY = -4;
  const minX = -5;
  const maxX = 5;

  for (let i = 0; i < numCoordinates; i++) {
      const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
      const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
      coordinates.push({ x, y });
  }

  return coordinates;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
