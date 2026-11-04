for (let i = 2; i < 50; i += 5) {
    console.log(`Venta de equipo móvil: ${i}`);
}

for (let i = 0; i < 10; i++) {
    console.log(`Inventario revisado: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log("La revisión de stock fue interrumpida.");
        break;
    }
    if (i === 30) {
        console.log("Se saltó este lote de equipos.");
        continue;
    }
    console.log(`Equipo móvil en revisión: ${i}`);
}

const modelosDisponibles: string[] = [
    "Samsung Galaxy S24",
    "iPhone 15",
    "Xiaomi Redmi Note 13",
    "Motorola Edge",
    "Google Pixel 8"
];

for (let i = 0; i < modelosDisponibles.length; i++) {
    console.log(`Modelo disponible: ${modelosDisponibles[i]}`);
}

for (const modelo of modelosDisponibles) {
    console.log(`Equipo en catálogo: ${modelo}`);
}

const marcaDestacada = "MoviTech";
for (const caracter of marcaDestacada) {
    console.log(`Carácter de la marca: ${caracter}`);
}

interface EquipoEnInventario {
    modelo: string;
    precio: number;
    stock: number;
}

const inventario: EquipoEnInventario[] = [
    { modelo: "Samsung Galaxy S24", precio: 18000, stock: 8 },
    { modelo: "iPhone 15", precio: 22000, stock: 5 },
    { modelo: "Xiaomi Redmi Note 13", precio: 6500, stock: 12 },
    { modelo: "Motorola Edge", precio: 9500, stock: 6 },
    { modelo: "Google Pixel 8", precio: 16000, stock: 3 }
];

for (const equipo of inventario) {
    console.log(`Modelo: ${equipo.modelo}, Precio: ${equipo.precio}, Stock: ${equipo.stock}`);
}

const stockPorModelo: Record<string, number> = {
    "Samsung Galaxy S24": 8,
    "iPhone 15": 5,
    "Xiaomi Redmi Note 13": 12,
    "Motorola Edge": 6,
    "Google Pixel 8": 3
};

for (const modelo in stockPorModelo) {
    console.log(`Modelo: ${modelo}, Unidades disponibles: ${stockPorModelo[modelo]}`);
}

const precioPorModelo: Record<string, number> = {
    "Samsung Galaxy S24": 18000,
    "iPhone 15": 22000,
    "Xiaomi Redmi Note 13": 6500,
    "Motorola Edge": 9500,
    "Google Pixel 8": 16000
};

for (const modelo in precioPorModelo) {
    console.log(`Modelo: ${modelo}, Precio: ${precioPorModelo[modelo]}`);
}

const accesoriosDisponibles: string[] = [
    "Audífonos inalámbricos",
    "Cargador rápido",
    "Protector de pantalla",
    "Funda para celular"
];

accesoriosDisponibles.forEach((accesorio, index) => {
    console.log(`Accesorio ${index + 1}: ${accesorio}`);
});

accesoriosDisponibles.map((accesorio, index) => {
    console.log(`Accesorio ${index + 1}: ${accesorio}`);
});
