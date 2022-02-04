const perimetroCuadrado = lado => lado * 4
const areaCuadrado = lado => lado * lado

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const altTriangulo = 5.5;
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => ((base * altura) / 2)

const diametroCirculo = (radio) => radio * 2
const PI = Math.PI
const perimetroCirculo = (radio, PI) => diametroCirculo(radio) * PI
const areaCirculo = (radio, PI) => (radio * radio) * PI

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
 
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert(area) 
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloLado1")
    const input2 = document.getElementById("InputTrianguloLado2")
    const input3 = document.getElementById("InputTrianguloLado3")
    const value = Number(input.value)
    const value2 = Number(input2.value)
    const value3 = Number(input3.value)
    const perimetro = perimetroTriangulo(value, value2, value3)
    alert(perimetro)
}
 
function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTrianguloLado3")
    const input4 = document.getElementById("InputTrianguloLado3")
    const value3 = Number(input3.value)
    const value4 = Number(input4.value)
    const area = areaTriangulo(value3, value4)
    alert(area) 
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const perimetro = perimetroCirculo(value, PI)
    alert(perimetro)
}
 
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const area = areaCirculo(value, PI)
    alert(area) 
}