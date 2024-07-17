import { useEffect, useMemo } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { DefaultTheme, PaperProvider } from 'react-native-paper'
import 'react-native-reanimated';

import { StoreProvider } from '@/domain/store/StoreProvider';
import AppRoutes from '@/app/_routes';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const theme = useMemo(() => ({
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
