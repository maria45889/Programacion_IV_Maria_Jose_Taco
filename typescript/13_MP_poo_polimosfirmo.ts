class ServicioVeterinario {
    atender(): void {
        console.log("Atención veterinaria general.");
    }
}

class ConsultaGeneral extends ServicioVeterinario {
    override atender(): void {
        console.log("Consulta general para evaluar la salud de la mascota.");
    }
}

class Vacunacion extends ServicioVeterinario {
    override atender(): void {
        console.log("Aplicación de vacuna y actualización del carnet.");
    }
}

const servicios: ServicioVeterinario[] = [
    new ConsultaGeneral(),
    new Vacunacion()
];

console.log(servicios);
servicios.forEach(servicio => servicio.atender());
