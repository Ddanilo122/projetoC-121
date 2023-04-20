var previsao1=''
var precisao2='';

var cameraa=document.getElementById('cameraa');

Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90
})
Webcam.attach(cameraa);

function tirafoto(){
    Webcam.snap((uri)=>{
document.getElementById('resultado123').innerHTML='<img id="resultado" src ='+uri+'>'

    })
}
var classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/2GssCe4Yi/model.json",modelReady)
function modelReady(){
    console.log('modelo pronto')
}
function resu(){
img= document.getElementById('resultado')
classifier.classify(img,gotResults)
}

function gotResults(erro,resultado){
    if(erro){
        console.log(erro);
    }else{
        console.log(resultado)

        previsao1=resultado[0].label;
        previsao2=resultado[1].label;
        document.getElementById('resultado1').innerHTML=previsao1;
        document.getElementById('resultado2').innerHTML=previsao2;
    }
}





