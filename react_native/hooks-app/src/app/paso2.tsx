// app/index.tsx — agrega la función Paso2
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoPing = 'pinging' | 'ok' | 'timeout' | 'inactivo'

export function Paso2() {
    const [latencia, setLatencia] = useState<number | null>(null)
    const [estado, setEstado] = useState<EstadoPing>('inactivo')
    const [activo, setActivo] = useState<boolean>(false)
    const [ciclos, setCiclos] = useState<number>(0)
    const [PaquetesPerdidos, setPaquetesPerdidos] = useState<number>(0)

    useEffect(() => {
        if (!activo) return   // no arrancar el intervalo si el ping está detenido

        const intervalo = setInterval(() => {
            setEstado('pinging')

            // Simula latencia de red: número aleatorio entre 10 ms y 200 ms
            // con un 15 % de probabilidad de timeout
            setTimeout(() => {
                const falla = Math.random() < 0.15
                if (falla) {
                    setLatencia(null)
                    setEstado('timeout')
                    setPaquetesPerdidos(prev => prev + 1)
                } else {
                    const ms = Math.floor(Math.random() * 190) + 10
                    setLatencia(ms)
                    setEstado('ok')
                }
                setCiclos(c => c + 1)
            }, 400)
        }, 500)

        // ← función de limpieza: cancela el intervalo
        return () => clearInterval(intervalo)
    }, [activo])   // se re-ejecuta cuando 'activo' cambia

    const colorEstado: Record<EstadoPing, string> = {
        pinging: '#1565c0',
        ok: '#2e7d32',
        timeout: '#c62828',
        inactivo: '#757575',
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Monitor de Ping — nginx-01</Text>

            <View style={styles.tarjeta}>
                <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
                    {estado.toUpperCase()}
                </Text>

                <Text style={styles.latencia}>
                    {latencia !== null ? `${latencia} ms` : '— ms'}
                </Text>

                <Text style={styles.ciclos}>
                    Pérdida:{' '}
                    {ciclos > 0
                        ? `${((PaquetesPerdidos / ciclos) * 100).toFixed(1)}%`
                        : '0.0%'}
                </Text>

                <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
                <Text style={styles.detalle}>nginx-01 · 10.0.2.30 · Puerto 80</Text>
            </View>

            <Pressable
                style={({ pressed }) => [
                    styles.boton,
                    activo ? styles.botonDetener : styles.botonIniciar,
                    pressed && { opacity: 0.75 },
                ]}
                onPress={() => setActivo(a => !a)}
            >
                <Text style={styles.textoBoton}>
                    {activo ? 'Detener ping' : 'Iniciar ping'}
                </Text>
            </Pressable>
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
        fontSize: 18,
        fontWeight: '600',
        color: '#94a3b8',
        marginBottom: 20,
        letterSpacing: 0.5,
    },
    tarjeta: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#1e293b',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#334155',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    etiqueta: {
        fontSize: 14,
        fontWeight: '800',
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    latencia: {
        fontSize: 48,
        fontWeight: '700',
        color: '#f8fafc',
        marginVertical: 4,
    },
    ciclos: {
        fontSize: 14,
        color: '#cbd5e1',
        marginTop: 8,
    },
    detalle: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 12,
        fontFamily: 'monospace',
    },
    boton: {
        width: '100%',
        maxWidth: 360,
        marginTop: 24,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonIniciar: {
        backgroundColor: '#2563eb',
    },
    botonDetener: {
        backgroundColor: '#dc2626',
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
})