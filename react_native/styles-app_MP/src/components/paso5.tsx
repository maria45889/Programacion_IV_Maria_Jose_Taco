import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'

const paletas = {
  claro: { fondo: '#f4f7fb', tarjeta: '#fff', texto: '#102a43', sutil: '#627d98', primario: '#087e8b' },
  oscuro: { fondo: '#101820', tarjeta: '#1b2935', texto: '#e6f1f5', sutil: '#9fb3c1', primario: '#2dd4bf' },
}

export function Paso5() {
  const sistema = useColorScheme()
  const [forzado, setForzado] = useState<'claro' | 'oscuro' | null>(null)
  const tema = forzado ?? (sistema === 'dark' ? 'oscuro' : 'claro')
  const colores = paletas[tema]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colores.fondo }} contentContainerStyle={styles.contenido}>
      <View style={styles.cabecera}>
        <View>
          <Text style={[styles.titulo, { color: colores.texto }]}>MoviTech</Text>
          <Text style={{ color: colores.sutil }}>Tema del dispositivo: {sistema ?? 'claro'}</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => setForzado((actual) => (actual === 'oscuro' ? 'claro' : 'oscuro'))}
          style={[styles.boton, { backgroundColor: colores.primario }]}
        >
          <Text style={styles.textoBoton}>Cambiar tema</Text>
        </Pressable>
      </View>
      {['Nova X Pro', 'PixelWave 8', 'Zenith A5'].map((modelo, index) => (
        <View key={modelo} style={[styles.tarjeta, { backgroundColor: colores.tarjeta }]}>
          <Text style={[styles.modelo, { color: colores.texto }]}>{modelo}</Text>
          <Text style={{ color: colores.sutil }}>{['$899 · 256 GB', '$649 · 128 GB', '$399 · 128 GB'][index]}</Text>
        </View>
      ))}
      <Text style={{ color: colores.sutil }}>
        Paleta activa: {tema}. Selecciona el botón para alternar entre modo claro y oscuro.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenido: { gap: 14, padding: 18 },
  cabecera: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  titulo: { fontSize: 22, fontWeight: '800' },
  boton: { borderRadius: 99, paddingHorizontal: 14, paddingVertical: 9 },
  textoBoton: { color: '#fff', fontSize: 12, fontWeight: '700' },
  tarjeta: { borderRadius: 12, gap: 5, padding: 16 },
  modelo: { fontSize: 16, fontWeight: '700' },
})
