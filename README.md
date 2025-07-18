# 📝 notic-zen - Gestor de Notas con Imágenes (React + MUI + Firebase + Cloudinary)

**notic-zen** es una aplicación web desarrollada con **React**, **Material UI** y **Firebase**, diseñada para gestionar **notas enriquecidas con imágenes, etiquetas y categorías**. Incluye autenticación de usuarios, control de roles y funciones de administrador mediante **Netlify Functions**, lo que permite tareas como la gestión de roles y la limpieza de imágenes huérfanas en **Cloudinary**.

---

## 🚀 Tecnologías principales

- React 18 / Vite
- Material UI (MUI)
- Firebase (Auth + Firestore)
- Redux Toolkit + RTK Query
- React Router v6
- Netlify Functions (serverless)
- React Hook Form – formularios
- SweetAlert2 – alertas personalizadas
- Cloudinary – carga y almacenamiento de imágenes

---

### 🖼️ Vista previa de la aplicación

| Crear Nota                                                         | Galería                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Create](https://github.com/user-attachments/assets/1-create.jpg) | ![Gallery](https://github.com/user-attachments/assets/2-gallery.jpg) |

| Filtrado por etiquetas                                         | Vista móvil                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![Tags](https://github.com/user-attachments/assets/3-tags.jpg) | ![Mobile](https://github.com/user-attachments/assets/4-mobile.jpg) |

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/sebitas71133/zen-notes
cd zen-notes
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea y configura el archivo `.env`:

```bash
cp .env.template .env
```

Completa las variables necesarias:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...

VITE_CLOUDINARY_UPLOAD_PRESET=...
VITE_CLOUDINARY_CLOUD_NAME=...
VITE_CLOUDINARY_API_KEY=...
VITE_CLOUD_API_SECRET=...
```

4. Levanta la app:

```bash
npm run dev
```

---

## 📘 Funcionalidades destacadas

- Autenticación con Firebase
- Gestión de usuarios con roles (admin / user)
- CRUD de notas con imágenes
- Subida y vista previa de imágenes con Cloudinary
- Diseño responsivo
- Interfaz moderna con animaciones suaves
- Funciones admin (Netlify Functions):
  - Modificación de roles de usuario
  - Limpieza de imágenes huérfanas de Cloudinary

---

## 🧪 Scripts disponibles

| Comando         | Descripción                    |
| --------------- | ------------------------------ |
| npm run dev     | Inicia en modo desarrollo      |
| npm run build   | Compila para producción        |
| npm run preview | Previsualiza la build generada |

---

## ☁️ Netlify Functions

Esta app incluye funciones serverless desplegadas con Netlify Functions, ubicadas en `/netlify/functions/`, para:

- 🔐 **Gestión de roles** (asignar admin o user)
- 🧹 **Limpieza de imágenes huérfanas** en Cloudinary

Se recomienda proteger estas funciones con validación de JWT o claims personalizados de Firebase para evitar accesos indebidos.

---

## 🛠️ Autor

Jesús Sebastián Huamanculi Casavilca – [GitHub](https://github.com/sebitas71133)

---

## 📄 Licencia

MIT
