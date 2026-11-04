import { StyleSheet, Text, View } from 'react-native'

interface TarjetaAccesorioProps {
  nombre: string
  tipo: string
  compatibilidad: string
  precio: number
}

function TarjetaAccesorio({ nombre, tipo, compatibilidad, precio }: TarjetaAccesorioProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreAccesorio}>{nombre}</Text>
      <Text style={styles.datoOcupacion}>{tipo} · {compatibilidad}</Text>
      <Text style={styles.datoFrase}>Precio: ${precio}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Accesorios para equipos móviles</Text>

      <TarjetaAccesorio
        nombre="Cargador rápido"
        tipo="25 W"
        compatibilidad="USB-C"
        precio={25}
      />

      <TarjetaAccesorio
        nombre="Audífonos inalámbricos"
        tipo="Bluetooth"
        compatibilidad="Android y iOS"
        precio={49}
      />

      <TarjetaAccesorio
        nombre="Funda protectora"
        tipo="Antigolpes"
        compatibilidad="Modelos seleccionados"
        precio={15}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreAccesorio: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  datoOcupacion: {
    fontSize: 14,
    color: '#0d47a1',
  },
  datoFrase: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#424242',
  },
})