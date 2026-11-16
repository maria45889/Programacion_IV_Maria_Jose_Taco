fun calcularTotal(costos: List<Int>): Int {
    var total = 0

    for (costo in costos) {
        total += costo

        if (costo > 150) {
            println("Servicio costoso: $costo")
        }
    }

    return total
}

fun main() {
    val servicios = listOf("Consulta", "Vacunación", "Cirugía")
    var iteracion = 1

    for (servicio in servicios) {
        println("Servicio $iteracion: $servicio")
        iteracion++
    }

    val costos = listOf(25, 15, 200, 40, 120)
    val totalCostos = calcularTotal(costos)

    println("Costo total de los servicios: $totalCostos")
}