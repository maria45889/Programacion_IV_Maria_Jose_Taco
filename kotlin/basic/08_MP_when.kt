fun main() {
    val especie = 2
    when (especie) {
        1 -> println("Especie: perro")
        2 -> println("Especie: gato")
        3 -> println("Especie: conejo")
        else -> println("Especie no registrada")
    }

    print("Ingrese el día de la semana (1-7): ")
    val dia = readLine()!!.toInt()
    when (dia) {
        in 1..5 -> println("Atención regular en el consultorio")
        6, 7 -> println("Atención de urgencias y citas programadas")
        else -> println("Día no válido")
    }

    print("Ingrese el nivel de energía de la mascota (0-100): ")
    val energia = readLine()!!.toInt()
    when (energia) {
        in 0..19 -> println("Atención prioritaria: avisar al veterinario")
        in 20..49 -> println("Mantener en observación")
        in 50..100 -> println("Continuar con la revisión regular")
        else -> println("Nivel no válido")
    }

    val presupuesto = 80
    val costoConsulta = 35
    val veterinarioDisponible = true
    when {
        presupuesto >= costoConsulta && veterinarioDisponible -> println("Cita confirmada; saldo: ${presupuesto - costoConsulta}")
        presupuesto < costoConsulta && veterinarioDisponible -> println("El presupuesto no cubre la consulta")
        presupuesto >= costoConsulta && !veterinarioDisponible -> println("No hay veterinario disponible en este horario")
        else -> println("No se pudo confirmar la cita")
    }
}