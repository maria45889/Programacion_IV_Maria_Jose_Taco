function sumarCostos(costo1: number, costo2: number): number {
    return costo1 + costo2;
}

const totalConsulta = sumarCostos(25, 18);
console.log(`Total de consulta y vacuna: $${totalConsulta}`);

function mostrarConsultorio(nombre: string, ubicacion: string): void {
    console.log(`Consultorio: ${nombre}, Ubicación: ${ubicacion}`);
    const servicios: string[] = ["Consulta general", "Vacunación", "Desparasitación"];
    for (const servicio of servicios) {
        console.log(`Servicio disponible: ${servicio}`);
    }
}

mostrarConsultorio("Huellitas", "Quito");

function consultarVeterinaria(nombre: string, citas?: number): void {
    console.log(`Veterinaria: ${nombre}, Citas del día: ${citas}`);
    if (citas) {
        console.log(`${nombre} tiene citas registradas.`);
    } else {
        console.log(`${nombre} aún no tiene citas registradas.`);
        citas = 0;
        console.log(`Citas iniciales: ${citas}.`);
    }
}

consultarVeterinaria("Dra. Ana López", 12);
consultarVeterinaria("Dr. Luis Pérez");

function consultarVeterinaria2(nombre: string, citas: number = 0): void {
    console.log(`La veterinaria ${nombre} tiene ${citas} citas.`);
}

consultarVeterinaria2("Dra. Ana López", 12);
consultarVeterinaria2("Dr. Luis Pérez");

function aplicarDescuento(costo: number): number {
    return costo * 0.9;
}

const aplicarDescuentoFlecha = (costo: number): number => costo * 0.9;

const costoOriginal = 50;
const costoConDescuento = aplicarDescuento(costoOriginal);
console.log(`Costo original: ${costoOriginal}, costo con descuento: ${costoConDescuento}`);

const descuentoConFlecha = aplicarDescuentoFlecha(costoOriginal);
console.log(`Costo original: ${costoOriginal}, con descuento (flecha): ${descuentoConFlecha}`);

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
console.log(formatear("Consulta veterinaria"));
console.log(formatear(true));
console.log(formatear(false));

function crearContadorCitas(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    };
}

const contador1 = crearContadorCitas();
const contador2 = crearContadorCitas(10);

contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador2.decrementar();

console.log(`Citas del día: ${contador1.valor()}`);
console.log(`Citas de la semana: ${contador2.valor()}`);

contador1.resetear();
console.log(contador1.valor());
