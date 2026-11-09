let edadMascota: number = 5;

if (edadMascota < 1) {
    console.log("La mascota necesita un control veterinario frecuente.");
}

if (edadMascota < 1) {
    console.log("Se recomienda agendar una consulta para cachorro.");
} else {
    console.log("La mascota puede agendar una consulta general.");
}

if (edadMascota >= 10) {
    console.log("La mascota es senior y requiere atención preventiva.");
} else if (edadMascota >= 5) {
    console.log("La mascota está en etapa adulta.");
} else {
    console.log("La mascota es joven.");
}

edadMascota = 6;
let tieneSintomas: boolean = true;

if (edadMascota >= 5 && edadMascota < 10 && tieneSintomas) {
    console.log("Se recomienda una consulta veterinaria prioritaria.");
} else if (edadMascota >= 5) {
    console.log("Agende un control preventivo.");
} else {
    console.log("Puede solicitar una consulta general.");
}

edadMascota = 2;
tieneSintomas = false;

if (edadMascota < 1 || tieneSintomas) {
    console.log("La mascota requiere una valoración veterinaria.");
} else {
    console.log("La mascota puede continuar con sus controles rutinarios.");
}
