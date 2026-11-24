open class PacienteVeterinario(
    val nombre: String,
    val edad: Int
) {
    open fun mostrarFicha() {
        println("$nombre, $edad años")
    }

    fun registrarConsulta() {
        println("Consulta registrada para $nombre.")
    }
}

class Perro(
    nombre: String,
    edad: Int,
    val raza: String
) : PacienteVeterinario(nombre, edad) {
    override fun mostrarFicha() {
        println("Perro: $nombre | Raza: $raza | Edad: $edad años")
    }

    fun revisarVacunas() {
        println("Revisando el carnet de vacunas de $nombre.")
    }
}

class Gato(
    nombre: String,
    edad: Int,
    val viveEnCasa: Boolean
) : PacienteVeterinario(nombre, edad) {
    override fun mostrarFicha() {
        val hogar = if (viveEnCasa) "vive en casa" else "tiene acceso al exterior"
        println("Gato: $nombre | $hogar | Edad: $edad años")
    }
}

fun main() {
    val luna = Perro("Luna", 4, "Labrador")
    val michi = Gato("Michi", 2, true)

    luna.mostrarFicha()
    luna.registrarConsulta()
    luna.revisarVacunas()

    michi.mostrarFicha()
    michi.registrarConsulta()
}