function setup(){
    canvas=createCanvas( 300, 300 )
    canvas.center()
    background("white")
    canvas.mouseReleased (classifyCanvas)
    synth=window.speechSynthesis
}
function Clearcanvas(){
    background("white")

}
function draw(){
    strokeWeight(6)
    stroke(0)
    fill("blue")
    if(mouseIsPressed)
{line (pmouseX, pmouseY, mouseX, mouseY)}
}
function classifyCanvas(){
    classifier.classify(canvas, gotResults)
}
function gotResults (error, results){
    if (error)
    {console.error (error)}
    else{
        console.log(results)
        document.getElementById("label1").innerHTML="öbject is "+ results [0].label
        document.getElementById("confidence").innerHTML="confidence:"+ Math.round(results[0].confidence*100)+"%"
        utterthis=new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterthis)
    }
}
