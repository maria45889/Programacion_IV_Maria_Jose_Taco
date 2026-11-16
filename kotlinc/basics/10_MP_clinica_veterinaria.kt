data class Servicio(
    val nombre: String,
    val costo: Double
)

fun main() {
    var presupuestoTotal = 0.0

    println("Presupuesto de la Clínica Veterinaria")

    for (cantidad in 1..6) {
        val costoOriginal = cantidad * 25.0
        var descuento = 0.0

        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento

        println("\nCantidad de servicios: $cantidad")
        println("Costo original: $costoOriginal")
        println("Descuento: $descuento")
        println("Costo final: $costoFinal")

        presupuestoTotal += costoFinal
    }

    println("\nPresupuesto total: $presupuestoTotal")

    val servicios = arrayOf(
        Servicio("Consulta general", 25.0),
        Servicio("Vacunación", 15.0),
        Servicio("Baño", 20.0),
        Servicio("Desparasitación", 12.0),
        Servicio("Corte de uñas", 8.0)
    )

    println("\nServicios disponibles")

    for (servicio in servicios) {
        println("${servicio.nombre}: $${servicio.costo}")
    }
}