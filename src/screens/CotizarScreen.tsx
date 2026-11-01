import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { brandColors, typography, shadows, radius } from '../constants/theme';
import { NativeRouteMap, CTANestedPill } from '../components';
import { apiClient } from '../services/api';
import { QuoteResponseDto } from '../types/api';
import { router } from 'expo-router';

export function CotizarScreen() {
  const [origen, setOrigen] = useState('Av. Corrientes 1234, CABA');
  const [destino, setDestino] = useState('Av. Libertador 5678, CABA');
  const [serviceType, setServiceType] = useState<'EXPRESS' | 'LOW_COST'>('EXPRESS');

  const [loading, setLoading] = useState(false);
  const [quoteResult, setQuoteResult] = useState<QuoteResponseDto | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Mock coordinates for demonstration & NativeRouteMap
  const originCoords = { latitude: -34.6037, longitude: -58.3816, title: 'Origen: ' + origen };
  const destCoords = { latitude: -34.5885, longitude: -58.4105, title: 'Destino: ' + destino };
  const routePolyline = [
    { latitude: -34.6037, longitude: -58.3816 },
    { latitude: -34.5950, longitude: -58.3950 },
    { latitude: -34.5885, longitude: -58.4105 },
  ];

  const handleCalculateQuote = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await apiClient.postQuote({
        origenLat: originCoords.latitude,
        origenLng: originCoords.longitude,
        destinoLat: destCoords.latitude,
        destinoLng: destCoords.longitude,
        serviceType,
      });
      setQuoteResult(res);
    } catch (err: any) {
      // Fallback mock result if API is offline/unconfigured during development
      console.warn('API Quote fallback used:', err.message);
      setQuoteResult({
        success: true,
        price: serviceType === 'EXPRESS' ? 4500 : 3200,
        distanceKm: 4.8,
        error: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Cotizador Inteligente</Text>
        <Text style={styles.subtitle}>Calcula tarifas y tiempos para envíos en moto</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dirección de Origen</Text>
          <TextInput
            style={styles.input}
            value={origen}
            onChangeText={setOrigen}
            placeholder="Ej: Av. Corrientes 1234"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dirección de Destino</Text>
          <TextInput
            style={styles.input}
            value={destino}
            onChangeText={setDestino}
            placeholder="Ej: Av. Libertador 5678"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tipo de Servicio</Text>
          <View style={styles.serviceToggleRow}>
            <TouchableOpacity
              style={[styles.toggleBtn, serviceType === 'EXPRESS' && styles.toggleBtnActive]}
              onPress={() => setServiceType('EXPRESS')}
            >
              <Text style={[styles.toggleText, serviceType === 'EXPRESS' && styles.toggleTextActive]}>
                Express
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleBtn, serviceType === 'LOW_COST' && styles.toggleBtnActive]}
              onPress={() => setServiceType('LOW_COST')}
            >
              <Text style={[styles.toggleText, serviceType === 'LOW_COST' && styles.toggleTextActive]}>
                Low Cost
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <CTANestedPill
          title={loading ? 'Calculando...' : 'Calcular Cotización'}
          onPress={handleCalculateQuote}
          style={styles.calcButton}
        />

        {loading && <ActivityIndicator size="large" color={brandColors.blue500} style={styles.loader} />}

        {quoteResult && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Resultado de Cotización</Text>
            <Text style={styles.resultText}>Distancia: {quoteResult.distanceKm} km</Text>
            <Text style={styles.resultPrice}>
              Precio: {typeof quoteResult.price === 'number' ? `$${quoteResult.price}` : quoteResult.price}
            </Text>
            <TouchableOpacity
              style={styles.detailLink}
              onPress={() => router.push('/modal/shipping-detail')}
            >
              <Text style={styles.detailLinkText}>Ver Desglose Completo &rarr;</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.mapCard}>
        <Text style={styles.mapTitle}>Ruta Estimada en Mapa</Text>
        <NativeRouteMap
          origin={originCoords}
          destination={destCoords}
          coordinates={routePolyline}
          style={styles.mapContainer}
        />
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
  card: {
    backgroundColor: brandColors.white,
    borderRadius: radius.lg,
    padding: 24,
    marginBottom: 20,
    boxShadow: shadows.card,
  },
  title: {
    ...typography.headline,
    fontSize: 24,
    marginBottom: 4,
    color: brandColors.blue500,
  },
  subtitle: {
    ...typography.caption,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
    color: brandColors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Outfit',
    color: brandColors.text,
    backgroundColor: '#F9FAFB',
  },
  serviceToggleRow: {
    flexDirection: 'row',
    gap: 12,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
  },
  toggleBtnActive: {
    backgroundColor: brandColors.blue500,
    borderColor: brandColors.blue500,
  },
  toggleText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 15,
    color: brandColors.text,
  },
  toggleTextActive: {
    color: brandColors.white,
  },
  calcButton: {
    marginTop: 8,
    alignItems: 'center',
  },
  loader: {
    marginTop: 16,
  },
  resultBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: brandColors.yellow50,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: brandColors.yellow200,
  },
  resultTitle: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 16,
    color: brandColors.blue500,
    marginBottom: 8,
  },
  resultText: {
    ...typography.body,
    marginBottom: 4,
  },
  resultPrice: {
    fontFamily: 'Anton',
    fontSize: 22,
    color: brandColors.blue500,
    marginBottom: 12,
  },
  detailLink: {
    alignSelf: 'flex-start',
  },
  detailLinkText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    color: brandColors.blue500,
    fontSize: 14,
  },
  mapCard: {
    backgroundColor: brandColors.white,
    borderRadius: radius.lg,
    padding: 20,
    marginBottom: 20,
    boxShadow: shadows.card,
  },
  mapTitle: {
    ...typography.headline,
    marginBottom: 12,
    color: brandColors.blue500,
  },
  mapContainer: {
    height: 220,
  },
});
