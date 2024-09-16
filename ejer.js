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

creditos = parseInt(prompt("Cuantos creditos desea usar: 1 - 2 -3 - 4"));

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



}