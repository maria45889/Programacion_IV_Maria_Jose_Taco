// app/index.tsx
import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Inicio() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.marca}>MOVITECH</Text>
      <Text style={styles.titulo}>Tecnología para todos los días</Text>
      <Text style={styles.subtitulo}>Explora smartphones, ofertas y accesorios.</Text>
      <Link href="/(Tabs)" asChild>
        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Entrar a la tienda</Text>
        </Pressable>
      </Link>
      <Link href="/productos" style={styles.enlace}>
        Ver catálogo de equipos
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f7fb',
    gap: 8,
    padding: 28,
  },
  marca: { color: '#087e8b', fontSize: 13, fontWeight: '800', letterSpacing: 3 },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#102a43',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#627d98',
    textAlign: 'center',
  },
  boton: { backgroundColor: '#087e8b', borderRadius: 10, marginTop: 16, paddingHorizontal: 20, paddingVertical: 13 },
  textoBoton: { color: '#fff', fontSize: 15, fontWeight: '700' },
  enlace: { color: '#087e8b', fontSize: 14, fontWeight: '700', padding: 10 },
})