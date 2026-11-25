fun main() {
    println("OPERADORES EN EL CONSULTORIO HUELLITAS")
    val costoConsulta = 30.0
    val costoVacuna = 15.0
    println("Consulta más vacuna: ${costoConsulta + costoVacuna}")
    println("Diferencia entre costos: ${costoConsulta - costoVacuna}")
    println("Dos consultas: ${costoConsulta * 2}")
    println("Una consulta en tres pagos: ${costoConsulta / 3}")

    val vacunasEnCaja = 17
    val vacunasPorEstante = 5
    println("Vacunas sobrantes al organizar el estante: ${vacunasEnCaja % vacunasPorEstante}")
    println("Consulta y dos vacunas: ${costoConsulta + costoVacuna * 2}")

    println("COMPARACIÓN DE COSTOS")
    println("Los costos son iguales: ${costoConsulta == costoVacuna}")
    println("Los costos son diferentes: ${costoConsulta != costoVacuna}")
    println("La consulta cuesta más que la vacuna: ${costoConsulta > costoVacuna}")
    println("La vacuna cuesta al menos 15: ${costoVacuna >= 15}")
    println("La consulta cuesta menos de 50: ${costoConsulta < 50}")
    println("La vacuna cuesta máximo 20: ${costoVacuna <= 20}")

    val edadMascota = 3
    val tieneCarnet = true
    println("Puede recibir vacuna: ${edadMascota > 0 && tieneCarnet}")
}