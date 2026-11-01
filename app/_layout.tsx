import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { Outfit_400Regular, Outfit_600SemiBold } from '@expo-google-fonts/outfit';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { ThemeProvider, DefaultTheme } from 'expo-router/react-navigation';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Anton: Anton_400Regular,
    Outfit: Outfit_400Regular,
    OutfitSemiBold: Outfit_600SemiBold,
    BebasNeue: BebasNeue_400Regular,
  });

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal/shipping-detail"
          options={{
            presentation: 'formSheet',
            sheetGrabberVisible: true,
            headerShown: true,
            title: 'Detalle de Envío',
          }}
        />
        <Stack.Screen
          name="modal/assistant-chat"
          options={{
            presentation: 'modal',
            headerShown: true,
            title: 'Asistente DosRuedas',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
