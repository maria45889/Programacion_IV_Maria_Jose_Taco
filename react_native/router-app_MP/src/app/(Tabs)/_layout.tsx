// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'
import { Text, type TextStyle } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:   '#12372f',
        tabBarInactiveTintColor: '#7a8e86',
        tabBarStyle:             { backgroundColor: '#ffffff', borderTopColor: '#dce6e1' },
        headerStyle:             { backgroundColor: '#12372f' },
        headerTintColor:         '#ffffff',
        headerTitleStyle:        { fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:        'Inicio',
          tabBarIcon:   ({ color, size }) => (
            <TabIcon nombre="inicio" color={color ?? '#90a4ae'} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="alertas"
        options={{
          title:      'Prevención',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="alertas" color={color ?? '#90a4ae'} size={size} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{
          title:      'Atención',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="ajustes" color={color ?? '#90a4ae'} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

// Icono simple con texto hasta que se instalen íconos vectoriales
function TabIcon({ nombre, color, size }: { nombre: string; color: TextStyle['color']; size: number }) {
  const icono: Record<string, string> = {
    inicio: 'I',
    alertas: 'P',
    ajustes: 'A',
  }
  return (
    <Text style={{ fontSize: size * 0.8, color }}>{icono[nombre]}</Text>
  )
}