/* ═══════════════════════════════════════════════════════
   ARCOBOX — proyectos
   Para añadir un proyecto, copia un bloque {...} y edítalo.
   Campos:
     cat      → "obra-nueva" | "rehabilitacion" | "reforma"
     year     → año (texto)
     location → ubicación
     image    → OPCIONAL: ruta a una foto, p. ej. "img/casa-valles.jpg"
                (si no hay imagen se dibuja un plano de relleno)
     sample   → true = marca la tarjeta como "Ejemplo".
                Quítalo (o pon false) en los proyectos reales.
     title    → título en los tres idiomas
   ═══════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    cat: "obra-nueva",
    year: "2024",
    location: "Vila de Gràcia, Barcelona",
    sample: true,
    title: {
      es: "Edificio plurifamiliar entre medianeras",
      ca: "Edifici plurifamiliar entre mitgeres",
      en: "Infill apartment building"
    }
  },
  {
    cat: "rehabilitacion",
    year: "2023",
    location: "Eixample, Barcelona",
    sample: true,
    title: {
      es: "Rehabilitación de fachada y cubierta",
      ca: "Rehabilitació de façana i coberta",
      en: "Façade and roof refurbishment"
    }
  },
  {
    cat: "reforma",
    year: "2024",
    location: "Sant Gervasi, Barcelona",
    sample: true,
    title: {
      es: "Reforma integral de vivienda",
      ca: "Reforma integral d'habitatge",
      en: "Full apartment renovation"
    }
  },
  {
    cat: "obra-nueva",
    year: "2022",
    location: "Vallès Occidental",
    sample: true,
    title: {
      es: "Casa unifamiliar aislada",
      ca: "Casa unifamiliar aïllada",
      en: "Detached single-family house"
    }
  },
  {
    cat: "rehabilitacion",
    year: "2023",
    location: "El Born, Barcelona",
    sample: true,
    title: {
      es: "Rehabilitación estructural de finca",
      ca: "Rehabilitació estructural de finca",
      en: "Structural building refurbishment"
    }
  },
  {
    cat: "reforma",
    year: "2025",
    location: "Vila de Gràcia, Barcelona",
    sample: true,
    title: {
      es: "Reforma de ático con terraza",
      ca: "Reforma d'àtic amb terrassa",
      en: "Penthouse and terrace renovation"
    }
  }
];
