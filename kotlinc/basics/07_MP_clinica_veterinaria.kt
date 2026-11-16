fun main() {
    val mascota = Mascota("Luna", 6)

    if (mascota.edad >= 10) {
        println("${mascota.nombre}: necesita cuidados para una mascota adulta mayor")
    } else if (mascota.edad >= 5) {
        println("${mascota.nombre}: es una mascota adulta")
    } else if (mascota.edad >= 1) {
        println("${mascota.nombre}: es una mascota joven")
    } else {
        println("${mascota.nombre}: es una cría")
    }

    val cita = CitaVeterinaria(20.0, true, false)

    if (cita.veterinarioDisponible) {
        if (cita.pagoConfirmado) {
            println("Atención autorizada")
        } else {
            println("Falta confirmar el pago")
        }
    } else {
        println("No hay un veterinario disponible")
    }
}

data class Mascota(
    val nombre: String,
    val edad: Int
)

data class CitaVeterinaria(
    val costo: Double,
    val pagoConfirmado: Boolean,
    val veterinarioDisponible: Boolean
)