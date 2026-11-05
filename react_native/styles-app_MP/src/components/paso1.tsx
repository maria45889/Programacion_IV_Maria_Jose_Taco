import { ScrollView, StyleSheet, Text, View } from 'react-native'

const servicios = ['Consulta general', 'Vacunación', 'Desparasitación', 'Control preventivo', 'Revisión dental', 'Corte de uñas']

export function Paso1() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Huellitas · servicios veterinarios</Text>
      <Text style={styles.etiqueta}>flexDirection: &apos;column&apos;</Text>
      <View style={styles.columna}>
        {servicios.slice(0, 3).map((servicio) => (
          <View key={servicio} style={[styles.tarjeta, styles.azul]}>
            <Text style={styles.texto}>{servicio}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.etiqueta}>flexDirection: &apos;row&apos; + space-between</Text>
      <View style={styles.fila}>
        {['Perros', 'Gatos', 'Otras mascotas'].map((categoria, index) => (
          <View key={categoria} style={[styles.chip, { backgroundColor: ['#087e8b', '#1565c0', '#7c3aed'][index] }]}>
            <Text style={styles.texto}>{categoria}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={styles.fila}>
        <View style={[styles.cajaFlex, { flex: 2, backgroundColor: '#0f766e' }]}>
          <Text style={styles.texto}>Consultas</Text>
        </View>
        <View style={[styles.cajaFlex, { flex: 1, backgroundColor: '#14b8a6' }]}>
          <Text style={styles.texto}>Vacunas</Text>
        </View>
        <View style={[styles.cajaFlex, { flex: 1, backgroundColor: '#2dd4bf' }]}>
          <Text style={styles.texto}>Cuidados</Text>
        </View>
      </View>

      <Text style={styles.etiqueta}>flexWrap: &apos;wrap&apos; + gap</Text>
      <View style={styles.rejilla}>
        {['Consulta', 'Vacunas', 'Desparasitación', 'Control', 'Higiene', 'Prevención'].map((etiqueta) => (
          <View key={etiqueta} style={styles.etiquetaChip}>
            <Text style={styles.texto}>{etiqueta}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f4f7fb' },
  contenido: { gap: 14, padding: 18 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800' },
  etiqueta: { color: '#627d98', fontFamily: 'monospace', fontSize: 12, marginTop: 6 },
  columna: { gap: 8 },
  fila: { alignItems: 'center', flexDirection: 'row', gap: 8, justifyContent: 'space-between' },
  tarjeta: { alignItems: 'center', borderRadius: 10, padding: 12 },
  azul: { backgroundColor: '#1565c0' },
  texto: { color: '#fff', fontSize: 13, fontWeight: '700' },
  chip: { alignItems: 'center', borderRadius: 8, flex: 1, padding: 10 },
  cajaFlex: { alignItems: 'center', borderRadius: 8, padding: 10 },
  rejilla: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  etiquetaChip: { backgroundColor: '#087e8b', borderRadius: 99, paddingHorizontal: 12, paddingVertical: 7 },
})
