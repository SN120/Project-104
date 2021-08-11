Webcam.set({
    width : 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("webcam_output");
var imag = "";

Webcam.attach('#webcam_output');

function Snapshot(){
    Webcam.snap(function (uri){
        document.getElementById("photo_output").innerHTML = '<img id="output" src="'+uri+'"/>';
    });
}
console.log("ml5 versin = "+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IKveNS1wu/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}