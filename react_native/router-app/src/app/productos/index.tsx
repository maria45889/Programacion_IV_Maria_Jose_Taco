import { Link, router } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

type Servicio = { id: string; nombre: string; categoria: string; precio: number; duracion: string }

const SERVICIOS: Servicio[] = [
  { id: 'consulta-general', nombre: 'Consulta general', categoria: 'Consulta', precio: 25, duracion: '30 min' },
  { id: 'vacunacion', nombre: 'Vacunación', categoria: 'Prevención', precio: 18, duracion: '20 min' },
  { id: 'desparasitacion', nombre: 'Desparasitación', categoria: 'Prevención', precio: 12, duracion: '15 min' },
  { id: 'control-cachorro', nombre: 'Control de cachorro', categoria: 'Consulta', precio: 20, duracion: '25 min' },
  { id: 'revision-dental', nombre: 'Revisión dental', categoria: 'Cuidado', precio: 30, duracion: '30 min' },
]

const moneda = (precio: number) => `$${precio.toLocaleString('es-ES')}`

export default function ListaProductos() {
  return (
    <View style={styles.pantalla}>
      <FlatList
        data={SERVICIOS}
        keyExtractor={(servicio) => servicio.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={
          <View style={styles.encabezado}>
            <Text style={styles.titulo}>Servicios veterinarios</Text>
            <Text style={styles.subtitulo}>Selecciona un servicio para conocer los detalles de atención.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.tarjeta, pressed && styles.presionada]}
            onPress={() => router.push(`/productos/${item.id}`)}
          >
            <View style={styles.icono}><Text style={styles.iconoTexto}>🐾</Text></View>
            <View style={styles.info}>
              <Text style={styles.marca}>{item.categoria}</Text>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.memoria}>{item.duracion} · Ver información</Text>
            </View>
            <Text style={styles.precio}>{moneda(item.precio)}</Text>
          </Pressable>
        )}
        ListFooterComponent={
          <Link href="/(Tabs)" style={styles.enlace}>
            Volver a servicios
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
