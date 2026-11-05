import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import { useProductosStore } from '@/stores/productos-store'

const moneda = (valor: number) => `$${valor.toLocaleString('es-ES')}`

export default function CarritoScreen() {
  const productos = useProductosStore((state) => state.productos)
  const cantidades = useProductosStore((state) => state.cantidades)
  const quitar = useProductosStore((state) => state.quitar)
  const vaciar = useProductosStore((state) => state.vaciar)
  const articulos = productos.flatMap((producto) => {
    const cantidad = cantidades[producto.id] ?? 0
    return cantidad > 0 ? [{ producto, cantidad }] : []
  })
  const total = articulos.reduce(
    (suma, articulo) => suma + articulo.producto.precio * articulo.cantidad,
    0,
  )

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.marca}>HUELLITAS · CUIDADO ANIMAL</Text>
      <Text style={styles.titulo}>Carrito</Text>
      <Text style={styles.subtitulo}>
        Los productos que agregues se conservan al cambiar de pestaña.
      </Text>

      {articulos.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.vacioTitulo}>Tu carrito está vacío</Text>
          <Text style={styles.subtitulo}>Agrega un producto de cuidado desde el catálogo.</Text>
        </View>
      ) : (
        <>
          {articulos.map(({ producto, cantidad }) => (
            <View key={producto.id} style={styles.articulo}>
              <View style={styles.info}>
                <Text style={styles.modelo}>{producto.modelo}</Text>
                <Text style={styles.detalle}>
                  {cantidad} × {moneda(producto.precio)}
                </Text>
              </View>
              <Text style={styles.precio}>{moneda(cantidad * producto.precio)}</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Quitar una unidad de ${producto.modelo}`}
                onPress={() => quitar(producto.id)}
                style={styles.botonQuitar}
              >
                <Text style={styles.textoQuitar}>−</Text>
              </Pressable>
            </View>
          ))}
          <View style={styles.totalFila}>
            <Text style={styles.totalEtiqueta}>Total</Text>
            <Text style={styles.total}>{moneda(total)}</Text>
          </View>
          <Pressable accessibilityRole="button" onPress={vaciar} style={styles.botonVaciar}>
            <Text style={styles.textoVaciar}>Vaciar carrito</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f4f7fb' },
  contenido: { padding: 20, gap: 14 },
  marca: { color: '#087e8b', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  titulo: { color: '#102a43', fontSize: 26, fontWeight: '800' },
  subtitulo: { color: '#627d98', fontSize: 14, lineHeight: 20 },
  vacio: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 8,
    marginTop: 12,
    padding: 28,
  },
  vacioTitulo: { color: '#102a43', fontSize: 17, fontWeight: '700' },
  articulo: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d9e2ec',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 14,
  },
  info: { flex: 1, gap: 4 },
  modelo: { color: '#102a43', fontSize: 15, fontWeight: '700' },
  detalle: { color: '#627d98', fontSize: 12 },
  precio: { color: '#087e8b', fontSize: 14, fontWeight: '700' },
  botonQuitar: {
    alignItems: 'center',
    backgroundColor: '#fce8e6',
    borderRadius: 18,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  textoQuitar: { color: '#b42318', fontSize: 21, lineHeight: 24 },
  totalFila: {
    borderTopColor: '#d9e2ec',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 16,
  },
  totalEtiqueta: { color: '#102a43', fontSize: 17, fontWeight: '700' },
  total: { color: '#087e8b', fontSize: 20, fontWeight: '800' },
  botonVaciar: { alignItems: 'center', padding: 12 },
  textoVaciar: { color: '#b42318', fontSize: 14, fontWeight: '700' },
})
