/* ═══════════════════════════════════════════════════════
   ARCOBOX — traducciones (ES / CA / EN)
   Cada clave se corresponde con un data-i18n del HTML.
   ═══════════════════════════════════════════════════════ */

const I18N = {
  /* ─────────────── CASTELLANO ─────────────── */
  es: {
    meta: {
      title: "Arcobox — Estudio de arquitectura en Barcelona",
      desc: "Arcobox es el estudio de arquitectura de Xavier Oliete en Gràcia, Barcelona. Obra nueva, rehabilitación de edificios y pisos, dirección de obra, cédulas de habitabilidad e informes técnicos."
    },
    nav: { studio: "Estudio", services: "Servicios", projects: "Proyectos", contact: "Contacto" },
    hero: {
      kicker: "Estudio de arquitectura · Barcelona",
      title: "Proyectamos <em>obra nueva</em>.<br>Rehabilitamos <em>lo construido</em>.",
      lead: "Arquitectura, consultoría y dirección de obra desde el barrio de Gràcia. Del primer croquis a la entrega de llaves.",
      cta1: "Ver proyectos",
      cta2: "Hablemos",
      caption: "Alzado tipo — Vila de Gràcia · E 1:100",
      note: "acceso por Joan Blanques"
    },
    marquee: "Obra nueva · Rehabilitación · Proyectos · Dirección de obra · Cédulas de habitabilidad · Informes técnicos · Asesoramiento",
    services: {
      kicker: "01 — Qué hacemos",
      title: "Servicios",
      intro: "Cubrimos el ciclo completo del encargo: pensamos, dibujamos, tramitamos y dirigimos.",
      s1: { t: "Obra nueva", d: "Edificios de nueva planta, del solar a la entrega: vivienda unifamiliar y plurifamiliar, equipamientos y locales." },
      s2: { t: "Rehabilitación", d: "Rehabilitación integral de edificios y reformas de pisos: estructura, fachadas, cubiertas e interiores." },
      s3: { t: "Proyectos y dirección de obra", d: "Redacción de proyectos básicos y ejecutivos, dirección facultativa y coordinación durante toda la obra." },
      s4: { t: "Cédulas de habitabilidad", d: "Inspección y tramitación de cédulas de primera y segunda ocupación, con gestión completa del expediente." },
      s5: { t: "Informes técnicos", d: "ITE, certificados energéticos, diagnosis del estado del edificio, peritajes y valoraciones." },
      s6: { t: "Asesoramiento", d: "Acompañamiento en compras de inmuebles, licencias, normativa urbanística y estudios de viabilidad." }
    },
    process: {
      kicker: "02 — Cómo trabajamos",
      title: "Fases del encargo",
      p1: { t: "Estudio previo", d: "Escuchamos, medimos y analizamos la normativa aplicable." },
      p2: { t: "Proyecto", d: "Del anteproyecto al proyecto ejecutivo, con presupuesto realista." },
      p3: { t: "Licencias", d: "Tramitación con el ayuntamiento y demás organismos." },
      p4: { t: "Obra", d: "Dirección facultativa, control de calidad y de costes." },
      p5: { t: "Entrega", d: "Fin de obra, legalizaciones y cierre del expediente." }
    },
    studio: {
      kicker: "03 — El estudio",
      title: "Un nombre, una caja",
      p1: "Arcobox son las siglas de Arquitectura Consulting Barcelona Oliete Xavier: el estudio fundado y dirigido por el arquitecto Xavier Oliete Bargués.",
      p2: "Trabajamos entre la escala del edificio y la del detalle: obra nueva, rehabilitación y consultoría técnica para particulares, comunidades y promotores. Un interlocutor único desde el primer día hasta el final de obra.",
      name: "Xavier Oliete Bargués",
      role: "Arquitecto jefe y fundador"
    },
    projects: {
      kicker: "04 — Trabajo",
      title: "Proyectos",
      intro: "Selección de obra construida y proyectos en curso.",
      fAll: "Todos", fNew: "Obra nueva", fRehab: "Rehabilitación", fRef: "Reformas",
      empty: "Muy pronto publicaremos aquí los proyectos del estudio.",
      sample: "Ejemplo",
      cats: { "obra-nueva": "Obra nueva", "rehabilitacion": "Rehabilitación", "reforma": "Reforma" }
    },
    contact: {
      kicker: "05 — Contacto",
      title: "Hablemos de tu proyecto",
      addressLabel: "Estudio",
      address: "C. de Joan Blanques, 47, bajos<br>08012 Barcelona — Vila de Gràcia",
      mapLink: "Cómo llegar",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      pending: "por confirmar"
    },
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      msg: "Cuéntanos tu proyecto",
      send: "Enviar",
      note: "El formulario abre tu aplicación de correo.",
      noEmail: "Falta configurar el correo del estudio en js/config.js.",
      subject: "Consulta desde la web de Arcobox"
    },
    tb: {
      project: "PROYECTO", projectV: "Sitio web de Arcobox",
      arch: "ARQUITECTO", scale: "ESCALA", date: "FECHA", sheet: "HOJA",
      rights: "© {year} Arcobox — Todos los derechos reservados"
    }
  },

  /* ─────────────── CATALÀ ─────────────── */
  ca: {
    meta: {
      title: "Arcobox — Estudi d'arquitectura a Barcelona",
      desc: "Arcobox és l'estudi d'arquitectura de Xavier Oliete a Gràcia, Barcelona. Obra nova, rehabilitació d'edificis i pisos, direcció d'obra, cèdules d'habitabilitat i informes tècnics."
    },
    nav: { studio: "Estudi", services: "Serveis", projects: "Projectes", contact: "Contacte" },
    hero: {
      kicker: "Estudi d'arquitectura · Barcelona",
      title: "Projectem <em>obra nova</em>.<br>Rehabilitem <em>allò construït</em>.",
      lead: "Arquitectura, consultoria i direcció d'obra des del barri de Gràcia. Del primer croquis al lliurament de claus.",
      cta1: "Veure projectes",
      cta2: "Parlem-ne",
      caption: "Alçat tipus — Vila de Gràcia · E 1:100",
      note: "accés per Joan Blanques"
    },
    marquee: "Obra nova · Rehabilitació · Projectes · Direcció d'obra · Cèdules d'habitabilitat · Informes tècnics · Assessorament",
    services: {
      kicker: "01 — Què fem",
      title: "Serveis",
      intro: "Cobrim el cicle complet de l'encàrrec: pensem, dibuixem, tramitem i dirigim.",
      s1: { t: "Obra nova", d: "Edificis de nova planta, del solar al lliurament: habitatge unifamiliar i plurifamiliar, equipaments i locals." },
      s2: { t: "Rehabilitació", d: "Rehabilitació integral d'edificis i reformes de pisos: estructura, façanes, cobertes i interiors." },
      s3: { t: "Projectes i direcció d'obra", d: "Redacció de projectes bàsics i executius, direcció facultativa i coordinació durant tota l'obra." },
      s4: { t: "Cèdules d'habitabilitat", d: "Inspecció i tramitació de cèdules de primera i segona ocupació, amb gestió completa de l'expedient." },
      s5: { t: "Informes tècnics", d: "ITE, certificats energètics, diagnosi de l'estat de l'edifici, peritatges i valoracions." },
      s6: { t: "Assessorament", d: "Acompanyament en compres d'immobles, llicències, normativa urbanística i estudis de viabilitat." }
    },
    process: {
      kicker: "02 — Com treballem",
      title: "Fases de l'encàrrec",
      p1: { t: "Estudi previ", d: "Escoltem, mesurem i analitzem la normativa aplicable." },
      p2: { t: "Projecte", d: "De l'avantprojecte al projecte executiu, amb pressupost realista." },
      p3: { t: "Llicències", d: "Tramitació amb l'ajuntament i la resta d'organismes." },
      p4: { t: "Obra", d: "Direcció facultativa, control de qualitat i de costos." },
      p5: { t: "Lliurament", d: "Final d'obra, legalitzacions i tancament de l'expedient." }
    },
    studio: {
      kicker: "03 — L'estudi",
      title: "Un nom, una caixa",
      p1: "Arcobox són les sigles d'Arquitectura Consulting Barcelona Oliete Xavier: l'estudi fundat i dirigit per l'arquitecte Xavier Oliete Bargués.",
      p2: "Treballem entre l'escala de l'edifici i la del detall: obra nova, rehabilitació i consultoria tècnica per a particulars, comunitats i promotors. Un interlocutor únic des del primer dia fins al final d'obra.",
      name: "Xavier Oliete Bargués",
      role: "Arquitecte en cap i fundador"
    },
    projects: {
      kicker: "04 — Treball",
      title: "Projectes",
      intro: "Selecció d'obra construïda i projectes en curs.",
      fAll: "Tots", fNew: "Obra nova", fRehab: "Rehabilitació", fRef: "Reformes",
      empty: "Ben aviat publicarem aquí els projectes de l'estudi.",
      sample: "Exemple",
      cats: { "obra-nueva": "Obra nova", "rehabilitacion": "Rehabilitació", "reforma": "Reforma" }
    },
    contact: {
      kicker: "05 — Contacte",
      title: "Parlem del teu projecte",
      addressLabel: "Estudi",
      address: "C. de Joan Blanques, 47, baixos<br>08012 Barcelona — Vila de Gràcia",
      mapLink: "Com arribar-hi",
      emailLabel: "Correu",
      phoneLabel: "Telèfon",
      pending: "per confirmar"
    },
    form: {
      name: "Nom",
      email: "Correu electrònic",
      msg: "Explica'ns el teu projecte",
      send: "Envia",
      note: "El formulari obre la teva aplicació de correu.",
      noEmail: "Cal configurar el correu de l'estudi a js/config.js.",
      subject: "Consulta des del web d'Arcobox"
    },
    tb: {
      project: "PROJECTE", projectV: "Lloc web d'Arcobox",
      arch: "ARQUITECTE", scale: "ESCALA", date: "DATA", sheet: "FULL",
      rights: "© {year} Arcobox — Tots els drets reservats"
    }
  },

  /* ─────────────── ENGLISH ─────────────── */
  en: {
    meta: {
      title: "Arcobox — Architecture studio in Barcelona",
      desc: "Arcobox is the architecture studio of Xavier Oliete in Gràcia, Barcelona. New builds, building and apartment refurbishment, construction management, habitability certificates and technical reports."
    },
    nav: { studio: "Studio", services: "Services", projects: "Projects", contact: "Contact" },
    hero: {
      kicker: "Architecture studio · Barcelona",
      title: "We design <em>new builds</em>.<br>We restore <em>what stands</em>.",
      lead: "Architecture, consulting and construction management from the Gràcia neighbourhood. From first sketch to key handover.",
      cta1: "See projects",
      cta2: "Let's talk",
      caption: "Typical elevation — Vila de Gràcia · 1:100",
      note: "entrance on Joan Blanques"
    },
    marquee: "New builds · Refurbishment · Design · Construction management · Habitability certificates · Technical reports · Consulting",
    services: {
      kicker: "01 — What we do",
      title: "Services",
      intro: "We cover the full life of a commission: we think, draw, file and direct.",
      s1: { t: "New builds", d: "New buildings from plot to handover: single-family and multi-family housing, facilities and commercial spaces." },
      s2: { t: "Refurbishment", d: "Full building refurbishment and apartment renovations: structure, façades, roofs and interiors." },
      s3: { t: "Design & construction management", d: "Basic and detailed design packages, statutory site direction and coordination throughout the works." },
      s4: { t: "Habitability certificates", d: "Inspection and processing of first- and second-occupancy habitability certificates, managed end to end." },
      s5: { t: "Technical reports", d: "Building inspections (ITE), energy certificates, condition surveys, expert reports and appraisals." },
      s6: { t: "Consulting", d: "Guidance on property purchases, permits, planning regulations and feasibility studies." }
    },
    process: {
      kicker: "02 — How we work",
      title: "Phases of a commission",
      p1: { t: "Preliminary study", d: "We listen, measure and review the applicable regulations." },
      p2: { t: "Design", d: "From concept design to construction documents, with a realistic budget." },
      p3: { t: "Permits", d: "Filing with the city council and other authorities." },
      p4: { t: "Construction", d: "Site direction, quality and cost control." },
      p5: { t: "Handover", d: "Completion, legal registration and file closure." }
    },
    studio: {
      kicker: "03 — The studio",
      title: "One name, one box",
      p1: "Arcobox stands for Arquitectura Consulting Barcelona Oliete Xavier: the studio founded and led by architect Xavier Oliete Bargués.",
      p2: "We work between the scale of the building and the scale of the detail: new builds, refurbishment and technical consulting for homeowners, communities and developers. A single point of contact from day one to completion.",
      name: "Xavier Oliete Bargués",
      role: "Chief architect & founder"
    },
    projects: {
      kicker: "04 — Work",
      title: "Projects",
      intro: "A selection of built work and ongoing projects.",
      fAll: "All", fNew: "New build", fRehab: "Refurbishment", fRef: "Renovations",
      empty: "Studio projects coming soon.",
      sample: "Sample",
      cats: { "obra-nueva": "New build", "rehabilitacion": "Refurbishment", "reforma": "Renovation" }
    },
    contact: {
      kicker: "05 — Contact",
      title: "Let's talk about your project",
      addressLabel: "Studio",
      address: "C. de Joan Blanques, 47, ground floor<br>08012 Barcelona — Vila de Gràcia",
      mapLink: "Directions",
      emailLabel: "Email",
      phoneLabel: "Phone",
      pending: "to be confirmed"
    },
    form: {
      name: "Name",
      email: "Email address",
      msg: "Tell us about your project",
      send: "Send",
      note: "The form opens your email app.",
      noEmail: "The studio email is not yet set in js/config.js.",
      subject: "Enquiry from the Arcobox website"
    },
    tb: {
      project: "PROJECT", projectV: "Arcobox website",
      arch: "ARCHITECT", scale: "SCALE", date: "DATE", sheet: "SHEET",
      rights: "© {year} Arcobox — All rights reserved"
    }
  }
};
