import { Link } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Inicio() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <View style={styles.encabezado}>
        <View style={styles.marca}>
          <View style={styles.marcaSimbolo}><Text style={styles.marcaLetra}>H</Text></View>
          <Text style={styles.nombreMarca}>Huellitas</Text>
        </View>
        <Text style={styles.titulo}>La salud de tu mascota, siempre cerca.</Text>
        <Text style={styles.subtitulo}>Consultas, prevención y cuidado especializado para perros y gatos.</Text>
        <Link href="/(Tabs)" asChild>
          <Pressable style={({ pressed }) => [styles.botonPrincipal, pressed && styles.botonPresionado]}>
            <Text style={styles.textoBoton}>Ingresar al consultorio</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.infoRapida}>
        <View style={styles.infoBloque}>
          <Text style={styles.infoTitulo}>Atención</Text>
          <Text style={styles.infoTexto}>Lun a sáb · 9:00–18:00</Text>
        </View>
        <View style={styles.separador} />
        <View style={styles.infoBloque}>
          <Text style={styles.infoTitulo}>Consultas</Text>
          <Text style={styles.infoTexto}>Con reserva previa</Text>
        </View>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Cuidado integral</Text>
        {[
          ['Consulta', 'Revisión completa y orientación personalizada'],
          ['Prevención', 'Vacunas y desparasitación a tiempo'],
          ['Emergencias', 'Valoración inmediata durante horario'],
        ].map(([nombre, detalle]) => (
          <View key={nombre} style={styles.filaServicio}>
            <View style={styles.punto} />
            <View style={styles.filaTexto}>
              <Text style={styles.nombreServicio}>{nombre}</Text>
              <Text style={styles.detalleServicio}>{detalle}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f5f8f6' },
  contenido: { padding: 20, gap: 18 },
  encabezado: { backgroundColor: '#12372f', borderRadius: 20, padding: 22, gap: 14 },
  marca: { alignItems: 'center', flexDirection: 'row', gap: 9 },
  marcaSimbolo: { alignItems: 'center', backgroundColor: '#e7b75c', borderRadius: 9, height: 36, justifyContent: 'center', width: 36 },
  marcaLetra: { color: '#12372f', fontSize: 18, fontWeight: '900' },
  nombreMarca: { color: '#ffffff', fontSize: 16, fontWeight: '800' },
  titulo: { color: '#ffffff', fontSize: 34, fontWeight: '800', letterSpacing: -1, lineHeight: 39, maxWidth: 420 },
  subtitulo: { color: '#cfddd8', fontSize: 15, lineHeight: 22, maxWidth: 420 },
  botonPrincipal: { alignItems: 'center', alignSelf: 'flex-start', backgroundColor: '#e7b75c', borderRadius: 12, marginTop: 4, paddingHorizontal: 18, paddingVertical: 13 },
  botonPresionado: { backgroundColor: '#d0a34d' },
  textoBoton: { color: '#fff', fontSize: 15, fontWeight: '700' },
  infoRapida: { backgroundColor: '#ffffff', borderColor: '#dce6e1', borderRadius: 16, borderWidth: 1, flexDirection: 'row', padding: 16 },
  infoBloque: { flex: 1, gap: 4 },
  separador: { backgroundColor: '#dce6e1', marginHorizontal: 14, width: 1 },
  infoTitulo: { color: '#12372f', fontSize: 13, fontWeight: '800' },
  infoTexto: { color: '#64766f', fontSize: 12, lineHeight: 17 },
  seccion: { gap: 12 },
  tituloSeccion: { color: '#12372f', fontSize: 20, fontWeight: '800', marginBottom: 2 },
  filaServicio: { alignItems: 'center', borderBottomColor: '#e0e8e3', borderBottomWidth: 1, flexDirection: 'row', gap: 12, paddingVertical: 12 },
  punto: { backgroundColor: '#dcae55', borderRadius: 5, height: 10, width: 10 },
  filaTexto: { flex: 1, gap: 3 },
  nombreServicio: { color: '#1c3029', fontSize: 15, fontWeight: '800' },
  detalleServicio: { color: '#64766f', fontSize: 13, lineHeight: 18 },
})