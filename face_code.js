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
function mostJoyfulSheep(fluffiList, eyeSize, faceSize, eyeLashLength, woolColour, pupilDirectionX, pupilDirectionY, earAngles){
  let centerX = 0;
  let centerY = 0;
  let distactBetweenEyes = 5;
  let cream = color(250, 249, 230);
  let navyblue = color(54, 49, 92);
  stroke(navyblue);
  strokeWeight(0.3);
  
  // draw wool
  for (let i = 0; i< fluffiList.length; i++){
    circle(fluffiList[i].x, fluffiList[i].y, 2)
  }

  // ears
  drawEars(3, -4, PI/4);
  push();
  scale(-1, 1)
  drawEars(3, -4, PI/4);
  pop();

  // Face
  fill(cream);
  ellipse(centerX, centerY, faceSize, faceSize*1.05);

  // Pupils
  fill(navyblue);
  let pupilX = centerX - distactBetweenEyes/2 + pupilDirectionX * 0.5;
  let pupilY = centerY - faceSize*0.1 + pupilDirectionY * 0.5;
  line(pupilX, pupilY, pupilX-1, pupilY) // eyelashes
  ellipse(pupilX, pupilY, eyeSize*0.5, eyeSize*0.5);
  let pupilX2 = centerX + distactBetweenEyes/2 + pupilDirectionX * 0.5;
  let pupilY2 = centerY - faceSize*0.1 + pupilDirectionY * 0.5;
  line(pupilX2, pupilY2, pupilX2+1, pupilY2)
  ellipse(pupilX2, pupilY2, eyeSize*0.5, eyeSize*0.5);

  // rosy cheeks
  fill('pink')
  noStroke();
  circle(3, 1.5, 2)
  circle(-3, 1.5, 2)

  // nose arc
  push();
  noFill();
  stroke(0, 0, 0, 50)
  strokeWeight(0.1)
  scale(1.5, 1)
  arc(0, 1.7, 1.5, 1.5, PI, 0, OPEN);
  pop();
  
  // mid mouth
  ellipse(centerX, centerY+2.5, 0.2, 0.6);

  // nose
  push();
  scale(1.3, -0.7)
  fill('pink')
  noStroke();
  drawRoundedTriangle(0, -3, 0.7, 0.7)
  pop();
  stroke(0)

  // smile 
  push();
  noFill();
  stroke(navyblue);
  strokeWeight(0.3)
  scale(1.5, 1)
  arc(-0.5, 3, 1, 1, 0, PI, OPEN);
  arc(0.5, 3, 1, 1, 0, PI, OPEN);
  pop();


}

function drawEars(x, y, rotation){
  push();
  rotate(rotation);
  translate(rotation, -rotation)
  fill(250, 249, 230);
  arc(x, y, 5, 3, 0, PI, OPEN);
  arc(x, y+0.1, 5, 2, PI, 0, OPEN);
  arc(x, y+0.5, 3.5, 1, PI, 0, OPEN);
  fill(227, 132, 163, 200) //transparent pink 
  noStroke();
  ellipse(x, y+0.55, 3.5, 1)
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