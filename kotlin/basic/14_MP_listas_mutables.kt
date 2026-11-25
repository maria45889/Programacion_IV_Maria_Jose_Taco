fun main() {
    val mascotas = mutableListOf("Luna", "Michi", "Toby")
    var opcion: Int

    do {
        println()
        println("--- Consultorio veterinario Huellitas ---")
        println("1. Registrar mascota")
        println("2. Mostrar pacientes")
        println("3. Modificar nombre de mascota")
        println("4. Dar de baja un registro")
        println("5. Salir")
        print("Elige una opción: ")
        opcion = readLine()?.toIntOrNull() ?: 0

        when (opcion) {
            1 -> {
                print("Nombre de la mascota: ")
                val nombre = readLine()?.trim().orEmpty()
                if (nombre.isNotEmpty()) {
                    mascotas.add(nombre)
                    println("Paciente agregado al registro.")
                } else println("El nombre no puede estar vacío.")
            }
            2 -> {
                println("Pacientes registrados:")
                if (mascotas.isEmpty()) println("No hay mascotas registradas.")
                else mascotas.forEachIndexed { indice, nombre -> println("$indice -> $nombre") }
            }
            3 -> {
                print("Índice de la mascota a modificar: ")
                val indice = readLine()?.toIntOrNull() ?: -1
                if (indice in mascotas.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine()?.trim().orEmpty()
                    if (nuevoNombre.isNotEmpty()) {
                        mascotas[indice] = nuevoNombre
                        println("Registro actualizado.")
                    } else println("El nombre no puede estar vacío.")
                } else println("Índice inválido.")
            }
            4 -> {
                print("Índice de la mascota que desea retirar: ")
                val indice = readLine()?.toIntOrNull() ?: -1
                if (indice in mascotas.indices) println("Se retiró el registro de ${mascotas.removeAt(indice)}.")
                else println("Índice inválido.")
            }
            5 -> println("Cerrando el sistema del consultorio...")
            else -> println("Opción no válida.")
        }
    } while (opcion != 5)
}