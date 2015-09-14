var xpos1;
var xpos2;
var xpos3;
var xpos4;
var thin = 8;
var thick = 36;

function setup() {
  createCanvas(710, 400);
  noStroke();
  xpos1 = width/2;
  xpos2 = width/2;
  xpos3 = width/2;
  xpos4 = width/2;
  
}

function draw() {
	background(50, 89, 100);
  	var mx = mouseX * 0.4 - width/5.0;

	fill(102);
  	rect(xpos2, 0, thick, height/2);

  	fill(102);
 	rect(xpos4, height/2, thick, height/2);
    xpos2 += mx/64;
    if(xpos2 < -thick) { xpos2 =  width; }
  	if(xpos2 >  width) { xpos2 = -thick; }

}
