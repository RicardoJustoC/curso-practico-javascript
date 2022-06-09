const lista1 = [
    100,200,300,500
];
console.log(sumaLista(lista1));
console.log(calcularMediaAritmetica(lista1)  );
function sumaLista(lista) {
    // let suma=0;
    // for (let i = 0; i < lista.length; i++) {
    //     suma = suma+ lista[i];
    // }
    const suma = lista.reduce(
        function(total=0,valor,i){
        
    return total+valor;

    });
    return suma;
}
function calcularMediaAritmetica(lista) {
    var promedio = sumaLista(lista)/lista.length;
    return promedio;
}
