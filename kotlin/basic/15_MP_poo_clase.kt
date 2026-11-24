class Mascota(
    var nombre: String,
    var especie: String,
    var edad: Int
) {
    fun mostrarFicha() {
        println("Paciente: $nombre | Especie: $especie | Edad: $edad años")
    }

    fun cumplirAnio() {
        edad++
        println("$nombre ahora tiene $edad años")
    }
}

fun main() {
    val luna = Mascota("Luna", "Perro", 4)
    val michi = Mascota("Michi", "Gato", 2)

    luna.mostrarFicha()
    luna.cumplirAnio()
    michi.mostrarFicha()
}