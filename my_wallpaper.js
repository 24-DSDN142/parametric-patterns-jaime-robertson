//your parameter variables go here!
//let rect_width  = 20;
//let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  
  noStroke();

  fill(196, 159, 207); //light purple 
  ellipse(50,32,50,10);
  triangle(40,40,50,0,60,40)

  fill(133, 109, 140); //darker purple
  ellipse(50,32,50,5)

  fill(123, 201, 144); //green
  ellipse(50,45,30,25);
  rect(37,50,27,25);

  ellipse(40,35,10,10)
  ellipse(60,35,10,10)


  
}
