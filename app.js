function mostrarHome() {
  const homeDiv = document.getElementById("home");
  homeDiv.innerHTML = lugares.map(l => `
    <div class="card">
      <h3>${l.nombre}</h3>
      <p>Clima actual: ${l.estadoActual}, ${l.tempActual}°C</p>
      <button onclick="mostrarDetalle(${l.id})">Ver detalle</button>
    </div>
  `).join("");
}

function obtenerLugar(id) {
  return lugares.find(lugar => lugar.id === id);
}

function calcularEstadisticas(pronostico) {
  let min = Infinity, max = -Infinity, suma = 0;
  let conteoEstados = {};

  for (let dia of pronostico) {
    if (dia.min < min) min = dia.min;
    if (dia.max > max) max = dia.max;
    suma += (dia.min + dia.max) / 2;

    conteoEstados[dia.estado] = (conteoEstados[dia.estado] || 0) + 1;
  }

  const promedio = (suma / pronostico.length).toFixed(1);

  // Generar resumen textual
  let resumen = "";
  if ((conteoEstados["Soleado"] || 0) > (conteoEstados["Nublado"] || 0)) {
    resumen = "Semana mayormente soleada.";
  } else if (conteoEstados["Lluvioso"]) {
    resumen = "Semana con varias lluvias.";
  } else {
    resumen = "Semana variada.";
  }

  return { min, max, promedio, conteoEstados, resumen };
}

function mostrarDetalle(id) {
  const lugar = obtenerLugar(id);
  const stats = calcularEstadisticas(lugar.pronosticoSemanal);

  document.getElementById("detalle").innerHTML = `
    <h2>${lugar.nombre}</h2>
    <p>Clima actual: ${lugar.estadoActual}, ${lugar.tempActual}°C</p>
    <h3>Pronóstico semanal:</h3>
    <ul>
      ${lugar.pronosticoSemanal.map(d => `<li>${d.dia}: ${d.min}°-${d.max}° (${d.estado})</li>`).join("")}
    </ul>
    <h3>Estadísticas:</h3>
    <p>Mínimo: ${stats.min}°C</p>
    <p>Máximo: ${stats.max}°C</p>
    <p>Promedio: ${stats.promedio}°C</p>
    <p>Resumen: ${stats.resumen}</p>
  `;
}

const lugares = [
  {
    id: 1,
    nombre: "Playa del Viento",
    tempActual: 22,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 23, estado: "Nublado" },
      { dia: "Miércoles", min: 16, max: 22, estado: "Lluvioso" },
    ]
  },
  {
    id: 2,
    nombre: "Montaña Azul",
    tempActual: 10,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 5, max: 12, estado: "Nublado" },
      { dia: "Martes", min: 6, max: 14, estado: "Soleado" },
      { dia: "Miércoles", min: 4, max: 11, estado: "Lluvioso" },
    ]
  },
  {
    id: 3,
    nombre: "Desierto Dorado",
    tempActual: 30,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 25, max: 35, estado: "Soleado" },
      { dia: "Martes", min: 26, max: 34, estado: "Soleado" },
      { dia: "Miércoles", min: 24, max: 33, estado: "Nublado" },
    ]
  },
  {
    id: 4,
    nombre: "Bosque Encantado",
    tempActual: 15,
    estadoActual: "Lluvioso",
    pronosticoSemanal: [
      { dia: "Lunes", min: 12, max: 18, estado: "Lluvioso" },
      { dia: "Martes", min: 13, max: 19, estado: "Nublado" },
      { dia: "Miércoles", min: 11, max: 17, estado: "Soleado" },
    ]
  },
  {
    id: 5,
    nombre: "Isla Misteriosa",
    tempActual: 20,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 22, estado: "Nublado" },
      { dia: "Martes", min: 19, max: 23, estado: "Soleado" },
      { dia: "Miércoles", min: 17, max: 21, estado: "Lluvioso" },
    ]
  },
  {
  id: 6,
  nombre: "Valle Nevado",
  tempActual: -2,
  estadoActual: "Nevado",
  pronosticoSemanal: [
    { dia: "Lunes", min: -5, max: 0, estado: "Nevado" },
    { dia: "Martes", min: -4, max: 1, estado: "Nublado" },
    { dia: "Miércoles", min: -6, max: -1, estado: "Nevado" },
  ]
},
{
  id: 7,
  nombre: "Laguna Cristal",
  tempActual: 12,
  estadoActual: "Soleado",
  pronosticoSemanal: [
    { dia: "Lunes", min: 10, max: 15, estado: "Soleado" },
    { dia: "Martes", min: 9, max: 14, estado: "Nublado" },
    { dia: "Miércoles", min: 11, max: 16, estado: "Soleado" },
  ]
},
{
  id: 8,
  nombre: "Ciudad del Sol",
  tempActual: 28,
  estadoActual: "Soleado",
  pronosticoSemanal: [
    { dia: "Lunes", min: 25, max: 32, estado: "Soleado" },
    { dia: "Martes", min: 26, max: 33, estado: "Soleado" },
    { dia: "Miércoles", min: 24, max: 30, estado: "Nublado" },
  ]
},
{
  id: 9,
  nombre: "Páramo Gris",
  tempActual: 5,
  estadoActual: "Nublado",
  pronosticoSemanal: [
    { dia: "Lunes", min: 3, max: 7, estado: "Nublado" },
    { dia: "Martes", min: 2, max: 6, estado: "Lluvioso" },
    { dia: "Miércoles", min: 4, max: 8, estado: "Nublado" },
  ]
},
{
  id: 10,
  nombre: "Cañón Rojo",
  tempActual: 18,
  estadoActual: "Soleado",
  pronosticoSemanal: [
    { dia: "Lunes", min: 15, max: 20, estado: "Soleado" },
    { dia: "Martes", min: 14, max: 19, estado: "Nublado" },
    { dia: "Miércoles", min: 16, max: 21, estado: "Soleado" },
  ]
}
];

// Función para mostrar el Home
function mostrarHome() {
  const homeDiv = document.getElementById("home");
  homeDiv.innerHTML = lugares.map(l => `
    <div class="card">
      <h3>${l.nombre}</h3>
      <p>Clima actual: ${l.estadoActual}, ${l.tempActual}°C</p>
      <button onclick="mostrarDetalle(${l.id})">Ver detalle</button>
    </div>
  `).join("");
}

// Llamada inicial
mostrarHome();

// Mostrar detalle del primer lugar al cargar la página
mostrarDetalle(1);

