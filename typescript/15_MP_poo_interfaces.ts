interface EquipoMovil {
    modelo: string;
    gama: string;
    mostrarCaracteristicas(): void;
    registrarVenta(): void;
}

class SamsungGalaxy implements EquipoMovil {
    modelo = "Samsung Galaxy S24";
    gama = "Premium";

    mostrarCaracteristicas(): void {
        console.log(`${this.modelo}: pantalla AMOLED y cámara de alta resolución.`);
    }

    registrarVenta(): void {
        console.log(`Venta registrada: ${this.modelo}.`);
    }
}

class IPhone implements EquipoMovil {
    modelo = "iPhone 15";
    gama = "Premium";

    mostrarCaracteristicas(): void {
        console.log(`${this.modelo}: sistema iOS y cámara avanzada.`);
    }

    registrarVenta(): void {
        console.log(`Venta registrada: ${this.modelo}.`);
    }
}

const samsung = new SamsungGalaxy();
const iphone = new IPhone();

samsung.mostrarCaracteristicas();
samsung.registrarVenta();
iphone.mostrarCaracteristicas();
iphone.registrarVenta();
