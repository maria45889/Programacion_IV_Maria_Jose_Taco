import { ScrollView, StyleSheet, Text, View } from 'react-native'

const servicios = [
  { nombre: 'Vacunación', detalle: 'Prevención veterinaria según la edad y el carnet.' },
  { nombre: 'Consulta general', detalle: 'Revisión de salud para perros, gatos y otras mascotas.' },
  { nombre: 'Control preventivo', detalle: 'Seguimiento periódico para el bienestar de tu mascota.' },
]

export default function AccesoriosScreen() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.marca}>HUELLITAS · SERVICIOS</Text>
      <Text style={styles.titulo}>Atención para tu mascota</Text>
      {servicios.map((servicio) => (
        <View key={servicio.nombre} style={styles.tarjeta}>
          <Text style={styles.nombre}>{servicio.nombre}</Text>
          <Text style={styles.detalle}>{servicio.detalle}</Text>
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
