for (let i = 2; i < 50; i += 5) {
    console.log(`Consulta veterinaria número: ${i}`);
}

for (let i = 0; i < 10; i++) {
    console.log(`Jaula de recuperación revisada: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log("La revisión de citas fue interrumpida.");
        break;
    }
    if (i === 30) {
        console.log("Se omitió esta cita porque fue cancelada.");
        continue;
    }
    console.log(`Cita veterinaria en revisión: ${i}`);
}
