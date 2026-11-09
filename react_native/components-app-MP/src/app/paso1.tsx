// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaPacienteProps {
  nombre: string
  especie: string
  raza: string
  edad: number
  vacunas?: string
}

function TarjetaPaciente({ nombre, especie, raza, edad, vacunas }: TarjetaPacienteProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEquipo}>{nombre}</Text>
      <Text style={styles.datoDireccion}>Especie: {especie}</Text>
      <Text style={styles.datoSistema}>Raza: {raza}</Text>
      <Text style={styles.datoRegion}>Edad: {edad} años</Text>
      <Text style={styles.datoRegion}>Vacunas: {vacunas ?? 'Por revisar'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Pacientes de Veterinaria Huellitas</Text>
      <TarjetaPaciente
        nombre="Luna"
        especie="Perro"
        raza="Labrador"
        edad={4}
        vacunas="Al día"
      />
      <TarjetaPaciente
        nombre="Michi"
        especie="Gato"
        raza="Mestizo"
        edad={2}
        vacunas="Al día"
      />
      <TarjetaPaciente
        nombre="Toby"
        especie="Conejo"
        raza="Mini Rex"
        edad={1}
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