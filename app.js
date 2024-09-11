console.log("Hola mundo");

let numero1 = 35;
let numero2 = 45;

let pi = 3.1416;

let estado = true;

let direccion = "Calle con Carrera"

console.log(numero1);
console.log(numero2);

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;

console.log(suma);
console.log(direccion);

console.log('Este es el primer valor ' + numero1 + ' el segundo valor es ' + numero2 + ' y la suma de estos dos valores es ' + suma);

//Literal Template
//console.log(`El primer valor es ${numero1} y el segundo valor es ${numero2} y la suma de estos dos numeros es ${suma}`);
//console.log(`El primer valor es ${numero1} y el segundo valor es ${numero2} y la multipicacion de estos dos numeros es ${multiplicacion}`);
//console.log(`El primer valor es ${numero1} y el segundo valor es ${numero2} y la resta de estos dos numeros es ${resta}`);


//console.log(typeof(numero1));


//let nu1 = parseInt(prompt("Ingrese el primer valor"));
//let nu2 = parseInt(prompt("Ingrese el segundo valor"));
//let suma1 = nu1 + nu2;

//console.log(`El rpimer numero es  ${nu1} y el segundo numero es ${nu2}`)
//console.log(`La Suma es ${suma1}`)



let nacimiento;

nacimiento = parseInt(prompt("Digite su año de nacimiento"));

if (nacimiento >= 1883 && nacimiento <= 1900){
    console.log("Usted es generacion PERDIDA")
}else if(nacimiento >= 1901 && nacimiento <= 1924){
    console.log("Usted es generacion GRANDIOSA")
}else if(nacimiento >= 1925 && nacimiento <= 1945){
    console.log("Usted es generacion SILENCIOSA")
}else if(nacimiento >= 1946 && nacimiento <= 1964){ 
    console.log("Usted es generacion BABY BOOMERS")
}else if(nacimiento >= 1965 && nacimiento <= 1980){ 
    console.log("Usted es generacion X")
}else if(nacimiento >= 1981 && nacimiento <= 1996){ 
    console.log("Usted es generacion Y")
}else if(nacimiento >= 1997 && nacimiento <= 2012){ 
    console.log("Usted es generacion Z")
}else{
    console.log("Generacion Alpha")
}

let numero;

numero = 2;
switch (numero) {
    case 1:
        System.out.println("Es uno");
        break;
    case 2:
        System.out.println("Es dos");
        break;
    case 3:
        System.out.println("Es tres");
        break;
    default:
        System.out.println("Número no válido");
        break;
}