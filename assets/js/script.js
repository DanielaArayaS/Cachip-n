//El usuario debe escoger la cantidad de partidas que desea jugar
let partida = prompt("Ingresa la cantidad de partidas que desea jugar (entre 1 a 10): ");

if (partida >= 1 && partida <= 10) {
    alert("Genial, continuemos...");

    for (let i = 0; i < partida; i++) {
        let eleccion_usuario = prompt("Elige piedra, papel o tijeras:").toLowerCase();

        // Generar una elección aleatoria para el computador
        let eleccion_computador = Math.random();
        if (eleccion_computador < 0.33) {
            eleccion_computador = "piedra";
        } else if (eleccion_computador < 0.66) {
            eleccion_computador = "papel";
        } else {
            eleccion_computador = "tijeras";
        }

        // Mostrar elecciones
        alert("Tu elección es: " + eleccion_usuario);
        alert("La elección del computador es: " + eleccion_computador);

        // Comparación de elecciones y determinación del ganador
        if (eleccion_usuario === eleccion_computador) {
            alert("¡Empate!");
        } else if (
            (eleccion_usuario === "piedra" && eleccion_computador === "tijeras") ||
            (eleccion_usuario === "papel" && eleccion_computador === "piedra") ||
            (eleccion_usuario === "tijeras" && eleccion_computador === "papel")
        ) {
            alert("¡Ganaste!");
        } else {
            alert("¡Perdiste!");
        }
    }
} else {
    alert("Escoge un número de partidas correcto");
}

