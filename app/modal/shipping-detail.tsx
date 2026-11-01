import { StyleSheet, Text, View } from 'react-native';
import { colors, typography, radius } from '../../src/constants/theme';

export default function ShippingDetailModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de Envío</Text>
      <Text style={styles.body}>Aquí se mostrarán los detalles completos de la cotización y ruta del envío.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.headline,
    fontSize: 22,
    color: colors.primary,
    marginBottom: 12,
  },
  body: {
    ...typography.body,
  },
});
