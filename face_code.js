/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 * 
 * JUST BE A PUPPET
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}

// the sheep i wanna draw https://www.google.com/search?sca_esv=4a83ddc72bf1c867&q=sheep+nose+cartoon&tbm=isch&source=lnms&prmd=ivsnmbtz&sa=X&ved=2ahUKEwjvta667sWFAxXn2TQHHSnhCdoQ0pQJegQIDRAB&biw=1280&bih=1243&dpr=2#imgrc=G0XZ6ePwdyRXeM&imgdii=ExdgUrpYcAC4HM 
function mostJoyfulSheep(fluffiList, eyeSize, faceSize, ear_tilt, wool_colour, pupilDirectionX, pupilDirectionY, earrings){
  let centerX = 0;
  let centerY = 0;
  let distanceBetweenEyes = 5;

  let pink = color(227, 132, 163, 200);
  let mainSheepColour;
  let middleWoolColour;
  let outlineOfSheep;
  let shadowColour;
  let shineyWoolColour;

  if (wool_colour == 1){
    mainSheepColour = color('#BF8665'); // brown
    middleWoolColour = color('#A6754B'); // greyish brown
    outlineOfSheep = color('#593E25');
    shadowColour = color('#8a623e');
    shineyWoolColour = color('#D9A679');
  } else if (wool_colour == 2){
    mainSheepColour = color(250, 249, 230); // cream
    middleWoolColour = color(235, 240, 219); // middle cream
    outlineOfSheep = color(54, 49, 92); // navy blue
    shadowColour = color(224, 224, 206); // shadow cream
    shineyWoolColour = color('white');
  } else if (wool_colour == 3){
    mainSheepColour = color('#A6A6A6'); // grey
    middleWoolColour = color('#8C8B88'); // greyish
    outlineOfSheep = color(54, 49, 92);
    shadowColour = color('#8a8986');
    shineyWoolColour = color('#BFBFBF');
  } else {
    // the black sheep
    mainSheepColour = color('#4a4848');
    middleWoolColour = color('#3d3c3c');
    outlineOfSheep = color('black');
    shadowColour = color('#2e2d2d');
    shineyWoolColour = color('#636161');
  }
  
  // ears
  stroke(shadowColour);
  strokeWeight(0.3);
  drawEars(3, -4, ear_tilt, mainSheepColour, earrings);
  push();
  scale(-1, 1)
  drawEars(3, -4, ear_tilt, mainSheepColour, earrings);
  pop();

  // Face
  drawFace(centerX, centerY, mainSheepColour, shadowColour, faceSize)

  // draw wool
  for (let i = 0; i < fluffiList.length; i++){
    let drawShine = false;
    if (fluffiList[i].y > -5.5){
      fill(shadowColour)
    } else if (fluffiList[i].y > -8) {
      fill(middleWoolColour)
    } else {
      drawShine = true;
      fill(mainSheepColour);
    }
    noStroke();
    circle(fluffiList[i].x, fluffiList[i].y, 5);

    if (drawShine){
      fill(shineyWoolColour)
      drawRoundedTriangle(fluffiList[i].x-1, fluffiList[i].y-1, 0.7, 0.7)
    }
  }
  
  // Pupils
  fill(outlineOfSheep);
  stroke(outlineOfSheep);
  let eyeLashX = centerX - distanceBetweenEyes/2;
  let pupilX = centerX - distanceBetweenEyes/2 + pupilDirectionX * 0.5;
  let pupilY = centerY - faceSize*0.1 + pupilDirectionY * 0.5;
  line(eyeLashX, pupilY, eyeLashX-1, pupilY) // eyelashes
  ellipse(pupilX, pupilY, eyeSize*0.5, eyeSize*0.5);
  let eyeLashX2 = centerX + distanceBetweenEyes/2;
  let pupilX2 = centerX + distanceBetweenEyes/2 + pupilDirectionX * 0.5;
  let pupilY2 = centerY - faceSize*0.1 + pupilDirectionY * 0.5;
  line(eyeLashX2, pupilY2, eyeLashX2+1, pupilY2) // line for eyelashes
  ellipse(pupilX2, pupilY2, eyeSize*0.5, eyeSize*0.5);

  // move cheeks, nose and mouth down according to faceSize 
  push();
  translate(centerX, faceSize/10)
  drawCheeksAndNose(centerX, centerY, pink);

  // smile 
  push();
  noFill();
  stroke(outlineOfSheep);
  strokeWeight(0.3)
  scale(1.5, 1)
  arc(-0.5, 3, 1, 1, 0, PI, OPEN);
  arc(0.5, 3, 1, 1, 0, PI, OPEN);
  pop();

  pop();
}

