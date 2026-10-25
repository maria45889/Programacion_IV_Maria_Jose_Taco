class Mascota {
    registrarConsulta(): void {
        console.log("Consulta veterinaria registrada.");
    }
}

class Perro extends Mascota {
    aplicarVacuna(): void {
        console.log("Vacuna aplicada al perro.");
    }
}

class Gato extends Mascota {
    revisarVacunacion(): void {
        console.log("Carnet de vacunación del gato revisado.");
    }
}

const perro = new Perro();
perro.registrarConsulta();
perro.aplicarVacuna();

const gato = new Gato();
gato.registrarConsulta();
gato.revisarVacunacion();

class ServicioVeterinario {
    registrar(): void {
        console.log("Servicio veterinario registrado.");
    }
}

class Vacunacion extends ServicioVeterinario {
    aplicar(): void {
        console.log("Vacunación realizada.");
    }
}

class Desparasitacion extends ServicioVeterinario {
    administrarTratamiento(): void {
        console.log("Tratamiento antiparasitario administrado.");
    }
}

const vacunacion = new Vacunacion();
vacunacion.registrar();
vacunacion.aplicar();

const desparasitacion = new Desparasitacion();
desparasitacion.registrar();
desparasitacion.administrarTratamiento();
