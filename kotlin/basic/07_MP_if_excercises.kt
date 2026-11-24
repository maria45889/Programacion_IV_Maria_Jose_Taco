data class MascotaRegistrada(val edad: Int, val tieneCita: Boolean)
data class Paciente(val nombre: String, val nivelEnergia: Int)
data class SolicitudCirugia(val ayunoConfirmado: Boolean, val veterinarioDisponible: Boolean, val responsableAutorizo: Boolean)

fun main() {
    val mascota = MascotaRegistrada(4, true)
    if (mascota.edad >= 0 && mascota.tieneCita) println("La mascota puede pasar a consulta")

    val pesos = arrayOf(2.5, 8.0, 15.2, 4.3, 6.1)
    if (pesos[2] >= 15.0) println("Revisar el plan nutricional") else println("Peso dentro del rango de seguimiento")

    val consultasSemanales = arrayOf(18, 22, 20)
    val promedio = (consultasSemanales[0] + consultasSemanales[1] + consultasSemanales[2]) / 3
    println("Promedio de consultas por semana: $promedio")
    if (promedio >= 20) println("La meta de atención se cumplió") else println("La meta aún no se cumple")

    val paciente = Paciente("Luna", 80)
    when {
        paciente.nivelEnergia >= 80 -> println("${paciente.nombre}: estado activo")
        paciente.nivelEnergia >= 50 -> println("${paciente.nombre}: continuar observación")
        paciente.nivelEnergia >= 20 -> println("${paciente.nombre}: avisar al veterinario")
        else -> println("${paciente.nombre}: atención prioritaria")
    }

    val cirugia = SolicitudCirugia(true, true, false)
    if (cirugia.ayunoConfirmado && cirugia.veterinarioDisponible && cirugia.responsableAutorizo) println("Cirugía autorizada")
    else if (!cirugia.ayunoConfirmado) println("Falta confirmar el ayuno")
    else if (!cirugia.veterinarioDisponible) println("Falta confirmar al veterinario")
    else println("Falta autorización del responsable")
}