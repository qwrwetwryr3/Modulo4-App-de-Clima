# Modulo4-App-de-Clima
Proyecto de App de Clima con JavaScript para Talento Digital.

# 🌦️ App de Clima

## 📌 Descripción
La **App de Clima** es un proyecto desarrollado en JavaScript como parte del Módulo 4 del Bootcamp.  
El objetivo es reforzar los fundamentos de programación implementando la lógica interna de una aplicación que muestra información climática de distintos lugares, calcula estadísticas semanales y actualiza dinámicamente el DOM.

La temática elegida combina playas, montañas, desiertos y otros escenarios naturales.

---

## 🎯 Objetivos de aprendizaje
- Representar información de clima utilizando **variables, arreglos y objetos** en JavaScript.
- Procesar pronósticos con **ciclos y condicionales** para calcular estadísticas.
- Definir y reutilizar **funciones** para separar responsabilidades y evitar duplicar código.
- Manipular el **DOM** para mostrar dinámicamente datos y mensajes en la interfaz.
- Gestionar el proyecto con **Git/GitHub** (commits descriptivos, trabajo incremental, README actualizado).

---

## 📂 Estructura del proyecto

/proyecto-clima │ ├── index.html        → Página principal con Home y Detalle ├── styles.css        → Estilos básicos para tarjetas y detalle ├── app.js            → Lógica en JavaScript (datos, funciones, DOM) └── recursos/         → Imágenes, íconos, etc. (opcional)

---


---

## 🗂️ Modelado de datos
Los datos de clima están definidos en un **arreglo de objetos** en `app.js`.  
Cada lugar contiene:
- `id`, `nombre`, `tempActual`, `estadoActual`
- `pronosticoSemanal`: arreglo de objetos con `dia`, `min`, `max`, `estado`

Ejemplo:
```javascript
const lugares = [
  {
    id: 1,
    nombre: "Playa del Viento",
    tempActual: 22,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 23, estado: "Nublado" },
      { dia: "Miércoles", min: 16, max: 22, estado: "Lluvioso" }
    ]
  },
  // más lugares...
];


📊 Estadísticas calculadas
En la vista de detalle de cada lugar se muestran:
- Temperatura mínima, máxima y promedio de la semana.
- Cantidad de días por tipo de clima (soleado, nublado, lluvioso, etc.).
- Resumen textual generado dinámicamente, por ejemplo:
- "Semana mayormente soleada."
- "Semana con varias lluvias."
- "Semana variada."

⚙️ Funciones principales
- obtenerLugar(id): busca y devuelve un lugar por su id.
- calcularEstadisticas(pronostico): calcula min, max, promedio, conteo de estados y resumen.
- mostrarHome(): renderiza el listado de lugares en el Home.
- mostrarDetalle(id): muestra el pronóstico y estadísticas del lugar seleccionado.

🖥️ Interfaz
- Home: listado de ≥ 5 lugares con clima actual y botón para ver detalle.
- Detalle: pronóstico semanal + estadísticas calculadas dinámicamente.


Enlace al repositorio: https://github.com/qwrwetwryr3/Modulo4-App-de-Clima/
