# 🏥 MedFlow — Landing Page

![MedFlow Banner](https://img.shields.io/badge/MedFlow-SaaS%20Médico-0ea5e9?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)

Landing page oficial de **MedFlow**, una plataforma SaaS médica diseñada para optimizar y digitalizar los flujos de trabajo clínicos, conectando equipos de salud con tecnología de vanguardia.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Variables de Entorno](#-variables-de-entorno)
- [Despliegue](#-despliegue)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## 📖 Descripción

**MedFlow Landing** es la página de presentación del producto SaaS MedFlow. Su objetivo es comunicar la propuesta de valor de la plataforma, captar el interés de clínicas, hospitales y profesionales de la salud, e impulsar el registro y adopción del producto.

La interfaz está construida con un enfoque moderno, responsivo y optimizado para conversión.

---

## ✨ Características

- 🎨 **Diseño responsivo** — Adaptado para móvil, tablet y escritorio.
- ⚡ **Alto rendimiento** — Construido con React y optimizado con Tailwind CSS.
- 🧩 **Componentes reutilizables** — Arquitectura modular y escalable.
- 🔍 **SEO friendly** — Metaetiquetas y estructura semántica optimizada.
- 📬 **Formulario de contacto / registro** — Captura de leads integrada.
- 🌐 **Sección de características** — Presentación clara del producto SaaS.
- 💬 **Testimonios y casos de uso** — Sección de social proof para el sector salud.

---

## 🛠️ Tecnologías

| Tecnología     | Versión  | Uso                          |
|----------------|----------|------------------------------|
| React          | 18+      | Interfaz de usuario          |
| Tailwind CSS   | 3+       | Estilos y diseño responsivo  |
| Vite / CRA     | —        | Bundler y entorno de desarrollo |
| React Router   | —        | Navegación entre secciones   |

---

## 📁 Estructura del Proyecto

```
medflow-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Imágenes, íconos y recursos estáticos
│   ├── components/      # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── sections/        # Secciones de la landing (Hero, Features, Pricing…)
│   ├── pages/           # Páginas principales
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Instalación

### Prerrequisitos

- [Node.js](https://nodejs.org/) v16 o superior
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/DIGITAL-SOFT-PTY/medflow-landing.git

# 2. Ingresar al directorio
cd medflow-landing

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (Vite) o `http://localhost:3000` (CRA).

---

## 📜 Scripts Disponibles

| Comando           | Descripción                                  |
|-------------------|----------------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo             |
| `npm run build`   | Genera el build de producción en `/dist`     |
| `npm run preview` | Previsualiza el build de producción          |
| `npm run lint`    | Analiza el código con ESLint                 |

---

## 🔐 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
VITE_APP_NAME=MedFlow
VITE_API_URL=https://api.medflow.com
VITE_CONTACT_EMAIL=contacto@medflow.com
```

---

## 🌍 Despliegue

El proyecto puede desplegarse fácilmente en las siguientes plataformas:

- **[Vercel](https://vercel.com/)** — Conecta el repositorio y despliega automáticamente.
- **[Netlify](https://netlify.com/)** — Soporte nativo para proyectos React/Vite.
- **GitHub Pages** — Con configuración adicional en `vite.config.js`.

```bash
# Build para producción
npm run build
```

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature: `git checkout -b feature/nueva-seccion`.
3. Realiza tus cambios y haz commit: `git commit -m 'feat: agrega sección de precios'`.
4. Sube los cambios: `git push origin feature/nueva-seccion`.
5. Abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

<p align="center">
  Desarrollado con ❤️ por <a href="https://github.com/DIGITAL-SOFT-PTY">DIGITAL SOFT PTY</a>
</p>
