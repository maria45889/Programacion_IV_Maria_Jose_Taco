// app/index.tsx — agrega al archivo existente
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const EQUIPOS_DEMO = [
  { id: '1', modelo: 'Galaxy S24', marca: 'Samsung', precio: 899, stock: 8, stockPct: 80 },
  { id: '2', modelo: 'iPhone 15', marca: 'Apple', precio: 799, stock: 4, stockPct: 40 },
  { id: '3', modelo: 'Redmi Note 13', marca: 'Xiaomi', precio: 249, stock: 12, stockPct: 100 },
  { id: '4', modelo: 'Edge 50', marca: 'Motorola', precio: 399, stock: 6, stockPct: 60 },
  { id: '5', modelo: 'Galaxy A15', marca: 'Samsung', precio: 179, stock: 2, stockPct: 20 },
  { id: '6', modelo: 'Pixel 8', marca: 'Google', precio: 599, stock: 5, stockPct: 50 },
  { id: '7', modelo: 'iPhone 14', marca: 'Apple', precio: 649, stock: 3, stockPct: 30 },
  { id: '8', modelo: 'Moto G Power', marca: 'Motorola', precio: 229, stock: 9, stockPct: 90 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaEquipo({ modelo, marca, precio, stock, stockPct }: typeof EQUIPOS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{modelo}</Text>
        <Text style={estilos4.nodoIp}>{marca}</Text>
      </View>
      <Text style={estilos4.nodoOs}>Precio: ${precio} · Unidades: {stock}</Text>
      <BarraUso porcentaje={stockPct} etiqueta="Stock" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Catálogo MoviTech</Text>
        <Text style={estilos4.headerSub}>{EQUIPOS_DEMO.length} equipos móviles</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {EQUIPOS_DEMO.map((equipo) => (
          <TarjetaEquipo key={equipo.id} {...equipo} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})