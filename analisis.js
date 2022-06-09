
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function(a,b){
        return a-b;
    }
);

function esPar(number) {
    return number%2===0;
}
function sumaLista(lista) {
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
function medianaSalarios(list) {
    const mitad = parseInt(list.length/2);
    if(esPar(list.length)){
        const salario1 = list[mitad-1];
        const salario2 = list[mitad];
        return calcularMediaAritmetica([salario1,salario2]);
    }else{
        return list[mitad];
    }
}
console.log(salariosColSorted);
const medianaGeneralCol=medianaSalarios(salariosColSorted);
const spliceStar=parseInt(salariosColSorted.length*0.9);
const spliceCount=salariosColSorted.length -spliceStar;
const salariosColTop10 = salariosColSorted.splice(spliceStar,spliceCount);
console.log(salariosColSorted);
console.log(salariosColTop10);
