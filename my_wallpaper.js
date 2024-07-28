//your parameter variables go here!
//let rect_width  = 20;
//let rect_height = 20;

let eyeSize = 7

let rectX = 0
let rectY = 0


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

  angleMode(DEGREES);

}

function wallpaper_background() {
  background(57, 60, 64); // dark grey
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  
  strokeWeight(0.2);

  fill(196, 159, 207); //light purple 
  ellipse(100,80,100,13);
  triangle(80,80,100,30,120,80)

  fill(133, 109, 140); //darker purple
  ellipse(100,79,98,4)

  strokeWeight(0.2);
  
  fill(123, 201, 144); //green
  rect(85,105,30,50);
  ellipse(80,80,14,14);
  ellipse(120,80,14,14);

  ellipse(100,95,50,30);

  rect(75,155,10,30)
  rect(115,155,10,30)
  
  fill(0); //black
  ellipse(80,77,eyeSize,eyeSize);
  ellipse(120,77,eyeSize,eyeSize);


// checkered border
  fill(0); //black
  rect(rectX,rectY,20,20);
  rect(rectX,rectY+40,20,20);
  rect(rectX,rectY+80,20,20);
  rect(rectX,rectY+120,20,20);
  rect(rectX,rectY+160,20,20);
  rect(rectX,rectY+200,20,20);

  fill(123, 201, 144); //green
  rect(rectX,rectY+20,20,20);
  rect(rectX,rectY+60,20,20);
  rect(rectX,rectY+100,20,20);
  rect(rectX,rectY+140,20,20);
  rect(rectX,rectY+180,20,20);

  fill(123, 201, 144); //green
  rect(rectX+20,rectY,20,20);
  rect(rectX+60,rectY,20,20);
  rect(rectX+100,rectY,20,20);
  rect(rectX+140,rectY,20,20);
  rect(rectX+180,rectY,20,20);

  fill(0); //black
  rect(rectX+40,rectY,20,20);
  rect(rectX+80,rectY,20,20);
  rect(rectX+120,rectY,20,20);
  rect(rectX+160,rectY,20,20);

  fill(123, 201, 144); //green
  rect(rectX+180,rectY+40,20,20);
  rect(rectX+180,rectY+80,20,20);
  rect(rectX+180,rectY+120,20,20);
  rect(rectX+180,rectY+160,20,20);

  fill(0); //black
  rect(rectX+180,rectY+20,20,20);
  rect(rectX+180,rectY+60,20,20);
  rect(rectX+180,rectY+100,20,20);
  rect(rectX+180,rectY+140,20,20);
  rect(rectX+180,rectY+180,20,20);

  fill(123, 201, 144); //green
  //rect(rectX+40,rectY+200);

  fill(0); //black
  //rect(rectX+20,rectY+200);  
  
}
