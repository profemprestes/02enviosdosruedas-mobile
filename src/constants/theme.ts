import { Platform, TextStyle } from 'react-native';

export const brandColors = {
  blue50: '#E6EEFE',
  blue100: '#BACEFD',
  blue200: '#8EAFFB',
  blue300: '#628FF9',
  blue400: '#3570F8',
  blue500: '#0950F6', // Azul Corporativo Canónico
  yellow50: '#FFFDE6',
  yellow100: '#FFFAB8',
  yellow200: '#FFF78A',
  yellow300: '#FFF45C',
  yellow400: '#FFF12E',
  yellow500: '#FFEC01', // Amarillo Vial CTA
  yellow600: '#E6D400',
  white: '#FFFFFF',
  black: '#000000',
  text: '#111827',
  muted: '#6B7280',
};

export const colors = {
  ...brandColors,
  primary: brandColors.blue500,
  accent: brandColors.yellow500,
  background: brandColors.white,
};

export const typography = {
  display: {
    fontFamily: 'Anton',
    fontSize: 34,
    color: colors.text,
  } as TextStyle,
  headline: {
    fontFamily: 'Outfit',
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
  } as TextStyle,
  body: {
    fontFamily: 'Outfit',
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
  } as TextStyle,
  caption: {
    fontFamily: 'Outfit',
    fontSize: 14,
    fontWeight: '400',
    color: colors.muted,
  } as TextStyle,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  raised: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
} as const;
