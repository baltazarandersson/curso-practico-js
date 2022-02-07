const precioOriginal = 120

const descuento = 18

function calcularPrecioConDescuento(P, D) {
    let porcentajeTotalConDescuento = (100 - D)
    let precioConDescuento = Math.round((P * (porcentajeTotalConDescuento / 100)))
    return precioConDescuento
}

