import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import { useProductosStore } from '@/stores/productos-store'

const moneda = (valor: number) => `$${valor.toLocaleString('es-ES')}`

export default function CatalogoScreen() {
  const productos = useProductosStore((state) => state.productos)
  const cantidades = useProductosStore((state) => state.cantidades)
  const agregar = useProductosStore((state) => state.agregar)

  return (
    <FlatList
      style={styles.pantalla}
      contentContainerStyle={styles.contenido}
      data={productos}
      keyExtractor={(producto) => producto.id}
      ListHeaderComponent={
        <View style={styles.encabezado}>
          <Text style={styles.marca}>VETERINARIA HUELLITAS</Text>
          <Text style={styles.titulo}>Productos para el cuidado de tu mascota</Text>
          <Text style={styles.subtitulo}>
            Productos y carrito comparten el mismo estado global.
          </Text>
        </View>
      }
      renderItem={({ item }) => {
        const cantidad = cantidades[item.id] ?? 0
        const sinStock = cantidad >= item.stock

        return (
          <View style={styles.tarjeta}>
            <View style={styles.icono}>
              <Text style={styles.iconoTexto}>🐾</Text>
            </View>
            <View style={styles.detalles}>
              <Text style={styles.fabricante}>{item.fabricante}</Text>
              <Text style={styles.modelo}>{item.modelo}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
              <View style={styles.filaPrecio}>
                <Text style={styles.precio}>{moneda(item.precio)}</Text>
                <Text style={styles.stock}>{item.stock - cantidad} disponibles</Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ disabled: sinStock }}
                disabled={sinStock}
                onPress={() => agregar(item.id)}
                style={({ pressed }) => [
                  styles.boton,
                  (pressed || sinStock) && styles.botonDeshabilitado,
                ]}
              >
                <Text style={styles.textoBoton}>
                  {sinStock ? 'Sin stock disponible' : 'Agregar al carrito'}
                </Text>
              </Pressable>
            </View>
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f4f7fb' },
  contenido: { padding: 18, gap: 14 },
  encabezado: { gap: 6, marginBottom: 8 },
  marca: { color: '#087e8b', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  titulo: { color: '#102a43', fontSize: 24, fontWeight: '800' },
  subtitulo: { color: '#627d98', fontSize: 14, lineHeight: 20 },
  tarjeta: {
    flexDirection: 'row',
    gap: 14,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9e2ec',
  },
  icono: {
    width: 58,
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f2f1',
  },
  iconoTexto: { color: '#087e8b', fontSize: 30, fontWeight: '700' },
  detalles: { flex: 1, gap: 4 },
  fabricante: { color: '#627d98', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  modelo: { color: '#102a43', fontSize: 17, fontWeight: '800' },
  descripcion: { color: '#627d98', fontSize: 12 },
  filaPrecio: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  precio: { color: '#087e8b', fontSize: 17, fontWeight: '800' },
  stock: { color: '#627d98', fontSize: 11, alignSelf: 'center' },
  boton: {
    alignItems: 'center',
    backgroundColor: '#087e8b',
    borderRadius: 9,
    marginTop: 5,
    paddingVertical: 10,
  },
  botonDeshabilitado: { opacity: 0.45 },
  textoBoton: { color: '#fff', fontSize: 13, fontWeight: '700' },
})
