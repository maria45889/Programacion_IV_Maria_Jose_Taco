import { router, Stack, useLocalSearchParams } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

type FichaServicio = { nombre: string; categoria: string; precio: number; duracion: string; dirigidoA: string; incluye: string; descripcion: string }

const SERVICIOS: Record<string, FichaServicio> = {
  'consulta-general': {
    nombre: 'Consulta general', categoria: 'Consulta', precio: 25, duracion: '30 minutos',
    dirigidoA: 'Perros, gatos y otras mascotas', incluye: 'Revisión física y recomendaciones', descripcion: 'Evaluación veterinaria para conocer el estado general de salud de tu mascota.',
  },
  'vacunacion': {
    nombre: 'Vacunación', categoria: 'Prevención', precio: 18, duracion: '20 minutos',
    dirigidoA: 'Según especie, edad y carnet', incluye: 'Revisión del carnet y registro de dosis', descripcion: 'Plan preventivo coordinado con el veterinario de acuerdo con la historia clínica.',
  },
  'desparasitacion': {
    nombre: 'Desparasitación', categoria: 'Prevención', precio: 12, duracion: '15 minutos',
    dirigidoA: 'Perros y gatos', incluye: 'Evaluación y orientación sobre la dosis', descripcion: 'Atención preventiva con indicaciones personalizadas del profesional veterinario.',
  },
  'control-cachorro': {
    nombre: 'Control de cachorro', categoria: 'Consulta', precio: 20, duracion: '25 minutos',
    dirigidoA: 'Cachorros y gatitos', incluye: 'Control de crecimiento y guía de cuidados', descripcion: 'Acompañamiento veterinario durante las primeras etapas de vida.',
  },
  'revision-dental': {
    nombre: 'Revisión dental', categoria: 'Cuidado', precio: 30, duracion: '30 minutos',
    dirigidoA: 'Perros y gatos', incluye: 'Evaluación de dientes y encías', descripcion: 'Revisión preventiva para orientar el cuidado de la salud oral de tu mascota.',
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
  const servicio = SERVICIOS[id ?? '']

  if (!servicio) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'Equipo no encontrado' }} />
        <Text style={styles.error}>No encontramos ese servicio.</Text>
        <Pressable accessibilityRole="button" onPress={() => router.back()}>
          <Text style={styles.enlace}>Volver a servicios</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: servicio.nombre }} />
      <View style={styles.encabezado}>
        <Text style={styles.marca}>{servicio.categoria.toUpperCase()}</Text>
        <Text style={styles.nombre}>{servicio.nombre}</Text>
        <Text style={styles.descripcion}>{servicio.descripcion}</Text>
        <Text style={styles.precio}>${servicio.precio.toLocaleString('es-ES')}</Text>
      </View>
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>DETALLES DE ATENCIÓN</Text>
        <FilaDetalle etiqueta="Duración" valor={servicio.duracion} />
        <FilaDetalle etiqueta="Dirigido a" valor={servicio.dirigidoA} />
        <FilaDetalle etiqueta="Incluye" valor={servicio.incluye} />
      </View>
      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>AGENDA TU CITA</Text>
        <FilaDetalle etiqueta="Consultorio" valor="Veterinaria Huellitas" />
        <FilaDetalle etiqueta="Horario" valor="Lunes a sábado · 9:00 a 18:00" />
        <FilaDetalle etiqueta="Reserva" valor="Sujeta a disponibilidad" />
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
