import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { brandColors, typography, shadows, radius } from '../../src/constants/theme';

export default function ServiciosScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Nuestros Servicios</Text>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>EXPRESS</Text>
        <Text style={styles.serviceDesc}>Entrega prioritaria puerta a puerta en el menor tiempo posible.</Text>
      </View>

      <View style={styles.serviceCard}>
        <Text style={styles.serviceTitle}>LOW COST</Text>
        <Text style={styles.serviceDesc}>Envíos económicos agrupados para entregas programadas.</Text>
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
  headerTitle: {
    ...typography.headline,
    fontSize: 22,
    marginBottom: 16,
    color: brandColors.blue500,
  },
  serviceCard: {
    backgroundColor: brandColors.white,
    borderRadius: radius.md,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: brandColors.yellow500,
    ...shadows.card,
  },
  serviceTitle: {
    fontFamily: 'Anton',
    fontSize: 20,
    color: brandColors.blue500,
    marginBottom: 6,
  },
  serviceDesc: {
    ...typography.body,
  },
});
