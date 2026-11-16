fun main() {
    println("Clínica Veterinaria Patitas")
    println("Operadores en Kotlin")

    println("\nOperadores aritméticos")

    val costoConsulta: Double = 20.50
    val costoVacuna: Double = 15.00

    println("Consulta + vacuna: $costoConsulta + $costoVacuna = ${costoConsulta + costoVacuna}")
    println("Consulta - vacuna: ${costoConsulta - costoVacuna}")
    println("Dos vacunas: $costoVacuna * 2 = ${costoVacuna * 2}")
    println("Consulta dividida entre 2: ${costoConsulta / 2}")
    println("Residuo de 10 entre 3: ${10 % 3}")

    println("\nPrioridad de operaciones")
    val costoTratamiento = 20 + 3 * 5
    println("Costo del tratamiento: $costoTratamiento")

    println("\nOperadores de comparación")
    val edadMascota = 3
    println("¿Tiene 3 años?: ${edadMascota == 3}")
    println("¿Es diferente de 5 años?: ${edadMascota != 5}")
    println("¿Tiene más de 1 año?: ${edadMascota > 1}")
    println("¿Tiene menos de 10 años?: ${edadMascota < 10}")

    println("\nOperadores lógicos")
    val tieneVacunas = true
    val tiene cita = true
    val puedeSerAtendida = tieneVacunas && tiene cita

    println("¿Tiene vacunas y cita?: $puedeSerAtendida")

    println("\nOperadores de asignación")
    var mascotasRegistradas = 10
    mascotasRegistradas += 2
    println("Mascotas registradas después de agregar 2: $mascotasRegistradas")
} 