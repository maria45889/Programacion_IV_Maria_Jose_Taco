open class ServicioVeterinario {
    open fun atender(nombreMascota: String) {
        println("Atención veterinaria para $nombreMascota.")
    }
}

class ConsultaGeneral : ServicioVeterinario() {
    override fun atender(nombreMascota: String) {
        println("Consulta general de $nombreMascota: revisar su estado de salud.")
    }
}

class Vacunacion : ServicioVeterinario() {
    override fun atender(nombreMascota: String) {
        println("Vacunación de $nombreMascota: actualizar su carnet.")
    }
}

class ControlPreventivo : ServicioVeterinario() {
    override fun atender(nombreMascota: String) {
        println("Control preventivo de $nombreMascota: registrar peso y próxima cita.")
    }
}

fun main() {
    val servicios: List<ServicioVeterinario> = listOf(
        ConsultaGeneral(),
        Vacunacion(),
        ControlPreventivo()
    )

    for (servicio in servicios) {
        servicio.atender("Luna")
    }
}