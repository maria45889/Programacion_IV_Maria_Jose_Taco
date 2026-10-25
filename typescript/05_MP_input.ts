let nombreDueno = prompt("Ingrese el nombre del dueño de la mascota:");
let nombreMascota = prompt("Ingrese el nombre de la mascota:");
let edadMascota = Number(prompt("Ingrese la edad de la mascota en años:"));

if (nombreDueno && nombreMascota) {
    if (edadMascota >= 0 && edadMascota <= 30) {
        console.log(`Dueño: ${nombreDueno}, Mascota: ${nombreMascota}, Edad: ${edadMascota} años`);
    } else {
        console.log("Edad inválida. Debe estar entre 0 y 30 años.");
    }
} else {
    console.log("El nombre del dueño y de la mascota son obligatorios.");
}
