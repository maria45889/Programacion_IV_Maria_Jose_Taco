function sumarCostos(costoConsulta: number, costoVacuna: number): number {
    return costoConsulta + costoVacuna;
}

const totalAtencion = sumarCostos(30, 15);
console.log(`Total de la atención: ${totalAtencion}`);

function mostrarConsultorio(nombre: string, ubicacion: string): void {
    console.log(`Consultorio: ${nombre}, Ubicación: ${ubicacion}`);
    const servicios: string[] = ["Consulta general", "Vacunación", "Desparasitación"];
    for (const servicio of servicios) {
        console.log(`Servicio disponible: ${servicio}`);
    }
}

mostrarConsultorio("Huellitas Centro", "Quito");

function consultarVeterinario(nombre: string, consultas?: number): void {
    console.log(`Veterinario: ${nombre}, Consultas del día: ${consultas}`);
    if (consultas) {
        console.log(`${nombre} tiene consultas registradas.`);
    } else {
        console.log(`${nombre} aún no registra consultas.`);
        consultas = 0;
        console.log(`Consultas iniciales: ${consultas}.`);
    }
}

consultarVeterinario("Ana López", 12);
consultarVeterinario("Luis Pérez");

function consultarVeterinario2(nombre: string, consultas: number = 0): void {
    console.log(`El veterinario ${nombre} tiene ${consultas} consultas.`);
}

consultarVeterinario2("Ana López", 12);
consultarVeterinario2("Luis Pérez");

function aplicarDescuento(costo: number): number {
    return costo * 0.9;
}

const aplicarDescuentoFlecha = (costo: number): number => costo * 0.9;

const costoOriginal = 50;
const costoConDescuento = aplicarDescuento(costoOriginal);
console.log(`Costo original: ${costoOriginal}, costo con descuento: ${costoConDescuento}`);

const costoConDescuentoFlecha = aplicarDescuentoFlecha(costoOriginal);
console.log(`Costo original: ${costoOriginal}, costo con descuento (flecha): ${costoConDescuentoFlecha}`);

function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;
function formatear(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
    } else if (typeof valor === "boolean") {
        return `Disponible: ${valor ? "sí" : "no"}`;
    }
    return `"${valor}"`;
}

console.log(formatear(123456.789));
console.log(formatear("Vacunación antirrábica"));
console.log(formatear(true));
console.log(formatear(false));

function crearContadorConsultas(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    };
}

const contador1 = crearContadorConsultas();
const contador2 = crearContadorConsultas(10);

contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador2.decrementar();

console.log(`Consultas del turno 1: ${contador1.valor()}`);
console.log(`Consultas del turno 2: ${contador2.valor()}`);

contador1.resetear();
console.log(contador1.valor());
