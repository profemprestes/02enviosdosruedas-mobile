import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from 'react-native-maps';
import { brandColors, radius, shadows } from '../constants/theme';

export interface NativeRouteMapProps {
  origin?: { latitude: number; longitude: number; title?: string };
  destination?: { latitude: number; longitude: number; title?: string };
  coordinates?: Array<{ latitude: number; longitude: number }>;
  style?: any;
}

export function NativeRouteMap({ origin, destination, coordinates = [], style }: NativeRouteMapProps) {
  const defaultRegion = {
    latitude: origin?.latitude || -34.6037, // Buenos Aires reference (Friuli / Central base)
    longitude: origin?.longitude || -58.3816,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={defaultRegion}
      >
        {origin && (
          <Marker
            coordinate={{ latitude: origin.latitude, longitude: origin.longitude }}
            title={origin.title || 'Origen'}
            pinColor={brandColors.blue500}
          />
        )}
        {destination && (
          <Marker
            coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}
            title={destination.title || 'Destino'}
            pinColor={brandColors.yellow500}
          />
        )}
        {coordinates.length > 0 && (
          <Polyline
            coordinates={coordinates}
            strokeColor={brandColors.blue500}
            strokeWidth={4}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: radius.md,
    borderCurve: 'continuous',
    overflow: 'hidden',
    boxShadow: shadows.card,
  },
  map: {
    flex: 1,
  },
});
