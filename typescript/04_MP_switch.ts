type Especie = "Perro" | "Gato" | "Conejo" | "Ave" | "Otro";

let especie = "Gato" as Especie;

switch (especie) {
    case "Perro":
        console.log("Servicio recomendado: consulta general para perros.");
        break;
    case "Gato":
        console.log("Servicio recomendado: consulta general para gatos.");
        break;
    case "Conejo":
        console.log("Servicio recomendado: consulta de animales pequeños.");
        break;
    case "Ave":
        console.log("Servicio recomendado: consulta de aves.");
        break;
    default:
        console.log("Consulte la disponibilidad para esta especie.");
}

type Servicio = "Consulta" | "Vacunación" | "Desparasitación";

let servicio = "Vacunación" as Servicio;
let edadMeses = 4;
let tieneCarnet = true;

switch (servicio) {
    case "Consulta":
        if (edadMeses < 12) {
            console.log("Agende un control para cachorro o gatito.");
        } else {
            console.log("Agende una consulta general.");
        }
        break;
    case "Vacunación":
        if (edadMeses >= 2 && tieneCarnet) {
            console.log("Revise el carnet y agende la vacunación.");
        } else {
            console.log("Consulte con el veterinario antes de vacunar.");
        }
        break;
    case "Desparasitación":
        if (edadMeses >= 1 && tieneCarnet) {
            console.log("Solicite una dosis indicada por el veterinario.");
        } else {
            console.log("Primero registre la edad y el historial de la mascota.");
        }
        break;
}
