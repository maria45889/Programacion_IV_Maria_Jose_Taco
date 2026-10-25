const IVA: number = 0.16;
const COMISION_VETERINARIO: number = 5;
const NOMBRE_CONSULTORIO: string = "Huellitas";
const CONSULTORIO_ABIERTO: boolean = true;

console.log("Consultorio:", NOMBRE_CONSULTORIO);
console.log("IVA:", IVA);
console.log("Comisión del veterinario:", COMISION_VETERINARIO, "%");
console.log("Consultorio abierto:", CONSULTORIO_ABIERTO);

let consultasAtendidas: number = 0;
console.log(consultasAtendidas);

consultasAtendidas++;
console.log(consultasAtendidas);

consultasAtendidas += 3;
console.log(consultasAtendidas);

consultasAtendidas = consultasAtendidas + 2;
console.log(consultasAtendidas);

let veterinaria: string = "Ana López";
let hayVacunacionGratuita: boolean = false;
console.log(veterinaria);
console.log(hayVacunacionGratuita);

let mascotas: string[] = ["Luna", "Max", "Milo"];
console.log(mascotas);

let mascotaSeleccionada: string | null = null;
let proximaCita: string | undefined;

let consultasHistoricas: bigint = 987654321n;

let identificadorMascota1: symbol = Symbol("Luna");
console.log(identificadorMascota1.description);

let identificadorMascota2: symbol = Symbol("Luna");
console.log(identificadorMascota2.description);
console.log(identificadorMascota1 === identificadorMascota2);

let mascota: {
    nombre: string;
    edad: number;
    peso: number;
    vacunada: boolean;
} = {
    nombre: "Luna",
    edad: 3,
    peso: 12.5,
    vacunada: true
};

console.log(mascota);
