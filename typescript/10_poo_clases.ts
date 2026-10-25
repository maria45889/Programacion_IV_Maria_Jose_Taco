class Boxeador {

    public nombre: string;
    public fuerza: number;
    public energia: number
    constructor(
        nombre: string,
        fuerza: number,
        energia: number,
    ){
        this.nombre=nombre;
        this.fuerza=fuerza;
        this.energia=energia;
    }
    golpear():void{
        this.energia-=10
        console.log(`${this.nombre} lanza un golpe`)
    }
    entrenar(): void{
        this.fuerza+=10
        console.log(`${this.nombre} esta entrenando`)
    }

}

const rocky = new Boxeador("Rocky Balboa",80,100);
const apollo = new Boxeador("Apollo Creed",80,100);

rocky.golpear();
console.log(apollo.fuerza)
apollo.entrenar();
console.log(apollo.fuerza)
apollo.golpear();
console.log(apollo.energia)
