class FichaVeterinaria(
    val nombreMascota: String,
    private var pesoKg: Double,
    private var vacunasAplicadas: Int = 0
) {
    fun actualizarPeso(nuevoPesoKg: Double) {
        if (nuevoPesoKg > 0) {
            pesoKg = nuevoPesoKg
            println("Peso actualizado para $nombreMascota: $pesoKg kg")
        } else {
            println("El peso debe ser mayor que cero.")
        }
    }

    fun registrarVacuna() {
        vacunasAplicadas++
        println("Vacuna registrada para $nombreMascota.")
    }

    fun mostrarResumen() {
        println("Ficha de $nombreMascota: $pesoKg kg, $vacunasAplicadas vacunas registradas.")
    }
}

fun main() {
    val fichaLuna = FichaVeterinaria("Luna", 8.5)
    fichaLuna.mostrarResumen()
    fichaLuna.actualizarPeso(9.0)
    fichaLuna.registrarVacuna()
    fichaLuna.mostrarResumen()
}