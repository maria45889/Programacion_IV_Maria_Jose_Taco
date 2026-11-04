// app/index.tsx
import { View, Text } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import Paso3 from './paso3'
import Paso3Suma from './paso3Suma'
import { Paso4 } from './paso4'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  useState — intentos de reserva                       │
// │  2  Paso 2  useEffect — actualización del inventario             │
// │  3  Paso 3  useRef — formulario de compra                        │
// │  3.1 Paso 3.1 useRef — cálculo del total de compra               │
// │  4  Paso 4  Hooks nativos — catálogo adaptativo y tema           │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 3.1:
      return <Paso3Suma />
    case 4:
      return <Paso4 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
