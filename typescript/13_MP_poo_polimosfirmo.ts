class Mascota {
    atender(): void {
        console.log("Atención veterinaria para una mascota.");
    }
}

class Perro extends Mascota {
    override atender(): void {
        console.log("El perro recibe su consulta veterinaria.");
    }
}

class Gato extends Mascota {
    override atender(): void {
        console.log("El gato recibe su consulta veterinaria.");
    }
}

const pacientes: Mascota[] = [
    new Perro(),
    new Gato()
];

console.log(pacientes);
pacientes.forEach(mascota => mascota.atender());
