abstract class Boxeador{
    abstract atacar():void;
    descansar():void{
        console.log("El boxeador recupera energia")
    }
}

class Rocky extends Boxeador{
    atacar():void{
        console.log("Rocky lanza un gancho");
    }
}

class Apollo extends Boxeador{
    atacar():void {
        console.log("Apollo lanzqa un upper");
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo(),
]

console.log(boxeadores)
boxeadores.forEach(Boxeador=> Boxeador.atacar());

//ejercicio en clase 
abstract class Sayayin {
    abstract transformarse():void;
    deetectarKi():void{
        console.log("Detectandop el nivel de energia del enemigo")
    }
}
class Goku extends Sayayin{
    transformarse(): void {
        console.log("Goku se tranforma en super sayayin blue")
    }
}
class Vegeta extends Sayayin{
    transformarse(): void {
        console.log("Vegeta alcanza el ultra ego")
    }
}
const Sayayines: Sayayin[]=[
    new Goku(),
    new Vegeta(),
]

console.log(Sayayines)
Sayayines.forEach(Sayayin=>Sayayin.transformarse());