fun main() {
    val servicio = 2

    when (servicio) {
        1 -> println("Servicio: Consulta general")
        2 -> println("Servicio: Vacunación")
        3 -> println("Servicio: Baño")
        else -> println("Servicio no disponible")
    }

    print("Ingrese el día de la cita (1-7): ")
    val dia = readLine()!!.toInt()

    when (dia) {
        1, 2, 3, 4, 5 -> println("La clínica está atendiendo")
        6, 7 -> println("La clínica está cerrada")
        else -> println("Día inválido")
    }

    print("Ingrese la edad de la mascota: ")
    val edad = readLine()!!.toInt()

    when (edad) {
        in 0..1 -> println("Mascota cachorro o cría")
        in 2..7 -> println("Mascota adulta")
        in 8..30 -> println("Mascota adulta mayor")
        else -> println("Edad fuera del rango")
    }

    val dineroDisponible = 50.0
    val costoConsulta = 30.0
    val veterinarioDisponible = true

    when {
        dineroDisponible >= costoConsulta && veterinarioDisponible -> {
            val saldo = dineroDisponible - costoConsulta
            println("Consulta autorizada")
            println("Saldo restante: $saldo")
        }
        dineroDisponible < costoConsulta && veterinarioDisponible -> {
            println("Dinero insuficiente")
        }
        !veterinarioDisponible -> {
            println("No hay un veterinario disponible")
        }
    }
}