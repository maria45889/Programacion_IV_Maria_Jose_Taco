import { ScrollView, StyleSheet, Text, View } from 'react-native'

const beneficios = [
  ['Compra segura', 'Opciones de pago protegidas en todos los pedidos.'],
  ['Garantía de fábrica', 'Recibe 12 meses de garantía en smartphones nuevos.'],
  ['Envío a domicilio', 'Consulta cobertura y tiempos de entrega al realizar tu compra.'],
]

export default function BeneficiosScreen() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.marca}>MOVITECH</Text>
      <Text style={styles.titulo}>Tu compra, más fácil</Text>
      {beneficios.map(([titulo, descripcion]) => (
        <View key={titulo} style={styles.tarjeta}>
          <Text style={styles.subtitulo}>{titulo}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: '#f4f7fb', flex: 1 },
  contenido: { gap: 14, padding: 20 },
  marca: { color: '#087e8b', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  titulo: { color: '#102a43', fontSize: 24, fontWeight: '800', marginBottom: 4 },
  tarjeta: { backgroundColor: '#fff', borderColor: '#d9e2ec', borderRadius: 12, borderWidth: 1, gap: 6, padding: 16 },
  subtitulo: { color: '#102a43', fontSize: 15, fontWeight: '700' },
  descripcion: { color: '#627d98', fontSize: 13, lineHeight: 19 },
})
