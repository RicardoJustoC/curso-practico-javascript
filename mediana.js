const lista1 = [100,40000000, 200, 500, 600];

function sumaLista(lista) {
  const suma = lista.reduce(function (total = 0, valor, i) {
    total = total + valor;
    return total;
  });
  return suma;
}
function calcularMediaAritmetica(lista) {
  var promedio = sumaLista(lista) / lista.length;
  return promedio;
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function ordenarArray(lista) {
    const listO = lista.sort(
        function (a,b) {
            return a-b;//cuando es negativo => a < b
        }
    );
    return listO;
}
function calcularMediana(lista) {
    const listaO = ordenarArray(lista);
  const mitadLista = parseInt(listaO.length / 2);
  console.log(listaO);

  if (esPar(listaO.length)) {
    return calcularMediaAritmetica([listaO[mitadLista - 1], listaO[mitadLista]]);
  } else {
    return listaO[mitadLista];
  }
}


console.log(calcularMediana(lista1));
