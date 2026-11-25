data class Consultorio(val nombre: String, val consultasAtendidas: Int)

fun main() {
    var totalIngresos = 0.0
    println("Resumen de consultas veterinarias")

    for (cantidad in 1..4) {
        val costoOriginal = cantidad * 25.0
        val descuento = if (costoOriginal >= 75.0) costoOriginal * 0.10 else 0.0
        val costoFinal = costoOriginal - descuento
        println("Paquete de $cantidad consultas: total ${costoFinal} (descuento ${descuento})")
        totalIngresos += costoFinal
    }
    println("Ingresos proyectados: %.2f".format(totalIngresos))

    val consultorios = arrayOf(
        Consultorio("General", 30),
        Consultorio("Vacunación", 65),
        Consultorio("Cirugía", 95),
        Consultorio("Recuperación", 130)
    )
    val capacidadPorTurno = 50
    for (consultorio in consultorios) {
        println()
        println("Área: ${consultorio.nombre}; pacientes atendidos: ${consultorio.consultasAtendidas}")
        when {
            consultorio.consultasAtendidas < 50 -> println("Actividad baja: hay espacio para nuevas citas")
            consultorio.consultasAtendidas < 80 -> println("Actividad moderada")
            consultorio.consultasAtendidas < 120 -> println("Actividad alta")
            else -> println("Capacidad máxima alcanzada")
        }
        if (consultorio.consultasAtendidas >= capacidadPorTurno) {
            println("Turno completo; pacientes sobre la capacidad: ${consultorio.consultasAtendidas - capacidadPorTurno}")
        }
    }
}