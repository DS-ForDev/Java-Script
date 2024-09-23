//EJERCICIS JAVA SCRIPT


/*


// EJERCICIO DEL MENU DE UN RESTAURANTE
let plato;

plato = prompt("Desea:\n Carne\n Pescado\n Ensalada\nEscoja una sola opcion por favor");

switch(plato.toLocaleLowerCase()){

    case "carne": console.log("¿Desea vino tinto?");
    break;

    case "pescado": console.log("¿Desea vino blanco?");
    break;

    case "ensalada":  console.log("¿Desea agua?");
    break;

    default : console.log("Elija una de las tres opciones por favor");

}
*/
//EJERCICIO DE LAS ESTACIONES POR MES 
/*
let num;

num = parseInt(prompt("Digite el numero del mes que desea solicitar"));

switch(num){
    
    case 1 : console.log("Invierno");
    break;

    case 2 : console.log("Invierno");
    break;
    
    case 3 : console.log("Primavera");
    break;

    case 4 : console.log("Primavera");
    break;

    case 5 : console.log("Primavera");
    break;

    case 6 : console.log("Verano");
    break;

    case 7 : console.log("Verano");
    break;

    case 8 : console.log("Verano");
    break;

    case 9 : console.log("Otoño");
    break;

    case 10 : console.log("Otoño");
    break;

    case 11 : console.log("Otoño");
    break;

    case 12 : console.log("Invierno");
    break;

    default : console.log("El mes digitado es erroneo")

}
*/
//EJERCICIO DE LOS CREDITOS PARA PODER JUGAR
/*
let creditos;

creditos = parseInt(prompt("Cuantos creditos desea usar: 1 - 2 - 3 - 4"));

switch(creditos){

    case 4 : console.log("Tienes derecho a usar las consolas, juegos 2D, juegos 3D y realidad virtual");
    break;

    case 3 : console.log("Tienes derecho a usar las consolas, juegos 2D y juegos 3D");
    break;

    case 2 : console.log("Tienes derecho a usar las consolas y  juegos 2D");
    break;

    case 1 : console.log("Tienes derecho a usar las consolas");
    break;

    default: console.log("No insertaste un valor correcto");

}
*/
/*
//EJERCICIO DE DESCUENTOS SEGUN EL VALOR DE LA COMPRA

let valorcompra;
let descuentoUno;
let descuentoDos;
let descuentoTres;

valorcompra = parseFloat(prompt("Ingrese el valor de la compra"));
descuentoUno = valorcompra * 5 / 100;
descuentoDos = valorcompra * 10 / 100;
descuentoTres = valorcompra * 15 / 100;

switch(true){

    case (valorcompra <= 100000):
        console.log("No Tienes Descuento");
    break;

    case (valorcompra >= 100000 && valorcompra < 300000):
        console.log(`Ha ganado un descuento del 5% y su compra queda en:  ${valorcompra - descuentoUno}`);
    break;

    case (valorcompra >= 300000 && valorcompra < 500000):
        console.log(`Ha ganado un descuento del 10% y su compra queda en: ${valorcompra - descuentoDos}`);
    break;

    case (valorcompra >= 500000):
        console.log(`Ha ganado un descuento del 15% y su compra queda en: ${valorcompra - descuentoTres}`);
    break;

    default: console.log("No Tienes Descuento");

}.
*/
/*
//NUMERO PAR O IMPAR

let num;

num = parseInt(prompt("Escribe el numero"));

if(num % 2 === 0){
    console.log("Es un numero par");
}else{
    console.log("Es numero impar");
}
*/
/*
//EL MAYOR DE TRES NUMEROS

let numUno;
let numDos;
let numtres;

numUno = parseInt(prompt("Escriba Su Primer numero"));
numDos = parseInt(prompt("Escriba Su Segundo numero"));
numtres = parseInt(prompt("Escriba Su Tercer numero"));

if (numUno > numDos && numUno < numtres){
    console.log(`Este es el numero mayor ${numUno}`);
}else if(numDos > numUno && numDos > numtres){
    console.log(`Este es el numero mayot ${numDos}`)
}else if(numtres > numUno && numtres > numDos){
    console.log(`El numero mayor es ${numtres}`);
}else{
    console.log("Escribiste un dato erroneo")
}
*/
/*
//CALIFICACION DE UN ESTUDIANTE

let calificacion;

calificacion = parseInt(prompt("Escriba la calificacion del estuidnate entre 1 - 100"));

if(calificacion < 60){
    console.log("Su calificacion es F");
}else if(calificacion >=60 && calificacion <= 69){
    console.log("Su calificacion es D");
}else if(calificacion >= 70 && calificacion <= 79){
    console.log("Su calificacion es C");
}else if(calificacion >= 80 && calificacion <= 89){
    console.log("Su calificacion es B");
}else if(calificacion >= 90 && calificacion <= 100){
    console.log("Su calificacion es A");
}else{
    console.log("Ingrese un valor entre 1 - 100");
}
*/
/*
//EDAD PARA CONDUCIR

let edad = parseInt(prompt("Ingrese la edad de la persona"));

if (edad >= 18 && edad < 75){
    console.log("La persona puede conducir un vehiculo")
}else if(edad < 18){
    console.log("La persona no puede conducir ningun vehiculo");
}else{
    console.log("La persona no puede conducir un vehiculo debido a su edad avanzada")
}
*/
/*
//DIA DE LA SEMANA

let dia;

dia = parseInt(prompt("Ingrese un numero del 1 al 7"));

switch(dia){

    case 1:
        console.log("Es Lunes");
        break;

    case 2:
        console.log("Es Martes");
        break;

    case 3:
        console.log("Es Miercoles");
        break;
        
    case 4:
        console.log("Es Jueves");
        break;

    case 5:
        console.log("Es Viernes");
        break;

    case 6:
        console.log("Es Sabado");
        break;

    case 7:
        console.log("Es Domingo");
        break;

    default:
        console.log("Ingrese un valor que este en el rango");


}
*/

