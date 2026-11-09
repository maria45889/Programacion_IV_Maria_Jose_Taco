abstract class ServicioVeterinario {
    abstract realizar(): void;

    mostrarDisponibilidad(): void {
        console.log("Servicio disponible en el consultorio.");
    }
}

class ConsultaGeneral extends ServicioVeterinario {
    realizar(): void {
        console.log("Consulta general realizada.");
    }
}

class Vacunacion extends ServicioVeterinario {
    realizar(): void {
        console.log("Vacunación registrada.");
    }
}

const servicios: ServicioVeterinario[] = [
    new ConsultaGeneral(),
    new Vacunacion()
];

console.log(servicios);
servicios.forEach(servicio => servicio.realizar());

abstract class Paciente {
    abstract describir(): void;

    consultarHistoria(): void {
        console.log("Consultando la historia clínica de la mascota.");
    }
}

class Perro extends Paciente {
    describir(): void {
        console.log("Paciente canino registrado.");
    }
}

class Gato extends Paciente {
    describir(): void {
        console.log("Paciente felino registrado.");
    }
}

const pacientes: Paciente[] = [
    new Perro(),
    new Gato()
];

console.log(pacientes);
pacientes.forEach(paciente => paciente.describir());
