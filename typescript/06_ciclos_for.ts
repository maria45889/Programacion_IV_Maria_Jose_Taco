//Ciclos for
for (let i = 2; i < 50; i+=5) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 0; i < 10; i++) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-=5) {
    if (i==20){
        console.log("El entyrenamiento jedi ha sido interrumpido");
        break
    }
    if (i==30){
        console.log("El entyrenamiento jedi ha sido interrumpido");
        continue;
    }
    console.log(`Entrenamiento jedi: ${i}`);
}

/*12/10/2026*/

const personajes: string[] = ["Luke Skywalker", "Darth Vader", "Yoda", "Leia Organa", "Han Solo"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje: ${personajes[i]}`);
}

for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}   

const cineMovies: string = "Star Wars: A new Hope";
for (const cineMovie of cineMovies) {
    console.log(`Cine Movie: ${cineMovie}`);
}

interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSable: string;
}
const jedis: Jedi[] = [
    { nombre: "Luke Skywalker", nivelFuerza: 90, tieneSable: "Sí" },
    { nombre: "Darth Vader", nivelFuerza: 95, tieneSable: "Sí" },
    { nombre: "Yoda", nivelFuerza: 100, tieneSable: "Sí" },
    { nombre: "Leia Organa", nivelFuerza: 80, tieneSable: "No" },
    { nombre: "Han Solo", nivelFuerza: 70, tieneSable: "No" }
];

for (const jedi of jedis) {
    console.log(`Nombre del Jedi: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable: ${jedi.tieneSable}`);
}
//Ejercicio en Clase
interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}
const naves: Nave[] = [
    { nombre: "Luke Skywalker", tipo: "X-wing", velocidad: 1500 },
    { nombre: "Darth Vader", tipo: "TIE Fighter", velocidad: 1200 },
    { nombre: "Darth Vader", tipo: "TIE Fighter", velocidad: 1200 },
];
for (const nave of naves) {
    console.log(`Nombre de la Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
}


const planetas : Record<string, number> = {
    "Tatooine": 2,
    "Alderaan": 3,
    "Hoth": 1,
    "Dagobah": 4,
    "Endor": 5
};
for (const planeta in planetas) {
    console.log(`Planeta: ${planeta}, Número de satélites: ${planetas[planeta]}`);
}


const distancias: Record<string, number> = {
    "Tatooine": 200,
    "Alderaan": 300,
    "Hoth": 100,
    "Dagobah": 400,
    "Endor": 500
};
for (const planeta in distancias) {
    console.log(`Planeta: ${planeta}, Distancia: ${distancias[planeta]} millones de km`);
}


const criaturasStarWars: string[] = ["Wookiee", "Ewok", "Rancor", "Tauntaun"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura: ${index + 1}: ${criatura}`);
}); 

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura: ${index + 1}: ${criatura}`);
});
