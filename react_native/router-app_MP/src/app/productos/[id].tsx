import { router, Stack, useLocalSearchParams } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

type FichaProducto = { nombre: string; marca: string; precio: number; memoria: string; pantalla: string; bateria: string; descripcion: string }

const PRODUCTOS: Record<string, FichaProducto> = {
  'nova-x-pro': {
    nombre: 'Nova X Pro', marca: 'Nova', precio: 899, memoria: '256 GB',
    pantalla: '6.7 pulgadas OLED', bateria: '5000 mAh', descripcion: 'Cámara de 50 MP y conectividad 5G.',
  },
  'pixelwave-8': {
    nombre: 'PixelWave 8', marca: 'PixelWave', precio: 649, memoria: '128 GB',
    pantalla: '6.3 pulgadas OLED', bateria: '4700 mAh', descripcion: 'Fotografía inteligente y carga rápida.',
  },
  'zenith-a5': {
    nombre: 'Zenith A5', marca: 'Zenith', precio: 399, memoria: '128 GB',
    pantalla: '6.5 pulgadas LCD', bateria: '5000 mAh', descripcion: 'Rendimiento confiable para todo el día.',
  },
  'orbit-mini': {
    nombre: 'Orbit Mini', marca: 'Orbit', precio: 279, memoria: '64 GB',
    pantalla: '5.8 pulgadas HD+', bateria: '4000 mAh', descripcion: 'Un equipo compacto, cómodo y ligero.',
  },
  'nova-x': {
    nombre: 'Nova X', marca: 'Nova', precio: 729, memoria: '128 GB',
    pantalla: '6.4 pulgadas OLED', bateria: '4800 mAh', descripcion: 'Diseño elegante con cámara de alta resolución.',
  },
}

function FilaDetalle({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export default function DetalleProducto() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const producto = PRODUCTOS[id ?? '']

  if (!producto) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'Equipo no encontrado' }} />
        <Text style={styles.error}>No encontramos ese equipo.</Text>
        <Pressable accessibilityRole="button" onPress={() => router.back()}>
          <Text style={styles.enlace}>Volver al catálogo</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: producto.nombre }} />
      <View style={styles.encabezado}>
        <Text style={styles.marca}>{producto.marca.toUpperCase()}</Text>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.descripcion}>{producto.descripcion}</Text>
        <Text style={styles.precio}>${producto.precio.toLocaleString('es-ES')}</Text>
      </View>
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>ESPECIFICACIONES</Text>
        <FilaDetalle etiqueta="Almacenamiento" valor={producto.memoria} />
        <FilaDetalle etiqueta="Pantalla" valor={producto.pantalla} />
        <FilaDetalle etiqueta="Batería" valor={producto.bateria} />
      </View>
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>COMPRA SEGURA</Text>
        <FilaDetalle etiqueta="Garantía" valor="12 meses de fábrica" />
        <FilaDetalle etiqueta="Envío" valor="Gratis en pedidos seleccionados" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  contenido: { gap: 16, padding: 16 },
  centrado: { alignItems: 'center', flex: 1, gap: 12, justifyContent: 'center' },
  error: { color: '#b42318', fontSize: 16 },
  enlace: { color: '#087e8b', fontSize: 14, fontWeight: '700' },
  encabezado: { backgroundColor: '#087e8b', borderRadius: 14, gap: 7, padding: 20 },
  marca: { color: '#c4f1ed', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  nombre: { color: '#fff', fontSize: 24, fontWeight: '800' },
  descripcion: { color: '#e0f2f1', fontSize: 13, lineHeight: 19 },
  precio: { color: '#fff', fontSize: 22, fontWeight: '800', marginTop: 8 },
  seccion: { backgroundColor: '#fff', borderRadius: 12, gap: 12, padding: 16 },
  tituloSeccion: { color: '#627d98', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  fila: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  etiqueta: { color: '#627d98', fontSize: 13 },
  valor: { color: '#102a43', flexShrink: 1, fontSize: 13, fontWeight: '600', textAlign: 'right' },
})
