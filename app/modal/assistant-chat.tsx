import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { colors, typography, radius, shadows } from '../../src/constants/theme';

export default function AssistantChatModal() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={[styles.bubble, styles.assistantBubble]}>
          <Text style={styles.assistantText}>¡Hola! Soy tu asistente virtual de DosRuedas. ¿En qué puedo ayudarte con tu envío?</Text>
        </View>
      </ScrollView>
      <View style={styles.inputBar}>
        <TextInput style={styles.input} placeholder="Escribe tu consulta..." placeholderTextColor={colors.muted} />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  chatContainer: {
    padding: 16,
  },
  bubble: {
    padding: 12,
    borderRadius: radius.md,
    maxWidth: '80%',
    marginBottom: 12,
  },
  assistantBubble: {
    backgroundColor: colors.white,
    ...shadows.card,
  },
  assistantText: {
    ...typography.body,
  },
  inputBar: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F9FAFB',
    fontFamily: 'Outfit',
    fontSize: 15,
    color: colors.text,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sendButtonText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    color: colors.white,
  },
});
