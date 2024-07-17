import { useEffect, useMemo } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { DefaultTheme, PaperProvider, MD3LightTheme as DarkTheme } from 'react-native-paper'
import 'react-native-reanimated';

import { StoreProvider } from '@/domain/store/StoreProvider';
import AppRoutes from '@/app/_routes';
import { useColorScheme } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorSchema = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  console.log(colorSchema)
  const theme = useMemo(() => ({
    ...(colorSchema === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...DefaultTheme.colors,
      primary: '#003670',

    },
  }), [DefaultTheme]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <StoreProvider>
      <PaperProvider theme={theme}>
        <AppRoutes />
      </PaperProvider>
    </StoreProvider>
  );
}
