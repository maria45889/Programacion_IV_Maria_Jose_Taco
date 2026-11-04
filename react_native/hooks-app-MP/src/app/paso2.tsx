// app/index.tsx — agrega la función Paso2
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoInventario = 'actualizando' | 'disponible' | 'agotado' | 'inactivo'

export function Paso2() {
    const [unidades, setUnidades] = useState<number | null>(null)
    const [estado, setEstado] = useState<EstadoInventario>('inactivo')
    const [activo, setActivo] = useState<boolean>(false)
    const [ciclos, setCiclos] = useState<number>(0)
    const [eventosSinStock, setEventosSinStock] = useState<number>(0)

    useEffect(() => {
        if (!activo) return   // no actualizar el inventario si está detenido

        const intervalo = setInterval(() => {
            setEstado('actualizando')

            setTimeout(() => {
                const falla = Math.random() < 0.15
                if (falla) {
                    setUnidades(null)
                    setEstado('agotado')
                    setEventosSinStock(prev => prev + 1)
                } else {
                    setUnidades(Math.floor(Math.random() * 20) + 1)
                    setEstado('disponible')
                }
                setCiclos(c => c + 1)
            }, 400)
        }, 500)

        // ← función de limpieza: cancela el intervalo
        return () => clearInterval(intervalo)
    }, [activo])   // se re-ejecuta cuando 'activo' cambia

    const colorEstado: Record<EstadoInventario, string> = {
        actualizando: '#1565c0',
        disponible: '#2e7d32',
        agotado: '#c62828',
        inactivo: '#757575',
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Inventario — Galaxy S24</Text>

            <View style={styles.tarjeta}>
                <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
                    {estado.toUpperCase()}
                </Text>

                <Text style={styles.latencia}>
                    {unidades !== null ? `${unidades} unidades` : '—'}
                </Text>

                <Text style={styles.ciclos}>
                    Sin stock:{' '}
                    {ciclos > 0
                        ? `${((eventosSinStock / ciclos) * 100).toFixed(1)}%`
                        : '0.0%'}
                </Text>

                <Text style={styles.ciclos}>Actualizaciones: {ciclos}</Text>
                <Text style={styles.detalle}>Samsung · precio $899</Text>
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
                    {activo ? 'Detener actualización' : 'Actualizar inventario'}
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