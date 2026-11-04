import { Stack } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const OFERTAS = [
  { id: '1', categoria: 'FIN DE SEMANA', titulo: '15 % en equipos seleccionados', equipo: 'Nova X Pro', color: '#087e8b' },
  { id: '2', categoria: 'ACCESORIOS', titulo: 'Audífonos con 20 % de descuento', equipo: 'Nova Buds', color: '#7c3aed' },
  { id: '3', categoria: 'ÚLTIMAS UNIDADES', titulo: 'Precio especial por lanzamiento', equipo: 'PixelWave 8', color: '#d97706' },
]

export default function TabPromociones() {
  return (
    <View style={styles.pantalla}>
      <Stack.Screen options={{ title: 'Ofertas MoviTech' }} />
      <FlatList
        data={OFERTAS}
        keyExtractor={(oferta) => oferta.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={[styles.categoria, { color: item.color }]}>{item.categoria}</Text>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.equipo}>Válido para {item.equipo}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  lista: { gap: 12, padding: 16 },
  tarjeta: { backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, gap: 7, padding: 16 },
  categoria: { fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  titulo: { color: '#102a43', fontSize: 16, fontWeight: '700' },
  equipo: { color: '#627d98', fontSize: 13 },
})