//EJECUTA OPERACION SEGUN EL SGINO ESCOGIDO

let numUno;
let numDos;
let signo;

while(true){

numUno = parseInt(prompt("Ingrese el primer valor"));
signo = prompt("Ingrese el signo con el cual quiere trabajar entre :\n +\n -\n *\n /\n");
numDos = parseInt(prompt("Ingrese el segundo valor"));

function suma(numUno, numDos){
    return numUno + numDos;
}

function resta(numUno, numDos){
    return numUno - numDos;
}

function multiplicar(numUno, numDos){
    return numUno * numDos;
}

function division(numUno, numDos){
    return numUno / numDos;
}


switch(signo){

    case "+":
        alert(`La SUMA de estos dos numeros es ${suma(numUno,numDos)}`);
        break;

    case "-":
        alert(`La RESTA de estos dos numeros es ${resta(numUno,numDos)}`);
        break;

    case "*":
        alert(`La MULTIPLICACION de estos dos numeros es ${multiplicar(numUno,numDos)}`);
        break;

    case "/":
        alert(`La DIVISION de estos dos numeros es ${division(numUno,numDos)}`);
        break;

    default:
        alert("Los valores que ingresaste son incorrectos")

}
}

/*

//INGRESANDO UN NUMERO OBTENDREMOS EL MES DEL AÑO  IF ELSE Y SWITCH JUNTOS

let num;

num = parseInt(prompt("Ingrese el numero del MES que quiere conocer"));

if(num < 1 || num > 12){
    console.log("Ingrese Un Numero Entre 1 y 12");
}else{
    switch(num){

        case 1:
            console.log("ENERO");
            break;

        case 2:
            console.log("FEBRERO");
            break;

        case 3:
            console.log("MARZO");
            break;

        case 4:
            console.log("ABRIL");
            break;

        case 5:
            console.log("MAYO");
            break;

        case 6:
            console.log("JUNIO");
            break;

        case 7:
            console.log("JULIO");
            break;

        case 8:
            console.log("AGOSTO");
            break;

        case 9:
            console.log("SEPTIEMBRE");
            break;

        case 10:
            console.log("OCTUBRE");
            break;

        case 11:
            console.log("NOVIEMBRE");
            break;

        case 12:
            console.log("DICIEMBRE");
            break;

        default:
            console.log("El numero ingreasado no esta dentro de los parametros");

    }
}
*/
/*
// FOR VARIABLES CONTADORAS O VARIABLES ACOMULADORAS

let n = parseInt(prompt("Introduce un numero positivo"));
let sum = 0; 

for (let i = 1; i <= n; i++) {
    sum += i; 
}

console.log(`La suma de los números del 1 al ${n} es ${sum}`);
*/

// TABLA DE MULTIPLICAR DEL 1 AL 10

/*
for( let i = 1; i <=10; i += 1){
    for( let j = 1; j <= 10; j +=1){
        console.log(`${i} * ${j} = ${(i*j)}`);
    }

    console.log(" ")
}
/*xx

/*
let suma = 0;

for (let i = 1; i <= 200; i += 2) {
    suma += i;
}

console.log(suma); 
*/

// WHILE 
/*
let numero= 1;

while (numero <= 10){
    console.log(numero)
    numero++;
}
*/
//
/*
let n = 1;
let sum = 0;

while (n > 0){

    n = parseInt(prompt("Ingrese un numero positivio e ingrese un numero negativo para salir"));
    sum += n

    console.log(sum);
}

console.log(`La suma de los numeros infresados es ${sum}`)
*/

// WHILE CON SWITCH 
/*
let opcion;

let estado = true;

let coseno, seno, raiz, numero;


while(estado){

opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));

switch(opcion){

case 1: alert("Selecciono Raiz");

numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));

raiz = Math.sqrt(numero);

alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

break;
case 2 : alert("Selecciono Seno N1");

numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));

seno = Math.sin(numero);

alert(`EL SENO DE ${numero} ES: ${seno}`);

break;

case 3 : alert("Selecciono Coseno N1");

numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));

coseno = Math.cos(numero);

alert(`EL COSENO DE ${numero} ES: ${coseno}`);

break;

case 4: alert("SALIENDO....")
    estado = falso;
    break;

default:
    alert("LA OPCION NO EXISTE");

}
*/