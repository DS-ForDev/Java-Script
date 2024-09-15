
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