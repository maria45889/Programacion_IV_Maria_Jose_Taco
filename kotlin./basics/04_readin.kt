fun main() {
    println("Imputs en terminal ReadLine")
    println("Ingrese su nombre: ")
    val nombre = readLine()
    println("Bienvenido a otro universo $nombre")

    println("Ingrese su edad: ")
    val edad = readLine()?.toInt()
    println("Su edad es: $edad")

    println("Calculadora de Energía")
    println("Energia Inicial")
    val energiaInicial = readLine()!!.toInt()
    println("Energia Consumida:")
    val energiaConsumida = readLine()!!.toInt()
    val energiaRestante = energiaInicial - energiaConsumida
    println("Energía restante $energiaRestante")
}