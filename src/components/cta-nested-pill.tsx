import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp, View } from 'react-native';
import { colors, radius, shadows, typography } from '../constants/theme';

export interface CTANestedPillProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: 'primary' | 'secondary';
}

export function CTANestedPill({ title, onPress, style, variant = 'primary' }: CTANestedPillProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [
        styles.outerPill,
        variant === 'secondary' && styles.secondaryOuter,
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={[styles.innerPill, variant === 'secondary' && styles.secondaryInner]}>
        <Text style={[styles.title, variant === 'secondary' && styles.secondaryTitle]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerPill: {
    backgroundColor: colors.blue500,
    borderRadius: radius.full,
    borderCurve: 'continuous',
    padding: 4,
    ...shadows.raised,
  },
  secondaryOuter: {
    backgroundColor: colors.blue100,
  },
  innerPill: {
    backgroundColor: colors.yellow500,
    borderRadius: radius.full,
    borderCurve: 'continuous',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryInner: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.blue500,
  },
  title: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 16,
    color: colors.black,
  },
  secondaryTitle: {
    color: colors.blue500,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
