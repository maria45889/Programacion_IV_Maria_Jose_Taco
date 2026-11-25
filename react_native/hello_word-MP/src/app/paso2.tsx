import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Paso2() {
  const insets = useSafeAreaInsets()

  const agendar = () => {
    Alert.alert(
      'Consulta solicitada',
      'Te esperamos en Veterinaria Huellitas. Pronto confirmaremos el horario.',
    )
  }

  return (
    <View style={[styles.pagina, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: Math.max(insets.bottom, 24) },
        ]}
      >
        <View style={styles.cabecera}>
          <View>
            <Text style={styles.marca}>Huellitas</Text>
            <Text style={styles.ubicacion}>Consultorio veterinario</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarTexto}>H</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900&h=1100&fit=crop' }}
            style={styles.foto}
            resizeMode="cover"
          />
          <View style={styles.sello}>
            <Text style={styles.selloTitulo}>Cuidado cercano</Text>
            <Text style={styles.selloTexto}>Cada huella importa</Text>
          </View>
        </View>

        <View style={styles.contenido}>
          <Text style={styles.titulo}>Su salud, nuestra prioridad</Text>
          <Text style={styles.descripcion}>
            Atención veterinaria cálida y responsable para mantener a tu mascota feliz y saludable.
          </Text>

          <View style={styles.detalles}>
            <View style={styles.detalle}>
              <Text style={styles.detalleTitulo}>Consulta general</Text>
              <Text style={styles.detalleTexto}>Revisión integral</Text>
            </View>
            <View style={styles.divisor} />
            <View style={styles.detalle}>
              <Text style={styles.detalleTitulo}>Vacunación</Text>
              <Text style={styles.detalleTexto}>Plan preventivo</Text>
            </View>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado,
            ]}
            onPress={agendar}
          >
            <Text style={styles.textoBoton}>Agendar consulta</Text>
            <Text style={styles.flecha}>→</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#f7f2e8',
  },
  scroll: {
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  cabecera: {
    height: 82,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marca: {
    color: '#173d35',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: -0.6,
  },
  ubicacion: {
    color: '#6d796f',
    fontSize: 12,
    marginTop: 2,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#d8a84e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarTexto: {
    color: '#173d35',
    fontSize: 16,
    fontWeight: '800',
  },
  hero: {
    marginHorizontal: 24,
    height: 390,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#dce5db',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  sello: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#173d35',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  selloTitulo: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '800',
  },
  selloTexto: {
    color: '#dfe8dd',
    fontSize: 11,
    marginTop: 3,
  },
  contenido: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  titulo: {
    maxWidth: 520,
    color: '#173d35',
    fontSize: 40,
    lineHeight: 44,
    fontWeight: '800',
    letterSpacing: -1.6,
  },
  descripcion: {
    maxWidth: 560,
    marginTop: 12,
    color: '#66746d',
    fontSize: 16,
    lineHeight: 24,
  },
  detalles: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detalle: {
    flex: 1,
  },
  detalleTitulo: {
    color: '#173d35',
    fontSize: 14,
    fontWeight: '800',
  },
  detalleTexto: {
    color: '#7b847e',
    fontSize: 12,
    marginTop: 4,
  },
  divisor: {
    width: 1,
    height: 38,
    backgroundColor: '#d8d1c3',
    marginHorizontal: 18,
  },
  boton: {
    height: 58,
    marginTop: 28,
    borderRadius: 16,
    backgroundColor: '#d8a84e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  botonPresionado: {
    backgroundColor: '#c6953c',
  },
  textoBoton: {
    color: '#173d35',
    fontSize: 16,
    fontWeight: '800',
  },
  flecha: {
    color: '#173d35',
    fontSize: 24,
    lineHeight: 28,
  },
})