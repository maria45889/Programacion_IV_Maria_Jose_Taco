import { ScrollView, StyleSheet, Text, View } from 'react-native'

const productos = ['Nova X Pro', 'PixelWave 8', 'Zenith A5', 'Orbit Mini', 'Nova Buds', 'Cargador 30 W']

export function Paso1() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>MoviTech · catálogo</Text>
      <Text style={styles.etiqueta}>flexDirection: &apos;column&apos;</Text>
      <View style={styles.columna}>
        {productos.slice(0, 3).map((producto) => (
          <View key={producto} style={[styles.tarjeta, styles.azul]}>
            <Text style={styles.texto}>{producto}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.etiqueta}>flexDirection: &apos;row&apos; + space-between</Text>
      <View style={styles.fila}>
        {['Android', 'iOS', 'Accesorios'].map((categoria, index) => (
          <View key={categoria} style={[styles.chip, { backgroundColor: ['#087e8b', '#1565c0', '#7c3aed'][index] }]}>
            <Text style={styles.texto}>{categoria}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={styles.fila}>
        <View style={[styles.cajaFlex, { flex: 2, backgroundColor: '#0f766e' }]}>
          <Text style={styles.texto}>Smartphones</Text>
        </View>
        <View style={[styles.cajaFlex, { flex: 1, backgroundColor: '#14b8a6' }]}>
          <Text style={styles.texto}>Audio</Text>
        </View>
        <View style={[styles.cajaFlex, { flex: 1, backgroundColor: '#2dd4bf' }]}>
          <Text style={styles.texto}>Más</Text>
        </View>
      </View>

      <Text style={styles.etiqueta}>flexWrap: &apos;wrap&apos; + gap</Text>
      <View style={styles.rejilla}>
        {['5G', '128 GB', '256 GB', 'OLED', 'Dual SIM', 'Garantía'].map((etiqueta) => (
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
