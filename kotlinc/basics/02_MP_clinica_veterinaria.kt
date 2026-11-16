const val MAX_MASCOTAS = 100

fun main() {
    var mascotasRegistradas = 10

    println("Clínica Veterinaria Patitas")
    println("Autora: Maria José")

    mascotasRegistradas = 12
    println("Mascotas registradas:")
    println(mascotasRegistradas)

    println("Tipos de variables en Kotlin")

    val edadMascota: Int = 3
    val nombreMascota: String = "Luna"
    val costoConsulta: Double = 20.50
    val tieneVacunas: Boolean = true

    println("Nombre de la mascota: $nombreMascota")
    println("Edad: $edadMascota años")
    println("Costo de consulta: $costoConsulta")
    println("¿Tiene vacunas?: $tieneVacunas")
    println("Máximo de mascotas: $MAX_MASCOTAS")
}