function calcularPrecioConDescuento(precioSinDescuento, porcentajeDescuento) {
    const precioConDescuento = precioSinDescuento*(1-(porcentajeDescuento/100));

    return precioConDescuento;
    // console.log({
    //     precioSinDescuento,
    //     porcentajeDescuento,
    //     precioConDescuento
    // });
}

function onClickButtoncalcularPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById('InputDiscount');
    const resultP = document.getElementById('ResultP');
    const priceValue = inputPrice.value;

    
    const discountValue= inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    resultP.innerHTML='El precio con descuento son: $'+precioConDescuento;
}