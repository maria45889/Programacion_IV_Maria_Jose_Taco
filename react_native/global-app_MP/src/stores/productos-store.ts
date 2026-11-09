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
    id: 'alimento-perro',
    fabricante: 'HUELLITAS',
    modelo: 'Alimento para perro adulto',
    descripcion: 'Bolsa de 2 kg · nutrición diaria',
    precio: 24,
    stock: 8,
  },
  {
    id: 'alimento-gato',
    fabricante: 'HUELLITAS',
    modelo: 'Alimento para gato',
    descripcion: 'Bolsa de 1.5 kg · fórmula balanceada',
    precio: 19,
    stock: 6,
  },
  {
    id: 'shampoo-neutro',
    fabricante: 'CUIDADO ANIMAL',
    modelo: 'Shampoo hipoalergénico',
    descripcion: 'Envase de 250 ml · piel sensible',
    precio: 12,
    stock: 5,
  },
  {
    id: 'antiparasitario',
    fabricante: 'CUIDADO ANIMAL',
    modelo: 'Antiparasitario externo',
    descripcion: 'Para perros · consultar dosis veterinaria',
    precio: 15,
    stock: 4,
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
