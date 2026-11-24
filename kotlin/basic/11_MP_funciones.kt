fun iniciarConsultorio() {
    println("Iniciando el sistema de atención veterinaria")
    println("Cargando agenda y fichas de pacientes...")
    println("Consultorio Huellitas listo")
}

fun registrarConsulta(nombreMascota: String, servicio: String, costo: Int) {
    println("Registrando $servicio para $nombreMascota")
    println("Total a pagar: ${'$'}$costo")
}

fun calcularDescuento(costo: Double): Double = if (costo >= 100) costo * 0.15 else 0.0

fun contarVacunasAplicadas(lotes: Array<Int>): Int {
    var total = 0
    for (cantidad in lotes) {
        total += cantidad
        if (cantidad >= 50) println("Lote de vacunación grande: $cantidad dosis")
    }
    return total
}

fun main() {
    iniciarConsultorio()
    registrarConsulta("Luna", "consulta general", 30)
    registrarConsulta("Michi", "vacunación", 20)

    val descuento = calcularDescuento(120.0)
    println("Descuento por servicios: ${'$'}$descuento")

    val lotes = arrayOf(30, 50, 60, 20)
    println("Dosis disponibles en total: ${contarVacunasAplicadas(lotes)}")
}
