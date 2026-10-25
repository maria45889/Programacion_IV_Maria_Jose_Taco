abstract class Servicio {
    abstract realizar(): void;

    mostrarDisponibilidad(): void {
        console.log("Servicio veterinario disponible para agendar.");
    }
}

class Consulta extends Servicio {
    realizar(): void {
        console.log("Consulta veterinaria realizada.");
    }
}

class Vacunacion extends Servicio {
    realizar(): void {
        console.log("Vacunación aplicada.");
    }
}

const servicios: Servicio[] = [
    new Consulta(),
    new Vacunacion()
];

console.log(servicios);
servicios.forEach(servicio => servicio.realizar());

abstract class CuidadoPreventivo {
    abstract describir(): void;

    consultarRecomendacion(): void {
        console.log("Consulta las recomendaciones preventivas con el veterinario.");
    }
}

class VacunaAntirrabica extends CuidadoPreventivo {
    describir(): void {
        console.log("Vacuna antirrábica para perros y gatos.");
    }
}

class Desparasitacion extends CuidadoPreventivo {
    describir(): void {
        console.log("Tratamiento preventivo contra parásitos.");
    }
}

const cuidados: CuidadoPreventivo[] = [
    new VacunaAntirrabica(),
    new Desparasitacion()
];

console.log(cuidados);
cuidados.forEach(cuidado => cuidado.describir());
