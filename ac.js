model_status = "";

function preload(){
    img = loadImage("ac.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetected = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: The system is Detecting";
}

function modelLoaded(){
    console.log("model loaded");
    Status = true;
    objectDetected.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}