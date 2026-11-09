// app/index.tsx — agrega al archivo existente
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const CITAS_DEMO = [
  { id: '1', mascota: 'Luna · perro', responsable: 'María Pérez', servicio: 'Consulta general', hora: '09:00', ocupacion: 80 },
  { id: '2', mascota: 'Michi · gato', responsable: 'Carlos Ruiz', servicio: 'Vacunación', hora: '09:30', ocupacion: 40 },
  { id: '3', mascota: 'Toby · conejo', responsable: 'Ana Díaz', servicio: 'Control preventivo', hora: '10:00', ocupacion: 100 },
  { id: '4', mascota: 'Nina · perro', responsable: 'Luis Mora', servicio: 'Desparasitación', hora: '10:30', ocupacion: 60 },
  { id: '5', mascota: 'Coco · ave', responsable: 'Eva León', servicio: 'Consulta general', hora: '11:00', ocupacion: 20 },
  { id: '6', mascota: 'Max · perro', responsable: 'Sofía Vera', servicio: 'Revisión dental', hora: '11:30', ocupacion: 50 },
  { id: '7', mascota: 'Mora · gato', responsable: 'Pablo Cruz', servicio: 'Control preventivo', hora: '12:00', ocupacion: 30 },
  { id: '8', mascota: 'Kira · perro', responsable: 'Elena Solís', servicio: 'Consulta general', hora: '12:30', ocupacion: 90 },
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

function TarjetaCita({ mascota, responsable, servicio, hora, ocupacion }: typeof CITAS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{mascota}</Text>
        <Text style={estilos4.nodoIp}>{hora}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{servicio} · Responsable: {responsable}</Text>
      <BarraUso porcentaje={ocupacion} etiqueta="Agenda" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Agenda · Veterinaria Huellitas</Text>
        <Text style={estilos4.headerSub}>{CITAS_DEMO.length} citas programadas</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {CITAS_DEMO.map((cita) => (
          <TarjetaCita key={cita.id} {...cita} />
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