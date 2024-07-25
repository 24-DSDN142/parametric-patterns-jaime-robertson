//your parameter variables go here!
//let rect_width  = 20;
//let rect_height = 20;

let eyeSize = 9

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;

  angleMode(DEGREES);

}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  
  strokeWeight(0.2);

  fill(196, 159, 207); //light purple 
  ellipse(100,66,100,17);
  triangle(80,80,100,0,120,80)

  fill(133, 109, 140); //darker purple
  ellipse(100,64,98,6)

  strokeWeight(0.2);
  
  fill(123, 201, 144); //green
  rect(75,95,50,50);
  ellipse(80,68,20,20);
  ellipse(120,68,20,20);

  ellipse(100,85,60,40);

  rect(75,145,10,30)
  rect(115,145,10,30)
  
  fill(0); //black
  ellipse(78,65,eyeSize,eyeSize);
  ellipse(122,65,eyeSize,eyeSize);

 
  
}
