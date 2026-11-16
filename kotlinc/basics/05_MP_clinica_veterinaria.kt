fun main() {
    println("=== Clínica Veterinaria Patitas ===")

    print("Nombre del dueño/a: ")
    val nombreDueno = readLine()

    print("Nombre de la mascota: ")
    val nombreMascota = readLine()

    print("Cantidad de servicios: ")
    val cantidadServicios = readLine()!!.toInt()

    print("Costo por servicio: ")
    val costoPorServicio = readLine()!!.toDouble()

    print("Dinero disponible: ")
    val dineroDisponible = readLine()!!.toDouble()

    val costoTotal = cantidadServicios * costoPorServicio
    val saldo = dineroDisponible - costoTotal

    println("\n=== Reporte de atención ===")
    println("Dueño/a: $nombreDueno")
    println("Mascota: $nombreMascota")
    println("Costo total: $costoTotal")

    if (saldo >= 0) {
        println("Saldo restante: $saldo")
    } else {
        println("Dinero que falta: ${-saldo}")
    }
}