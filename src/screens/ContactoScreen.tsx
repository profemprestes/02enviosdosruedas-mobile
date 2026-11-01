import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { brandColors, typography, shadows, radius } from '../constants/theme';
import { CTANestedPill } from '../components';
import { Ionicons } from '@expo/vector-icons';

export function ContactoScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/5491100000000?text=Hola,%20quiero%20consultar%20sobre%20envíos%20DosRuedas');
  };

  const handleSubmit = () => {
    if (!nombre.trim() || !mensaje.trim()) {
      Alert.alert('Campos incompletos', 'Por favor completa tu nombre y mensaje.');
      return;
    }
    Alert.alert('¡Mensaje enviado!', 'Nos pondremos en contacto contigo a la brevedad.');
    setNombre('');
    setMensaje('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Contacto y Soporte</Text>
        <Text style={styles.subtitle}>Estamos para ayudarte en cada envío</Text>

        <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
          <Ionicons name="logo-whatsapp" size={24} color={brandColors.white} />
          <Text style={styles.whatsappText}>Escribinos por WhatsApp</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Ionicons name="business" size={20} color={brandColors.blue500} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Base Central Friuli</Text>
            <Text style={styles.infoDesc}>Calle Friuli 1234, CABA — Centro de operaciones y retiro de encomiendas.</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.formSectionTitle}>Buzón de Sugerencias</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Tu nombre completo"
            placeholderTextColor="#9CA3AF"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mensaje o Consulta</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Escribe tu mensaje aquí..."
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            value={mensaje}
            onChangeText={setMensaje}
          />
        </View>

        <CTANestedPill
          title="Enviar Mensaje"
          onPress={handleSubmit}
          style={styles.submitBtn}
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
  whatsappButton: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: radius.md,
    marginBottom: 20,
    gap: 10,
    boxShadow: shadows.card,
  },
  whatsappText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 16,
    color: brandColors.white,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: brandColors.blue50,
    padding: 16,
    borderRadius: radius.md,
    gap: 12,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: brandColors.blue100,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    fontSize: 15,
    color: brandColors.blue500,
    marginBottom: 2,
  },
  infoDesc: {
    ...typography.caption,
    color: brandColors.text,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },
  formSectionTitle: {
    ...typography.headline,
    fontSize: 18,
    marginBottom: 16,
    color: brandColors.blue500,
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
  submitBtn: {
    marginTop: 8,
    alignItems: 'center',
  },
});
