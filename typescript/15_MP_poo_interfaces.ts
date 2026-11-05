interface PacienteVeterinario {
    nombre: string;
    especie: string;
    mostrarFicha(): void;
    registrarConsulta(): void;
}

class Perro implements PacienteVeterinario {
    nombre = "Luna";
    especie = "Perro";

    mostrarFicha(): void {
        console.log(`${this.nombre}: paciente ${this.especie.toLowerCase()}.`);
    }

    registrarConsulta(): void {
        console.log(`Consulta veterinaria registrada para ${this.nombre}.`);
    }
}

class Gato implements PacienteVeterinario {
    nombre = "Michi";
    especie = "Gato";

    mostrarFicha(): void {
        console.log(`${this.nombre}: paciente ${this.especie.toLowerCase()}.`);
    }

    registrarConsulta(): void {
        console.log(`Consulta veterinaria registrada para ${this.nombre}.`);
    }
}

const luna = new Perro();
const michi = new Gato();

luna.mostrarFicha();
luna.registrarConsulta();
michi.mostrarFicha();
michi.registrarConsulta();
