//your parameter variables go here!

let eyeSize = 7; // adjusts eye size
// connected to my if statment:
// 7 or greater makes happy face
// Under 7 makes sad face

let headWidth = 50; // adjusts head width

let rectX = -5; // X coord position for my checkered border
let rectY = 0; // Y coord position for my checkered border

let checkX = 30; // adjusts width of check
let checkY = 20; // adjusts length of check

let legLength = 22; // adjusts length of leg
let legHeight = 150; // adjusts y postion of leg

let bodyLength = 45; // adjusts length of body

let armLength = 42; // adjusts length of arm

let colourHat = ("#c49fcf"); // light purple
let colourHatStripe = ("#856d8c"); // dark purple
let colourBody = ("#7bc990"); // green
let colourEye = ("#000000"); // black
let colourMouth = ("#000000"); // black
let colourWandBase = ("#856d8c"); // dark purple
let colourWandStripe = ("#e3d949"); // yellow
let colourCheckX = ("#000000"); // black
let colourCheckY = ("#ddf0e0"); // off white

let backgroundColour = ("#2f2f2f"); // dark grey

let strokeHat = 0.4; // stroke weight for the hat
let strokeBody = 0.4; // stroke weight for the body and wand



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

angleMode(DEGREES);

function wallpaper_background() {
  background(backgroundColour); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  strokeWeight(strokeHat); // stroke weight for the hat

  // wizard hat variables
  fill(colourHat); 
  ellipse(100,80,100,13); // hat brim
  triangle(80,80,100,30,120,80); // point

  fill(colourHatStripe); 
  ellipse(100,79,98,4); // darker hat stripe

  // frog body 
  strokeWeight(strokeBody); // stroke weight for the body and wand
  
  fill(colourBody); 

  rect(77,107,20,armLength,90,90); // left arm
  rect(103,107,20,armLength,90,90); // right arm

  rect(85,105,30,bodyLength); // rect body

  ellipse(80,80,14,14); // left eye base
  ellipse(120,80,14,14); // right eye base

  ellipse(100,95,headWidth,30); //head

  rect(85,legHeight,10,legLength); // left leg
  rect(105,legHeight,10,legLength); // right leg
  
  fill(colourEye); 
  ellipse(80,79,eyeSize,eyeSize); // left eye
  ellipse(120,79,eyeSize,eyeSize); // right eye

  // if statement that changes the style of mouth depending on eye size
  if(eyeSize < 7){
  fill(colourMouth);
  arc(100, 97, 20, 10, 180, 0); // sad mouth
  
  }
  else{
  fill(colourMouth);
  arc(100, 94, 20, 10, 0, 180); // happy mouth
  }

  rotate(-45); // rotation to get wand on angle
  

  fill(colourWandBase); 
  rect(-20,188,25,3); // wand base
  fill(colourWandStripe);
  rect(-17,188,5,3); // wand stripe 1
  rect(-8,188,5,3); // wand stripe 2
  rect(-0,188,5,3); // wand stripe 3

  rotate(45); // rotating everything else back to normal

// checkered border
  fill(colourCheckX); 
  rect(rectX,rectY,checkX,checkY);
  rect(rectX,rectY+40,checkX,checkY);
  rect(rectX,rectY+80,checkX,checkY);
  rect(rectX,rectY+120,checkX,checkY);
  rect(rectX,rectY+160,checkX,checkY);

  fill(colourCheckY); 
  rect(rectX,rectY+20,checkX,checkY);
  rect(rectX,rectY+60,checkX,checkY);
  rect(rectX,rectY+100,checkX,checkY);
  rect(rectX,rectY+140,checkX,checkY);
  rect(rectX,rectY+180,checkX,checkY);

  fill(colourCheckY); 
  rect(rectX+20,rectY,checkX,checkY);
  rect(rectX+60,rectY,checkX,checkY);
  rect(rectX+100,rectY,checkX,checkY);
  rect(rectX+140,rectY,checkX,checkY);
  rect(rectX+180,rectY,checkX,checkY);

  fill(colourCheckX); 
  rect(rectX+40,rectY,checkX,checkY);
  rect(rectX+80,rectY,checkX,checkY);
  rect(rectX+120,rectY,checkX,checkY);
  rect(rectX+160,rectY,checkX,checkY);

  fill(colourCheckY); 
  rect(rectX+180,rectY+40,checkX,checkY);
  rect(rectX+180,rectY+80,checkX,checkY);
  rect(rectX+180,rectY+120,checkX,checkY);
  rect(rectX+180,rectY+160,checkX,checkY);

  fill(colourCheckX); 
  rect(rectX+180,rectY+20,checkX,checkY);
  rect(rectX+180,rectY+60,checkX,checkY);
  rect(rectX+180,rectY+100,checkX,checkY);
  rect(rectX+180,rectY+140,checkX,checkY);
  rect(rectX+180,rectY+180,checkX,checkY);

  fill(colourCheckX); 
  rect(rectX+20,rectY+180,checkX,checkY);
  rect(rectX+60,rectY+180,checkX,checkY);
  rect(rectX+100,rectY+180,checkX,checkY);
  rect(rectX+140,rectY+180,checkX,checkY);
  rect(rectX+180,rectY+180,checkX,checkY);

  fill(colourCheckY); 
  rect(rectX+40,rectY+180,checkX,checkY);
  rect(rectX+80,rectY+180,checkX,checkY);
  rect(rectX+120,rectY+180,checkX,checkY);
  rect(rectX+160,rectY+180,checkX,checkY);

  
}
