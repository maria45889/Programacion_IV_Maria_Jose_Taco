// app/index.tsx — agrega al archivo existente
import { StyleSheet, Text, View } from 'react-native'
// ─── Paso 3 — Props opcionales ───────────────────────────────────────

type EstadoCita = 'confirmada' | 'en espera' | 'en consulta' | 'atendida' | 'cancelada'

interface BadgeEstadoProps {
  estado: EstadoCita
  tamaño?: number          // opcional — valor por defecto: 12
  mostrarIcono?: boolean   // opcional — valor por defecto: false
}

const COLOR_ESTADO: Record<EstadoCita, { fondo: string; texto: string }> = {
  confirmada: { fondo: '#e8f5e9', texto: '#2e7d32' },
  'en espera': { fondo: '#fff8e1', texto: '#f57f17' },
  'en consulta': { fondo: '#e3f2fd', texto: '#1565c0' },
  atendida: { fondo: '#f5f5f5', texto: '#616161' },
  cancelada: { fondo: '#fce4ec', texto: '#c62828' },
}

const ICONO_ESTADO: Record<EstadoCita, string> = {
  confirmada: '●',
  'en espera': '◐',
  'en consulta': '◐',
  atendida: '○',
  cancelada: '✕',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaCitaProps {
  mascota: string
  servicio: string
  estado: EstadoCita
  hora: string
}

function FilaCita({ mascota, servicio, estado, hora }: FilaCitaProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreEquipo}>{mascota}</Text>
        <Text style={estilos3.ipTexto}>{servicio}</Text>
      </View>
      <View style={estilos3.infoDer}>
        <Text style={estilos3.latencia}>{hora}</Text>
        <BadgeEstado estado={estado} mostrarIcono={false} />
      </View>
    </View>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Agenda de hoy · Huellitas</Text>
      <FilaCita mascota="Luna · María Pérez" servicio="Consulta general" estado="confirmada" hora="09:00" />
      <FilaCita mascota="Michi · Carlos Ruiz" servicio="Vacunación" estado="en espera" hora="09:30" />
      <FilaCita mascota="Toby · Ana Díaz" servicio="Control" estado="en consulta" hora="10:00" />
      <FilaCita mascota="Nina · Luis Mora" servicio="Desparasitación" estado="atendida" hora="10:30" />
      <FilaCita mascota="Coco · Eva León" servicio="Consulta" estado="cancelada" hora="11:00" />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreEquipo: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  ipTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  latencia: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})