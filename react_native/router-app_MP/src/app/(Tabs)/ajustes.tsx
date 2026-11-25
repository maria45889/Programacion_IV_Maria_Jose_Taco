import { Stack } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function TabGarantia() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenedor}>
      <Stack.Screen options={{ title: 'Atención veterinaria' }} />
      <Text style={styles.titulo}>Agenda tu atención</Text>
      <Text style={styles.subtitulo}>Selecciona el motivo de consulta y te ayudaremos a coordinar el turno.</Text>
      <View style={styles.reserva}>
        <Text style={styles.reservaTitulo}>Próxima disponibilidad</Text>
        <Text style={styles.reservaHora}>Hoy · 15:30</Text>
        <Pressable style={styles.boton}>
          <Text style={styles.botonTexto}>Solicitar esta cita</Text>
        </Pressable>
      </View>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f5f8f6', flex: 1 },
  contenedor: { gap: 14, padding: 20 },
  titulo: { color: '#12372f', fontSize: 24, fontWeight: '800' },
  subtitulo: { color: '#64766f', fontSize: 14, lineHeight: 20 },
  reserva: { backgroundColor: '#12372f', borderRadius: 16, gap: 7, padding: 18 },
  reservaTitulo: { color: '#cfddd8', fontSize: 12, fontWeight: '700' },
  reservaHora: { color: '#ffffff', fontSize: 22, fontWeight: '900' },
  boton: { alignItems: 'center', alignSelf: 'flex-start', backgroundColor: '#e7b75c', borderRadius: 10, marginTop: 5, paddingHorizontal: 14, paddingVertical: 11 },
  botonTexto: { color: '#ffffff', fontSize: 13, fontWeight: '800' },
  tarjeta: { backgroundColor: '#fff', borderColor: '#dce6e1', borderRadius: 14, borderWidth: 1, gap: 6, padding: 16 },
  item: { color: '#64766f', fontSize: 13, lineHeight: 19 },
})
