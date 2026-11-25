import { create } from 'zustand'

export type Cita = {
  id: string
  mascota: string
  servicio: string
  fecha: string
  hora: string
  estado: 'confirmada' | 'pendiente'
}

type CitasState = {
  citas: Cita[]
  reservar: (cita: Omit<Cita, 'id' | 'estado'>) => void
  cancelar: (id: string) => void
}

export const useCitasStore = create<CitasState>((set) => ({
  citas: [
    {
      id: 'cita-luna',
      mascota: 'Luna',
      servicio: 'Control general',
      fecha: '26 nov',
      hora: '10:30',
      estado: 'confirmada',
    },
  ],
  reservar: (cita) =>
    set((state) => ({
      citas: [
        ...state.citas,
        {
          ...cita,
          id: `cita-${Date.now()}`,
          estado: 'confirmada',
        },
      ],
    })),
  cancelar: (id) =>
    set((state) => ({
      citas: state.citas.filter((cita) => cita.id !== id),
    })),
}))
