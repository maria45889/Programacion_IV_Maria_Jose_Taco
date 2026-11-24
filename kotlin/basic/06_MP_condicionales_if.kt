fun main() {
    println("Condicionales if en el consultorio veterinario")
    var vacunasDisponibles = 80
    if (vacunasDisponibles >= 50) println("Hay suficientes vacunas para atender mascotas")

    vacunasDisponibles = 30
    if (vacunasDisponibles >= 50) println("Hay suficientes vacunas para la jornada")
    else println("Se necesita reabastecer el inventario de vacunas")

    vacunasDisponibles = 70
    if (vacunasDisponibles >= 100) println("Inventario óptimo: se puede organizar una campaña")
    else if (vacunasDisponibles >= 50) println("Inventario moderado: atención regular disponible")
    else println("Inventario bajo: limitar nuevas citas de vacunación")

    val veterinarioDisponible = true
    if (vacunasDisponibles >= 50) {
        if (veterinarioDisponible) println("La jornada de vacunación puede realizarse")
        else println("Hay vacunas, pero falta confirmar al veterinario")
    } else println("No hay suficientes vacunas para la jornada")
}