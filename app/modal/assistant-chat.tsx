import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { colors, typography, radius, shadows, brandColors } from '../../src/constants/theme';
import { apiClient } from '../../src/services/api';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
}

export default function AssistantChatModal() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: '¡Hola! Soy tu asistente virtual de DosRuedas. ¿En qué puedo ayudarte con tu envío hoy?',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim() || loading) return;

    const userMsgText = inputText.trim();
    setInputText('');

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMsgText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await apiClient.postAssistant({
        message: userMsgText,
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: response.reply || 'Entendido. ¿Necesitas algo más?',
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.warn('Assistant API fallback used:', err.message);
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'Recibido: ' + userMsgText + '. Nuestro equipo operativo en Base Friuli te asistirá con gusto.',
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.bubble,
              msg.sender === 'user' ? styles.userBubble : styles.assistantBubble,
            ]}
          >
            <Text
              style={[
                styles.bubbleText,
                msg.sender === 'user' ? styles.userText : styles.assistantText,
              ]}
            >
              {msg.text}
            </Text>
          </View>
        ))}
        {loading && (
          <View style={[styles.bubble, styles.assistantBubble]}>
            <ActivityIndicator size="small" color={brandColors.blue500} />
          </View>
        )}
      </ScrollView>

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu consulta..."
          placeholderTextColor={colors.muted}
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
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
    gap: 12,
  },
  bubble: {
    padding: 14,
    borderRadius: radius.md,
    maxWidth: '80%',
    marginBottom: 4,
    boxShadow: shadows.card,
  },
  assistantBubble: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 2,
  },
  userBubble: {
    backgroundColor: brandColors.blue500,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 2,
  },
  bubbleText: {
    ...typography.body,
  },
  assistantText: {
    color: colors.text,
  },
  userText: {
    color: colors.white,
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
    paddingVertical: 10,
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
    paddingVertical: 12,
  },
  sendButtonText: {
    fontFamily: 'Outfit',
    fontWeight: '600',
    color: colors.white,
  },
});
