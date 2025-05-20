let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("lightblue");//Fundo da tela azul claro
  x = x + random(-2,2);//Ajuste aleatório do ponto oculto
  y = y + random(-2,2);//Ajuste aleatório do ponto oculto
    fill("lightgreen")//Cor do círculo
  
  let distanciaX;//Cateto
  let distanciaY;//Cateto
  let distancia;//Hipotenusa
  distanciaX = mouseX - x; //Diferença de distância X
  distanciaY = mouseY - y;//Diferença de distância Y
  distancia = dist(mouseX,mouseY,x,y)//Função nativa para calcular distância
  
  circle(mouseX, mouseY, distancia);
  dist(mouseX,mouseY,x,y)
  
  if (distancia < 3) {// Se posição X do mouse for igual a X
    fill("purple")//Cor do texto
    text("Encontrei!", 200, 200);//Então mostra o texto encontrei
    noLoop();
  }
   if (distancia > 150){
   fill ("blue")
   circle (mouseX, mouseY, distancia)
} else if (distancia > 100){
    fill ("yellow")
    circle (mouseX,mouseY,distancia)
} else if (distancia > 75){
  fill ("orange")
  circle (mouseX,mouseY,distancia)
} else if (distancia > 15){
    fill("red")
    circle (mouseX,mouseY,distancia)
  }
  }