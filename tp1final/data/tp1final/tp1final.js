let pantallas = [];      
let pantallaActual = 0;   

function preload() {
 
  for(let i = 0; i <= 12; i++){
    pantallas[i] = loadImage(`data/Pantalla${i}.png`);
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
  
  image(pantallas[pantallaActual], 0, 0, width, height);
}

function mousePressed() {
  if(pantallaActual == 0){
    if(mouseX < width / 2){
      pantallaActual = 1;
    } else {
      pantallaActual = 2;
    }
  }
  else if(pantallaActual == 1){
    pantallaActual = 2;
  }
  else if(pantallaActual == 2){
    pantallaActual = 3;
  }
  else if(pantallaActual == 3){
    pantallaActual = 4;
  }
  else if(pantallaActual == 4){
    pantallaActual = 5;
  }
  else if(pantallaActual == 5){
    if(mouseX < width / 2){
      pantallaActual = 6;
    } else {
      pantallaActual = 10;
    }
  }
  else if(pantallaActual == 6){
    pantallaActual = 7;
  }
  else if(pantallaActual == 7){
    if(mouseX < width / 2){
      pantallaActual = 8;
    } else {
      pantallaActual = 9;
    }
  }
  else if(pantallaActual == 8){
    pantallaActual = 0;
  }
  else if(pantallaActual == 9){
    pantallaActual = 0;
  }
  else if(pantallaActual == 10){
    pantallaActual = 11;
  }
  else if(pantallaActual == 11){
    if(mouseX < width / 2){
      pantallaActual = 12;
    } else {
      pantallaActual = 8;
    }
  }
  else if(pantallaActual == 12){
    pantallaActual = 0;
  }
}

  
  
