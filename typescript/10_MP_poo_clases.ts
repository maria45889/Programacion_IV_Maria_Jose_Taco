class Mascota {
    public nombre: string;
    public especie: string;
    public edad: number;

    constructor(
        nombre: string,
        especie: string,
        edad: number,
    ) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }

    registrarConsulta(): void {
        console.log(`Consulta registrada para ${this.nombre}, un(a) ${this.especie}.`);
    }

    cumplirAnio(): void {
        this.edad += 1;
        console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
    }
}

const luna = new Mascota("Luna", "perra", 3);
const milo = new Mascota("Milo", "gato", 2);

luna.registrarConsulta();
console.log(milo.edad);
milo.cumplirAnio();
console.log(milo.edad);
