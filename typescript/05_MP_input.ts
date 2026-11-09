let responsable = prompt("Ingrese el nombre del responsable de la mascota:");
let edadMascota = Number(prompt("Ingrese la edad de la mascota en años:"));
let diaCita = Number(prompt("Ingrese el día de la cita (1-31):"));

if (responsable && responsable.trim().length >= 2) {
    if (edadMascota >= 0 && edadMascota <= 30) {
        if (diaCita >= 1 && diaCita <= 31) {
            console.log(`Responsable: ${responsable}, Edad: ${edadMascota}, Día de cita: ${diaCita}`);
        } else {
            console.log("Día de cita inválido. Debe estar entre 1 y 31.");
        }
    } else {
        console.log("Edad inválida. Ingrese una edad entre 0 y 30 años.");
    }
} else {
    console.log("Ingrese un nombre válido para el responsable.");
}
