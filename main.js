noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;

function preload(){

}
function setup(){
 video= createCapture(VIDEO);
 video.size(550,500);
 canvas = createCanvas(550,500);
 canvas.position(900,150);

 pose_net= ml5.poseNet(video,modelLoaded);
 pose_net.on("pose",gotposes);
 
}
function modelLoaded(){
    console.log("model loaded");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
       noseX= results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("nosex="+noseX+",nosey="+noseY);
       leftwristX=results[0].pose.leftWrist.x;
       rightwristX=results[0].pose.rightWrist.x;
       difference= floor(leftwristX-rightwristX);
       console.log(difference);

       console.log("leftwristX="+leftwristX+",rightwrist"+rightwristX);

    }

}
function draw(){
 background("#A77979");
 fill("white");
 stroke("black");
 square(noseX,noseY,difference);
 document.getElementById("span2").innerHTML="length of the sqaure is "+ difference + "px";
}