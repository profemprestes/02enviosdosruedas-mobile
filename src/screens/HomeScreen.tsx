import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { brandColors, typography, shadows, radius } from '../constants/theme';
import { DoubleBezelCard, CTANestedPill } from '../components';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <DoubleBezelCard variant="elevated" style={styles.heroCard}>
        <Text style={styles.heroTitle}>ENVÍOS DOS RUEDAS</Text>
        <Text style={styles.heroSubtitle}>Mensajería express y low-cost en moto con precisión nativa</Text>
        <View style={styles.ctaRow}>
          <CTANestedPill
            title="Cotizar Envío"
            onPress={() => router.push('/(tabs)/cotizar')}
          />
          <CTANestedPill
            title="Servicios"
            variant="secondary"
            onPress={() => router.push('/(tabs)/servicios')}
            style={styles.secondaryCta}
          />
        </View>
      </DoubleBezelCard>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accesos Rápidos</Text>

        <View style={styles.quickAccessGrid}>
          <View style={styles.quickCard} onTouchEnd={() => router.push('/modal/assistant-chat')}>
            <Ionicons name="chatbubbles" size={28} color={brandColors.blue500} style={styles.iconStyle} />
            <Text style={styles.quickCardTitle}>Asistente IA</Text>
            <Text style={styles.quickCardDesc}>Consulta dudas con Gemini</Text>
          </View>

          <View style={styles.quickCard} onTouchEnd={() => router.push('/(tabs)/contacto')}>
            <Ionicons name="business" size={28} color={brandColors.blue500} style={styles.iconStyle} />
            <Text style={styles.quickCardTitle}>Base Friuli</Text>
            <Text style={styles.quickCardDesc}>Ubicación y contacto central</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>¿Por qué elegirnos?</Text>
        <Text style={styles.bodyText}>
          Optimizamos cada trayecto aplicando la Ley de Tres Colores, rutas en tiempo real con mapas nativos y atención inmediata para tu negocio y entregas particulares.
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
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  secondaryCta: {
    marginLeft: 0,
  },
  section: {
    backgroundColor: brandColors.white,
    borderRadius: radius.md,
    borderCurve: 'continuous',
    padding: 20,
    marginBottom: 16,
    boxShadow: shadows.card,
  },
  sectionTitle: {
    ...typography.headline,
    marginBottom: 12,
    color: brandColors.blue500,
  },
  bodyText: {
    ...typography.body,
    color: brandColors.text,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  quickCard: {
    flex: 1,
    backgroundColor: brandColors.blue50,
    borderRadius: radius.sm,
    borderCurve: 'continuous',
    padding: 16,
    borderWidth: 1,
    borderColor: brandColors.blue100,
  },
  iconStyle: {
    marginBottom: 8,
  },
  quickCardTitle: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 16,
    color: brandColors.blue500,
    marginBottom: 4,
  },
  quickCardDesc: {
    fontFamily: 'Outfit',
    fontSize: 13,
    color: brandColors.muted,
  },
});
