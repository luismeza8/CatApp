/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta las rutas según tu proyecto
    "./index.html", // Asegúrate de incluir todas las rutas necesarias
  ],
  theme: {
    extend: {
      // Aquí puedes extender las configuraciones de Tailwind si lo necesitas
    },
  },
  plugins: [
    require("daisyui"), // Importa DaisyUI como plugin
  ],
  daisyui: {
    base: false, // Desactiva los estilos globales como los del body
    themes: [
      {
        mytheme: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff", // Fondo del body (o elementos de base)
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};

