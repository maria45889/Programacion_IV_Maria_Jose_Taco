type ID = string | number;
type Apellido = string;
type CoordenadasConsultorio = [number, number];
type Punto = {
    x: number;
    y: number;
};

const origen: Punto = { x: 0, y: 0 };
const idDueno: ID = 12;
const idMascota: ID = "masc-011";
const coordenadasConsultorio: CoordenadasConsultorio = [-0.2, -78.5];

type Ubicacion3D = Punto & {
    z: number;
};

const ubicacionConsultorio: Ubicacion3D = { x: 1, y: 2, z: 3 };

interface Dueno {
    readonly id: number;
    nombre: string;
    apellido: Apellido;
    email: string;
    telefono?: string;
}

interface Mascota {
    nombre: string;
    especie: string;
    edad: number;
    dueno: Dueno;
}

interface Veterinario extends Dueno {
    especialidad: string;
}

const dueno1: Dueno = {
    id: 1,
    nombre: "Lucía",
    apellido: "Paredes",
    email: "lucia@email.com"
};

const dueno2: Dueno = {
    id: 2,
    nombre: "Carlos",
    apellido: "Mendoza",
    email: "carlos@email.com",
    telefono: "0991234567"
};

const mascota1: Mascota = {
    nombre: "Luna",
    especie: "Perro",
    edad: 3,
    dueno: dueno1
};

console.log(dueno1);
console.log(dueno2);
console.log(mascota1);
console.log(origen, ubicacionConsultorio, coordenadasConsultorio, idDueno, idMascota);

const veterinario: Veterinario = {
    id: 3,
    nombre: "Ana López",
    apellido: "Gómez",
    email: "ana@huellitas.com",
    especialidad: "Medicina preventiva"
};
