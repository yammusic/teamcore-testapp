import React from 'react'
import { useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

export default function AppRoutes() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={ colorScheme === 'dark' ? DarkTheme : DefaultTheme }>
      <Stack>
        <Stack.Screen name="index" options={ { headerShown: false } } />

        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  )
}
