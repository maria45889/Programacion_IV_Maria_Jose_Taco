fun calcularTotalConsultas(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 50) println("Servicio especializado: ${'$'}$costo")
    }
    return total
}

fun main() {
    val especies = listOf("Perro", "Gato", "Conejo", "Ave")
    for ((indice, especie) in especies.withIndex()) {
        println("Paciente ${indice + 1}: $especie")
    }

    val costos = listOf(30, 45, 60, 25, 80)
    println("Total de servicios veterinarios: ${calcularTotalConsultas(costos)}")
}
