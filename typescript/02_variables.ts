//constantes
const PI : number = 3.1416;
const IVA : number = 15;
const SERVICIO_API : string = "api service star";
const ACTIVATE : boolean = true;
console.log("PI: ", PI);
console.log("Iva: ", IVA);
console.log("Nombre del servicio de la api: ", SERVICIO_API)
console.log("Estado del servicio: ",ACTIVATE)

//// variables
//let
let contador : number = 0;
console.log(contador);
contador++;
console.log(contador);
contador+= 5;
console.log(contador);
contador= contador + 3;
console.log(contador);
let alumnos : string = "Pedro Perez"
let caducado : boolean = false;
console.log(alumnos);
console.log(caducado);

let equipo: string[]= ["PIKACHU","CHARMANDE","BULBASAUR"];
console.log(equipo);

let pokemonCapturados: string|null=null;
let pokemonInicial:string|undefined;

let experienciaAcumulada: bigint=987654321n;
//tipo symbol
let pokemon1 : symbol= Symbol("Pikachu");
console.log(pokemon1.description);
let pokemon2 : symbol= Symbol("Pikachu");
console.log(pokemon2.description);
console.log(pokemon1===pokemon2);

let Pikachu:{
    nombre: string;
    nivel : number;
    vida: number;
    esLegendario: boolean;
}={
    nombre:"Pikachu",
    nivel: 5,
    vida:35,
    esLegendario:false
};
console.log(Pikachu);

