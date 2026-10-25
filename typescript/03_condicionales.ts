//condicionales
let nivel :number =5
if (nivel<5){
    console.log("El charmander puede evolucionar a Charmeleon")
} 

//condicionales dobles o de dos caminos
if (nivel<5){
    console.log("El charmander puede evolucionar a Charizard")
} else{
    console.log("El charmander no puede evolucionar a Charizard")
} 

//condicionales multiples o varios caminos 
if (nivel>=16){
    console.log("El charmander puede evolucionar a Charmeleon")
} else if (nivel>=8){
    console.log("El charmander puede evolucionar a charmeleon")
}else{
    console.log("El charmander no puede evolucionar a Charmeleon")
}

//condicionales if con operadores logicos &&
nivel=20;
let poder :number=25;
if (nivel >=8 && nivel<16 && poder >=20){
    console.log("El charmander puede evolucionar a Charmeleon")
} else if (nivel>=8){
    console.log("El charmander puede evolucionar a charmeleon")
}else{
    console.log("El charmander no puede evolucionar a Charmeleon")
}

//condicionales if con operadores or 
nivel =25;
poder=25;
if (nivel >=8 || nivel<16){
    console.log("El charmander puede evolucionar a Charmeleon")
} else if (nivel>=8){
    console.log("El charmander puede evolucionar a charmeleon")
}else{
    console.log("El charmander no puede evolucionar a Charmeleon")
}

/*
    condiciones :
    *maestro pokemon
    -debe de tener al menos 8 medallas pokemon
    -ser mayor o igual a 12 años
    -no estar suspendido
    
    *pokemon
    -nivel minimo 40
    -vida mayor o igual a 0 
    -ser tipo fuego,agua o electrico
    
    resultado:
    -Maestro (nivel ≥ 80, ataque ≥ 90 y vida ≥ 100)
    -Élite (nivel ≥ 60 y ataque ≥ 75 o defensa ≥ 80)
    -Avanzado (nivel ≥ 40, ataque ≥ 50 y vida > 0)
*/