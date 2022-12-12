Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

if(window.AppInventor.getWebViewString()=="do"){
    take_snapshot();
}
else{
    console.log("error");
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version: ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jZQobU6Lz/model.json',modelLoaded);


function modelLoaded(){

console.log('Model loaded!');

}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
function test(){
    document.getElementById("check").innerHTML="Successful!";
}