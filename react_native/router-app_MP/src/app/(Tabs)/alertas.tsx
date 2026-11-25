import { Stack } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const PLANES = [
  { id: '1', etapa: 'Cada mes', titulo: 'Desparasitación', detalle: 'Tratamiento interno y externo según edad y peso.', color: '#dcae55' },
  { id: '2', etapa: 'Anual', titulo: 'Vacuna polivalente', detalle: 'Refuerzo indicado por el veterinario según su historial.', color: '#557d73' },
  { id: '3', etapa: 'Cada 6 meses', titulo: 'Control general', detalle: 'Revisión física, peso, dientes y recomendaciones.', color: '#9b6a45' },
]

export default function TabPromociones() {
  return (
    <View style={styles.pantalla}>
      <Stack.Screen options={{ title: 'Prevención' }} />
      <View style={styles.encabezado}>
        <Text style={styles.tituloEncabezado}>Calendario preventivo</Text>
        <Text style={styles.subtitulo}>Mantén al día los cuidados básicos de tu mascota.</Text>
      </View>
      <FlatList
        data={PLANES}
        keyExtractor={(plan) => plan.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={[styles.indicador, { backgroundColor: item.color }]} />
            <View style={styles.cuerpo}>
            <Text style={styles.categoria}>{item.etapa.toUpperCase()}</Text>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.detalle}>{item.detalle}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f5f8f6', flex: 1 },
  encabezado: { gap: 5, paddingHorizontal: 16, paddingTop: 18 },
  lista: { gap: 12, padding: 16 },
  tarjeta: { alignItems: 'center', backgroundColor: '#fff', borderColor: '#dce6e1', borderRadius: 14, borderWidth: 1, flexDirection: 'row', padding: 14 },
  indicador: { borderRadius: 8, height: 58, marginRight: 12, width: 8 },
  cuerpo: { flex: 1, gap: 5 },
  categoria: { color: '#64766f', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  titulo: { color: '#1c3029', fontSize: 16, fontWeight: '800' },
  detalle: { color: '#64766f', fontSize: 13, lineHeight: 18 },
  subtitulo: { color: '#64766f', fontSize: 13, lineHeight: 19 },
  tituloEncabezado: { color: '#12372f', fontSize: 22, fontWeight: '800' },
})
