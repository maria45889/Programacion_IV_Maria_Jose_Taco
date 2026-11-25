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
          <Text style={styles.titulo}>Cuidado diario para Luna</Text>
          <View style={styles.servicio}>
            <View>
              <Text style={styles.servicioEtiqueta}>PRÓXIMA CITA</Text>
              <Text style={styles.servicioTitulo}>Control general</Text>
              <Text style={styles.servicioDetalle}>26 nov · 10:30 · Dr. Pérez</Text>
            </View>
            <View style={styles.sello}>
              <Text style={styles.selloTexto}>H</Text>
            </View>
          </View>
          <Text style={styles.seccionTitulo}>Productos recomendados</Text>
        </View>
      }
      renderItem={({ item }) => {
        const cantidad = cantidades[item.id] ?? 0
        const sinStock = cantidad >= item.stock

        return (
          <View style={styles.tarjeta}>
            <View style={styles.icono}>
              <Text style={styles.iconoTexto}>H</Text>
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
  pantalla: { flex: 1, backgroundColor: '#F8F6EF' },
  contenido: { padding: 20, paddingBottom: 36, gap: 14, maxWidth: 800, width: '100%', alignSelf: 'center' },
  encabezado: { gap: 6, marginBottom: 8 },
  marca: { color: '#173F38', fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  titulo: { color: '#173F38', fontSize: 32, lineHeight: 38, fontWeight: '800', marginBottom: 8 },
  servicio: {
    alignItems: 'center',
    backgroundColor: '#173F38',
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 18,
  },
  servicioEtiqueta: { color: '#BCD7C6', fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
  servicioTitulo: { color: '#FFFFFF', fontSize: 18, fontWeight: '800', marginTop: 5 },
  servicioDetalle: { color: '#E8F3EC', fontSize: 13, marginTop: 4 },
  sello: { alignItems: 'center', backgroundColor: '#F2A65A', borderRadius: 22, height: 44, justifyContent: 'center', width: 44 },
  selloTexto: { color: '#173F38', fontSize: 16, fontWeight: '900' },
  seccionTitulo: { color: '#173F38', fontSize: 20, fontWeight: '800', marginTop: 4 },
  tarjeta: {
    flexDirection: 'row',
    gap: 14,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6DDD7',
  },
  icono: {
    width: 58,
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F3EC',
  },
  iconoTexto: { color: '#173F38', fontSize: 22, fontWeight: '900' },
  detalles: { flex: 1, gap: 4 },
  fabricante: { color: '#728178', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  modelo: { color: '#173F38', fontSize: 17, fontWeight: '800' },
  descripcion: { color: '#5F7168', fontSize: 13 },
  filaPrecio: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  precio: { color: '#173F38', fontSize: 17, fontWeight: '800' },
  stock: { color: '#728178', fontSize: 11, alignSelf: 'center' },
  boton: {
    alignItems: 'center',
    backgroundColor: '#173F38',
    borderRadius: 10,
    marginTop: 5,
    paddingVertical: 10,
  },
  botonDeshabilitado: { opacity: 0.45 },
  textoBoton: { color: '#fff', fontSize: 13, fontWeight: '700' },
})
