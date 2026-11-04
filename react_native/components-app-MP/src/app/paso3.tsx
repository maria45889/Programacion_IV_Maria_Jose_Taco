// app/index.tsx — agrega al archivo existente
import { StyleSheet, Text, View } from 'react-native'
// ─── Paso 3 — Props opcionales ───────────────────────────────────────

type EstadoEquipo = 'disponible' | 'pocas unidades' | 'agotado' | 'reservado' | 'descontinuado'

interface BadgeEstadoProps {
  estado: EstadoEquipo
  tamaño?: number          // opcional — valor por defecto: 12
  mostrarIcono?: boolean   // opcional — valor por defecto: false
}

const COLOR_ESTADO: Record<EstadoEquipo, { fondo: string; texto: string }> = {
  disponible: { fondo: '#e8f5e9', texto: '#2e7d32' },
  'pocas unidades': { fondo: '#fff8e1', texto: '#f57f17' },
  agotado: { fondo: '#f5f5f5', texto: '#616161' },
  reservado: { fondo: '#e3f2fd', texto: '#1565c0' },
  descontinuado: { fondo: '#fce4ec', texto: '#c62828' },
}

const ICONO_ESTADO: Record<EstadoEquipo, string> = {
  disponible: '●',
  'pocas unidades': '◐',
  agotado: '○',
  reservado: '◐',
  descontinuado: '✕',
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

interface FilaEquipoProps {
  modelo: string
  marca: string
  estado: EstadoEquipo
  precio?: number
}

function FilaEquipo({ modelo, marca, estado, precio }: FilaEquipoProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreEquipo}>{modelo}</Text>
        <Text style={estilos3.ipTexto}>{marca}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {precio !== undefined && (
          <Text style={estilos3.latencia}>${precio}</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} />
      </View>
    </View>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Disponibilidad en tienda</Text>
      <FilaEquipo modelo="Galaxy S24" marca="Samsung" estado="disponible" precio={899} />
      <FilaEquipo modelo="iPhone 15" marca="Apple" estado="pocas unidades" precio={799} />
      <FilaEquipo modelo="Redmi Note 13" marca="Xiaomi" estado="disponible" precio={249} />
      <FilaEquipo modelo="Edge 50" marca="Motorola" estado="reservado" precio={399} />
      <FilaEquipo modelo="Galaxy A15" marca="Samsung" estado="agotado" />
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