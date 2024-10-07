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
/*
let numUno;
let numDos;
let signo;
let estado = true;

while(estado){ 

numUno = parseInt(prompt("Ingrese el primer valor"));
signo = prompt("Ingrese el signo con el cual quiere trabajar entre :\n +\n -\n *\n /\n  \n O para salir utilice el signo ?");
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

    case "?":
        alert("Saliendo del programa");
        estado = false;
        break;

    default:
        alert("Los valores que ingresaste son incorrectos")

}

}
*/
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
/*
let numAleatorio = Math.floor(Math.random() * 50) + 1;
let numeroUsuario = parseInt(prompt("Ingrese un numero entre 1 - 50 para empezar a adivinar"));

while(numeroUsuario !== numAleatorio){

if (numeroUsuario < 1 || numeroUsuario > 50){
    alert("Escoge un numero entre 1 - 50");
}else if(numeroUsuario < numAleatorio){
    alert("No, el numero es mayor");
}else if(numeroUsuario > numAleatorio){
    alert("No, el numero es menor");
}

numeroUsuario = parseInt(prompt("Ingrese un numero entre 1 - 50 para continuar adivinando"));

}

alert("Has adivinado el numero")
*/
// ARREGLOS

/*
let estudiantes = ["Laura", "Julian", "Andres", "Oscar", "Paola"];

console.log(estudiantes)

// Añadir un elemento al final 

console.log(estudiantes.push("Ricardo"));

console.log(estudiantes)

// Agrego elementos al inicio

console.log(estudiantes.unshift("Esmeralda"));

console.log(estudiantes)

// Añadir elementos en alguna posicion
console.log(estudiantes.splice(2, 1));
//console.log(estudiantes.splice(2 , 0  , "Sofia"));

console.log(estudiantes)
// Eliminar ultimo

console.log(estudiantes.pop());

console.log(estudiantes)


// Eliminar el primer elemento

console.log(estudiantes.shift());

console.log(estudiantes)

// Posicion de un elemento

console.log(estudiantes.indexOf("Andres"));

console.log(estudiantes)

// Recorrer el arreglos

// op 1
/*
estudiantes.forEach((est) =>{

    console.log(est);

});

let vector = [];

vector[0] = 15;
vector[1] = 50;
vector[2] = 70;
vector[3] = 90;

console.log(vector);

//Recorrer con un forEach

vector.forEach((i) =>{

    console.log(i);

});

//Funcion conlibreria matematica 

function raiz(numero){
    return Math.sqrt(numero);
}

console.log(raiz(18));

//Funcion tipo flecha

let raizZ = (numero) => Math.sqrt(numero);

console.log(raizZ(50));


//Funcion Normal 

function suma(a,b){
    return a + b;
}

console.log(suma(5,10));

// Funcion Flecha con el ejemplo anterior

let sumas = (a, b) => a + b;

console.log(sumas(20, 40));
*/
/*
//Crear un arreglo y darle valor despues

let num = new Array(Math.floor(Math.random() * 50));

for (let i = 0 ; i < num.length; i++ ){

    num[i] = Math.floor(Math.random() * 50);

}

for (let i = 0 ; i < num.length; i++ ){

    console.log(`${num[i]}`);

}
*/
/*
//Ejercicio Array
let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes"));
let calificaciones = new Array(tamanio);
let sumar = 0;
let max = 0;

for (let i = 0; i < calificaciones.length; i++){

    calificaciones[i] = parseFloat(prompt("Ingrese las notas"));
    sumar += calificaciones[i];
}

for(let i = 0; i < calificaciones.length; i++){
    
console.log(`Calificacion ${i+1} :  ${calificaciones[i]}`);

if (calificaciones[i] > max) {
    max = calificaciones[i];
}

}

console.log(`La suma de las calificaciones es ${sumar}`);
console.log(`El promedio de las calificaciones es ${sumar/tamanio}`);
*/
/*
class Libro{

    constructor(titulo, autor, paginas){

        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;

    }


    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(autor){
        this._autor = autor;
    }

    get paginas(){
        return this._paginas;
    }

    set paginas(paginas){
        this._paginas = paginas;
    }


mostarInfo(){

    console.log(`El titulo del libro es: ${this._titulo} el autor es: ${this._autor} y tiene ${this._paginas} Paginas`);

}


}
const l1 = new Libro("El relato de un naufrado", "Pepito", "230");
const l2 = new Libro("EL principito", "Jorge", "180");
const l3 = new Libro("EL Programador", "Lucia", "430");

console.log(l1.titulo)
console.log(l2.titulo)
console.log(l3.titulo)

l1.autor = "Carlos";
l2.autor = "Pablo";
l3.autor = "Ana";




l1.mostarInfo()
l2.mostarInfo()
l3.mostarInfo()

*/
/*
class Producto{

    constructor(nombre, precio, cantidad){

        this._nombre = nombre;
        this._precio = precio;
        this._precio = cantidad;
        
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }

    mostrarNombreProducto(){
        console.log(`El nombre del producto es: ${this._nombre}`);
    }

    valorTotal(){
        return this._precio * this._cantidad;
    }

    modificarCantidad(nuevoCantidad){

        this._cantidad = nuevoCantidad;

        console.log(`La nueva cantidad es: ${this._cantidad}`)
    
    modificarStock(nuevoCantidad){
        return this._cantidad += nuevoCantidad;
    }

    }

}

let producto;
let precio;
let cantidades;

producto = prompt(`Ingrese el nombre del producto`);
precio = parseFloat(prompt(`Ingrese el precio del producto`));
cantidades = parseFloat(prompt(`Ingrese la cantidad producto`));

const prod1 = new Producto("Mouse", 45000, 5);
const prod2 = new Producto("Monitor", 1450000, 3);
const prod3 = new Producto(producto, precio, cantidades);


prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();
console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod3.valorTotal()}`);


prod1.modificarCantidad(8);
prod2.modificarCantidad(6);

prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();

console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);

*/


