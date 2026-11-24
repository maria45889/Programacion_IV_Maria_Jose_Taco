const val STOCK_MAXIMO_VACUNAS = 100

fun main() {
    var vacunasDisponibles = 12
    println("Vacunas disponibles al inicio: $vacunasDisponibles")
    vacunasDisponibles = 10
    println("Vacunas disponibles actualizadas: $vacunasDisponibles")
    println("Tipos de datos del consultorio Huellitas")

    val mascotasAtendidas: Int = 25
    val codigoPaciente: Long = 1234567890123L
    val descuento: Float = 10.5f
    val costoConsulta: Double = 29.99
    val inicialEspecie: Char = 'P'
    val consultorioAbierto: Boolean = true
    val nombreMascota: String = "Luna"

    println("Mascotas atendidas: $mascotasAtendidas")
    println("Código del paciente: $codigoPaciente")
    println("Descuento: $descuento%")
    println("Costo de consulta: ${'$'}$costoConsulta")
    println("Inicial de especie: $inicialEspecie")
    println("Consultorio abierto: $consultorioAbierto")
    println("Nombre de mascota: $nombreMascota")
    println("Stock máximo de vacunas: $STOCK_MAXIMO_VACUNAS")
}
