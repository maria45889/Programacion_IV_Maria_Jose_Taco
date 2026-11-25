data class CitaVeterinaria(val nombreMascota: String, val confirmada: Boolean)

fun main() {
    println("Citas de la mañana")
    for (numero in 1..5) println("Revisando la cita #$numero")

    println("Turnos pendientes")
    for (turno in 10 downTo 1) println("Quedan $turno turnos")

    println("Códigos de pacientes impares")
    for (codigo in 1..15 step 2) println("Paciente #$codigo")

    val costoConsulta = 30
    for (cantidad in 1..5) println("$cantidad consultas cuestan ${cantidad * costoConsulta}")

    val citas = arrayOf(CitaVeterinaria("Luna", true), CitaVeterinaria("Michi", false))
    for (cita in citas) {
        val estado = if (cita.confirmada) "confirmada" else "pendiente"
        println("Cita de ${cita.nombreMascota}: $estado")
    }
}