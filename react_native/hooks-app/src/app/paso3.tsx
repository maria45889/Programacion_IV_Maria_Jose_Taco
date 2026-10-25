// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect } from 'react'
import {
    StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export default function Paso3() {
    // ── Uso 1: referencia a un TextInput para foco programático ─────────
    const inputHostRef = useRef<any>(null)
    const inputPuertoRef = useRef<any>(null)

    const [host, setHost] = useState<string>('')
    const [puerto, setPuerto] = useState<string>('22')

    // Foco automático al montar la pantalla
    useEffect(() => {
        inputHostRef.current?.focus()
    }, [])

    // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
    const intentosSilenciosRef = useRef<number>(0)
    const [ultimaConexion, setUltimaConexion] = useState<string>('—')

    function intentarConexion() {
        intentosSilenciosRef.current += 1   // muta sin re-render
        // Solo actualizamos el estado (y disparamos re-render) al conectar
        setUltimaConexion(
            `${host || 'servidor'}:${puerto} — intento #${intentosSilenciosRef.current}`
        )
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Configurar Conexión SSH</Text>

            <View style={styles.formulario}>
                <Text style={styles.etiqueta}>Host o IP</Text>
                <TextInput
                    ref={inputHostRef}
                    style={styles.input}
                    value={host}
                    onChangeText={setHost}
                    placeholder="10.0.2.10"
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() => inputPuertoRef.current?.focus()}
                />

                <Text style={styles.etiqueta}>Puerto SSH</Text>
                <TextInput
                    ref={inputPuertoRef}
                    style={styles.input}
                    value={puerto}
                    onChangeText={setPuerto}
                    placeholder="22"
                    placeholderTextColor="#aaa"
                    keyboardType="number-pad"
                    returnKeyType="done"
                />
            </View>

            <Pressable
                style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
                onPress={intentarConexion}
            >
                <Text style={styles.textoBoton}>Conectar</Text>
            </Pressable>

            <Text style={styles.detalle}>Último intento: {ultimaConexion}</Text>
            <Text style={styles.detalle}>
                (los reintentos silenciosos no causan re-renders)
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