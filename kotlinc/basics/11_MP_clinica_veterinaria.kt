fun abrirClinica() {
    println("Abriendo la Clínica Veterinaria Patitas")
    println("Preparando consultorio...")
    println("La clínica está lista para atender")
}

fun atenderMascota(nombre: String, servicio: String, costo: Double) {
    println("Atendiendo a $nombre")
    println("Servicio: $servicio")
    println("Costo: $costo")
}

fun calcularCosto(precio: Double, cantidad: Int): Double {
    return precio * cantidad
}

fun main() {
    abrirClinica()
    atenderMascota("Luna", "Vacunación", 15.0)

    val costoTotal = calcularCosto(15.0, 2)
    println("Costo total de las vacunas: $costoTotal")
} 