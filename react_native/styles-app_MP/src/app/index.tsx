import { Paso1 } from '@/components/paso1'
import { Paso2 } from '@/components/paso2'
import { Paso3 } from '@/components/paso3'
import { Paso4 } from '@/components/paso4'
import { Paso5 } from '@/components/paso5'
import { Paso6 } from '@/components/paso6'
import { StyleSheet, Text, View } from 'react-native'

// Cambia este número para recorrer los ejemplos de estilos.
const PASO: number = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
    case 6:
      return <Paso6 />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: elige un ejemplo del 1 al 6</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
