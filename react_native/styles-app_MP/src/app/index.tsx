import { router } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const citas = [
  { hora: '09:00', mascota: 'Luna', servicio: 'Consulta general', estado: 'Confirmada' },
  { hora: '10:30', mascota: 'Michi', servicio: 'Vacunación', estado: 'En espera' },
  { hora: '12:00', mascota: 'Toby', servicio: 'Control preventivo', estado: 'Confirmada' },
]

const servicios = [
  { nombre: 'Consulta', descripcion: 'Revisión general', color: '#087e8b', inicial: 'C' },
  { nombre: 'Vacunas', descripcion: 'Calendario', color: '#1565c0', inicial: 'V' },
  { nombre: 'Urgencias', descripcion: 'Atención inmediata', color: '#e76f51', inicial: 'U' },
  { nombre: 'Estética', descripcion: 'Baño y cuidado', color: '#7c3aed', inicial: 'E' },
]

export default function Index() {
  return (
    <SafeAreaView style={styles.pantalla} edges={['top']}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <View style={styles.cabecera}>
          <View>
            <Text style={styles.marca}>Huellitas</Text>
            <Text style={styles.saludo}>Hola, María</Text>
          </View>
          <Pressable accessibilityRole="button" style={styles.avatar} onPress={() => router.push('/explore')}>
            <Text style={styles.avatarTexto}>MJ</Text>
          </Pressable>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerTexto}>
            <Text style={styles.bannerEtiqueta}>Cuidado integral</Text>
            <Text style={styles.bannerTitulo}>La salud de tu mascota empieza aquí</Text>
            <Pressable
              accessibilityRole="button"
              style={styles.botonBanner}
              onPress={() => router.push('/explore')}
            >
              <Text style={styles.botonBannerTexto}>Ver servicios</Text>
            </Pressable>
          </View>
          <View style={styles.iconoMascota}>
            <Text style={styles.iconoMascotaTexto}>🐾</Text>
          </View>
        </View>

        <Text style={styles.seccionTitulo}>Servicios</Text>
        <View style={styles.rejillaServicios}>
          {servicios.map((servicio) => (
            <Pressable
              accessibilityRole="button"
              key={servicio.nombre}
              style={styles.servicio}
              onPress={() => router.push('/explore')}
            >
              <View style={[styles.servicioIcono, { backgroundColor: servicio.color }]}>
                <Text style={styles.servicioInicial}>{servicio.inicial}</Text>
              </View>
              <Text numberOfLines={1} style={styles.servicioNombre}>{servicio.nombre}</Text>
              <Text numberOfLines={1} style={styles.servicioDescripcion}>{servicio.descripcion}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.tituloFila}>
          <Text style={styles.seccionTitulo}>Próximas citas</Text>
          <Pressable accessibilityRole="button" onPress={() => router.push('/explore')}>
            <Text style={styles.verTodo}>Ver todas</Text>
          </Pressable>
        </View>

        <View style={styles.listaCitas}>
          {citas.map((cita) => (
            <View key={`${cita.hora}-${cita.mascota}`} style={styles.cita}>
              <View style={styles.horaContenedor}>
                <Text style={styles.hora}>{cita.hora}</Text>
              </View>
              <View style={styles.citaInfo}>
                <Text style={styles.mascota}>{cita.mascota}</Text>
                <Text style={styles.citaServicio}>{cita.servicio}</Text>
              </View>
              <Text
                style={[
                  styles.estado,
                  cita.estado === 'En espera' ? styles.estadoEspera : styles.estadoConfirmada,
                ]}
              >
                {cita.estado}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f6f8f7', flex: 1 },
  contenido: { gap: 18, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 32, width: '100%', maxWidth: 800, alignSelf: 'center' },
  cabecera: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  marca: { color: '#087e8b', fontSize: 13, fontWeight: '800', letterSpacing: 1.4, textTransform: 'uppercase' },
  saludo: { color: '#17324d', fontSize: 24, fontWeight: '800', marginTop: 2 },
  avatar: { alignItems: 'center', backgroundColor: '#dff3f1', borderColor: '#b9e1dc', borderRadius: 22, borderWidth: 1, height: 44, justifyContent: 'center', width: 44 },
  avatarTexto: { color: '#087e8b', fontSize: 14, fontWeight: '800' },
  banner: { backgroundColor: '#087e8b', borderRadius: 20, flexDirection: 'row', minHeight: 168, overflow: 'hidden', padding: 20 },
  bannerTexto: { flex: 1.45, justifyContent: 'center' },
  bannerEtiqueta: { color: '#b9ebe6', fontSize: 11, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  bannerTitulo: { color: '#fff', fontSize: 22, fontWeight: '800', lineHeight: 28, marginTop: 8, maxWidth: 280 },
  botonBanner: { alignItems: 'center', alignSelf: 'flex-start', backgroundColor: '#fff', borderRadius: 9, marginTop: 14, paddingHorizontal: 14, paddingVertical: 9 },
  botonBannerTexto: { color: '#087e8b', fontSize: 12, fontWeight: '800' },
  iconoMascota: { alignItems: 'center', flex: 0.55, justifyContent: 'center' },
  iconoMascotaTexto: { fontSize: 54 },
  seccionTitulo: { color: '#17324d', fontSize: 18, fontWeight: '800' },
  rejillaServicios: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  servicio: { backgroundColor: '#fff', borderColor: '#e4ebe8', borderRadius: 14, borderWidth: 1, flexBasis: '22%', flexGrow: 1, minWidth: 112, padding: 12 },
  servicioIcono: { alignItems: 'center', borderRadius: 12, height: 44, justifyContent: 'center', marginBottom: 10, width: 44 },
  servicioInicial: { color: '#fff', fontSize: 18, fontWeight: '800' },
  servicioNombre: { color: '#17324d', fontSize: 13, fontWeight: '800' },
  servicioDescripcion: { color: '#7b8b87', fontSize: 11, marginTop: 3 },
  tituloFila: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  verTodo: { color: '#087e8b', fontSize: 12, fontWeight: '800' },
  listaCitas: { gap: 10 },
  cita: { alignItems: 'center', backgroundColor: '#fff', borderColor: '#e4ebe8', borderRadius: 14, borderWidth: 1, flexDirection: 'row', padding: 12 },
  horaContenedor: { alignItems: 'center', backgroundColor: '#eaf6f4', borderRadius: 10, height: 48, justifyContent: 'center', width: 58 },
  hora: { color: '#087e8b', fontSize: 12, fontWeight: '800' },
  citaInfo: { flex: 1, marginLeft: 12 },
  mascota: { color: '#17324d', fontSize: 15, fontWeight: '800' },
  citaServicio: { color: '#7b8b87', fontSize: 12, marginTop: 3 },
  estado: { borderRadius: 99, fontSize: 10, fontWeight: '800', paddingHorizontal: 9, paddingVertical: 6 },
  estadoConfirmada: { backgroundColor: '#dff3e8', color: '#26745b' },
  estadoEspera: { backgroundColor: '#fff0de', color: '#a55a16' },
})
