let edadMascota: number = 5;

if (edadMascota < 5) {
    console.log("La mascota puede acceder a un descuento del 10% en su consulta.");
}

if (edadMascota < 5) {
    console.log("La mascota puede participar en la campaña de vacunación.");
} else {
    console.log("La mascota no aplica para la campaña de vacunación para cachorros.");
}

if (edadMascota >= 10) {
    console.log("La mascota es adulta mayor y recibe atención prioritaria.");
} else if (edadMascota >= 1) {
    console.log("La mascota puede recibir una consulta general.");
} else {
    console.log("Se debe confirmar la edad de la mascota.");
}

edadMascota = 4;
let pesoMascota: number = 8;

if (edadMascota < 5 && pesoMascota >= 5 && pesoMascota <= 15) {
    console.log("La mascota aplica a una consulta preventiva.");
} else if (edadMascota < 5) {
    console.log("La mascota puede recibir atención para cachorros.");
} else {
    console.log("La mascota requiere una consulta general.");
}

edadMascota = 12;
pesoMascota = 7;

if (edadMascota >= 10 || pesoMascota < 3) {
    console.log("La mascota requiere una revisión prioritaria.");
} else if (edadMascota >= 5) {
    console.log("Se recomienda programar un chequeo anual.");
} else {
    console.log("La mascota puede asistir a un control de rutina.");
}
