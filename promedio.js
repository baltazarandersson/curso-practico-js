const lista1 = [
    100,
    200,
    300,
    500
]

function calcularPromedio(lista) {

    const sumaLista = lista.reduce(
        (valorAcumulado=0, nuevoElemento) => valorAcumulado + nuevoElemento
    )

    promedioLista = sumaLista / lista.length
    return promedioLista
}