var mario_jump=""
var mario_coin=""
var mario_gameover=""
var mario_kick=""
var mario_die=""
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump=loadSound("jump.wav")
	mario_coin=loadSound("coin.wav")
	mario_gameover=loadSound("gameover.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent("game_console")
	posenet=ml5.poseNet(video,modelLoaded)
	posenet.on("pose",gotPoses)
}

function draw() {
	game()
}
function modelLoaded(){
	console.log("model is loaded")
}
function gotPoses(result){
if(result.length>0){
	console.log(result);
noseX=result[0].pose.nose.x
noseY=result[0].pose.nose.y

}
}






