status = "";

function setup(){
    canvas = createCanvas(640, 330);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 330);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetecter("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}


function draw(){
    image(video 0, 0, 640, 330);
}