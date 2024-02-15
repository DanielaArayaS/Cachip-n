//El usuario debe escoger la cantidad de partidas que desea jugar
let partida = prompt("Ingresa la cantidad de partidas que desea jugar (entre 1 a 10): ");
if(partida == "" || partida <1 || partida >10) {
    alert("Escoge un número de partidas correcto");
    }
    else {
        alert ("Continuemos...")
    }

//El usuario debe escoger entre piedra, papel o tijera.
let opcion_valida = ["papel", "piedra", "tijeras"];
let opcion_usuario = prompt ("Escoge entre piedra, papel o tijeras");

let opciones = opcion_usuario.toLowerCase ();

if (opcion_valida.includes(opciones)) {
alert ("!Buena elección")
} 
else {
    alert ("¡Incorrecto! Ingresa una de las palabras papel, piedra o tijeras");
}





// let opciones = prompt("Escoge entre piedra, papel o tijeras: ");
// if(opciones.toLowerCase()) {
//     alert ("Buena elección")
// }
// else {
    
// }


// var suma = parseInt(num1)+parseInt(num2);
// var resta = parseInt(num1)-parseInt(num2);
// var multiplica = parseInt(num1)*parseInt(num2); 
// var division = parseInt(num1)/parseInt(num2);

//document.write(nombre+" el resultado de sumar "+num1+" + "+num2+" es "+suma+". "); 
// document.write(nombre+" el resultado de restar "+num1+" - "+num2+" es "+resta+". "); 
// document.write(nombre+" el resultado de multiplicar "+num1+" * "+num2+" es "+multiplica+". ");
// document.write(nombre+" el resultado de dividir "+num1+" / "+num2+" es "+divide+". ");