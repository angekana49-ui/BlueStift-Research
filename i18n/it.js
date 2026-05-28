const LANG_IT = {
  code: 'it',
  name: 'Italiano',
  flag: '🇮🇹',
  dir: 'ltr',

  nav: { tag: 'research.thebluestift.com' },

  hero: {
    badge: 'Studio Post-Mortem 2025–2026',
    h1_line1: 'Basta pitch.',
    h1_em: 'Adesso ascoltiamo.',
    p1: 'Stiamo conducendo uno studio qualitativo su ciò che è successo davvero nelle classi quest\'anno — le vere frizioni, le soluzioni improvvisate, i momenti che hanno funzionato. Nessuna risposta multipla. Nessun\'agenda nascosta. Solo la tua esperienza onesta.',
    note: '5 domande aperte · Anonimo · ~4 minuti',
    meta_time: 'Circa 4 minuti',
    meta_anon: 'Anonimo di default',
    meta_who: 'Insegnanti e Studenti',
  },

  segment: {
    teacher: 'Sono un Insegnante',
    student: 'Sono uno Studente',
  },

  start_btn: 'Inizia — è breve',

  progress: { label: (n, t) => `Domanda ${n} di ${t}` },

  nav_btn: { back: 'Indietro', next: 'Avanti', submit: 'Invia' },

  counter: (n, t) => `${n} / ${t}`,

  teachers: [
    {
      number: 'Domanda 01', label: 'Il pozzo del tempo',
      q: 'Guardando indietro a questo anno scolastico. Al di fuori dell\'insegnamento vero e proprio, quale compito ti ha costantemente rubato più tempo al computer — e quante ore a settimana circa?',
      ph: 'Sii specifico se puoi. "Inserire voti nel registro per 45 minuti ogni sera per 9 mesi" vale più di una risposta vaga.',
    },
    {
      number: 'Domanda 02', label: 'Il vuoto',
      q: 'Quando uno studente è perso e non puoi raggiungerlo in quel momento — cosa succede dopo? Cosa fa, e cosa vorresti che avesse a disposizione?',
      ph: 'Cosa fanno i tuoi studenti alle 22 quando sono bloccati?',
    },
    {
      number: 'Domanda 03', label: 'Il punto cieco dei dati',
      q: 'Quando guardi i dati dei tuoi studenti nel tuo LMS, qual è la cosa che vorresti che ti dicesse — e che non ti dice mai?',
      ph: 'L\'informazione che cambierebbe davvero il tuo insegnamento il giorno dopo.',
    },
    {
      number: 'Domanda 04', label: 'La realtà dell\'IA',
      q: 'Quest\'anno qualche studente ti ha consegnato un lavoro generato dall\'IA? Come l\'hai gestito — e di cosa avevi davvero bisogno in quel momento?',
      ph: 'Nessun giudizio qui. Solo quello che è successo davvero e cosa ti mancava.',
    },
    {
      number: 'Domanda 05', label: 'L\'unica vera cosa',
      q: 'Se potessi sistemare una sola cosa nel modo in cui la tecnologia funziona nella tua classe — non una lista dei desideri, solo una cosa reale — quale sarebbe?',
      ph: 'La cosa che, se risolta domani, renderebbe il lunedì notevolmente migliore.',
    },
  ],

  students: [
    {
      number: 'Domanda 01', label: 'Il momento click',
      q: 'Ripensando a questo anno scolastico. Qual è l\'argomento o il concetto che finalmente ha fatto "clic" per te — e cosa lo ha fatto scattare?',
      ph: 'Apprendimento vero, non solo memorizzare per un\'interrogazione.',
    },
    {
      number: 'Domanda 02', label: 'Quando sei bloccato',
      q: 'Quando sei bloccato di notte e non puoi chiedere al prof — cosa fai davvero? Raccontami com\'è.',
      ph: 'YouTube, ChatGPT, un amico su Discord? Sii onesto — nessuno ti sta valutando.',
    },
    {
      number: 'Domanda 03', label: 'La verità sull\'IA',
      q: 'Hai usato l\'IA per la scuola quest\'anno? Non preoccuparti delle regole — dimmi onestamente come l\'hai usata e se ti ha davvero aiutato a imparare.',
      ph: 'La storia vera, non quella che racconteresti al tuo prof.',
    },
    {
      number: 'Domanda 04', label: 'L\'app inutile',
      q: 'Nel corso di questo anno scolastico, qual è l\'app o lo strumento che la tua scuola ti ha obbligato a usare e che ti è sembrata la più grande perdita di tempo? Cosa la rendeva inutile?',
      ph: 'Nominala se vuoi. Cosa la rendeva un disastro concretamente?',
    },
    {
      number: 'Domanda 05', label: 'Lo strumento ideale',
      q: 'Se avessi un\'app che ti aiutasse davvero ad imparare — senza voti, senza controlli — cosa farebbe per prima cosa?',
      ph: 'Non funzionalità. Come ti farebbe sentire? Quale problema risolverebbe dal primo giorno?',
    },
  ],

  thankyou: {
    h2_line1: 'È esattamente',
    h2_em: 'quello di cui avevamo bisogno.',
    p: 'Le tue risposte vanno direttamente in come costruiamo Bluestift — non un report, non un deck. Il prodotto reale. Le frustrazioni che hai appena descritto sono le specifiche.',
    email_title: 'Vuoi vedere cosa costruiamo da questo?',
    email_sub: 'Lascia la tua email e ti mostreremo l\'infrastruttura che progettiamo dalle tue parole — prima di tutti.',
    email_ph: 'tua@email.it',
    email_btn: 'Tienimi aggiornato/a',
    email_note: 'Niente spam. Una sola email al lancio. Tutto qui.',
    footer: 'Siamo un piccolo team che costruisce qualcosa che avrebbe dovuto esistere cinque anni fa.\nSe conosci un insegnante o uno studente con cose da dire — mandali qui.',
  },
};
