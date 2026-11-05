fun main() {
    println("Operadores en Kotlin")
    println("Operadores Aritméticos")
    var numero1: Double = 10.0
    var numero2: Double = 5.0
    var suma: Double = numero1 + numero2

    println("suma + :  numero1 + numero2 ${numero1 + numero2}")
    println("suma + :  numero1 + numero2 ${suma}")
    println("resta - :  numero1 - numero2 ${numero1 - numero2}")
    println("multiplicación * :  numero1 * numero2 ${numero1 * numero2}")
    println("división / :  numero1 / numero2 ${numero1 / numero2}")

    println("Prioridades de los operacionnes aritmeticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")

    var cristales = 10+3*5+5
    println("cristales: $cristales")
    var energia = 15/5*5
    println("energia: $energia")
    var conbustible = 100+20/4*3-10%3
    println("conbustible: $conbustible")

    println("Operadores de Comparación")
    println("Igual a == ${10 == 10}")
    println("Igual a == ${10 == 11}")
    println("Distinto de != ${10 != 10}")
    println("Distinto de != ${10 != 11}")
    println("Mayor que > ${10 > 5}")
    println("Mayor que > ${10 > 5}")
    println("Menor que < ${10 < 5}")
    println("Menor que < ${10 < 5}")
    println("Mayor o igual que >= ${10 >= 10}")
    println("Menor o igual que <= ${10 <= 10}")

}