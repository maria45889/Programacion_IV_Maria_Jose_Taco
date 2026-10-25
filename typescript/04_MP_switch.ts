type EspecieMascota =
    | "Perro"
    | "Gato"
    | "Conejo"
    | "Ave"
    | "Reptil";

let especieSeleccionada = "Gato" as EspecieMascota;

switch (especieSeleccionada) {
    case "Perro":
        console.log("El consultorio ofrece consulta general para perros.");
        break;
    case "Gato":
        console.log("El consultorio ofrece consulta general para gatos.");
        break;
    case "Conejo":
        console.log("El consultorio ofrece atención para conejos.");
        break;
    case "Ave":
        console.log("El consultorio ofrece atención para aves.");
        break;
    case "Reptil":
        console.log("El consultorio ofrece atención para reptiles.");
        break;
    default:
        console.log("Especie no reconocida.");
}

type ServicioVeterinario = "Consulta" | "Vacunación" | "Desparasitación";

let servicio = "Vacunación" as ServicioVeterinario;
let edadMascota = 2;
let tieneCarnet = true;

switch (servicio) {
    case "Consulta":
        if (edadMascota > 0 && tieneCarnet) {
            console.log("La mascota está lista para su consulta.");
        } else {
            console.log("Verifique la edad y el historial de la mascota.");
        }
        break;
    case "Vacunación":
        if (edadMascota >= 1 && tieneCarnet) {
            console.log("La mascota puede recibir su vacuna.");
        } else {
            console.log("Revise el carnet antes de programar la vacuna.");
        }
        break;
    case "Desparasitación":
        if (edadMascota > 0 && tieneCarnet) {
            console.log("La mascota puede recibir su tratamiento antiparasitario.");
        } else {
            console.log("Se necesita confirmar el historial de la mascota.");
        }
        break;
}
