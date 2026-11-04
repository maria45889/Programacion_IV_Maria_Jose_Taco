import { StyleSheet, Text, View } from 'react-native'

import { Paso1, Paso2, Paso3, Paso4, Paso5, Paso6 } from '@/components/pasos-venta'

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
  centrado: { alignItems: 'center', flex: 1, justifyContent: 'center' },
})
