// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaEquipoProps {
  modelo: string
  marca: string
  almacenamiento: string
  precio: number
  garantia?: string
}

function TarjetaEquipo({ modelo, marca, almacenamiento, precio, garantia }: TarjetaEquipoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEquipo}>{modelo}</Text>
      <Text style={styles.datoDireccion}>Marca: {marca}</Text>
      <Text style={styles.datoSistema}>Almacenamiento: {almacenamiento}</Text>
      <Text style={styles.datoRegion}>Precio: ${precio}</Text>
      <Text style={styles.datoRegion}>Garantía: {garantia ?? 'Consultar'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Equipos móviles disponibles</Text>
      <TarjetaEquipo
        modelo="Galaxy S24"
        marca="Samsung"
        almacenamiento="256 GB"
        precio={899}
        garantia="12 meses"
      />
      <TarjetaEquipo
        modelo="iPhone 15"
        marca="Apple"
        almacenamiento="128 GB"
        precio={799}
        garantia="12 meses"
      />
      <TarjetaEquipo
        modelo="Redmi Note 13"
        marca="Xiaomi"
        almacenamiento="256 GB"
        precio={249}
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
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreEquipo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoDireccion: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoSistema: {
    fontSize: 12,
    color: '#757575',
  },
  datoRegion: {
    fontSize: 12,
    color: '#757575',
  },
})