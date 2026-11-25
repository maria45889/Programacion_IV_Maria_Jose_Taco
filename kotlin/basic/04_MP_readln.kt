@file:JvmName("App")

fun main() {
    println("Sistema de atención veterinaria Huellitas")
    print("Nombre del responsable: ")
    val responsable = readLine()!!
    println("Bienvenido/a, $responsable")

    print("Perros atendidos hoy: ")
    val perrosAtendidos = readLine()!!.toInt()
    print("Gatos atendidos hoy: ")
    val gatosAtendidos = readLine()!!.toInt()
    println("Total de mascotas atendidas: ${perrosAtendidos + gatosAtendidos}")

    print("Vacunas disponibles al inicio: ")
    val stockInicial = readLine()!!.toInt()
    print("Vacunas aplicadas hoy: ")
    val vacunasAplicadas = readLine()!!.toInt()
    println("Vacunas restantes: ${stockInicial - vacunasAplicadas}")
}