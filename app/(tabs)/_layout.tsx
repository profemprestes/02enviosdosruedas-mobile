import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../src/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.yellow500, // Amarillo Vial
        tabBarInactiveTintColor: colors.blue100, // Azul suave inactivo
        tabBarStyle: {
          backgroundColor: colors.blue500, // Azul Corporativo canónico (#0950F6)
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: colors.blue500,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: 'BebasNeue',
          fontSize: 22,
          letterSpacing: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="cotizar"
        options={{
          title: 'Cotizar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="servicios"
        options={{
          title: 'Servicios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacto"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}
