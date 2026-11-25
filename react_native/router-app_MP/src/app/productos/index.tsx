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
            <View style={styles.icono}><Text style={styles.iconoTexto}>{item.nombre.charAt(0)}</Text></View>
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
  pantalla: { backgroundColor: '#f5f8f6', flex: 1 },
  lista: { gap: 10, padding: 16 },
  encabezado: { gap: 5, marginBottom: 8 },
  titulo: { color: '#12372f', fontSize: 22, fontWeight: '800' },
  subtitulo: { color: '#64766f', fontSize: 13, lineHeight: 19 },
  tarjeta: { alignItems: 'center', backgroundColor: '#fff', borderColor: '#dce6e1', borderRadius: 14, borderWidth: 1, flexDirection: 'row', gap: 12, padding: 13 },
  presionada: { backgroundColor: '#edf3ef' },
  icono: { alignItems: 'center', backgroundColor: '#edf3ef', borderRadius: 10, height: 48, justifyContent: 'center', width: 48 },
  iconoTexto: { color: '#23483e', fontSize: 18, fontWeight: '900' },
  info: { flex: 1, gap: 2 },
  marca: { color: '#64766f', fontSize: 10, fontWeight: '700' },
  nombre: { color: '#1c3029', fontSize: 15, fontWeight: '700' },
  memoria: { color: '#64766f', fontSize: 11 },
  precio: { color: '#23483e', fontSize: 14, fontWeight: '800' },
  enlace: { color: '#23483e', fontSize: 14, padding: 16, textAlign: 'center' },
})
