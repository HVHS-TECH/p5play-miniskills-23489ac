/*******************************************************/
// P5.play: t06_createAliens
// Create walls around the canvas
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(700, 750);
	wallLH = new Sprite(350, height / 0.673, 800, height, 'k');
	wallLH.color = 'black';
	wallRH = new Sprite(5, 5, 2000, 15, 'k');
	wallTop = new Sprite(5, 9, 15, 2000, 'k');
	wallBot = new Sprite(695, 30, 15, 2000, 'k');


	ball_1 = new Sprite(width / 8, height / 4, 80, 'd');
	ball_1.color = 'green';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;

	cnv = new Canvas(w, h);2
alienGroup = new Group();
	for (i = 0; i < 80; i++) {
		alien = new Sprite(7, 9);
		alien.vel.x = 3;
		alien.vel.y = 4;
		alien.bounciness = 1;
		alien.friction = 0;
alienGroup.add(alien);


	}

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