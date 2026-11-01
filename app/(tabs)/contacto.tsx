import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { brandColors, typography, shadows, radius } from '../../src/constants/theme';

export default function ContactoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Contacto y Soporte</Text>
        <Text style={styles.subtitle}>¿Tienes dudas o necesitas asistencia con un envío?</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} placeholder="Tu nombre" placeholderTextColor="#9CA3AF" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mensaje / Consulta</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Escribe tu mensaje aquí..."
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar Mensaje</Text>
        </TouchableOpacity>
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
    ...shadows.card,
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: brandColors.blue500,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    ...shadows.card,
  },
  buttonText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 16,
    color: brandColors.white,
  },
});
