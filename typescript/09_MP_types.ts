type ID = string | number;
type Apellido = string;
type CoordenadasConsultorio = [number, number];
type Punto = {
    x: number;
    y: number;
};

const ubicacionConsultorio: Punto = { x: -0.18, y: -78.47 };
const idResponsable: ID = 12;
const idMascota: ID = "masc-011";

 type Ubicacion3D = Punto & {
    z: number;
};

const ubicacionClinica: Ubicacion3D = { x: -0.18, y: -78.47, z: 0 };

interface Responsable {
    readonly id: number;
    nombre: string;
    email: string;
    telefono?: string;
}

interface Veterinario extends Responsable {
    especialidad: string;
}

const responsable1: Responsable = {
    id: 1,
    nombre: "Lucía Pérez",
    email: "lucia@email.com"
};

const responsable2: Responsable = {
    id: 2,
    nombre: "Carlos Ruiz",
    email: "carlos@email.com",
    telefono: "0991234567"
};

console.log(responsable1);
console.log(responsable2);

const veterinario: Veterinario = {
    id: 3,
    nombre: "Ana López",
    email: "ana@huellitas.com",
    especialidad: "Medicina general"
};

console.log(veterinario);
