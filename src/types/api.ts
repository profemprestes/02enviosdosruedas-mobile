export interface QuoteRequestDto {
  origenLat: number;
  origenLng: number;
  destinoLat: number;
  destinoLng: number;
  serviceType: 'EXPRESS' | 'LOW_COST';
}

export interface QuoteResponseDto {
  success: boolean;
  price: number | 'consultar' | null;
  distanceKm: number | null;
  error: string | null;
}

export interface AssistantRequestDto {
  message: string;
  quoteContext?: {
    distanceKm: number | null;
    price: number | 'consultar' | null;
    serviceType: string;
  };
}

export interface AssistantResponseDto {
  success: boolean;
  reply: string;
  error?: string;
}

export interface DirectionsResponseDto {
  status: 'OK' | 'ZERO_RESULTS' | 'INVALID_REQUEST' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'UNKNOWN_ERROR';
  routes: Array<{
    legs: Array<{
      distance: { value: number }; // en metros
      duration: { value: number }; // en segundos
    }>;
    overview_polyline: {
      points: string; // polyline codificada
    };
  }>;
  error?: string;
}
