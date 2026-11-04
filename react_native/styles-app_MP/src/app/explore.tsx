import { ScrollView, StyleSheet, Text, View } from 'react-native'

const accesorios = [
  { nombre: 'Nova Buds', detalle: 'Audio inalámbrico para acompañar tus llamadas.' },
  { nombre: 'Cargador 30 W', detalle: 'Carga rápida para equipos compatibles.' },
  { nombre: 'Funda Orbit', detalle: 'Protección ligera para el uso diario.' },
]

export default function AccesoriosScreen() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.marca}>MOVITECH · COMPLEMENTOS</Text>
      <Text style={styles.titulo}>Accesorios para tu móvil</Text>
      {accesorios.map((accesorio) => (
        <View key={accesorio.nombre} style={styles.tarjeta}>
          <Text style={styles.nombre}>{accesorio.nombre}</Text>
          <Text style={styles.detalle}>{accesorio.detalle}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  contenido: { gap: 14, padding: 20 },
  marca: { color: '#087e8b', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800', marginBottom: 4 },
  tarjeta: { backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, gap: 6, padding: 16 },
  nombre: { color: '#102a43', fontSize: 15, fontWeight: '700' },
  detalle: { color: '#627d98', fontSize: 13, lineHeight: 19 },
})
