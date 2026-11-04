// app/index.tsx — agrega al archivo existente
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import { BadgeEstado } from './paso3'
import { ModalConfirm} from './paso5'
import {Card,FilaInfo} from './paso2'
// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} para Galaxy S24`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Galaxy S24</Text>
          <Text style={estilos6.cabIp}>Samsung · 256 GB · 12 meses de garantía</Text>
        </View>
        <BadgeEstado estado="disponible" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Características" subtitulo="Smartphone premium">
          <FilaInfo etiqueta="Pantalla" valor="6.2 pulgadas AMOLED" />
          <FilaInfo etiqueta="Almacenamiento" valor="256 GB" />
          <FilaInfo etiqueta="Cámara" valor="50 MP" />
          <FilaInfo etiqueta="Batería" valor="4000 mAh" />
          <FilaInfo etiqueta="Precio" valor="$899" />
        </Card>

        <Card titulo="Compra y garantía">
          <FilaInfo etiqueta="Disponibilidad" valor="En stock" />
          <FilaInfo etiqueta="Garantía" valor="12 meses" />
          <FilaInfo etiqueta="Formas de pago" valor="Efectivo o tarjeta" />
          <FilaInfo etiqueta="Entrega" valor="Retiro en tienda" />
          <FilaInfo etiqueta="Tienda" valor="MoviTech" />
        </Card>

        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Añadir al carrito"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Añadir al carrito')}
            />
            <BotonAccion
              etiqueta="Comprar ahora"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Compra')}
            />
            <BotonAccion
              etiqueta="Consultar garantía"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Consulta de garantía')}
            />
            <BotonAccion
              etiqueta="Consultar equipo"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Consulta del equipo')}
            />
          </View>
        </Card>

        {log.length > 0 && (
            <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Confirmas "${accionPendiente}" para el Galaxy S24?`}
        etiquetaConfirmar="Confirmar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})