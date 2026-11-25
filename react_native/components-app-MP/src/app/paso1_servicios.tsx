import { StyleSheet, Text, View } from 'react-native'

interface TarjetaServicioProps {
  nombre: string
  tipo: string
  detalle: string
  precio: number
}

function TarjetaServicio({ nombre, tipo, detalle, precio }: TarjetaServicioProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreAccesorio}>{nombre}</Text>
      <Text style={styles.datoOcupacion}>{tipo} · {detalle}</Text>
      <Text style={styles.datoFrase}>Precio: ${precio}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Servicios veterinarios</Text>

      <TarjetaServicio
        nombre="Consulta general"
        tipo="Perros y gatos"
        detalle="Revisión completa"
        precio={25}
      />

      <TarjetaServicio
        nombre="Vacunación"
        tipo="Todas las especies"
        detalle="Según carnet y edad"
        precio={18}
      />

      <TarjetaServicio
        nombre="Desparasitación"
        tipo="Perros y gatos"
        detalle="Dosis indicada por el veterinario"
        precio={12}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#F4F7F8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#17324D',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
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
    color: '#17324D',
  },
  datoOcupacion: {
    fontSize: 14,
    color: '#167D7A',
  },
  datoFrase: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#607786',
  },
})