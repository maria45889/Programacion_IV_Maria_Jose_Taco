// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'
import { Text, type TextStyle } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:   '#087e8b',
        tabBarInactiveTintColor: '#90a4ae',
        tabBarStyle:             { backgroundColor: '#ffffff', borderTopColor: '#d9e2ec' },
        headerStyle:             { backgroundColor: '#087e8b' },
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
          title:      'Promos',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="alertas" color={color ?? '#90a4ae'} size={size} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{
          title:      'Garantía',
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
    inicio:   '📱',
    alertas:  '🏷',
    ajustes:  '🛡',
  }
  return (
    <Text style={{ fontSize: size * 0.8, color }}>{icono[nombre]}</Text>
  )
}