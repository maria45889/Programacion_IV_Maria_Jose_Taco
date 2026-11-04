import { create } from 'zustand'

export type Producto = {
  id: string
  fabricante: string
  modelo: string
  descripcion: string
  precio: number
  stock: number
}

const PRODUCTOS: Producto[] = [
  {
    id: 'nova-x',
    fabricante: 'NOVA',
    modelo: 'Nova X Pro',
    descripcion: '256 GB · cámara de 50 MP',
    precio: 899,
    stock: 3,
  },
  {
    id: 'pixelwave-8',
    fabricante: 'PIXELWAVE',
    modelo: 'PixelWave 8',
    descripcion: '128 GB · pantalla OLED',
    precio: 649,
    stock: 4,
  },
  {
    id: 'zenith-a5',
    fabricante: 'ZENITH',
    modelo: 'Zenith A5',
    descripcion: '128 GB · batería de 5000 mAh',
    precio: 399,
    stock: 2,
  },
  {
    id: 'orbit-mini',
    fabricante: 'ORBIT',
    modelo: 'Orbit Mini',
    descripcion: '64 GB · diseño compacto',
    precio: 279,
    stock: 5,
  },
]

type StoreState = {
  productos: Producto[]
  cantidades: Record<string, number>
  agregar: (id: string) => void
  quitar: (id: string) => void
  vaciar: () => void
}

export const useProductosStore = create<StoreState>((set) => ({
  productos: PRODUCTOS,
  cantidades: {},
  agregar: (id) =>
    set((state) => {
      const producto = state.productos.find((item) => item.id === id)
      const cantidad = state.cantidades[id] ?? 0
      if (!producto || cantidad >= producto.stock) return state
      return { cantidades: { ...state.cantidades, [id]: cantidad + 1 } }
    }),
  quitar: (id) =>
    set((state) => {
      const cantidad = state.cantidades[id] ?? 0
      if (cantidad <= 0) return state
      const cantidades = { ...state.cantidades }
      if (cantidad === 1) delete cantidades[id]
      else cantidades[id] = cantidad - 1
      return { cantidades }
    }),
  vaciar: () => set({ cantidades: {} }),
}))
