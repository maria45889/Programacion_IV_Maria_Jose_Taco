data class Portal(
    val nombre: Sring,
    val energia: Int
)

fun main(){
    var presupuestoTotal = 0.0
    println("Presupuesto de Expedicion")
    for (viaje in 1..6){
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal >= 100){
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo Original $costoOriginal")
        println("Viaje $viaje")
        println("Viaje $viaje")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de la expedicion $presupuestoTotal creditos")
}


val portales = arrayOf(
    Portal("Tierra", 30)
    Portal("Marte", 65)
    Portal("Sartuno", 95)
    Portal("Jupiter", )
    Portal("Neptuno", 130)

)
