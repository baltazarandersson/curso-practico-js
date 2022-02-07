const precioOriginal = 120

const descuento = 18

function calcularPrecioConDescuento(P, D) {
    let porcentajeTotalConDescuento = (100 - D)
    let precioConDescuento = Math.round((P * (porcentajeTotalConDescuento / 100)))
    return precioConDescuento
}

function onClickButton() {
    let InputPrice = document.getElementById("InputPrice").value
    let InputDiscount = document.getElementById("InputDiscount").value
    const precioConDescuento = calcularPrecioConDescuento(InputPrice, InputDiscount)
    console.log({
        InputPrice,
        InputDiscount,
        precioConDescuento
    })
    const PriceJail = document.getElementById('PriceResult')
    PriceJail.innerText = `El precio con descuento es ${precioConDescuento}$`
}