class InventarioMedicamentos {
    private unidades: number = 10;

    usar(cantidad: number): void {
        if (cantidad > 0) {
            this.unidades = Math.max(0, this.unidades - cantidad);
        }
    }

    consultarStock(): number {
        return this.unidades;
    }
}

const inventario = new InventarioMedicamentos();
inventario.usar(15);
console.log(inventario.consultarStock());
inventario.usar(5);
console.log(inventario.consultarStock());
