# Estructura del Proyecto — Envíos DosRuedas Mobile

Este documento detalla el árbol completo de archivos y carpetas actual de la aplicación móvil nativa desarrollada con Expo y React Native para Envíos DosRuedas, siguiendo estrictamente la habilidad `expo-design-system` y los lineamientos del sistema de diseño (`05-sistema-de-diseno-y-tokens.md`), así como la separación estricta de rutas (`app/`) y pantallas (`src/screens/`).

## Árbol de Directorios y Archivos

```text
├── .claude/                 # Configuración y skills de Claude Code
├── app/                     # Expo Router routes ONLY (rutas de la app)
│   ├── _layout.tsx          # Layout raíz (proveedor de navegación, Stack global, modales)
│   ├── (tabs)/              # Navegación principal en pestañas inferiores
│   │   ├── _layout.tsx      # Configuración del tab bar (Azul corporativo #0950F6 y Amarillo vial #FFEC01)
│   │   ├── index.tsx        # Ruta de Inicio (renderiza HomeScreen)
│   │   ├── cotizar.tsx      # Ruta de Cotizar (renderiza CotizarScreen)
│   │   ├── servicios.tsx    # Ruta de Servicios (renderiza ServiciosScreen)
│   │   └── contacto.tsx     # Ruta de Contacto (renderiza ContactoScreen)
│   └── modal/               # Rutas modales y formSheets
│       ├── shipping-detail.tsx # Modal de detalles de envío (formSheet)
│       └── assistant-chat.tsx  # Modal de chat del asistente virtual con Gemini
├── assets/                  # Imágenes, fuentes y assets estáticos
│   ├── android-icon-background.png
│   ├── android-icon-foreground.png
│   ├── android-icon-monochrome.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── docs/                    # Documentación de referencia del proyecto
│   └── expo-migration/      # Documentos de migración y arquitectura (01 al 11)
│       ├── 01-arquitectura-y-runtime.md
│       ├── 02-compatibilidad-stack.md
│       ├── 03-desacoplamiento-cliente-servidor.md
│       ├── 04-hoja-de-ruta-web-to-native.md
│       ├── 05-sistema-de-diseno-y-tokens.md
│       ├── 06-cliente-api-y-data-fetching.md
│       ├── 07-componentes-ui-nativos.md
│       ├── 08-animaciones-y-gestos.md
│       ├── 09-arquitectura-y-estructura-de-carpetas.md
│       ├── 10-navegacion-y-rutas-nativas.md
│       ├── 11-despliegue-y-servicios-eas.md
│       └── ESTRUCTURA.md    # Árbol de archivos de referencia
├── src/                     # Código fuente de la aplicación (Lógica, UI, Servicios)
│   ├── components/          # UI atómica y reutilizable
│   │   ├── cta-nested-pill.tsx      # Componente de botón con doble píldora anidada
│   │   ├── double-bezel-card.tsx    # Componente de tarjeta con doble bisel
│   │   ├── NativeRouteMap.tsx       # Componente de mapa con react-native-maps y polyline
│   │   └── index.ts                 # Exportaciones públicas de componentes
│   ├── screens/             # Vistas completas y lógica de pantallas
│   │   ├── HomeScreen.tsx           # Pantalla de Inicio institucional
│   │   ├── CotizarScreen.tsx        # Pantalla de Cotizador (Origen/Destino, Mapas, API)
│   │   ├── ServiciosScreen.tsx      # Pantalla de Servicios Logísticos
│   │   └── ContactoScreen.tsx       # Pantalla de Contacto, WhatsApp y Base Friuli
│   ├── constants/           # Constantes del sistema
│   │   └── theme.ts         # Tokens de diseño (Colores, Tipografía Anton/Outfit/GeistMono, Radios, Sombras boxShadow)
│   ├── hooks/               # Hooks custom reutilizables
│   │   └── .gitkeep
│   ├── services/            # Capa de red y comunicación API
│   │   └── api.ts           # Cliente HTTP base (fetch nativo, AbortController, DTOs)
│   └── types/               # Definiciones de tipos TypeScript
│       └── api.ts           # Contratos DTO (Cotización, Asistente Gemini, Rutas)
├── app.json                 # Configuración principal de Expo (scheme, bundleIdentifier, plugins)
├── eas.json                 # Configuración de EAS Build y despliegue en la nube
├── package.json             # Dependencias y scripts del proyecto
├── pnpm-lock.yaml           # Archivo de bloqueo de dependencias de pnpm
└── ESTRUCTURA.md            # Árbol completo de archivos y carpetas del proyecto
```
