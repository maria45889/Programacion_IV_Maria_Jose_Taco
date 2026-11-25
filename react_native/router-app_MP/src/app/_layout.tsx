// app/_layout.tsx — versión actualizada
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle:      { backgroundColor: '#12372f' },
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