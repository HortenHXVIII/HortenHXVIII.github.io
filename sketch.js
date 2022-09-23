
let zBereich;
let r;
let g;
let b;

function setup() {
  zBereich = createCanvas(windowWidth,windowHeight);
  zBereich.position(0,0); //links oben
  zBereich.style('z-index','-1'); //Verschiebung auf der Z-Achse

}

function draw() {
  //ohne "background" ist die Seiter transparent!
  noStroke;
  // if(){}else{}
r=100;
g=200;
b=300;
  if(mouseX=windowWidth/2){
r=r-1;
}
else{
r=r+1;
}
if(mouseX=windowWidth/2){
g=g-2;
}
else{
g=g+2;
}
if(mouseX=windowWidth/2){
b=b-3;
}
else{
b=b+3;
}
fill(r,g,b);
circle(mouseX ,mouseY ,60);
}