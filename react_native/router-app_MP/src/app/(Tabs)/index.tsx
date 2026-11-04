// app/(tabs)/index.tsx
import { Link, Stack } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function TabInicio() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'MoviTech · Tienda' }} />
      <Text style={styles.marca}>CATÁLOGO DE TEMPORADA</Text>
      <Text style={styles.titulo}>Estrena tecnología</Text>
      <Text style={styles.dato}>12 equipos disponibles</Text>
      <Text style={styles.dato}>Envío gratis desde $500</Text>
      <Link href="/productos" asChild>
        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Explorar equipos</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  marca: { color: '#087e8b', fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  titulo: { color: '#102a43', fontSize: 24, fontWeight: '800' },
  dato: { color: '#627d98', fontSize: 15 },
  boton: { backgroundColor: '#087e8b', borderRadius: 10, marginTop: 8, paddingHorizontal: 20, paddingVertical: 13 },
  textoBoton: { color: '#fff', fontSize: 14, fontWeight: '700' },
})