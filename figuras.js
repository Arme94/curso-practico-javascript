
//codigo del cuadrado

console.group("Cuadrado");

/*const lagoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + lagoCuadrado + "cm");*/

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perietro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//codigo del triangulo

console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log ("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;

console.log ("La altura del triangulo es de : " + alturaTriangulo + "cm");
*/
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
    

//console.log("El perietro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

//console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//codigo del Circulo

console.group("Circulos");

//Diametro 

function diametroCirculo(radio){
    return radio*2;
}

//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI

const PI = Math.PI;

//console.log("PI es: " + PI);

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
} 

//console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}