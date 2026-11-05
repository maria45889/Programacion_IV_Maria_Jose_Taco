// app/_layout.tsx — versión actualizada
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle:      { backgroundColor: '#087e8b' },
        headerTintColor:  '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="(Tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}