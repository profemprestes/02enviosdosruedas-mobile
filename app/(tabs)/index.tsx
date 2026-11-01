import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { brandColors, typography, shadows, radius } from '../../src/constants/theme';
import { DoubleBezelCard, CTANestedPill } from '../../src/components';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <DoubleBezelCard variant="elevated" style={styles.heroCard}>
        <Text style={styles.heroTitle}>ENVÍOS DOS RUEDAS</Text>
        <Text style={styles.heroSubtitle}>Mensajería rápida y segura en moto</Text>
        <View style={styles.ctaContainer}>
          <CTANestedPill
            title="Cotizar Envío"
            onPress={() => router.push('/(tabs)/cotizar')}
          />
        </View>
      </DoubleBezelCard>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bienvenido</Text>
        <Text style={styles.bodyText}>
          Gestiona tus envíos express y low-cost de manera eficiente con nuestra plataforma móvil nativa, aplicando la Ley de Tres Colores y tipografía oficial.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    padding: 16,
  },
  heroCard: {
    marginBottom: 20,
  },
  heroTitle: {
    fontFamily: 'Anton',
    fontSize: 28,
    color: brandColors.blue500,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  heroSubtitle: {
    fontFamily: 'Outfit',
    fontSize: 16,
    color: brandColors.muted,
    marginBottom: 16,
  },
  ctaContainer: {
    marginTop: 8,
    alignItems: 'flex-start',
  },
  section: {
    backgroundColor: brandColors.white,
    borderRadius: radius.md,
    borderCurve: 'continuous',
    padding: 20,
    boxShadow: shadows.card,
  },
  sectionTitle: {
    ...typography.headline,
    marginBottom: 8,
  },
  bodyText: {
    ...typography.body,
  },
});
