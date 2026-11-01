import {
  QuoteRequestDto,
  QuoteResponseDto,
  AssistantRequestDto,
  AssistantResponseDto,
  DirectionsResponseDto,
} from '../types/api';

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  console.warn('EXPO_PUBLIC_API_BASE_URL no está definida. Las peticiones fallarán si no se configura.');
}

export class ApiError extends Error {
  constructor(message: string, public status: number, public code?: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new ApiError(
      errorBody.error || errorBody.message || `Error HTTP: ${response.status}`,
      response.status,
      errorBody.code
    );
  }
  return response.json();
}

export const apiClient = {
  async postQuote(data: QuoteRequestDto): Promise<QuoteResponseDto> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      return await handleResponse<QuoteResponseDto>(response);
    } finally {
      clearTimeout(timeoutId);
    }
  },

  async postAssistant(data: AssistantRequestDto): Promise<AssistantResponseDto> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(`${BASE_URL}/api/assistant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      return await handleResponse<AssistantResponseDto>(response);
    } finally {
      clearTimeout(timeoutId);
    }
  },

  async getDirections(origin: string, destination: string): Promise<DirectionsResponseDto> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(
        `${BASE_URL}/api/routes/directions?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
        }
      );
      return await handleResponse<DirectionsResponseDto>(response);
    } finally {
      clearTimeout(timeoutId);
    }
  },
};
