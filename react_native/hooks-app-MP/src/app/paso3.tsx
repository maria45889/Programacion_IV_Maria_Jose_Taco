// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect } from 'react'
import {
    StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export default function Paso3() {
    // ── Uso 1: referencia a un TextInput para foco programático ─────────
    const inputEquipoRef = useRef<TextInput | null>(null)
    const inputCantidadRef = useRef<TextInput | null>(null)

    const [codigoEquipo, setCodigoEquipo] = useState<string>('')
    const [cantidad, setCantidad] = useState<string>('1')

    // Foco automático al montar la pantalla
    useEffect(() => {
        inputEquipoRef.current?.focus()
    }, [])

    // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
    const intentosSilenciosRef = useRef<number>(0)
    const [ultimaConsulta, setUltimaConsulta] = useState<string>('—')

    function consultarEquipo() {
        intentosSilenciosRef.current += 1   // muta sin re-render
        setUltimaConsulta(
            `${codigoEquipo || 'equipo'} · cantidad ${cantidad} · consulta #${intentosSilenciosRef.current}`
        )
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Consultar disponibilidad</Text>

            <View style={styles.formulario}>
                <Text style={styles.etiqueta}>Código o modelo del equipo</Text>
                <TextInput
                    ref={inputEquipoRef}
                    style={styles.input}
                    value={codigoEquipo}
                    onChangeText={setCodigoEquipo}
                    placeholder="Galaxy S24"
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() => inputCantidadRef.current?.focus()}
                />

                <Text style={styles.etiqueta}>Cantidad</Text>
                <TextInput
                    ref={inputCantidadRef}
                    style={styles.input}
                    value={cantidad}
                    onChangeText={setCantidad}
                    placeholder="1"
                    placeholderTextColor="#aaa"
                    keyboardType="number-pad"
                    returnKeyType="done"
                />
            </View>

            <Pressable
                style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
                onPress={consultarEquipo}
            >
                <Text style={styles.textoBoton}>Consultar equipo</Text>
            </Pressable>

            <Text style={styles.detalle}>Última consulta: {ultimaConsulta}</Text>
            <Text style={styles.detalle}>
                (el contador de consultas no causa re-renders)
            </Text>
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
    detalle: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 8,
        textAlign: 'center',
        maxWidth: 360,
    },
})