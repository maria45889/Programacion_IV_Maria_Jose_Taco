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

    cumplirAnios(): void {
        this.edad += 1;
        console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
    }

    mostrarFicha(): void {
        console.log(`${this.nombre} · ${this.especie} · ${this.edad} años`);
    }
}

const luna = new Mascota("Luna", "Perro", 4);
const michi = new Mascota("Michi", "Gato", 2);

luna.mostrarFicha();
michi.cumplirAnios();
console.log(luna.especie);
