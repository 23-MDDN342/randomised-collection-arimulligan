/**
 * This class has all the private functions to draw a sheep. Uses emotion to depict which type of face is to be drawn.
 * You can draw the sheeps' body and face with the public functions provided.
 * When you create a new sheep, you need to provide all the random parameters inside the constructor.
 */
class Sheep {

  emotion;

  constructor(fluffiList, eyeSize, faceSize, ear_tilt, wool_colour, pupilDirectionX, pupilDirectionY, earrings){
    this.fluffiList = fluffiList;
    this.eyeSize = eyeSize;
    this.faceSize = faceSize;
    this.ear_tilt = ear_tilt;
    this.wool_colour = wool_colour;
    this.pupilDirectionX = pupilDirectionX;
    this.pupilDirectionY = pupilDirectionY;
    this.earrings = earrings;
  }

  /**
   * Draws the sheeps face according to the parameters inside the constructor and the emotion. 
   * @param {*} emotion can be 'full of joy', 'tired', or 'depressed'
   */
  drawSheepFace(emotion){
    this.emotion = emotion;
    let pink = color(227, 132, 163, 200);
    let mainSheepColour;
    let middleWoolColour;
    let outlineOfSheep;
    let shadowColour;
    let shineyWoolColour;
  
    if (this.wool_colour == 1){
      mainSheepColour = color('#BF8665'); // brown
      middleWoolColour = color('#A6754B'); // greyish brown
      outlineOfSheep = color('#593E25');
      shadowColour = color('#8a623e');
      shineyWoolColour = color('#D9A679');
    } else if (this.wool_colour == 2){
      mainSheepColour = color(250, 249, 230); // cream
      middleWoolColour = color(235, 240, 219); // middle cream
      outlineOfSheep = color(54, 49, 92); // navy blue
      shadowColour = color(224, 224, 206); // shadow cream
      shineyWoolColour = color('white');
    } else if (this.wool_colour == 3){
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
  
    // draw the sheep using private methods
    this.#drawEarsAndFaceShape(mainSheepColour, shadowColour);
    this.#drawWool(shadowColour, middleWoolColour, mainSheepColour, shineyWoolColour);
    this.#drawPupils(outlineOfSheep, mainSheepColour);
    
    // move cheeks, nose and mouth down according to faceSize
    push();
    translate(0, this.faceSize/10)
    this.#drawCheeksAndNose(pink);
    
    // emotion
    push();
    noFill();
    stroke(outlineOfSheep);
    strokeWeight(0.3)
    if (emotion == 'full of joy'){
      scale(1.5, 1)
      arc(-0.5, 3, 1, 1, 0, PI, OPEN);
      arc(0.5, 3, 1, 1, 0, PI, OPEN);
      fill('pink')
      strokeWeight(0.2)
      arc(0, 3.6, 1, 1, 0, PI, OPEN);
      pop();
    } else if (emotion == 'depressed'){
      scale(1.5, -1);
      // sad mouth
      arc(0, -4, 1, 2, 0, PI, OPEN);
      arc(0, -4, 1, 1.5, 0, PI, OPEN);
      pop();
    } else if (emotion == 'tired'){
      line(-1, 3.3, 1, 3.3);
      pop();
    }
    pop();
  }

  drawSheepBody(sideways){
    let hoovesColour;
    let legColor;
    let bodyColour;
    if (this.wool_colour == 1){
      bodyColour = color('#BF8665'); // brown
      hoovesColour = color('#A6754B'); // greyish brown
      legColor = color('#8a623e');
    } else if (this.wool_colour == 2){
      bodyColour = color(250, 249, 230); // cream
      hoovesColour = color(235, 240, 219); // middle cream
      legColor = color(224, 224, 206); // shadow cream
    } else if (this.wool_colour == 3){
      bodyColour = color('#A6A6A6'); // grey
      hoovesColour = color('#8C8B88'); // greyish
      legColor = color('#8a8986');
    } else {
      bodyColour = color('#4a4848'); // the black sheep
      hoovesColour = color('#3d3c3c');
      legColor = color('#2e2d2d');
    }

    if (sideways){
      strokeWeight(0.5);
      fill(legColor);
      stroke(hoovesColour);
      rect(-9, 16, 2, 3); // behind legs
      rect(-12, 15, 2, 4);
      circle(-15, 7, 4); // tail
      fill(hoovesColour);
      arc(-8, 19.5, 2, 1, PI, 0, OPEN); // behind hooves
      arc(-11, 19.5, 2, 1, PI, 0, OPEN);
      fill(bodyColour);
      ellipse(-5, 10, 19, 15); // body
      fill(legColor);
      rect(-4, 14, 2, 6); // legs
      rect(0, 14, 2, 6);
      fill(bodyColour);
      noStroke();
      arc(-3, 13, 3, 3, 0, PI, OPEN); // fluff on legs
      arc(1, 13, 3, 3, 0, PI, OPEN);
      fill(hoovesColour);
      stroke(legColor)
      arc(-3, 20, 3, 2, PI, 0, OPEN); // hooves
      arc(1, 20, 3, 2, PI, 0, OPEN);
    } else {
      strokeWeight(0.5);
      fill(legColor);
      stroke(hoovesColour);
      rect(-3, 16, 2, 3); // behind legs
      rect(1, 16, 2, 3);
      fill(hoovesColour);
      arc(-1.5, 19.3, 2, 1, PI, 0, OPEN); // behind hooves
      arc(1.5, 19.3, 2, 1, PI, 0, OPEN);
      fill(bodyColour);
      ellipse(0, 10, 14, 15); // body
      fill(legColor);
      rect(-4, 14, 2, 6); // legs
      rect(2, 14, 2, 6);
      fill(bodyColour);
      noStroke();
      arc(-3, 13, 3, 3, 0, PI, OPEN); // fluff on legs
      arc(3, 13, 3, 3, 0, PI, OPEN);
      fill(hoovesColour);
      stroke(legColor)
      arc(-3, 20, 3, 2, PI, 0, OPEN); // hooves
      arc(3, 20, 3, 2, PI, 0, OPEN);
    }
  }

  #drawEarsAndFaceShape(mainColour, shadowColor){
    // ears
    stroke(shadowColor);
    strokeWeight(0.3);
    this.#drawEars(3, -4, mainColour);
    push();
    scale(-1, 1)
    this.#drawEars(3, -4, mainColour);
    pop();

    // shape of face
    stroke(shadowColor);
    fill(shadowColor)
    // changed faceSize to only affect the length of face because sheeps' faces usually go longer, not wider.
    ellipse(0, 0, 11, this.faceSize*1.05);
  
    noStroke();
    fill(mainColour);
    ellipse(0, 0, 10, this.faceSize*1.05-1.5);
  }

