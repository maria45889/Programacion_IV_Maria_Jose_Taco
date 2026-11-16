fun main() {
    println("=== Clínica Veterinaria Patitas ===")

    print("Ingrese su nombre: ")
    val nombreDueno = readLine()

    println("Bienvenido/a, $nombreDueno")

    print("Ingrese el nombre de su mascota: ")
    val nombreMascota = readLine()

    print("Ingrese la edad de su mascota: ")
    val edadMascota = readLine()!!.toInt()

    println("\n=== Registro de consulta ===")
    println("Dueño/a: $nombreDueno")
    println("Mascota: $nombreMascota")
    println("Edad: $edadMascota años")

    println("\nCalculadora de costo")
    print("Ingrese el costo de la consulta: ")
    val costoConsulta = readLine()!!.toDouble()

    print("Ingrese el descuento: ")
    val descuento = readLine()!!.toDouble()

    val totalPagar = costoConsulta - descuento
    println("Total a pagar: $totalPagar")
}