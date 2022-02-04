console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado)

const perimetroCuadrado = lado => lado * 4
console.log("El perimetro del cuadrado es " + perimetroCuadrado(ladoCuadrado))

const areaCuadrado = lado => lado * lado
console.log("El area del cuadrado es " + areaCuadrado(ladoCuadrado))
console.groupEnd();

console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const altTriangulo = 5.5;

console.log(
    "Los lados del Triangulo miden " 
    + ladoTriangulo1 
    + " " 
    + ladoTriangulo2 
    + " " 
    + baseTriangulo
    )

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
console.log(`El perimetro del Triangulo es ${perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)}`)

const areaTriangulo = (base, altura) => ((base * altura) / 2)
console.log(`"El area del Triangulo es ${areaTriangulo(baseTriangulo, altTriangulo)}`)
console.groupEnd();

console.group('Circulo')
const radioCirculo = 4
const diametroCirculo = (radio) => radio * 2
const PI = Math.PI
const perimetroCirculo = (radio, PI) => diametroCirculo(radio) * PI
const areaCirculo = (radio, PI) => (radio * radio) * PI

console.log(`El radio del circulo es ${radioCirculo}`)
console.log(`El diametro del circulo es ${diametroCirculo(radioCirculo)}`)
console.log(`PI es ${PI}`)
console.log(`El perimetro del circulo es ${perimetroCirculo(radioCirculo, PI)} cm`)
console.log(`El area del circulo es ${areaCirculo(radioCirculo, PI)} cm2`)
console.groupEnd();