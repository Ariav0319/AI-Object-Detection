video = "";
function preload(){
    video = createVideo(VIDEO);
    video.hide();
  }  
  function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
  }
function draw(){
    image(video, 0, 0, 480, 380);
}
function start(){
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects"; 
}
function modelLoaded(){
    console.log("model loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}