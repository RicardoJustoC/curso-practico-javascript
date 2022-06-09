function perimetroCuadrado(lado) {
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}
function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base;
}
function areaTriangulo(base,altura) {
    return base*altura*0.5;
}
function diametroCirculo(radio) {
    return radio*2;
}
function perimetroCirculo(radio) {
    return diametroCirculo(radio)*Math.PI;
}
function areaCirculo(radio) {
    return radio*radio*Math.PI;
}
//viculando con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = inputLado1.value;
    const valueLado2 = document.getElementById("inputTrianguloLado2").value;
    const valueBase = document.getElementById("inputTrianguloBase").value;
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const valueBase = document.getElementById("inputTrianguloBase").value;
    const valueAltura = document.getElementById("inputTrianguloAltura").value;
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
//Código triángulo

// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   "Los lados del triángulo son:" +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// console.log("La altura del triángulo es: " + alturaTriangulo);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = baseTriangulo * alturaTriangulo * 0.5;
// console.log("El perímetro del Triangulo es: " + perimetroTriangulo + "cm");
// console.log("El área del Triángulo es: " + areaTriangulo + "cm²");
// console.groupEnd();

// console.group("Círculo");
// const radioCirculo = 4;
// const diametroCirculo=2*radioCirculo;
// const PI = Math.PI;
// const perimetroCirculo=diametroCirculo*PI;
// const areaCirculo= (radioCirculo*radioCirculo)*PI;
// console.log("El radio del Círculo mide: " + radioCirculo + "cm");
// console.log("PI es: "+PI);
// console.log("El diámetro del Círculo mide: " + diametroCirculo + "cm");
// console.log("El perímetro del Círculo es: " + perimetroCirculo + "cm");
// console.log("El área del Círculo es: " + areaCirculo + "cm²");
// console.groupEnd();

