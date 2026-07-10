# ExpressIA - Migración a Manus

## Estado de la Migración

### ✅ Completado

- [x] Clonar y analizar estructura del proyecto ExpressIA original
- [x] Instalar dependencias faltantes (@tanstack/react-query, @trpc/client, @trpc/server, @trpc/react-query, superjson)
- [x] Copiar componentes personalizados:
  - [x] DynamicWhatsAppChat.tsx
  - [x] WhatsAppChat.tsx
  - [x] ProcessFlow.tsx
  - [x] Map.tsx (disponible en el proyecto original)
  - [x] AIChatBox.tsx (disponible en el proyecto original)
  - [x] DashboardLayout.tsx (disponible en el proyecto original)
- [x] Copiar contextos:
  - [x] ThemeContext.tsx
- [x] Copiar hooks personalizados:
  - [x] useComposition.ts
  - [x] useMobile.tsx
  - [x] usePersistFn.ts
- [x] Copiar páginas:
  - [x] Home.tsx (landing page completa)
  - [x] NotFound.tsx
- [x] Copiar const.ts del cliente
- [x] Migrar estilos globales (index.css) preservando la configuración de tema
- [x] Actualizar App.tsx con rutas del proyecto original
- [x] Subir assets estáticos a Manus Storage:
  - [x] logo.png → /manus-storage/logo_66b9638c.png
  - [x] chat-animation.gif → /manus-storage/chat-animation_65527a6e.gif
- [x] Actualizar referencias de assets en componentes
- [x] Verificar que no hay errores de TypeScript
- [x] Validar que el servidor de desarrollo corre sin errores
- [x] Verificar que la landing page se renderiza correctamente

### ✅ Completado (Continuación)

- [x] Crear componente PricingPlans con filtros funcionales (Restaurantes, Domicilios, Comercio)
- [x] Implementar planes dinámicos que se muestren según el filtro seleccionado
- [x] Diseñar tarjetas de planes replicando el diseño de la imagen proporcionada
- [x] Integrar el componente en la página Home.tsx
- [x] Validar que los filtros funcionan correctamente
- [x] Verificar que el diseño se renderiza correctamente

### 📋 Pendiente

- [ ] Realizar cambios adicionales del PDF (cuando el usuario lo indique)
- [ ] Testing exhaustivo de todas las funcionalidades
- [ ] Optimizaciones de rendimiento (si es necesario)

## Notas de la Migración

### Archivos Migrados
- Todos los componentes, contextos, hooks y páginas se han copiado fielmente del proyecto original
- Los estilos globales se han preservado completamente, incluyendo la configuración de tema OKLCH
- Las rutas y navegación se mantienen igual al proyecto original

### Assets
- Logo y chat-animation se han subido a Manus Storage
- Las referencias en DynamicWhatsAppChat.tsx se han actualizado a las URLs de Manus Storage
- Los assets estarán disponibles durante toda la vida del proyecto

### Dependencias
- Se instalaron las dependencias faltantes que causaban los errores de importación
- El proyecto ahora compila sin errores de TypeScript

### Estado Actual
- ✅ El servidor de desarrollo está corriendo en puerto 3000
- ✅ La landing page se renderiza correctamente con todos los componentes
- ✅ El chat animado está funcionando
- ✅ El tema light está activo por defecto
- ✅ Todos los estilos se aplican correctamente

## Próximos Pasos
El proyecto está listo para que el usuario realice los cambios que desee. El entorno de desarrollo está completamente funcional y disponible en el chat de Manus.
