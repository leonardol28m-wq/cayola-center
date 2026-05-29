# 🏋️ Cayola Center – Landing Page Premium

> Landing page de alta conversión para **Patricio Nicolás Cayola** – Entrenador Personal y Especialista en Transformación Física.

![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat&logo=framer)

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 5.0 | Build tool ultra-rápido |
| TailwindCSS | 3.4 | Estilos utility-first |
| Framer Motion | 11.1 | Animaciones premium |
| Lucide React | 0.378 | Iconografía |

---

## 📋 Estructura del Proyecto

```
cayola-center/
├── index.html                    # HTML base con SEO completo
├── src/
│   ├── App.jsx                   # Componente raíz
│   ├── main.jsx                  # Entry point
│   ├── index.css                 # Estilos globales + Tailwind
│   ├── utils/
│   │   └── animations.js         # Variantes reutilizables de Framer Motion
│   └── components/
│       ├── Navbar.jsx            # Navegación sticky con scroll detection
│       ├── Hero.jsx              # Sección hero full-screen
│       ├── PlatformMockup.jsx    # UI interactiva del dashboard/app
│       ├── WhyCayola.jsx         # 6 feature cards
│       ├── TheDifference.jsx     # Timeline proceso 6 pasos
│       ├── Platform.jsx          # Sección plataforma privada
│       ├── Transformations.jsx   # Galería antes/después
│       ├── AboutPatricio.jsx     # Bio + credenciales
│       ├── ContactForm.jsx       # Formulario + WhatsApp
│       ├── FinalCTA.jsx          # CTA final
│       ├── Footer.jsx            # Footer con social links
│       ├── FloatingWhatsApp.jsx  # Botón WhatsApp flotante
│       └── ScrollProgress.jsx   # Barra de progreso de scroll
```

---

## ⚡ Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/leonardol28m-wq/cayola-center.git
cd cayola-center

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## ⚙️ Configuraciones Requeridas

### 1. Número de WhatsApp

Buscá y reemplazá `5491100000000` por el número real de Patricio (formato internacional sin `+`) en:

- `src/components/FloatingWhatsApp.jsx` → `const WA_NUMBER`
- `src/components/ContactForm.jsx` → `const WA_NUMBER`
- `src/components/FinalCTA.jsx` → href del botón WhatsApp

### 2. Foto de Patricio

Reemplazá la URL de Unsplash en `src/components/AboutPatricio.jsx`:

```js
// Cambiar esta línea:
const PATRICIO_PHOTO = 'https://images.unsplash.com/...'

// Por:
const PATRICIO_PHOTO = '/assets/patricio-cayola.jpg'
```

Guardar la foto en: `/public/assets/patricio-cayola.jpg`  
Dimensiones recomendadas: **600×750px mínimo**, formato portrait.

### 3. Fotos de Transformaciones

En `src/components/Transformations.jsx`, reemplazá las URLs de Unsplash por fotos reales de los alumnos.

```js
// Guardar en: /public/assets/transformaciones/
beforeImg: '/assets/transformaciones/lucia-antes.jpg',
afterImg: '/assets/transformaciones/lucia-despues.jpg',
```

### 4. Redes Sociales y Email

En `src/components/Footer.jsx`:

```js
const CONTACT = {
  instagram: 'https://instagram.com/TU_USUARIO_REAL',
  whatsapp: 'https://wa.me/TU_NUMERO_REAL',
  email: 'tu@email.com',
  instagramHandle: '@tu_usuario',
};
```

### 5. Webhook Make / Zapier (Opcional)

En `src/components/ContactForm.jsx`, descomentá el bloque del webhook:

```js
const WEBHOOK_URL = 'https://hook.eu1.make.com/TU_WEBHOOK_URL';
```

El webhook recibirá un JSON con: `{ nombre, edad, objetivo, whatsapp, timestamp, fuente }`.

---

## 🎨 Identidad Visual

| Variable | Valor | Uso |
|---|---|---|
| `#000000` | Negro puro | Fondo principal |
| `#121212` | Negro secundario | Secciones alternas |
| `#1A1A1A` | Gris oscuro | Cards |
| `#2A2A2A` | Gris borde | Bordes |
| `#D4AF37` | Dorado premium | Acento principal |
| `#E8C84A` | Dorado claro | Gradiente |
| `#B8941F` | Dorado oscuro | Gradiente |
| `#FFFFFF` | Blanco | Texto principal |
| `#8E8E93` | Gris Apple | Texto secundario |

---

## 📐 Secciones

| # | ID | Sección | Descripción |
|---|---|---|---|
| 1 | `#inicio` | Hero | Headline + PlatformMockup interactivo |
| 2 | `#por-que` | ¿Por qué Cayola? | 6 feature cards |
| 3 | `#diferencia` | La Diferencia | Timeline 6 pasos |
| 4 | `#plataforma` | Plataforma Privada | Dashboard mockup |
| 5 | `#transformaciones` | Transformaciones | Galería antes/después |
| 6 | `#patricio` | Sobre Patricio | Bio + credenciales |
| 7 | `#contacto` | Formulario | WhatsApp integration |
| 8 | `#cta-final` | CTA Final | Conversión final |

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Subir carpeta /dist a Netlify
```

### GitHub Pages

```bash
npm run build
# Configurar en Settings > Pages > Deploy from branch
```

---

## 📊 Performance

- ✅ Lighthouse Performance > 90
- ✅ Mobile-first responsive
- ✅ Lazy loading en imágenes
- ✅ Code splitting (React + Framer separados)
- ✅ Font preconnect
- ✅ Scroll passive listeners

---

## 📝 Licencia

Código desarrollado exclusivamente para **Cayola Center** – Patricio Nicolás Cayola.  
© 2025 Todos los derechos reservados.
