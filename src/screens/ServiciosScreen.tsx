import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { brandColors, typography, shadows, radius } from '../constants/theme';
import { CTANestedPill } from '../components';
import { router } from 'expo-router';

export function ServiciosScreen() {
  const services = [
    {
      title: 'MENSAJERÍA EXPRESS',
      desc: 'Entregas puerta a puerta prioritarias en moto para documentos, paquetes pequeños y urgencias con seguimiento en vivo.',
      tag: 'Más Rápido',
    },
    {
      title: 'FLEX E-COMMERCE',
      desc: 'Solución integral para tiendas online. Retiros diarios, entregas en franjas horarias y rendición de cobros ágil.',
      tag: 'Para Tiendas',
    },
    {
      title: 'FULLFILLMENT Y DEPÓSITO',
      desc: 'Almacenamiento seguro en nuestra base central Friuli, preparación de pedidos (packing) y despacho inmediato.',
      tag: 'Logística Integral',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Nuestros Servicios Logísticos</Text>
      <Text style={styles.headerSubtitle}>Diseñados para la velocidad y seguridad que tu empresa necesita</Text>

      {services.map((item, index) => (
        <View key={index} style={styles.serviceCard}>
          <View style={styles.tagBadge}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
          <Text style={styles.serviceTitle}>{item.title}</Text>
          <Text style={styles.serviceDesc}>{item.desc}</Text>

          <CTANestedPill
            title="Cotizar este servicio"
            variant="secondary"
            onPress={() => router.push('/(tabs)/cotizar')}
            style={styles.serviceCta}
          />
        </View>
      ))}
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
  headerTitle: {
    ...typography.headline,
    fontSize: 24,
    color: brandColors.blue500,
    marginBottom: 4,
  },
  headerSubtitle: {
    ...typography.caption,
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: brandColors.white,
    borderRadius: radius.lg,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 6,
    borderLeftColor: brandColors.yellow500,
    boxShadow: shadows.card,
  },
  tagBadge: {
    alignSelf: 'flex-start',
    backgroundColor: brandColors.blue50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
    marginBottom: 8,
  },
  tagText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 12,
    color: brandColors.blue500,
  },
  serviceTitle: {
    fontFamily: 'Anton',
    fontSize: 22,
    color: brandColors.blue500,
    marginBottom: 8,
  },
  serviceDesc: {
    ...typography.body,
    marginBottom: 16,
    color: brandColors.text,
  },
  serviceCta: {
    alignSelf: 'flex-start',
  },
});
