import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function TabGarantia() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Atención veterinaria' }} />
      <Text style={styles.marca}>CUIDADO CONFIABLE</Text>
      <Text style={styles.titulo}>Acompañamos la salud de tu mascota</Text>
      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Historia clínica</Text>
        <Text style={styles.item}>Registramos consultas, vacunas y recomendaciones.</Text>
      </View>
      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Medicina preventiva</Text>
        <Text style={styles.item}>Consulta las fechas de vacunación y controles.</Text>
      </View>
      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Horario de atención</Text>
        <Text style={styles.item}>Lunes a sábado · 9:00 a 18:00</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { backgroundColor: '#f4f7fb', flex: 1, gap: 14, padding: 20 },
  marca: { color: '#087e8b', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800', marginBottom: 4 },
  tarjeta: { backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, gap: 6, padding: 16 },
  subtitulo: { color: '#102a43', fontSize: 15, fontWeight: '700' },
  item: { color: '#627d98', fontSize: 13, lineHeight: 19 },
})
