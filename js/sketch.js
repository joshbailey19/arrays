
//               
let words=['plymouth', 'is', 'awesome']
let wordsindex =0



function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
   text ( words[wordsindex], mouseX, mouseY)
    


}

function mousePressed(){
   
   
wordsindex++

if(wordsindex == words.length){
wordsindex =0;
}

}
