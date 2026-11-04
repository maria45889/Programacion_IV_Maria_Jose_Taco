import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const equipos = ['Nova X Pro · 256 GB', 'PixelWave 8 · 128 GB', 'Zenith A5 · 128 GB', 'Orbit Mini · 64 GB']

export function Paso6() {
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={styles.pantalla}>
      <View style={styles.cabecera}>
        <Text style={styles.titulo}>MoviTech</Text>
        <Text style={styles.meta}>4 equipos destacados</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contenido}>
        {equipos.map((equipo) => (
          <View key={equipo} style={styles.fila}>
            <View style={styles.punto} />
            <Text style={styles.modelo}>{equipo}</Text>
          </View>
        ))}
        <View style={styles.debug}>
          <Text style={styles.debugTitulo}>Safe Area Insets (dp)</Text>
          <Text style={styles.debugTexto}>top: {insets.top} · bottom: {insets.bottom}</Text>
          <Text style={styles.debugTexto}>left: {insets.left} · right: {insets.right}</Text>
        </View>
      </ScrollView>
      <View style={[styles.pie, { paddingBottom: insets.bottom + 8 }]}>
        <Text style={styles.pieTexto}>Envío gratis en compras seleccionadas</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#101820', flex: 1 },
  cabecera: { backgroundColor: '#1b2935', borderBottomColor: '#304554', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  titulo: { color: '#e6f1f5', fontSize: 18, fontWeight: '700' },
  meta: { color: '#9fb3c1', fontSize: 12 },
  contenido: { gap: 10, padding: 16 },
  fila: { alignItems: 'center', backgroundColor: '#1b2935', borderColor: '#304554', borderRadius: 9, borderWidth: 1, flexDirection: 'row', gap: 10, padding: 14 },
  punto: { backgroundColor: '#2dd4bf', borderRadius: 5, height: 9, width: 9 },
  modelo: { color: '#e6f1f5', fontSize: 14, fontWeight: '600' },
  debug: { backgroundColor: '#263744', borderRadius: 8, gap: 4, marginTop: 8, padding: 12 },
  debugTitulo: { color: '#2dd4bf', fontSize: 12, fontWeight: '700' },
  debugTexto: { color: '#9fb3c1', fontFamily: 'monospace', fontSize: 12 },
  pie: { alignItems: 'center', backgroundColor: '#1b2935', borderTopColor: '#304554', borderTopWidth: 1, paddingHorizontal: 16, paddingTop: 12 },
  pieTexto: { color: '#9fb3c1', fontSize: 12 },
})
