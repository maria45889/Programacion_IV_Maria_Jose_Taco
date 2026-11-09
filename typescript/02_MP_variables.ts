const IVA: number = 0.12;
const PRECIO_CONSULTA: number = 25;
const NOMBRE_CONSULTORIO: string = "Veterinaria Huellitas";
const CONSULTORIO_ABIERTO: boolean = true;

console.log("Consultorio:", NOMBRE_CONSULTORIO);
console.log("IVA:", IVA);
console.log("Precio de consulta:", PRECIO_CONSULTA);
console.log("Abierto:", CONSULTORIO_ABIERTO);

let citasAtendidas: number = 0;
console.log(citasAtendidas);

citasAtendidas++;
console.log(citasAtendidas);

citasAtendidas += 3;
console.log(citasAtendidas);

citasAtendidas = citasAtendidas + 2;
console.log(citasAtendidas);

let veterinaria: string = "Dra. Ana López";
let hayTurnoDisponible: boolean = false;
console.log(veterinaria);
console.log(hayTurnoDisponible);

let mascotas: string[] = ["Luna (perro)", "Michi (gato)", "Toby (conejo)"];
console.log(mascotas);

let mascotaSeleccionada: string | null = null;
let proximaCita: string | undefined;

let codigoHistoriaClinica: bigint = 987654321n;

let paciente1: symbol = Symbol("Luna");
console.log(paciente1.description);

let paciente2: symbol = Symbol("Luna");
console.log(paciente2.description);
console.log(paciente1 === paciente2);

let paciente: {
    nombre: string;
    especie: string;
    edad: number;
    vacunado: boolean;
} = {
    nombre: "Luna",
    especie: "Perro",
    edad: 4,
    vacunado: true
};

console.log(paciente);
