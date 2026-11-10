fun main() {
val robot = Robot("Robot Ayudante", 65)
    if (robot.bateria >= 50){
        println("Funcionamiento Optimo")
    } else if (robot.bateria >= 40) {
        println("FUncionamiento normal")
    } else if (robot.bateria >= 20) {
        println("Bateria baja")
    } else {
        println("Estado critico")
    }

    val nave = NaveEspacial(120, true, false)
    if (nave.energia >= 100){
        if (nave.autorizacion) {
            println("Viaje Autorizado")
        } else {
            println("Mry o tiene autorizacion")
        }
    } else {
        println("Energia insufiviente")
    }
    
}

data class Robot(
    val nombre: String,
    val bateria: Int
)

data class NaveEspacial(
    val energia: Int,
    val motorACtivo: Boolean,
    val autorizacion: Boolean
)