function drawCheeksAndNose(centerX, centerY, pink){
  // rosy cheeks
  fill(pink)
  noStroke();
  circle(3, 1.5, 2)
  circle(-3, 1.5, 2)
  
  // mid mouth
  ellipse(centerX, centerY+2.7, 0.4, 1);
  //nostrils
  push();
  rotate(PI/3)
  translate(2.4, -2)
  ellipse(centerX, centerY+2.7, 0.4, 1);
  pop();
  push();
  rotate(-PI/3)
  translate(-2.4, -2)
  ellipse(centerX, centerY+2.7, 0.4, 1);
  pop();

  // nose
  push();
  scale(1.6, -0.7)
  fill('pink')
  noStroke();
  drawRoundedTriangle(0, -3, 0.7, 0.7)
  pop();
}

function drawFace(centerX, centerY, mainColour, shadowColor, faceSize){
  stroke(shadowColor);
  fill(shadowColor)
  // changed faceSize to only affect the length of face because sheeps' faces usually go longer, not wider.
  ellipse(centerX, centerY, 11, faceSize*1.05);

  noStroke();
  fill(mainColour);
  ellipse(centerX, centerY, 10, faceSize*1.05-1.5);
}

function drawEars(x, y, rotation, mainSheepColour, earrings){
  push();
  rotate(rotation);
  translate(rotation, -rotation);
  fill(mainSheepColour);
  arc(x, y, 5, 3, 0, PI, OPEN);
  arc(x, y+0.1, 5, 2, PI, 0, OPEN);
  arc(x, y+0.5, 3.5, 1, PI, 0, OPEN);
  fill(199, 139, 159, 200); //transparent pink
  noStroke();
  ellipse(x, y+0.55, 3.5, 1);

  
  if (earrings == 1){
    // two blue earrings on each ear
    fill('#004B87'); // dark blue
    ellipse(x+2, y+1, 0.7, 0.7);
    ellipse(x+2, y+2, 2.5, 1);
    fill('#2BA4DD') // light blue
    ellipse(x+1.2, y+2, 0.5, 0.5);
    ellipse(x+2, y+2, 0.5, 0.5);
    ellipse(x+2.7, y+2, 0.5, 0.5);
  } else if (earrings == 2){
    // no earrings
  } else {
    // orange and purple square earrings on top of one another
    fill('purple');
    rect(x+1.5, y+0.5, 1, 1);
    fill('orange')
    rect(x+2.2, y+1.2, 1, 1);
  }
  pop();

}

// https://editor.p5js.org/golan/sketches/P-NxlPAOa 
function drawRoundedTriangle(cx, cy, radius, roundedNess) {
  var trianglePoints = [];

  for (var i = 0; i < 3; i++) { // triangle vertices
    var x = cx + radius * cos(i * TWO_PI / 3.0 - HALF_PI);
    var y = cy + radius * sin(i * TWO_PI / 3.0 - HALF_PI);
    trianglePoints[i] = {
      x, y
    };
  }

  strokeJoin(ROUND);
  var rad = roundedNess * radius;

  beginShape();
  for (var i = 0; i < 3; i++) {
    var px = map(roundedNess, 0, 1, trianglePoints[i].x, cx);
    var py = map(roundedNess, 0, 1, trianglePoints[i].y, cy);

    var ang1 = (i + 1) * TWO_PI / 3.0 + HALF_PI;
    var ang2 = (i + 2) * TWO_PI / 3.0 + HALF_PI;
    var dang = (ang2 - ang1) / 60.0;
    for (var t = ang1; t <= ang2; t += dang) {
      var ax = px + rad * cos(t);
      var ay = py + rad * sin(t);
      vertex(ax, ay);
    }
  }
  endShape(CLOSE);
}


function otherJoyfulSheep(){

}

function peacefulSheep(){

}

function uneasySheep(){

}

function cryingSheep(){

}

function angrySheep(){

}

function depressedSheep(){

}