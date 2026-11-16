fun main() {
    val edades = arrayOf(3, 5, 2, 8, 1)

    println("Edades de algunas mascotas")
    println(edades[0])
    println(edades[2])
    println(edades[4])

    edades[4] = 4
    println("Nueva edad de la quinta mascota: ${edades[4]}")

    for (edad in edades) {
        println("Edad de la mascota: $edad")

        val edadEnDosAnios = edad + 2
        println("Edad dentro de dos años: $edadEnDosAnios")

        if (edadEnDosAnios >= 10) {
            val mensaje = "Requiere chequeo frecuente"
            println(mensaje)
        }
    }
}