fun main() {
    val mascotasAtendidas = arrayOf("Luna", "Michi", "Toby", "Nina", "Coco")
    println(mascotasAtendidas[0])
    println(mascotasAtendidas[1])
    mascotasAtendidas[4] = "Pipo"
    println("Último paciente actualizado: ${mascotasAtendidas[4]}")

    val pesos = arrayOf(8.0, 4.5, 12.0, 3.2, 6.1)
    for (peso in pesos) {
        val pesoConControl = peso + 0.2
        println("Peso registrado: $peso kg; referencia de control: $pesoConControl kg")
        if (peso >= 10.0) println("Programar seguimiento nutricional")
    }
}