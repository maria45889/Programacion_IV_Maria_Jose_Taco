import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

function sombra(nivel: 1 | 2 | 3) {
  return Platform.select({
    ios: {
      shadowColor: '#102a43',
      shadowOffset: { width: 0, height: nivel },
      shadowOpacity: 0.08 + nivel * 0.04,
      shadowRadius: nivel * 2,
    },
    android: { elevation: nivel * 3 },
    default: {},
  })
}

export function Paso4() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Estilos por plataforma</Text>
      <Text style={styles.plataforma}>Plataforma detectada: {Platform.OS}</Text>
      {[1, 2, 3].map((nivel) => (
        <View key={nivel} style={[styles.tarjeta, sombra(nivel as 1 | 2 | 3)]}>
          <Text style={styles.modelo}>{['Consulta general', 'Vacunación', 'Control preventivo'][nivel - 1]}</Text>
          <Text style={styles.detalle}>Sombra nivel {nivel} · {Platform.OS}</Text>
        </View>
      ))}
      <View style={styles.nota}>
        <Text style={styles.notaTexto}>
          iOS utiliza shadowColor, shadowOffset y shadowOpacity; Android utiliza elevation.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f4f7fb' },
  contenido: { gap: 16, padding: 18 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800' },
  plataforma: { backgroundColor: '#087e8b', borderRadius: 8, color: '#fff', fontWeight: '700', padding: 12 },
  tarjeta: { backgroundColor: '#fff', borderRadius: 12, gap: 5, padding: 18 },
  modelo: { color: '#102a43', fontSize: 16, fontWeight: '700' },
  detalle: { color: '#627d98', fontSize: 13 },
  nota: { backgroundColor: '#e0f2f1', borderLeftColor: '#087e8b', borderLeftWidth: 3, borderRadius: 8, padding: 12 },
  notaTexto: { color: '#155e63', fontSize: 13, lineHeight: 19 },
})
