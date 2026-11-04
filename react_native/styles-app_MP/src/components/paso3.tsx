import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const productos = [
  { id: '1', modelo: 'Nova X Pro', almacenamiento: '256 GB', precio: '$899', stock: 7 },
  { id: '2', modelo: 'PixelWave 8', almacenamiento: '128 GB', precio: '$649', stock: 12 },
  { id: '3', modelo: 'Zenith A5', almacenamiento: '128 GB', precio: '$399', stock: 4 },
  { id: '4', modelo: 'Orbit Mini', almacenamiento: '64 GB', precio: '$279', stock: 0 },
  { id: '5', modelo: 'Nova X', almacenamiento: '128 GB', precio: '$729', stock: 9 },
  { id: '6', modelo: 'PixelWave 8 Pro', almacenamiento: '256 GB', precio: '$949', stock: 2 },
]

export function Paso3() {
  const { width } = useWindowDimensions()
  const columnas = width >= 600 ? 3 : 2
  const gap = 12
  const anchoTarjeta = Math.max(130, (width - 36 - gap * (columnas - 1)) / columnas)

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Equipos destacados</Text>
      <Text style={styles.meta}>{width} dp · {columnas} columnas responsivas</Text>
      <View style={[styles.rejilla, { gap }]}>
        {productos.map((producto) => (
          <View key={producto.id} style={[styles.tarjeta, { width: anchoTarjeta }]}>
            <View style={[styles.indicador, { backgroundColor: producto.stock ? '#2e7d32' : '#c62828' }]} />
            <Text numberOfLines={1} style={styles.modelo}>{producto.modelo}</Text>
            <Text style={styles.detalle}>{producto.almacenamiento}</Text>
            <Text style={styles.precio}>{producto.precio}</Text>
            <Text style={styles.stock}>{producto.stock ? `${producto.stock} en stock` : 'Agotado'}</Text>
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
