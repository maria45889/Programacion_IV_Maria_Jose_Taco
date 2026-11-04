import { Link, router } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

type Producto = { id: string; nombre: string; marca: string; precio: number; memoria: string }

const PRODUCTOS: Producto[] = [
  { id: 'nova-x-pro', nombre: 'Nova X Pro', marca: 'Nova', precio: 899, memoria: '256 GB' },
  { id: 'pixelwave-8', nombre: 'PixelWave 8', marca: 'PixelWave', precio: 649, memoria: '128 GB' },
  { id: 'zenith-a5', nombre: 'Zenith A5', marca: 'Zenith', precio: 399, memoria: '128 GB' },
  { id: 'orbit-mini', nombre: 'Orbit Mini', marca: 'Orbit', precio: 279, memoria: '64 GB' },
  { id: 'nova-x', nombre: 'Nova X', marca: 'Nova', precio: 729, memoria: '128 GB' },
]

const moneda = (precio: number) => `$${precio.toLocaleString('es-ES')}`

export default function ListaProductos() {
  return (
    <View style={styles.pantalla}>
      <FlatList
        data={PRODUCTOS}
        keyExtractor={(producto) => producto.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={
          <View style={styles.encabezado}>
            <Text style={styles.titulo}>Todos los equipos</Text>
            <Text style={styles.subtitulo}>Selecciona un móvil para consultar sus detalles.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.tarjeta, pressed && styles.presionada]}
            onPress={() => router.push(`/productos/${item.id}`)}
          >
            <View style={styles.icono}><Text style={styles.iconoTexto}>▣</Text></View>
            <View style={styles.info}>
              <Text style={styles.marca}>{item.marca}</Text>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.memoria}>{item.memoria} · Ver especificaciones</Text>
            </View>
            <Text style={styles.precio}>{moneda(item.precio)}</Text>
          </Pressable>
        )}
        ListFooterComponent={
          <Link href="/(Tabs)" style={styles.enlace}>
            Volver a la tienda
          </Link>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  lista: { gap: 10, padding: 16 },
  encabezado: { gap: 5, marginBottom: 8 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800' },
  subtitulo: { color: '#627d98', fontSize: 13 },
  tarjeta: { alignItems: 'center', backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, flexDirection: 'row', gap: 12, padding: 13 },
  presionada: { backgroundColor: '#e0f2f1' },
  icono: { alignItems: 'center', backgroundColor: '#e0f2f1', borderRadius: 10, height: 48, justifyContent: 'center', width: 48 },
  iconoTexto: { color: '#087e8b', fontSize: 24 },
  info: { flex: 1, gap: 2 },
  marca: { color: '#627d98', fontSize: 10, fontWeight: '700' },
  nombre: { color: '#102a43', fontSize: 15, fontWeight: '700' },
  memoria: { color: '#627d98', fontSize: 11 },
  precio: { color: '#087e8b', fontSize: 14, fontWeight: '800' },
  enlace: { color: '#087e8b', fontSize: 14, padding: 16, textAlign: 'center' },
})
