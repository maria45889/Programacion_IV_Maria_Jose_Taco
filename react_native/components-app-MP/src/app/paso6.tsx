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
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} para Luna`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Luna · Paciente</Text>
          <Text style={estilos6.cabIp}>Perro · Labrador · Responsable: María Pérez</Text>
        </View>
        <BadgeEstado estado="confirmada" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Historia clínica" subtitulo="Paciente desde 2022">
          <FilaInfo etiqueta="Especie" valor="Perro" />
          <FilaInfo etiqueta="Raza" valor="Labrador" />
          <FilaInfo etiqueta="Edad" valor="4 años" />
          <FilaInfo etiqueta="Alergias" valor="Ninguna registrada" />
          <FilaInfo etiqueta="Vacunas" valor="Al día" />
        </Card>

        <Card titulo="Próxima cita">
          <FilaInfo etiqueta="Estado" valor="Confirmada" />
          <FilaInfo etiqueta="Servicio" valor="Consulta general" />
          <FilaInfo etiqueta="Fecha" valor="Hoy · 10:30" />
          <FilaInfo etiqueta="Veterinaria" valor="Dra. Ana López" />
          <FilaInfo etiqueta="Consultorio" valor="Veterinaria Huellitas" />
        </Card>

        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Registrar vacuna"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Registro de vacuna')}
            />
            <BotonAccion
              etiqueta="Iniciar consulta"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Inicio de consulta')}
            />
            <BotonAccion
              etiqueta="Actualizar historia"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Actualización de historia clínica')}
            />
            <BotonAccion
              etiqueta="Agendar control"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Agenda de control')}
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
        mensaje={`¿Confirmas "${accionPendiente}" para Luna?`}
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