//OBJETOS  Clave - Valor
/*
let carro1 = {

    marca: "Ford",
    modelo: "Fiesta",
    color: "Rojo",
    anio: "2018",
    placa: "KYT603",
    acelerar(){
        console.log(`Este carro esta acelerando`);
    }

}

let carro2 = {

    marca: "Renoult",
    modelo: "Logan",
    color: "Gris",
    anio: "2024",
    placa: "LKJ603",
    frenar(){
        return("Este carro esta frenando"); //Se pone la palabra return para que retorne ese string y no tenga conflicto con el console.log
    }

}

console.log("Datos del carro 1 " , carro1);
console.log("Datos del carro 2 " , carro2);

console.log(`El color del carro numero uno es: ${carro1.color}`);
console.log(`El año del carro numero dos es: ${carro2.anio}`);

///Modificar el valor de una caracteristica del objeto

carro1.color = "Negro";
carro2.marca = "Audi";


console.log("Datos del carro 1 " , carro1);
console.log("Datos del carro 2 " , carro2);

console.log(carro1.acelerar());
console.log(carro2.frenar());
*/


// POO
/*
class Persona{  ///camelCase primera en minuscula y el resto en mayuscula .... para las clases se usa PascalCase que son todas en mayuscula

    constructor(nombre, edad){

        this._nombre = nombre;
        this._edad = edad;

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = this.nombre;
    }



    saludar(){
        console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`);
    }

}

const p1 = new Persona("Diego",27);
const p2 = new Persona("Steven",25);

p1.saludar();
p2.saludar();
*/

class Producto{

    constructor(nombre,precio,cantidad){

        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad
    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }


    mostrarNombreProducto(){
        console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
    }


    valorTotal(){
    
        return this._precio * this._cantidad;
    }


    modificarCantidad(nuevoCantidad){

        this._cantidad = nuevoCantidad;

        console.log(`La nueva cantidad es: ${this._cantidad}`)

    }

    anadirStock(nuevoCantidad){

        return this._cantidad += nuevoCantidad;
    }

    venderStock(nuevoCantidad){
        this._cantidad -= nuevoCantidad;
    }


    operacion(){
        let nCantidad;
        nCantidad = parseFloat(prompt('Ingrese la nueva cantidad'));

        let op = parseInt(prompt("Ingrese que tipo de operacion desea realizar 1. Añadir 2. Restar"));

        if(op===1){
            console.log(prod3.anadirStock(nCantidad));
    
        }else{

        console.log(prod3.venderStock(nCantidad));
        }
    }


    static crearProducto(){
        let productos; 
        let precios; 
        let cantidades; 
        

        do{ 
        productos = prompt('Ingrese el nombre del producto');
        }while(!productos)
        
        do{ 
        precios = parseFloat(prompt('Ingrese el precio del producto'));
        }while(isNaN(precios || precios < 0))

        do{ 
        cantidades = parseFloat(prompt('Ingrese la cantidad del producto'));
        }while(isNaN(cantidades || cantidades < 0))

        return new Producto(productos, precios, cantidades);
    }

    

}




const prod1 = new Producto("Mouse", 45000, 5);
const prod2 = new Producto("Monitor", 1450000, 3);


