data class Mascota(
    val nombre: String,
    val edad: Int
)

fun main() {
    for (i in 1..5) {
        println("Atendiendo a la mascota número $i")
    }

    println("\nCuenta regresiva para iniciar la consulta")
    for (i in 5 downTo 1) {
        println(i)
    }

    println("\nTurnos cada 2 horas")
    for (hora in 8..18 step 2) {
        println("Turno disponible a las $hora:00")
    }

    println("\nCosto de vacunas")
    val costoVacuna = 3.0

    for (cantidad in 1..5) {
        val resultado = costoVacuna * cantidad
        println("$cantidad vacuna(s) = $$resultado")
    }
}