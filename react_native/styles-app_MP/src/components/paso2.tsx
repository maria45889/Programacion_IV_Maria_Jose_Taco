import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso2() {
  const anchoPantalla = Dimensions.get('window').width

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Tamaños de tarjetas de pacientes</Text>
      <Text style={styles.seccion}>Tamaños de fichas en dp</Text>
      <View style={styles.fila}>
        {[32, 48, 64, 80].map((dp) => (
          <View key={dp} style={[styles.cuadrado, { width: dp, height: dp }]}>
            <Text style={styles.textoBlanco}>{dp}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.seccion}>Ancho relativo a la ficha clínica</Text>
      {(['100%', '75%', '50%', '25%'] as const).map((ancho) => (
        <View key={ancho} style={[styles.barra, { width: ancho }]}>
          <Text style={styles.textoBlanco}>{ancho}</Text>
        </View>
      ))}

      <Text style={styles.seccion}>Ancho de pantalla: {anchoPantalla} dp</Text>
      <View style={[styles.indicador, { width: anchoPantalla * 0.6 }]}>
        <Text style={styles.textoBlanco}>60% del ancho disponible</Text>
      </View>

      <View style={styles.nota}>
        <Text style={styles.notaTexto}>
          fontSize y borderRadius se expresan en dp; no aceptan porcentajes. Las dimensiones
          porcentuales se calculan respecto al contenedor.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f4f7fb' },
  contenido: { gap: 14, padding: 18 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800' },
  seccion: { color: '#627d98', fontFamily: 'monospace', fontSize: 12, marginTop: 8 },
  fila: { alignItems: 'flex-end', flexDirection: 'row', gap: 8 },
  cuadrado: { alignItems: 'center', backgroundColor: '#1565c0', borderRadius: 6, justifyContent: 'center' },
  textoBlanco: { color: '#fff', fontSize: 11, fontWeight: '700' },
  barra: { backgroundColor: '#087e8b', borderRadius: 6, height: 32, justifyContent: 'center', paddingHorizontal: 8 },
  indicador: { backgroundColor: '#2e7d32', borderRadius: 6, height: 40, justifyContent: 'center', paddingHorizontal: 8 },
  nota: { backgroundColor: '#e0f2f1', borderLeftColor: '#087e8b', borderLeftWidth: 3, borderRadius: 8, padding: 12 },
  notaTexto: { color: '#155e63', fontSize: 13, lineHeight: 19 },
})
