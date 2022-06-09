const list1=[1,2,3,1,2,3,2,1,2,1,2,3,2];
let obj = {};
function calcularModa(list) {
    list.map(function(elemento){
        if (obj[elemento]) {
            obj[elemento]=obj[elemento]+1;
        } else {
            obj[elemento]=1;
        }
    });
    console.log(obj);
    const listaArray = convertirObjetoAArrayOrdenado(obj);
    console.log(listaArray);
    console.log(listaArray.length-1);
    console.log(listaArray[2][1]);
    return listaArray[listaArray.length-1][0];
}
function convertirObjetoAArrayOrdenado(objeto) {
    const listO=Object.entries(objeto).sort(
        function(a,b){
            return a[1]-b[1];
        }
    );
    return listO;
}
console.log("La moda es: " + calcularModa(list1));

