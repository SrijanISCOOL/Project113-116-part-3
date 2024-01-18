noseX=0;
noseY=0;

function preload(){
img = loadImage('https://i.postimg.cc/PqR366dL/moustache-PNG37.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(img,noseX,noseY,60,45);

}


function takeSnapshot(){
save('srijaniscool.png');
}

function modelLoaded(){
    console.log('Posenet Is Intialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y+3;

       console.log("nosex = "+noseX);
       console.log("nosey = "+noseY);
    


    }
}
