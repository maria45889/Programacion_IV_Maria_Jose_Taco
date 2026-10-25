let vacunasDisponibles = 4;
let vacunasNecesarias = 8;
while (vacunasDisponibles < vacunasNecesarias) {
    console.log(`Vacunas disponibles: ${vacunasDisponibles}`);
    vacunasDisponibles += 1;
}

let citaActual = 1;
while (citaActual <= 10) {
    console.log(`Cita atendida: ${citaActual}`);
    citaActual++;
}

let mascotasRevisadas = 0;
let mascotasEstables = 0;
while (mascotasRevisadas < 10) {
    mascotasRevisadas++;
    let mascotaEstable = Math.random() < 0.5;
    if (mascotaEstable) {
        mascotasEstables++;
        console.log(`Mascota ${mascotasRevisadas}: Estable. Total estables: ${mascotasEstables}`);
    } else {
        console.log(`Mascota ${mascotasRevisadas}: Requiere seguimiento. Total estables: ${mascotasEstables}`);
    }
}

let consultasAtendidas = 0;
do {
    consultasAtendidas++;
    console.log(`Consultas atendidas: ${consultasAtendidas}`);
} while (consultasAtendidas < 5);

interface Mascota {
    nombre: string;
    especie: string;
    edad: number;
}

const mascotasEnSala: Mascota[] = [
    { nombre: "Luna", especie: "Perro", edad: 4 },
    { nombre: "Milo", especie: "Gato", edad: 2 },
    { nombre: "Coco", especie: "Conejo", edad: 1 },
    { nombre: "Nina", especie: "Perro", edad: 7 },
    { nombre: "Pipo", especie: "Ave", edad: 0 }
];

let indice = 0;
while (indice < mascotasEnSala.length) {
    const mascota = mascotasEnSala[indice];
    if (mascota?.especie === "Gato") {
        indice++;
        continue;
    }
    if (mascota?.edad === 0) {
        console.log(`Se debe confirmar la edad de ${mascota.nombre}.`);
        break;
    }
    if (mascota) {
        console.log(`Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}`);
    }
    indice++;
}
