import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const citas = [
  { id: '1', mascota: 'Luna', especie: 'Perro · Labrador', servicio: 'Consulta general', hora: '09:00', confirmada: true },
  { id: '2', mascota: 'Michi', especie: 'Gato · Mestizo', servicio: 'Vacunación', hora: '09:30', confirmada: true },
  { id: '3', mascota: 'Toby', especie: 'Conejo · Mini Rex', servicio: 'Control preventivo', hora: '10:00', confirmada: true },
  { id: '4', mascota: 'Nina', especie: 'Perro · Beagle', servicio: 'Desparasitación', hora: '10:30', confirmada: false },
  { id: '5', mascota: 'Coco', especie: 'Ave · Periquito', servicio: 'Consulta general', hora: '11:00', confirmada: true },
  { id: '6', mascota: 'Max', especie: 'Perro · Mestizo', servicio: 'Revisión dental', hora: '11:30', confirmada: false },
]

export function Paso3() {
  const { width } = useWindowDimensions()
  const columnas = width >= 600 ? 3 : 2
  const gap = 12
  const anchoTarjeta = Math.max(130, (width - 36 - gap * (columnas - 1)) / columnas)

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Citas veterinarias</Text>
      <Text style={styles.meta}>{width} dp · {columnas} columnas responsivas</Text>
      <View style={[styles.rejilla, { gap }]}>
        {citas.map((cita) => (
          <View key={cita.id} style={[styles.tarjeta, { width: anchoTarjeta }]}>
            <View style={[styles.indicador, { backgroundColor: cita.confirmada ? '#2e7d32' : '#c62828' }]} />
            <Text numberOfLines={1} style={styles.modelo}>{cita.mascota}</Text>
            <Text style={styles.detalle}>{cita.especie}</Text>
            <Text style={styles.precio}>{cita.hora}</Text>
            <Text style={styles.stock}>{cita.confirmada ? cita.servicio : 'Cita pendiente'}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f4f7fb' },
  contenido: { gap: 12, padding: 18 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800' },
  meta: { color: '#627d98', fontFamily: 'monospace', fontSize: 12 },
  rejilla: { flexDirection: 'row', flexWrap: 'wrap' },
  tarjeta: { backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, gap: 5, padding: 12 },
  indicador: { alignSelf: 'flex-end', borderRadius: 5, height: 10, width: 10 },
  modelo: { color: '#102a43', fontSize: 14, fontWeight: '700' },
  detalle: { color: '#627d98', fontSize: 12 },
  precio: { color: '#087e8b', fontSize: 16, fontWeight: '800', marginTop: 4 },
  stock: { color: '#627d98', fontSize: 11 },
})
