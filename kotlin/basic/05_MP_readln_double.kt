@file:JvmName("App")

fun main() {
    println("Cotización de atención veterinaria")
    print("Nombre del responsable: ")
    val responsable = readLine()!!
    print("Nombre de la mascota: ")
    val mascota = readLine()!!
    print("Cantidad de servicios: ")
    val cantidadServicios = readLine()!!.toInt()
    print("Costo por servicio: ")
    val costoServicio = readLine()!!.toDouble()
    print("Presupuesto disponible: ")
    val presupuesto = readLine()!!.toDouble()

    val total = cantidadServicios * costoServicio
    val saldo = presupuesto - total
    println()
    println("Resumen de atención")
    println("Responsable: $responsable")
    println("Mascota: $mascota")
    println("Servicios: $cantidadServicios")
    println("Costo por servicio: ${'$'}$costoServicio")
    println("Total a pagar: ${'$'}$total")
    println("Presupuesto: ${'$'}$presupuesto")
    println("Saldo restante: ${'$'}$saldo")
}
