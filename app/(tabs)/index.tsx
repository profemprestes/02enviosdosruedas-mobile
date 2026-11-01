import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { brandColors, typography, shadows, radius } from '../../src/constants/theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>ENVÍOS DOS RUEDAS</Text>
        <Text style={styles.heroSubtitle}>Mensajería rápida y segura en moto</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bienvenido</Text>
        <Text style={styles.bodyText}>
          Gestiona tus envíos express y low-cost de manera eficiente con nuestra plataforma móvil nativa.
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
    backgroundColor: brandColors.blue500,
    borderRadius: radius.lg,
    padding: 24,
    marginBottom: 20,
    ...shadows.raised,
  },
  heroTitle: {
    fontFamily: 'Anton',
    fontSize: 28,
    color: brandColors.yellow500,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  heroSubtitle: {
    fontFamily: 'Outfit',
    fontSize: 16,
    color: brandColors.white,
  },
  section: {
    backgroundColor: brandColors.white,
    borderRadius: radius.md,
    padding: 20,
    ...shadows.card,
  },
  sectionTitle: {
    ...typography.headline,
    marginBottom: 8,
  },
  bodyText: {
    ...typography.body,
  },
});