  /**
   * A private helper method to draw the sheeps' eyes
   * @param {*} outlineOfSheep color of stroke
   */
  #drawPupils(outlineOfSheep, mainColour){
    fill(outlineOfSheep);
    stroke(outlineOfSheep);
    let distanceBetweenEyes = 5;
    let pupilX = - distanceBetweenEyes/2 + this.pupilDirectionX * 0.5;
    let pupilY = - this.faceSize*0.1 + this.pupilDirectionY * 0.5;
    let pupilX2 = distanceBetweenEyes/2 + this.pupilDirectionX * 0.5;
    let eye_size = this.eyeSize*0.5;

    if (this.emotion == 'tired'){
      ellipse(pupilX, pupilY, eye_size, eye_size);
      ellipse(pupilX2, pupilY, eye_size, eye_size);
      noFill();
      strokeWeight(0.2) // tired wrinkles
      arc(pupilX-0.3, pupilY+0.5, eye_size+0.5, eye_size+0.5, 0, PI, OPEN);
      arc(pupilX2+0.3, pupilY+0.5, eye_size+0.5, eye_size+0.5, 0, PI, OPEN);
      arc(pupilX-0.3, pupilY+0.3, eye_size, eye_size, 0, PI, OPEN);
      arc(pupilX2+0.3, pupilY+0.3, eye_size, eye_size, 0, PI, OPEN);
    } else if (this.emotion == 'full of joy'){
      arc(pupilX, pupilY+1, eye_size, eye_size, PI, 0, OPEN);
      arc(pupilX2, pupilY+1, eye_size, eye_size, PI, 0, OPEN);
    } else if (this.emotion == 'depressed') {
      fill(mainColour);
      ellipse(pupilX2, pupilY+0.6, eye_size, eye_size);
      ellipse(pupilX, pupilY+0.6, eye_size, eye_size);
      arc(pupilX-0.6, pupilY-0.3, eye_size+2, eye_size+1, 0, PI-PI/2, OPEN);
      arc(pupilX2+0.6, pupilY-0.3, eye_size+2, eye_size+1, PI/2, PI, OPEN);
    }
  }

  #drawWool(shadowColour, middleWoolColour, mainSheepColour, shineyWoolColour){
    for (let i = 0; i < this.fluffiList.length; i++){
      let drawShine = false;
      if (this.fluffiList[i].y > -5.5){
        fill(shadowColour)
      } else if (this.fluffiList[i].y > -8) {
        fill(middleWoolColour)
      } else {
        drawShine = true;
        fill(mainSheepColour);
      }
      noStroke();
      circle(this.fluffiList[i].x, this.fluffiList[i].y, 5);
  
      if (drawShine){
        fill(shineyWoolColour)
        this.#drawRoundedTriangle(this.fluffiList[i].x-1, this.fluffiList[i].y-1, 0.7, 0.7)
      }
    }
  }

  #drawEars(x, y, mainSheepColour){
    push();
    rotate(this.ear_tilt);
    translate(this.ear_tilt, -this.ear_tilt);
    fill(mainSheepColour);
    arc(x, y, 5, 3, 0, PI, OPEN);
    arc(x, y+0.1, 5, 2, PI, 0, OPEN);
    arc(x, y+0.5, 3.5, 1, PI, 0, OPEN);
    fill(199, 139, 159, 200); //transparent pink
    noStroke();
    ellipse(x, y+0.55, 3.5, 1);
    
    if (this.earrings == 1){
      // two blue earrings on each ear
      fill('#004B87'); // dark blue
      ellipse(x+2, y+1, 0.7, 0.7);
      ellipse(x+2, y+2, 2.5, 1);
      fill('#2BA4DD') // light blue
      ellipse(x+1.2, y+2, 0.5, 0.5);
      ellipse(x+2, y+2, 0.5, 0.5);
      ellipse(x+2.7, y+2, 0.5, 0.5);
    } else if (this.earrings == 2){
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

  #drawCheeksAndNose(pink){
    // rosy cheeks
    fill(pink)
    noStroke();
    circle(3, 1.5, 2)
    circle(-3, 1.5, 2)
    
    // mid mouth
    ellipse(0, 2.7, 0.4, 1);
    //nostrils
    push();
    rotate(PI/3)
    translate(2.4, -2)
    ellipse(0, 2.7, 0.4, 1);
    pop();
    push();
    rotate(-PI/3)
    translate(-2.4, -2)
    ellipse(0, 2.7, 0.4, 1);
    pop();
  
    // nose
    push();
    scale(1.3, -0.6)
    fill('pink')
    noStroke();
    this.#drawRoundedTriangle(0, -3, 1.1, 0.7)
    pop();
  }

  /**
   * Found from https://editor.p5js.org/golan/sketches/P-NxlPAOa
   * @param {*} cx x coord
   * @param {*} cy y coord
   * @param {*} radius size
   * @param {*} roundedNess roundness of triangle edges
   */
  #drawRoundedTriangle(cx, cy, radius, roundedNess) {
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
}
