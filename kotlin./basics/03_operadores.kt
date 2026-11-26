fun main() {
    println("Operadores en Kotlin")
    println("Operadores aritmeticos")

    var numero1: Double = 10.50
    var numero2: Double = 5.0
    var suma: Double = numero1 + numero2

    println("Suma + : $numero1 + $numero2 = ${numero1 + numero2}")
    println("Suma + : $suma")
    println("Resta: $numero1 - $numero2 = ${numero1 - numero2}")
    println("Multiplicación: $numero1 * $numero2 = ${numero1 * numero2}")
    println("División: $numero1 / $numero2 = ${numero1 / numero2}")
    println("Residuo: $numero1 % $numero2 = ${numero1 % numero2}")


    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val cristales = 10+3*5+5
    println("Cristales: $cristales")
    val energia = 15/5*5
    println("Energia: $energia")
    val combustible = 100+20/4*3-10%3
    println("Combustible: $combustible")

    println("Operadores de comparacion")
    println("Igual a == : ${10 == 10}")
    println("Igual a == : ${10 == 5}")
    println("Distinto a != : ${10 != 5}")
    println("Distinto a != : ${10 != 10}")
    println("Mayor a > : ${10 > 5}")
    println("Mayor a > : ${15 > 10}")
    println("Menor a < : ${10 < 5}")
    println("Menor a < : ${15 < 10}")
    println("Mayor o igual a >= : ${10 >= 5}")
    println("Mayor o igual a >= : ${15 >= 10}")
    println("Menor o igual a <= : ${10 <= 5}")
    println("Menor o igual a <= : ${15 <= 10}")

    println("Operadores Logicos")
    println("&& and Y")
    println(" || and or")
    println("! NOT")

    val combustible = 80
    val portalActivo = true

    val puedeViajar = combustible >= 50 && portalActivo

    println("¿Puede viajar? $puedeViajar")
    println("Negado ? $negado")

    val tieneTarjeta = false
    val autorizadoPorRick = true
    val puedeEntrar = tieneTarjeta || autorizadoPorRick

    println("¿Puede entrar? $puedeEntrar")
    println("Operadores de asignacion")
    println("=, +=, -=, *=, /=, %=")

    println("Control de Nave - Rick Sanchez y Domenica Carrera")
    val pilotoNave = "Domenica Carrera"
    var combustibleNave = 100
    var portalesUniverso = 5
    val motorActivoNave = true

    println("Piloto: $pilotoNave")
    combustibleNave += 40
    portalesUniverso--
    println("Combustible: $combustibleNave")
    println("Portales restantes: $portalesUniverso")
    val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
    val tienePortales = portalesUniverso >= 0
    val puedeViajarNave = tieneCombustible && tienePortales && motorActivoNave
    println("¿Tiene combustible? $tieneCombustible")
    println("¿Tiene portales? $tienePortales")
    println("¿Puede viajar? $puedeViajarNave")
}