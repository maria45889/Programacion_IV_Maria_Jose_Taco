import { useState } from 'react'
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

type Producto = {
  id: string
  nombre: string
  marca: string
  precio: number
  stock: number
}

const PRODUCTOS: Producto[] = [
  { id: '1', nombre: 'Nova X Pro', marca: 'Nova', precio: 899, stock: 7 },
  { id: '2', nombre: 'Nova X', marca: 'Nova', precio: 729, stock: 4 },
  { id: '3', nombre: 'PixelWave 8', marca: 'PixelWave', precio: 649, stock: 12 },
  { id: '4', nombre: 'PixelWave 8 Pro', marca: 'PixelWave', precio: 949, stock: 2 },
  { id: '5', nombre: 'Zenith A5', marca: 'Zenith', precio: 399, stock: 9 },
  { id: '6', nombre: 'Orbit Mini', marca: 'Orbit', precio: 279, stock: 5 },
]

const PAGINA_2: Producto[] = [
  { id: '7', nombre: 'Nova Buds', marca: 'Nova', precio: 89, stock: 15 },
  { id: '8', nombre: 'Cargador 30 W', marca: 'Orbit', precio: 29, stock: 18 },
]

const moneda = (precio: number) => `$${precio.toLocaleString('es-ES')}`

function FilaProducto({ producto }: { producto: Producto }) {
  return (
    <View style={styles.tarjetaProducto}>
      <View style={styles.icono}><Text style={styles.iconoTexto}>▣</Text></View>
      <View style={styles.infoProducto}>
        <Text style={styles.nombreProducto}>{producto.nombre}</Text>
        <Text style={styles.detalle}>{producto.marca} · {producto.stock} disponibles</Text>
      </View>
      <Text style={styles.precio}>{moneda(producto.precio)}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <SafeAreaView style={styles.pantalla}>
      <FlatList
        data={PRODUCTOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={<Text style={styles.titulo}>Catálogo de móviles</Text>}
        renderItem={({ item }) => <FilaProducto producto={item} />}
      />
    </SafeAreaView>
  )
}

export function Paso2() {
  const [productos, setProductos] = useState(PRODUCTOS)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [pagina, setPagina] = useState(1)

  function refrescar() {
    setRefrescando(true)
    setProductos(PRODUCTOS)
    setPagina(1)
    setRefrescando(false)
  }

  function cargarMas() {
    if (pagina > 1 || cargandoMas) return
    setCargandoMas(true)
    setProductos((actuales) => [...actuales, ...PAGINA_2])
    setPagina(2)
    setCargandoMas(false)
  }

  return (
    <SafeAreaView style={styles.pantalla}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={<Text style={styles.titulo}>Catálogo · página {pagina}</Text>}
        renderItem={({ item }) => <FilaProducto producto={item} />}
        refreshing={refrescando}
        onRefresh={refrescar}
        onEndReached={cargarMas}
        onEndReachedThreshold={0.3}
        ListEmptyComponent={<Text style={styles.detalle}>No hay equipos disponibles.</Text>}
        ListFooterComponent={cargandoMas ? <Text style={styles.detalle}>Cargando más equipos…</Text> : undefined}
      />
    </SafeAreaView>
  )
}

export function Paso3() {
  const secciones = ['Nova', 'PixelWave', 'Zenith', 'Orbit'].map((marca) => ({
    title: marca,
    data: PRODUCTOS.filter((producto) => producto.marca === marca),
  }))

  return (
    <SafeAreaView style={styles.pantalla}>
      <SectionList
        sections={secciones}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => <FilaProducto producto={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.encabezadoSeccion}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={<Text style={styles.titulo}>Equipos por marca</Text>}
      />
    </SafeAreaView>
  )
}

export function Paso4() {
  const [modelo, setModelo] = useState('')
  const [telefono, setTelefono] = useState('')

  return (
    <SafeAreaView style={styles.pantalla}>
      <ScrollView contentContainerStyle={styles.formulario}>
        <Text style={styles.titulo}>Solicitar información</Text>
        <Text style={styles.etiqueta}>Modelo que te interesa</Text>
        <TextInput
          value={modelo}
          onChangeText={setModelo}
          placeholder="Ej. Nova X Pro"
          style={styles.campo}
          returnKeyType="next"
        />
        <Text style={styles.etiqueta}>Teléfono de contacto</Text>
        <TextInput
          value={telefono}
          onChangeText={setTelefono}
          placeholder="Tu número"
          keyboardType="phone-pad"
          style={styles.campo}
        />
        <View style={styles.vistaPrevia}>
          <Text style={styles.detalle}>
            Te contactaremos por {telefono || 'tu teléfono'} para hablar sobre {modelo || 'el equipo'}.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export function Paso5() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [modelo, setModelo] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  function enviarPedido() {
    if (nombre.trim().length < 2) {
      setError('Escribe tu nombre (al menos 2 caracteres).')
      return
    }
    if (telefono.replace(/\D/g, '').length < 8) {
      setError('Ingresa un teléfono válido de al menos 8 dígitos.')
      return
    }
    if (!modelo) {
      setError('Selecciona el equipo que quieres comprar.')
      return
    }
    setError(null)
    setEnviado(true)
  }

  return (
    <SafeAreaView style={styles.pantalla}>
      <ScrollView contentContainerStyle={styles.formulario} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Prepara tu compra</Text>
        <Campo etiqueta="Nombre *" value={nombre} onChangeText={setNombre} placeholder="Tu nombre" />
        <Campo etiqueta="Teléfono *" value={telefono} onChangeText={setTelefono} placeholder="Tu teléfono" keyboardType="phone-pad" />
        <Text style={styles.etiqueta}>Equipo *</Text>
        <View style={styles.opciones}>
          {PRODUCTOS.slice(0, 3).map((producto) => (
            <Pressable
              key={producto.id}
              onPress={() => setModelo(producto.nombre)}
              style={[styles.opcion, modelo === producto.nombre && styles.opcionActiva]}
            >
              <Text style={[styles.textoOpcion, modelo === producto.nombre && styles.textoOpcionActivo]}>
                {producto.nombre}
              </Text>
            </Pressable>
          ))}
        </View>
        {error !== null && <Text style={styles.error}>{error}</Text>}
        {enviado && <Text style={styles.confirmacion}>¡Gracias, {nombre}! Registramos tu interés en {modelo}.</Text>}
        <Pressable accessibilityRole="button" onPress={enviarPedido} style={styles.boton}>
          <Text style={styles.textoBoton}>Confirmar interés</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export function Paso6() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [notas, setNotas] = useState('')
  const [mensaje, setMensaje] = useState('')

  function confirmar() {
    if (!nombre.trim() || telefono.replace(/\D/g, '').length < 8) {
      setMensaje('Completa tu nombre y un teléfono válido para continuar.')
      return
    }
    setMensaje(`Pedido preparado para ${nombre}. Nos comunicaremos al ${telefono}.`)
  }

  return (
    <KeyboardAvoidingView
      style={styles.pantalla}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={styles.pantalla}>
        <View style={styles.cabecera}>
          <Text style={styles.textoCabecera}>Finaliza tu compra</Text>
          <Text style={styles.detalleCabecera}>MoviTech · equipos móviles</Text>
        </View>
        <ScrollView contentContainerStyle={styles.formulario} keyboardShouldPersistTaps="handled">
          <Campo etiqueta="Nombre completo" value={nombre} onChangeText={setNombre} placeholder="Tu nombre" />
          <Campo etiqueta="Teléfono" value={telefono} onChangeText={setTelefono} placeholder="Tu teléfono" keyboardType="phone-pad" />
          <Text style={styles.etiqueta}>Notas para la tienda (opcional)</Text>
          <TextInput
            value={notas}
            onChangeText={setNotas}
            placeholder="Color, capacidad u otra preferencia"
            style={[styles.campo, styles.campoMultilinea]}
            multiline
            textAlignVertical="top"
          />
          {mensaje !== '' && <Text style={styles.detalle}>{mensaje}</Text>}
          <Pressable accessibilityRole="button" onPress={confirmar} style={styles.boton}>
            <Text style={styles.textoBoton}>Enviar solicitud</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

function Campo({
  etiqueta,
  ...props
}: {
  etiqueta: string
  value: string
  onChangeText: (value: string) => void
  placeholder: string
  keyboardType?: 'default' | 'phone-pad'
}) {
  return (
    <>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <TextInput {...props} style={styles.campo} />
    </>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  lista: { gap: 10, padding: 16 },
  titulo: { color: '#102a43', fontSize: 22, fontWeight: '800', marginBottom: 6 },
  tarjetaProducto: { alignItems: 'center', backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, flexDirection: 'row', gap: 12, padding: 12 },
  icono: { alignItems: 'center', backgroundColor: '#e0f2f1', borderRadius: 10, height: 46, justifyContent: 'center', width: 46 },
  iconoTexto: { color: '#087e8b', fontSize: 23 },
  infoProducto: { flex: 1, gap: 3 },
  nombreProducto: { color: '#102a43', fontSize: 14, fontWeight: '700' },
  detalle: { color: '#627d98', fontSize: 12, lineHeight: 18 },
  precio: { color: '#087e8b', fontSize: 14, fontWeight: '800' },
  encabezadoSeccion: { backgroundColor: '#e0f2f1', borderRadius: 8, color: '#087e8b', fontSize: 14, fontWeight: '800', marginTop: 8, padding: 9 },
  formulario: { gap: 12, padding: 20 },
  etiqueta: { color: '#334e68', fontSize: 13, fontWeight: '700', marginBottom: -7 },
  campo: { backgroundColor: '#fff', borderColor: '#bcccdc', borderRadius: 9, borderWidth: 1, color: '#102a43', fontSize: 15, paddingHorizontal: 12, paddingVertical: 11 },
  campoMultilinea: { height: 90, paddingTop: 12 },
  vistaPrevia: { backgroundColor: '#e0f2f1', borderRadius: 10, marginTop: 8, padding: 12 },
  opciones: { gap: 8 },
  opcion: { backgroundColor: '#fff', borderColor: '#bcccdc', borderRadius: 8, borderWidth: 1, padding: 11 },
  opcionActiva: { backgroundColor: '#087e8b', borderColor: '#087e8b' },
  textoOpcion: { color: '#334e68', fontSize: 13, fontWeight: '600' },
  textoOpcionActivo: { color: '#fff' },
  error: { color: '#b42318', fontSize: 13 },
  confirmacion: { color: '#087e8b', fontSize: 13, fontWeight: '700' },
  boton: { alignItems: 'center', backgroundColor: '#087e8b', borderRadius: 9, marginTop: 4, padding: 13 },
  textoBoton: { color: '#fff', fontSize: 14, fontWeight: '700' },
  cabecera: { backgroundColor: '#087e8b', paddingHorizontal: 18, paddingVertical: 14 },
  textoCabecera: { color: '#fff', fontSize: 18, fontWeight: '800' },
  detalleCabecera: { color: '#d8f3f0', fontSize: 12, marginTop: 3 },
})
