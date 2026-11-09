class HistorialClinico {
    private vacunasRegistradas: number = 0;

    registrarVacuna(): void {
        this.vacunasRegistradas += 1;
        console.log("Vacuna registrada en la historia clínica.");
    }

    retirarVacunaRegistrada(): void {
        if (this.vacunasRegistradas > 0) {
            this.vacunasRegistradas -= 1;
        }
    }

    consultarVacunas(): number {
        return this.vacunasRegistradas;
    }
}

const historial = new HistorialClinico();
historial.registrarVacuna();
historial.registrarVacuna();
console.log(historial.consultarVacunas());
historial.retirarVacunaRegistrada();
console.log(historial.consultarVacunas());
