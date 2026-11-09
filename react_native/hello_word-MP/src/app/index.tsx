// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Presentación del consultorio veterinario             │
// │  2  Paso 2  Imagen y botón para agendar una cita                  │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 2

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
