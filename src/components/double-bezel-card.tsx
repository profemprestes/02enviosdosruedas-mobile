import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, radius, shadows } from '../constants/theme';

export interface DoubleBezelCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'elevated';
}

export function DoubleBezelCard({ children, style, variant = 'default' }: DoubleBezelCardProps) {
  return (
    <View style={[styles.outerBezel, variant === 'elevated' && styles.elevated, style]}>
      <View style={styles.innerBezel}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerBezel: {
    backgroundColor: colors.blue50,
    borderRadius: radius.lg,
    borderCurve: 'continuous',
    borderWidth: 2,
    borderColor: colors.blue200,
    padding: 6,
    boxShadow: shadows.card,
  },
  elevated: {
    boxShadow: shadows.raised,
    borderColor: colors.blue300,
  },
  innerBezel: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderCurve: 'continuous',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.blue100,
  },
});
