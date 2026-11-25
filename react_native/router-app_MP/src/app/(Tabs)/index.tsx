// app/(tabs)/index.tsx
import { Link, Stack } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function TabInicio() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenedor}>
      <Stack.Screen options={{ title: 'Huellitas · Consultorio' }} />
      <View style={styles.hero}>
        <Text style={styles.sobre}>Consulta del día</Text>
        <Text style={styles.titulo}>Hola, cuidemos a tu mascota</Text>
        <Text style={styles.subtitulo}>Reserva una consulta o revisa su próximo control preventivo.</Text>
        <Link href="/(Tabs)/ajustes" asChild>
          <Pressable style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}>
            <Text style={styles.textoBoton}>Reservar cita</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Accesos rápidos</Text>
        <View style={styles.grilla}>
          <Link href="/productos" asChild>
            <Pressable style={styles.acceso}>
              <View style={styles.accesoMarca}><Text style={styles.accesoInicial}>S</Text></View>
              <Text style={styles.accesoTitulo}>Servicios</Text>
              <Text style={styles.accesoDetalle}>Conoce la atención disponible</Text>
            </Pressable>
          </Link>
          <Link href="/(Tabs)/alertas" asChild>
            <Pressable style={styles.acceso}>
              <View style={styles.accesoMarca}><Text style={styles.accesoInicial}>P</Text></View>
              <Text style={styles.accesoTitulo}>Prevención</Text>
              <Text style={styles.accesoDetalle}>Vacunas y controles</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.recordatorio}>
        <View>
          <Text style={styles.recordatorioEtiqueta}>Próximo control</Text>
          <Text style={styles.recordatorioTitulo}>Vacuna anual</Text>
        </View>
        <Text style={styles.recordatorioFecha}>SÁB 15</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f5f8f6' },
  contenedor: { gap: 18, padding: 16 },
  hero: { backgroundColor: '#12372f', borderRadius: 18, gap: 9, padding: 20 },
  sobre: { color: '#e7b75c', fontSize: 12, fontWeight: '800', letterSpacing: 1 },
  titulo: { color: '#ffffff', fontSize: 27, fontWeight: '800', letterSpacing: -0.5, maxWidth: 390 },
  subtitulo: { color: '#cfddd8', fontSize: 14, lineHeight: 20, maxWidth: 390 },
  boton: { alignItems: 'center', alignSelf: 'flex-start', backgroundColor: '#e7b75c', borderRadius: 10, marginTop: 5, paddingHorizontal: 16, paddingVertical: 12 },
  botonPresionado: { backgroundColor: '#d0a34d' },
  textoBoton: { color: '#fff', fontSize: 14, fontWeight: '700' },
  seccion: { gap: 10 },
  tituloSeccion: { color: '#12372f', fontSize: 18, fontWeight: '800' },
  grilla: { flexDirection: 'row', gap: 10 },
  acceso: { backgroundColor: '#ffffff', borderColor: '#dce6e1', borderRadius: 14, borderWidth: 1, flex: 1, gap: 7, padding: 14 },
  accesoMarca: { alignItems: 'center', backgroundColor: '#edf3ef', borderRadius: 8, height: 38, justifyContent: 'center', width: 38 },
  accesoInicial: { color: '#23483e', fontSize: 14, fontWeight: '900' },
  accesoTitulo: { color: '#1c3029', fontSize: 15, fontWeight: '800' },
  accesoDetalle: { color: '#64766f', fontSize: 12, lineHeight: 17 },
  recordatorio: { alignItems: 'center', backgroundColor: '#fff6df', borderColor: '#ead69c', borderRadius: 14, borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  recordatorioEtiqueta: { color: '#80641f', fontSize: 11, fontWeight: '800', letterSpacing: 0.8 },
  recordatorioTitulo: { color: '#3d351f', fontSize: 16, fontWeight: '800', marginTop: 3 },
  recordatorioFecha: { color: '#80641f', fontSize: 13, fontWeight: '900' },
})