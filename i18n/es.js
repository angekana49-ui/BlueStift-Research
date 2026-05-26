const LANG_ES = {
  code: 'es',
  name: 'Español',
  flag: '🇪🇸',
  dir: 'ltr',

  nav: { tag: 'research.thebluestift.com' },

  hero: {
    badge: 'Estudio Post-Mortem 2025–2026',
    h1_line1: 'Dejamos de vender.',
    h1_em: 'Ahora escuchamos.',
    p1: 'Estamos realizando un estudio cualitativo sobre lo que realmente ocurrió en las aulas este año — la fricción real, los atajos, los momentos que funcionaron. Sin respuestas múltiples. Sin agenda oculta. Solo tu experiencia honesta.',
    note: '5 preguntas abiertas · Anónimo · ~4 minutos',
    meta_time: 'Unos 4 minutos',
    meta_anon: 'Anónimo por defecto',
    meta_who: 'Profesores y Alumnos',
  },

  segment: {
    teacher: 'Soy Profesor/a',
    student: 'Soy Estudiante',
  },

  start_btn: 'Empezar — es corto',

  progress: { label: (n, t) => `Pregunta ${n} de ${t}` },

  nav_btn: { back: 'Atrás', next: 'Siguiente', submit: 'Enviar' },

  counter: (n, t) => `${n} / ${t}`,

  teachers: [
    {
      number: 'Pregunta 01', label: 'La trampa de tiempo',
      q: 'Piensa en la semana pasada. Fuera de enseñar, ¿qué te quitó más tiempo frente al ordenador — y cuánto aproximadamente?',
      ph: 'Sé específico si puedes. "Meter notas en la plataforma 45 min cada tarde" vale más que una respuesta vaga.',
    },
    {
      number: 'Pregunta 02', label: 'El vacío',
      q: 'Cuando un alumno está perdido y no puedes ayudarle en ese momento — ¿qué pasa después? ¿Qué hace, y qué desearías que tuviera a su disposición?',
      ph: '¿Qué hacen tus alumnos a las 10 de la noche cuando están bloqueados?',
    },
    {
      number: 'Pregunta 03', label: 'El punto ciego de los datos',
      q: 'Cuando miras los datos de tus alumnos en tu LMS, ¿qué es lo que desearías que te dijera — y que nunca dice?',
      ph: 'La información que de verdad cambiaría cómo enseñas al día siguiente.',
    },
    {
      number: 'Pregunta 04', label: 'La realidad de la IA',
      q: '¿Algún alumno te ha entregado trabajo generado por IA este año? ¿Cómo lo gestionaste — y qué necesitabas realmente en ese momento?',
      ph: 'Sin juicios. Solo lo que pasó de verdad y lo que te faltaba.',
    },
    {
      number: 'Pregunta 05', label: 'El único arreglo real',
      q: 'Si pudieras cambiar una sola cosa en cómo funciona la tecnología en tu aula — no una lista de deseos, solo una cosa real — ¿cuál sería?',
      ph: 'Lo que, si se arreglara mañana, haría el lunes notablemente mejor.',
    },
  ],

  students: [
    {
      number: 'Pregunta 01', label: 'El momento aha',
      q: 'Piensa en la última vez que algo difícil de verdad hizo "clic" para ti. ¿Dónde estabas y qué fue lo que lo provocó?',
      ph: 'Aprendizaje real, no solo memorizar para un examen.',
    },
    {
      number: 'Pregunta 02', label: 'Cuando te bloqueas',
      q: 'Cuando estás bloqueado por la noche y no puedes preguntarle a tu profesor — ¿qué haces realmente? Cuéntame cómo lo llevas.',
      ph: 'YouTube, ChatGPT, un amigo en Discord? Sé honesto — nadie te está calificando.',
    },
    {
      number: 'Pregunta 03', label: 'La verdad sobre la IA',
      q: '¿Has usado IA para el cole este año? No te preocupes por las reglas — cuéntame de verdad cómo la usaste y si te ayudó a aprender.',
      ph: 'La historia real, no la que le contarías a tu profe.',
    },
    {
      number: 'Pregunta 04', label: 'La app inútil',
      q: '¿Cuál es la última app o herramienta que tu colegio te obligó a usar y que te pareció una pérdida de tiempo total? ¿Qué la hacía inútil?',
      ph: 'Nómbrala si quieres. ¿Qué la hacía un desastre concretamente?',
    },
    {
      number: 'Pregunta 05', label: 'La herramienta ideal',
      q: 'Si tuvieras una app que de verdad te ayudara a aprender — sin calificarte, sin vigilarte — ¿qué haría primero?',
      ph: 'No funciones. ¿Cómo se sentiría? ¿Qué problema resolvería desde el primer día?',
    },
  ],

  thankyou: {
    h2_line1: 'Esto es exactamente',
    h2_em: 'lo que necesitábamos.',
    p: 'Tus respuestas van directamente a cómo construimos Bluestift — no un informe, no un deck. El producto real. Las frustraciones que acabas de describir son las especificaciones.',
    email_title: '¿Quieres ver qué construimos a partir de esto?',
    email_sub: 'Deja tu email y te mostraremos la infraestructura que diseñamos desde tus palabras — antes que nadie.',
    email_ph: 'tu@email.com',
    email_btn: 'Mantenme informado/a',
    email_note: 'Sin spam. Un solo email al lanzamiento. Nada más.',
    footer: 'Somos un equipo pequeño construyendo algo que debería haber existido hace cinco años.\nSi conoces a un profe o alumno con cosas que decir — mándales aquí.',
  },
};
