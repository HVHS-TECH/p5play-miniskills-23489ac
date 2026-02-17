/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(850, 850);
	world.gravity.y = 10;
	mole= new Sprite(200, 110, 150, 150, '95');

mole.color = 'brown';
mole.rotationSpeed = 2;
mole.vel.x = 2;

platform_1 = new Sprite(79, 280, 290, 10, 'a');
platform_1.rotationSpeed = -1;
platform_1.bounciness = 0 
platform_1.friction = 0 
platform_1.drag = 0
platform_2 = new Sprite(700, 280, 290, 10, 't');
platform_2.rotationSpeed = 0.5;
platform_3 = new Sprite(479, 380, 290, 10, 'r');
platform_3.rotationSpeed = 0.5;
	console.log("setup: ");

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('skyblue');
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/