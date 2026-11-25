import { useMemo, useState } from 'react'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

type EstadoConsulta = 'Completada' | 'Próxima' | 'Cancelada'

type Consulta = {
  id: string
  mascota: string
  tutor: string
  servicio: string
  fecha: string
  hora: string
  estado: EstadoConsulta
  inicial: string
}

const CONSULTAS: Consulta[] = [
  { id: '1', mascota: 'Luna', tutor: 'María López', servicio: 'Consulta general', fecha: '24 nov', hora: '10:30', estado: 'Próxima', inicial: 'L' },
  { id: '2', mascota: 'Toby', tutor: 'Carlos Ruiz', servicio: 'Vacunación', fecha: '21 nov', hora: '15:00', estado: 'Completada', inicial: 'T' },
  { id: '3', mascota: 'Milo', tutor: 'Ana Torres', servicio: 'Control de cachorro', fecha: '18 nov', hora: '09:15', estado: 'Completada', inicial: 'M' },
  { id: '4', mascota: 'Nala', tutor: 'Diego Pérez', servicio: 'Limpieza dental', fecha: '12 nov', hora: '11:45', estado: 'Cancelada', inicial: 'N' },
  { id: '5', mascota: 'Simba', tutor: 'Laura Gómez', servicio: 'Desparasitación', fecha: '8 nov', hora: '16:30', estado: 'Completada', inicial: 'S' },
]

const FILTROS: ('Todas' | EstadoConsulta)[] = ['Todas', 'Próxima', 'Completada', 'Cancelada']

const estadoStyle: Record<EstadoConsulta, { fondo: string; texto: string }> = {
  Próxima: { fondo: '#d8f3f0', texto: '#087e8b' },
  Completada: { fondo: '#dcfce7', texto: '#15803d' },
  Cancelada: { fondo: '#fee4e2', texto: '#b42318' },
}

export default function HistorialScreen() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>('Todas')

  const consultas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase()
    return CONSULTAS.filter((consulta) => {
      const coincideFiltro = filtro === 'Todas' || consulta.estado === filtro
      const coincideTexto =
        !texto ||
        consulta.mascota.toLowerCase().includes(texto) ||
        consulta.tutor.toLowerCase().includes(texto) ||
        consulta.servicio.toLowerCase().includes(texto)
      return coincideFiltro && coincideTexto
    })
  }, [busqueda, filtro])

  return (
    <SafeAreaView style={styles.pantalla}>
      <FlatList
        data={consultas}
        keyExtractor={(consulta) => consulta.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.cabecera}>
            <Text style={styles.titulo}>Historial de consultas</Text>
            <Text style={styles.resumen}>{CONSULTAS.length} consultas registradas</Text>
            <TextInput
              value={busqueda}
              onChangeText={setBusqueda}
              placeholder="Buscar mascota, tutor o servicio"
              placeholderTextColor="#7b8794"
              style={styles.busqueda}
              returnKeyType="search"
            />
            <View style={styles.filtros}>
              {FILTROS.map((opcion) => {
                const activa = filtro === opcion
                return (
                  <Pressable
                    key={opcion}
                    accessibilityRole="button"
                    onPress={() => setFiltro(opcion)}
                    style={[styles.filtro, activa && styles.filtroActivo]}
                  >
                    <Text style={[styles.textoFiltro, activa && styles.textoFiltroActivo]}>
                      {opcion}
                    </Text>
                  </Pressable>
                )
              })}
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.consulta}>
            <View style={styles.avatar}>
              <Text style={styles.avatarTexto}>{item.inicial}</Text>
            </View>
            <View style={styles.detalle}>
              <View style={styles.encabezadoConsulta}>
                <Text style={styles.mascota}>{item.mascota}</Text>
                <View style={[styles.estado, { backgroundColor: estadoStyle[item.estado].fondo }]}>
                  <Text style={[styles.estadoTexto, { color: estadoStyle[item.estado].texto }]}>
                    {item.estado}
                  </Text>
                </View>
              </View>
              <Text style={styles.servicio}>{item.servicio}</Text>
              <Text style={styles.tutor}>Tutor: {item.tutor}</Text>
              <View style={styles.fechaFila}>
                <Text style={styles.fecha}>{item.fecha}</Text>
                <Text style={styles.separador}>·</Text>
                <Text style={styles.fecha}>{item.hora}</Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.vacio}>
            <Text style={styles.vacioTitulo}>No encontramos consultas</Text>
            <Text style={styles.vacioTexto}>Prueba con otro nombre o cambia el filtro.</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  lista: { gap: 10, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 28 },
  cabecera: { gap: 12, paddingBottom: 4 },
  titulo: { color: '#102a43', fontSize: 24, fontWeight: '800', marginTop: 8 },
  resumen: { color: '#627d98', fontSize: 13, marginTop: -8 },
  busqueda: {
    backgroundColor: '#fff',
    borderColor: '#bcccdc',
    borderRadius: 10,
    borderWidth: 1,
    color: '#102a43',
    fontSize: 15,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  filtros: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  filtro: {
    backgroundColor: '#e8eef3',
    borderRadius: 18,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  filtroActivo: { backgroundColor: '#087e8b' },
  textoFiltro: { color: '#486581', fontSize: 12, fontWeight: '700' },
  textoFiltroActivo: { color: '#fff' },
  consulta: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#d9e2ec',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    padding: 14,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  avatarTexto: { color: '#087e8b', fontSize: 18, fontWeight: '800' },
  detalle: { flex: 1, gap: 4 },
  encabezadoConsulta: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  mascota: { color: '#102a43', fontSize: 16, fontWeight: '800' },
  estado: { borderRadius: 12, paddingHorizontal: 8, paddingVertical: 4 },
  estadoTexto: { fontSize: 11, fontWeight: '800' },
  servicio: { color: '#334e68', fontSize: 13, fontWeight: '700' },
  tutor: { color: '#627d98', fontSize: 12 },
  fechaFila: { alignItems: 'center', flexDirection: 'row', gap: 7, marginTop: 3 },
  fecha: { color: '#486581', fontSize: 12, fontWeight: '700' },
  separador: { color: '#9fb3c8', fontSize: 12 },
  vacio: { alignItems: 'center', paddingVertical: 48 },
  vacioTitulo: { color: '#334e68', fontSize: 15, fontWeight: '800' },
  vacioTexto: { color: '#627d98', fontSize: 13, marginTop: 5 },
})
