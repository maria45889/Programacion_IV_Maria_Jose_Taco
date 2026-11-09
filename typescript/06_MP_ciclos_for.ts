for (let i = 1; i <= 5; i++) {
    console.log(`Cita veterinaria número: ${i}`);
}

for (let i = 0; i < 10; i++) {
    console.log(`Historia clínica revisada: ${i}`);
}

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        console.log("La revisión de citas fue interrumpida.");
        break;
    }
    if (i === 8) {
        console.log("Se pospuso la revisión de esta cita.");
        continue;
    }
    console.log(`Cita en revisión: ${i}`);
}

const mascotasEnEspera: string[] = [
    "Luna · perro",
    "Michi · gato",
    "Toby · conejo",
    "Nina · perro",
    "Coco · ave"
];

for (let i = 0; i < mascotasEnEspera.length; i++) {
    console.log(`Mascota en espera: ${mascotasEnEspera[i]}`);
}

for (const mascota of mascotasEnEspera) {
    console.log(`Paciente registrado: ${mascota}`);
}

const nombreConsultorio = "Huellitas";
for (const caracter of nombreConsultorio) {
    console.log(`Carácter del consultorio: ${caracter}`);
}

interface Cita {
    mascota: string;
    servicio: string;
    hora: string;
}

const agenda: Cita[] = [
    { mascota: "Luna", servicio: "Consulta general", hora: "09:00" },
    { mascota: "Michi", servicio: "Vacunación", hora: "10:00" },
    { mascota: "Toby", servicio: "Control", hora: "11:00" },
    { mascota: "Nina", servicio: "Desparasitación", hora: "12:00" },
    { mascota: "Coco", servicio: "Consulta", hora: "13:00" }
];

for (const cita of agenda) {
    console.log(`Mascota: ${cita.mascota}, Servicio: ${cita.servicio}, Hora: ${cita.hora}`);
}

const citasPorMascota: Record<string, number> = {
    "Luna": 1,
    "Michi": 2,
    "Toby": 1,
    "Nina": 3,
    "Coco": 1
};

for (const mascota in citasPorMascota) {
    console.log(`Mascota: ${mascota}, Citas registradas: ${citasPorMascota[mascota]}`);
}

const precioPorServicio: Record<string, number> = {
    "Consulta general": 25,
    "Vacunación": 18,
    "Control": 15,
    "Desparasitación": 12,
    "Consulta especializada": 40
};

for (const servicio in precioPorServicio) {
    console.log(`Servicio: ${servicio}, Precio: $${precioPorServicio[servicio]}`);
}

const serviciosDisponibles: string[] = [
    "Consulta general",
    "Vacunación",
    "Desparasitación",
    "Control preventivo"
];

serviciosDisponibles.forEach((servicio, index) => {
    console.log(`Servicio ${index + 1}: ${servicio}`);
});

serviciosDisponibles.map((servicio, index) => {
    console.log(`Servicio ${index + 1}: ${servicio}`);
});
