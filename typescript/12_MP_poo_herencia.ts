class Mascota {
    constructor(public nombre: string) {}

    registrarConsulta(): void {
        console.log(`Consulta de ${this.nombre} registrada.`);
    }
}

class Perro extends Mascota {
    registrarVacuna(): void {
        console.log(`Vacuna de ${this.nombre} registrada.`);
    }
}

class Gato extends Mascota {
    registrarDesparasitacion(): void {
        console.log(`Desparasitación de ${this.nombre} registrada.`);
    }
}

const luna = new Perro("Luna");
luna.registrarConsulta();
luna.registrarVacuna();

const michi = new Gato("Michi");
michi.registrarConsulta();
michi.registrarDesparasitacion();

class ServicioVeterinario {
    registrar(): void {
        console.log("Servicio veterinario registrado.");
    }
}

class Consulta extends ServicioVeterinario {
    emitirDiagnostico(): void {
        console.log("Diagnóstico de consulta emitido.");
    }
}

class Vacunacion extends ServicioVeterinario {
    actualizarCarnet(): void {
        console.log("Carnet de vacunación actualizado.");
    }
}

const consulta = new Consulta();
consulta.registrar();
consulta.emitirDiagnostico();

const vacunacion = new Vacunacion();
vacunacion.registrar();
vacunacion.actualizarCarnet();
