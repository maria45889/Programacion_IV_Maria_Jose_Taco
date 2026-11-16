fun main() {
    val mascotas = mutableListOf("Luna", "Max", "Michi")
    var opcion: Int

    do {
        println("\n=== Clínica Veterinaria Patitas ===")
        println("1. Agregar mascota")
        println("2. Mostrar mascotas")
        println("3. Modificar mascota")
        println("4. Eliminar mascota")
        println("5. Salir")
        print("Elige una opción: ")

        opcion = readLine()!!.toInt()

        when (opcion) {
            1 -> {
                print("Nombre de la mascota: ")
                val nombre = readLine()!!
                mascotas.add(nombre)
                println("Mascota agregada")
            }

            2 -> {
                println("Mascotas registradas:")
                for (indice in mascotas.indices) {
                    println("$indice: ${mascotas[indice]}")
                }
            }

            3 -> {
                println("¿Qué mascota deseas modificar?")
                for (indice in mascotas.indices) {
                    println("$indice: ${mascotas[indice]}")
                }

                val indice = readLine()!!.toInt()

                if (indice in mascotas.indices) {
                    print("Ingresa el nuevo nombre: ")
                    mascotas[indice] = readLine()!!
                    println("Mascota actualizada")
                } else {
                    println("Índice no válido")
                }
            }

            4 -> {
                println("¿Qué mascota deseas eliminar?")
                for (indice in mascotas.indices) {
                    println("$indice: ${mascotas[indice]}")
                }

                val indice = readLine()!!.toInt()

                if (indice in mascotas.indices) {
                    val eliminada = mascotas.removeAt(indice)
                    println("$eliminada fue eliminada")
                } else {
                    println("Índice no válido")
                }
            }

            5 -> println("¡Hasta pronto!")

            else -> println("Opción no válida")
        }
    } while (opcion != 5)
}