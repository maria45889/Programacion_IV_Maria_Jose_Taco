let vacunasDisponibles = 4;
let vacunasNecesarias = 10;
while (vacunasDisponibles < vacunasNecesarias) {
    console.log(`Vacunas disponibles: ${vacunasDisponibles}`);
    vacunasDisponibles += 2;
}

let numeroCita = 1;
while (numeroCita <= 5) {
    console.log(`Cita atendida: ${numeroCita}`);
    numeroCita++;
}

let pacientesRevisados = 0;
let controlesCompletados = 0;
while (pacientesRevisados < 10) {
    pacientesRevisados++;
    let controlCompletado = Math.random() < 0.5;
    if (controlCompletado) {
        controlesCompletados++;
        console.log(`Paciente ${pacientesRevisados}: control completado. Total: ${controlesCompletados}`);
    } else {
        console.log(`Paciente ${pacientesRevisados}: control pendiente. Total: ${controlesCompletados}`);
    }
}

let mascotasAtendidas = 0;
do {
    mascotasAtendidas++;
    console.log(`Mascotas atendidas: ${mascotasAtendidas}`);
} while (mascotasAtendidas < 5);

interface Mascota {
    nombre: string;
    especie: string;
    edad: number;
}

const pacientes: Mascota[] = [
    { nombre: "Luna", especie: "Perro", edad: 4 },
    { nombre: "Michi", especie: "Gato", edad: 2 },
    { nombre: "Toby", especie: "Conejo", edad: 1 },
    { nombre: "Nina", especie: "Perro", edad: 8 },
    { nombre: "Coco", especie: "Ave", edad: 3 }
];

let indice = 0;
while (indice < pacientes.length) {
    const mascota = pacientes[indice];
    if (mascota?.especie === "Ave") {
        indice++;
        continue;
    }
    if (mascota && mascota.edad >= 8) {
        console.log(`La mascota ${mascota.nombre} requiere un control preventivo.`);
        break;
    }
    if (mascota) {
        console.log(`Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}`);
    }
    indice++;
}