const prod3 = Producto.crearProducto()



prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();

console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);


prod3.operacion();


prod1.modificarCantidad(8);
prod2.modificarCantidad(6);
//prod3.modificarCantidad(nCantidad);


prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();

console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);



class Termostato {
    constructor(temperatura, estado) {
        this._temperatura = temperatura;
        this._estado = estado;
    }

    get temperatura() {
        return this._temperatura;
    }

    set temperatura(temperatura) {
        this._temperatura = temperatura;
    }

    get estado() {
        return this._estado;
    }

    set estado(estado) {
        this._estado = estado;
    }

    subirTemperatura() {
        if (this._estado === "encendido") {
            const aumentoAleatorio = Math.floor(Math.random() * 5) + 1; // Sube entre 1 y 5 grados
            this._temperatura += aumentoAleatorio;
            alert(`La temperatura ha subido en ${aumentoAleatorio}°C. Ahora está en ${this._temperatura}°C.`);
        } else {
            alert("El termostato está apagado, no se puede modificar la temperatura.");
        }
    }

    bajarTemperatura() {
        if (this._estado === "encendido") {
            const disminucionAleatoria = Math.floor(Math.random() * 5) + 1; // Baja entre 1 y 5 grados
            this._temperatura -= disminucionAleatoria;
            alert(`La temperatura ha bajado en ${disminucionAleatoria}°C. Ahora está en ${this._temperatura}°C.`);
        } else {
            alert("El termostato está apagado, no se puede modificar la temperatura.");
        }
    }

    encender() {
        if (this._estado === "apagado") {
            this._estado = "encendido";
            alert("El termostato ha sido encendido.");
        } else {
            alert("El termostato ya está encendido.");
        }
    }

    apagar() {
        if (this._estado === "encendido") {
            this._estado = "apagado";
            alert("El termostato ha sido apagado.");
        } else {
            alert("El termostato ya está apagado.");
        }
    }

    mostrarEstado() {
        alert(`Estado: ${this._estado}, Temperatura: ${this._temperatura}°C`);
    }
}

// Ejemplo de uso
const termostato = new Termostato(22, "apagado");

function usarTermostato() {
    termostato.mostrarEstado(); // Muestra el estado inicial
    termostato.encender();       // Intenta encender el termostato
    termostato.subirTemperatura(); // Sube la temperatura aleatoriamente
    termostato.bajarTemperatura(); // Baja la temperatura aleatoriamente
    termostato.apagar();          // Apaga el termostato
}

class Cuenta {
    constructor() {
        this._cuentas = new Array(3);  // Array para almacenar cuentas de usuarios
        this._saldos = new Array(3);   // Array para almacenar saldos de las cuentas
    }

    // metodos setters y getters
    setCuenta(index, cuenta) {
        this._cuentas[index] = cuenta;
    }
    getCuenta(index){
        return this._cuentas[index];
    }
    
    setSaldo(index, saldo){
        this._saldos[index] = saldo;
    }
    getSaldo(index){
        return this._saldos[index];
    }

    crearCuenta(){
        for(let i=0; i < this._cuentas.length; i++){
            let cuenta = prompt(`Ingrese el nuevo Numero de cuenta: ${i+1}`);
            let saldo = parseFloat(prompt(`Ingrese el saldo para la nueva cuenta: ${cuenta} `));

            this.setCuenta(i, cuenta);
            this.setSaldo(i, saldo);
        }
    }
    consultarSaldo(){
        let cuenta = prompt(`Ingrese el nuevo Numero de cuenta a consultar su saldo:`);
        let index = this._cuentas.indexOf(cuenta); // BUsca el indice del valor como argumento
        if(index !== -1){
            alert(`El saldo de la cuenta: ${cuenta} es de: ${this.getSaldo(index)}`);
        }else{
            alert("Cuenta no fue encontrada.");
        }
    }
}

const cuenta = new Cuenta();
// Menu Interactivo con el usuario
let opcion;
do{
    opcion = parseInt(prompt(` ***** MENU CAJERO BANCAYA ****** 
        1. Crear cuentas
        2. Consultas saldos cuenta
        3. Consignaciones
        4. Retiros
        5. Salir`));
        switch (opcion) {
            case 1:
                cuenta.crearCuenta();
                break;
            case 2:
                cuenta.consultarSaldo();
                break;
            case 3:
                
                break;
            case 4:
                
                break;

            case 5:
                
                break;
        
            default:
                alert("Opcion no valida. Intente nuevamente.!")
                break;
        }
}while(opcion !== 5)