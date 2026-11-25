import { Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Paso1() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.contenedor, { paddingTop: insets.top }]}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900&h=1100&fit=crop' }}
          style={styles.foto}
        />
      </View>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Veterinaria Huellitas</Text>
        <Text style={styles.subtitulo}>Consultorio veterinario</Text>
        <Text style={styles.detalle}>Atención y cuidado para tus mascotas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f7f2e8',
  },
  hero: {
    flex: 1,
    margin: 24,
    borderRadius: 28,
    overflow: 'hidden',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  contenido: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#173d35',
  },
  subtitulo: {
    fontSize: 16,
    color: '#173d35',
    marginTop: 6,
  },
  detalle: {
    fontSize: 14,
    color: '#66746d',
    marginTop: 8,
  },
})