import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export default function Paso3Suma() {
  const inputNum1Ref = useRef<any>(null)
  const inputNum2Ref = useRef<any>(null)

  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')

  // Foco automático en el primer número al iniciar
  useEffect(() => {
    inputNum1Ref.current?.focus()
  }, [])

  // Contador de cálculos realizados sin disparar re-render extra
  const calculosSilenciososRef = useRef<number>(0)
  const [resultado, setResultado] = useState<string>('—')

  function sumar() {
    calculosSilenciososRef.current += 1
    const n1 = parseFloat(num1) || 0
    const n2 = parseFloat(num2) || 0
    setResultado(`${n1 + n2} (cálculo #${calculosSilenciososRef.current})`)
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Suma de Números</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Primer Número</Text>
        <TextInput
          ref={inputNum1Ref}
          style={styles.input}
          value={num1}
          onChangeText={setNum1}
          placeholder="0"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => inputNum2Ref.current?.focus()}
        />

        <Text style={styles.etiqueta}>Segundo Número</Text>
        <TextInput
          ref={inputNum2Ref}
          style={styles.input}
          value={num2}
          onChangeText={setNum2}
          placeholder="0"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={sumar}
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={sumar}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      <Text style={styles.resultadoTexto}>Resultado: {resultado}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  formulario: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 12,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#f8fafc',
  },
  boton: {
    width: '100%',
    maxWidth: 360,
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonActivo: {
    backgroundColor: '#2563eb',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultadoTexto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#38bdf8',
    marginTop: 16,
    textAlign: 'center',
  }
})