import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { useCitasStore } from '@/stores/citas-store'

const servicios = ['Control general', 'Vacunación', 'Dermatología', 'Urgencias']
const fechas = ['26 nov', '27 nov', '28 nov', '29 nov']
const horas = ['09:00', '10:30', '12:00', '16:30']

export default function CitasScreen() {
  const citas = useCitasStore((state) => state.citas)
  const reservar = useCitasStore((state) => state.reservar)
  const cancelar = useCitasStore((state) => state.cancelar)
  const [mascota, setMascota] = useState('Luna')
  const [servicio, setServicio] = useState(servicios[0])
  const [fecha, setFecha] = useState(fechas[0])
  const [hora, setHora] = useState(horas[0])
  const [confirmada, setConfirmada] = useState(false)

  const crearReserva = () => {
    const nombre = mascota.trim()
    if (!nombre) return
    reservar({ mascota: nombre, servicio, fecha, hora })
    setConfirmada(true)
  }

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.marca}>HUELLITAS · CONSULTORIO</Text>
      <Text style={styles.titulo}>Reserva tu cita</Text>
      <Text style={styles.subtitulo}>Elige el servicio y el horario que prefieras.</Text>

      {confirmada && (
        <View style={styles.confirmacion}>
          <Text style={styles.confirmacionTitulo}>Cita confirmada</Text>
          <Text style={styles.confirmacionTexto}>
            Hemos reservado el turno para {mascota.trim()}.
          </Text>
        </View>
      )}

      <View style={styles.seccion}>
        <Text style={styles.etiqueta}>Mascota</Text>
        <TextInput
          value={mascota}
          onChangeText={(texto) => {
            setMascota(texto)
            setConfirmada(false)
          }}
          style={styles.input}
          placeholder="Nombre de tu mascota"
          placeholderTextColor="#728178"
        />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.etiqueta}>Servicio</Text>
        <View style={styles.opciones}>
          {servicios.map((nombre) => (
            <Pressable
              key={nombre}
              accessibilityRole="button"
              accessibilityState={{ selected: servicio === nombre }}
              onPress={() => setServicio(nombre)}
              style={[styles.chip, servicio === nombre && styles.chipSeleccionado]}
            >
              <Text style={[styles.chipTexto, servicio === nombre && styles.chipTextoSeleccionado]}>
                {nombre}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.etiqueta}>Fecha</Text>
        <View style={styles.opciones}>
          {fechas.map((dia) => (
            <Pressable
              key={dia}
              accessibilityRole="button"
              accessibilityState={{ selected: fecha === dia }}
              onPress={() => setFecha(dia)}
              style={[styles.fecha, fecha === dia && styles.fechaSeleccionada]}
            >
              <Text style={[styles.fechaTexto, fecha === dia && styles.fechaTextoSeleccionada]}>
                {dia}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.etiqueta}>Horario</Text>
        <View style={styles.opciones}>
          {horas.map((turno) => (
            <Pressable
              key={turno}
              accessibilityRole="button"
              accessibilityState={{ selected: hora === turno }}
              onPress={() => setHora(turno)}
              style={[styles.hora, hora === turno && styles.horaSeleccionada]}
            >
              <Text style={[styles.horaTexto, hora === turno && styles.horaTextoSeleccionada]}>
                {turno}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        disabled={!mascota.trim()}
        onPress={crearReserva}
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
          !mascota.trim() && styles.botonDeshabilitado,
        ]}
      >
        <Text style={styles.botonTexto}>Confirmar reserva</Text>
      </Pressable>

      {citas.length > 0 && (
        <View style={styles.citasSeccion}>
          <Text style={styles.tituloCitas}>Mis citas</Text>
          {citas.map((cita) => (
            <View key={cita.id} style={styles.cita}>
              <View style={styles.citaFecha}>
                <Text style={styles.citaDia}>{cita.fecha}</Text>
                <Text style={styles.citaHora}>{cita.hora}</Text>
              </View>
              <View style={styles.citaInfo}>
                <Text style={styles.citaMascota}>{cita.mascota}</Text>
                <Text style={styles.citaServicio}>{cita.servicio}</Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Cancelar cita de ${cita.mascota}`}
                onPress={() => cancelar(cita.id)}
                style={styles.cancelar}
              >
                <Text style={styles.cancelarTexto}>Cancelar</Text>
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#F8F6EF' },
  contenido: { padding: 20, paddingBottom: 40, gap: 18, maxWidth: 800, width: '100%', alignSelf: 'center' },
  marca: { color: '#173F38', fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  titulo: { color: '#173F38', fontSize: 32, lineHeight: 38, fontWeight: '800', marginBottom: -12 },
  subtitulo: { color: '#5F7168', fontSize: 15, lineHeight: 22 },
  confirmacion: { backgroundColor: '#E8F3EC', borderRadius: 16, borderWidth: 1, borderColor: '#BCD7C6', padding: 16, gap: 4 },
  confirmacionTitulo: { color: '#173F38', fontSize: 16, fontWeight: '800' },
  confirmacionTexto: { color: '#4E665B', fontSize: 14 },
  seccion: { gap: 8 },
  etiqueta: { color: '#173F38', fontSize: 14, fontWeight: '800' },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#D6DDD7', borderRadius: 12, color: '#173F38', fontSize: 16, minHeight: 52, paddingHorizontal: 14 },
  opciones: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 1, borderColor: '#D6DDD7', borderRadius: 22, paddingHorizontal: 13, paddingVertical: 11, backgroundColor: '#FFFFFF' },
  chipSeleccionado: { backgroundColor: '#173F38', borderColor: '#173F38' },
  chipTexto: { color: '#52665C', fontSize: 13, fontWeight: '700' },
  chipTextoSeleccionado: { color: '#FFFFFF' },
  fecha: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#D6DDD7', borderRadius: 12, borderWidth: 1, flexGrow: 1, minWidth: 72, paddingVertical: 12 },
  fechaSeleccionada: { backgroundColor: '#F2A65A', borderColor: '#F2A65A' },
  fechaTexto: { color: '#52665C', fontSize: 13, fontWeight: '800' },
  fechaTextoSeleccionada: { color: '#173F38' },
  hora: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#D6DDD7', borderRadius: 10, borderWidth: 1, flexGrow: 1, minWidth: 72, paddingVertical: 11 },
  horaSeleccionada: { backgroundColor: '#173F38', borderColor: '#173F38' },
  horaTexto: { color: '#52665C', fontSize: 13, fontWeight: '700' },
  horaTextoSeleccionada: { color: '#FFFFFF' },
  boton: { alignItems: 'center', backgroundColor: '#173F38', borderRadius: 12, justifyContent: 'center', minHeight: 52 },
  botonPresionado: { opacity: 0.85 },
  botonDeshabilitado: { opacity: 0.45 },
  botonTexto: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  citasSeccion: { borderTopColor: '#D6DDD7', borderTopWidth: 1, gap: 10, paddingTop: 18 },
  tituloCitas: { color: '#173F38', fontSize: 20, fontWeight: '800', marginBottom: 2 },
  cita: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#D6DDD7', borderRadius: 14, borderWidth: 1, flexDirection: 'row', gap: 12, padding: 12 },
  citaFecha: { alignItems: 'center', backgroundColor: '#E8F3EC', borderRadius: 10, minWidth: 64, paddingVertical: 8 },
  citaDia: { color: '#173F38', fontSize: 12, fontWeight: '800' },
  citaHora: { color: '#173F38', fontSize: 14, fontWeight: '800', marginTop: 2 },
  citaInfo: { flex: 1, gap: 3 },
  citaMascota: { color: '#173F38', fontSize: 15, fontWeight: '800' },
  citaServicio: { color: '#5F7168', fontSize: 13 },
  cancelar: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 10 },
  cancelarTexto: { color: '#A3483D', fontSize: 12, fontWeight: '800' },
})
