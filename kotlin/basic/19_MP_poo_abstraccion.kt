abstract class ProcedimientoVeterinario {
    abstract fun realizar(nombreMascota: String)

    fun confirmarDisponible() {
        println("Procedimiento disponible en el consultorio Huellitas.")
    }
}

class Consulta : ProcedimientoVeterinario() {
    override fun realizar(nombreMascota: String) {
        println("Se realiza una consulta general para $nombreMascota.")
    }
}

class Desparasitacion : ProcedimientoVeterinario() {
    override fun realizar(nombreMascota: String) {
        println("Se registra la desparasitación de $nombreMascota según indicación veterinaria.")
    }
}

class RevisionDental : ProcedimientoVeterinario() {
    override fun realizar(nombreMascota: String) {
        println("Se realiza una revisión dental para $nombreMascota.")
    }
}

fun main() {
    val procedimientos: List<ProcedimientoVeterinario> = listOf(
        Consulta(),
        Desparasitacion(),
        RevisionDental()
    )

    for (procedimiento in procedimientos) {
        procedimiento.confirmarDisponible()
        procedimiento.realizar("Michi")
    }
}