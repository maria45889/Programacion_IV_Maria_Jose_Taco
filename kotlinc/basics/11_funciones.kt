fun activarPortal() {
    println("Activando portal interdimensional")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Maria Jose Taco activo el Portal")
}

fun viajar(dimension: String, viajes: Int, consumo: Int) {
    val consumoTotal = viajes * consumo
    println("Viajando a $dimension")
    println("Cantidad de viajes: $viajes")
    println("Consumo total: $consumoTotal")
}

fun calcular(precio: Double, cantidad: Int): Double {
    return precio * cantidad
}

fun main() {
    activarPortal()
    viajar("Marte", 3, 20)

    val costoTotal = calcular(25.0, 3)
    println("Costo total: $costoTotal")
}
