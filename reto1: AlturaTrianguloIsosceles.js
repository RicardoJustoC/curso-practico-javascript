alturaTrianguloIsosceles(8,8,6);
function alturaTrianguloIsosceles(lado1, lado2, lado3) {
  //h=raiz(a² - (b²/4))
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    let a;
    let b;
    if (lado1 === lado2) {
      a = lado1;
      b = lado3;
    } else if (lado1 === lado3) {
      a = lado1;
      b = lado2;
    } else {
      a = lado2;
      b = lado1;
    }
    const h= Math.sqrt(a*a-((b*b)/4));
    console.log("Altura triángulo isósceles: "+h);
  } else {
    console.log("No es un triángulo isósceles");
  }
}