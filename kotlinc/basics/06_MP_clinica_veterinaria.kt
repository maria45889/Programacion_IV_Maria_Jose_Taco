fun main() {
    println("=== Condicionales en la Clínica Veterinaria ===")

    println("\nCondicional simple")
    var edadMascota = 5

    if (edadMascota >= 5) {
        println("Se recomienda un chequeo veterinario")
    }

    println("\nCondicional if-else")
    edadMascota = 2

    if (edadMascota >= 5) {
        println("Se recomienda un chequeo veterinario")
    } else {
        println("La mascota es joven")
    }

    println("\nCondicional múltiple")
    edadMascota = 10

    if (edadMascota >= 10) {
        println("La mascota es adulta mayor")
    } else if (edadMascota >= 5) {
        println("La mascota es adulta")
    } else {
        println("La mascota es joven")
    }

    println("\nCondicional enlazada")
    val tieneVacunas = true
    val tieneCita = true

    if (tieneCita) {
        println("La mascota tiene una cita")

        if (tieneVacunas) {
            println("Las vacunas están al día")
        } else {
            println("Se recomienda actualizar las vacunas")
        }
    } else {
        println("La mascota no tiene una cita")
    }
}