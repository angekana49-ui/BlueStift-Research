const LANG_DE = {
  code: 'de',
  name: 'Deutsch',
  flag: '🇩🇪',
  dir: 'ltr',

  nav: { tag: 'research.thebluestift.com' },

  hero: {
    badge: 'Post-Mortem-Studie 2025–2026',
    h1_line1: 'Kein Pitch mehr.',
    h1_em: 'Wir hören zu.',
    p1: 'Wir führen eine qualitative Studie durch, was in diesem Jahr wirklich in den Klassenräumen passiert ist — echte Frustration, Workarounds, Momente die funktioniert haben. Kein Multiple Choice. Keine versteckte Agenda. Nur deine ehrliche Erfahrung.',
    note: '5 offene Fragen · Anonym · ~4 Minuten',
    meta_time: 'Etwa 4 Minuten',
    meta_anon: 'Standardmäßig anonym',
    meta_who: 'Lehrkräfte & Schüler',
  },

  segment: {
    teacher: 'Ich bin Lehrkraft',
    student: 'Ich bin Schüler/in',
  },

  start_btn: 'Starten — dauert kurz',

  progress: { label: (n, t) => `Frage ${n} von ${t}` },

  nav_btn: { back: 'Zurück', next: 'Weiter', submit: 'Absenden' },

  counter: (n, t) => `${n} / ${t}`,

  teachers: [
    {
      number: 'Frage 01', label: 'Die Zeitfalle',
      q: 'Denke an die letzte Woche. Abgesehen vom eigentlichen Unterrichten — was hat am Computer die meiste Zeit verschlungen, und wie lange ungefähr?',
      ph: 'Sei konkret wenn möglich. "45 Minuten täglich Noten in PowerSchool einpflegen" ist wertvoller als eine vage Antwort.',
    },
    {
      number: 'Frage 02', label: 'Die Lücke',
      q: 'Wenn ein Schüler nicht weiterkommt und du in dem Moment nicht erreichbar bist — was passiert dann? Was macht er, und was wünschst du dir, was er hätte?',
      ph: 'Was machen deine Schüler um 22 Uhr, wenn sie feststecken?',
    },
    {
      number: 'Frage 03', label: 'Der blinde Fleck der Daten',
      q: 'Wenn du dir die Schülerdaten in deinem LMS anschaust — was wünschst du dir, dass es dir sagt, was es aber nie tut?',
      ph: 'Die Information, die deinen Unterricht am nächsten Tag wirklich verändern würde.',
    },
    {
      number: 'Frage 04', label: 'Die KI-Realität',
      q: 'Hat in diesem Jahr ein Schüler eine KI-generierte Arbeit abgegeben? Wie bist du damit umgegangen — und was hättest du in diesem Moment wirklich gebraucht?',
      ph: 'Kein Urteil hier. Nur was wirklich passiert ist und was gefehlt hat.',
    },
    {
      number: 'Frage 05', label: 'Die eine echte Sache',
      q: 'Wenn du eine einzige Sache daran ändern könntest, wie Technologie in deinem Unterricht funktioniert — keine Wunschliste, nur eine echte Sache — was wäre das?',
      ph: 'Die Sache, die, wenn sie morgen behoben wäre, den Montag merklich besser machen würde.',
    },
  ],

  students: [
    {
      number: 'Frage 01', label: 'Der Aha-Moment',
      q: 'Denk an das letzte Mal, als etwas Schwieriges wirklich „geklickt" hat. Wo warst du, und was hat diesen Moment ausgelöst?',
      ph: 'Echtes Lernen — nicht nur Auswendiglernen für eine Prüfung.',
    },
    {
      number: 'Frage 02', label: 'Wenn du feststeckst',
      q: 'Wenn du abends feststeckst und deinen Lehrer nicht fragen kannst — was machst du wirklich? Beschreib mir, wie es abläuft.',
      ph: 'YouTube, ChatGPT, ein Freund auf Discord? Sei ehrlich — hier bewertet dich niemand.',
    },
    {
      number: 'Frage 03', label: 'Die KI-Wahrheit',
      q: 'Hast du in diesem Jahr KI für die Schule benutzt? Vergiss die Regeln — erzähl mir ehrlich, wie du sie eingesetzt hast und ob es dir wirklich beim Lernen geholfen hat.',
      ph: 'Die echte Geschichte, nicht die, die du deinem Lehrer erzählen würdest.',
    },
    {
      number: 'Frage 04', label: 'Die nutzlose App',
      q: 'Welche App oder welches Tool hat deine Schule dich zuletzt benutzen lassen, das sich wie totale Zeitverschwendung angefühlt hat? Was machte es nutzlos?',
      ph: 'Nenn es ruhig. Was machte es konkret zum Desaster?',
    },
    {
      number: 'Frage 05', label: 'Das ideale Werkzeug',
      q: 'Wenn du eine App hättest, die dir wirklich beim Lernen hilft — ohne Bewertung, ohne Überwachung — was würde sie als erstes tun?',
      ph: 'Keine Features. Wie würde es sich anfühlen? Welches Problem würde es vom ersten Tag an lösen?',
    },
  ],

  thankyou: {
    h2_line1: 'Genau das',
    h2_em: 'haben wir gebraucht.',
    p: 'Deine Antworten fließen direkt in die Entwicklung von Bluestift ein — kein Bericht, kein Deck. Das echte Produkt. Die Frustrationen, die du gerade beschrieben hast, sind das Pflichtenheft.',
    email_title: 'Willst du sehen, was wir daraus bauen?',
    email_sub: 'Hinterlasse deine E-Mail und wir zeigen dir die Infrastruktur, die wir aus deinen Worten entwickeln — bevor alle anderen.',
    email_ph: 'deine@email.de',
    email_btn: 'Haltet mich auf dem Laufenden',
    email_note: 'Kein Spam. Eine einzige E-Mail zum Launch. Das war\'s.',
    footer: 'Wir sind ein kleines Team, das etwas baut, das vor fünf Jahren hätte existieren sollen.\nWenn du eine Lehrkraft oder Schüler/in kennst, der etwas zu sagen hat — schick sie her.',
  },
};
