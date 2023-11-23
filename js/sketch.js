
//                0    1    2    3    4 
let circlesizes =[50 , 75 , 80 , 45 , 82]
let circleindex =0



function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(width/2, width/2 , circlesizes[circleindex]);
    


}

function mousePressed(){
   
   
circleindex++

if(circleindex == circlesizes.length){
circleindex =0;
}

}
