const LANG_FR = {
  code: 'fr',
  name: 'Français',
  flag: '🇫🇷',
  dir: 'ltr',

  nav: {
    tag: 'research.thebluestift.com',
  },

  hero: {
    badge: 'Étude Post-Mortem 2025–2026',
    h1_line1: 'On arrête le pitch.',
    h1_em: 'On écoute.',
    p1: 'Nous menons une étude qualitative sur ce qui s\'est vraiment passé dans les classes cette année — les vraies frictions, les contournements, les moments qui ont fonctionné. Pas de QCM. Pas d\'agenda caché. Juste votre expérience honnête.',
    note: '5 questions ouvertes · Anonyme · ~4 minutes',
    meta_time: 'Environ 4 minutes',
    meta_anon: 'Anonyme par défaut',
    meta_who: 'Enseignants & Élèves',
  },

  segment: {
    teacher: 'Je suis Enseignant·e',
    student: 'Je suis Élève',
  },

  start_btn: 'Commencer — c\'est court',

  progress: {
    label: (n, t) => `Question ${n} sur ${t}`,
  },

  nav_btn: {
    back: 'Retour',
    next: 'Suivant',
    submit: 'Envoyer',
  },

  counter: (n, t) => `${n} / ${t}`,

  teachers: [
    {
      number: 'Question 01',
      label: 'Le gouffre de temps',
      q: 'Pensez à la semaine dernière. En dehors de l\'enseignement pur, qu\'est-ce qui vous a pris le plus de temps sur votre ordinateur — et combien de temps environ ?',
      ph: 'Soyez précis si possible. « Saisir les notes dans le logiciel pendant 45 min chaque soir » vaut mieux qu\'une réponse vague.',
    },
    {
      number: 'Question 02',
      label: 'Le vide pédagogique',
      q: 'Quand un élève est bloqué et que vous ne pouvez pas le rejoindre dans l\'instant — que se passe-t-il ensuite ? Que fait-il, et qu\'aimeriez-vous qu\'il ait à disposition ?',
      ph: 'Que font vos élèves à 22h quand ils sont bloqués ?',
    },
    {
      number: 'Question 03',
      label: 'L\'angle mort des données',
      q: 'Quand vous regardez les données de vos élèves dans votre LMS, quelle est la chose que vous aimeriez qu\'il vous dise — et qu\'il ne vous dit jamais ?',
      ph: 'L\'information qui changerait vraiment votre façon d\'enseigner le lendemain.',
    },
    {
      number: 'Question 04',
      label: 'La réalité de l\'IA',
      q: 'Un élève vous a-t-il rendu un travail généré par IA cette année ? Comment avez-vous réagi — et de quoi aviez-vous vraiment besoin à ce moment-là ?',
      ph: 'Pas de jugement ici. Juste ce qui s\'est passé vraiment et ce qui vous manquait.',
    },
    {
      number: 'Question 05',
      label: 'Le seul vrai problème',
      q: 'Si vous pouviez corriger une seule chose dans la façon dont la technologie fonctionne dans votre classe — pas une liste de souhaits, juste une vraie chose — ce serait quoi ?',
      ph: 'La chose qui, si elle était réglée demain, rendrait le lundi nettement meilleur.',
    },
  ],

  students: [
    {
      number: 'Question 01',
      label: 'Le déclic',
      q: 'Pensez à la dernière fois où quelque chose de difficile a vraiment cliqué pour vous. Où étiez-vous, et qu\'est-ce qui a provoqué ce déclic ?',
      ph: 'Vrai apprentissage, pas juste mémoriser pour un contrôle.',
    },
    {
      number: 'Question 02',
      label: 'Quand tu bloques',
      q: 'Quand tu es bloqué·e le soir et que tu ne peux pas demander à ton prof — qu\'est-ce que tu fais vraiment ? Décris-moi comment ça se passe.',
      ph: 'YouTube, ChatGPT, un ami sur Discord ? Sois honnête — personne ne note ça.',
    },
    {
      number: 'Question 03',
      label: 'La vérité sur l\'IA',
      q: 'As-tu utilisé l\'IA pour l\'école cette année ? Oublie les règles — dis-moi honnêtement comment tu l\'as utilisée et si ça t\'a vraiment aidé à apprendre.',
      ph: 'La vraie histoire, pas celle que tu raconterais à ton prof.',
    },
    {
      number: 'Question 04',
      label: 'L\'appli inutile',
      q: 'Quel est le dernier outil ou appli que ton école t\'a imposé et qui t\'a semblé une perte de temps totale ? Qu\'est-ce qui le rendait inutile ?',
      ph: 'Nomme-le si tu veux. Qu\'est-ce qui le rendait nul concrètement ?',
    },
    {
      number: 'Question 05',
      label: 'L\'outil idéal',
      q: 'Si tu avais une appli qui t\'aidait vraiment à apprendre — sans te noter, sans te surveiller — qu\'est-ce qu\'elle ferait en premier ?',
      ph: 'Pas des fonctionnalités. Qu\'est-ce que ça ressentirait ? Quel problème ça réglerait dès le premier jour ?',
    },
  ],

  thankyou: {
    h2_line1: 'C\'est exactement',
    h2_em: 'ce qu\'il nous fallait.',
    p: 'Vos réponses vont directement dans la façon dont nous construisons Bluestift — pas un rapport, pas un deck. Le vrai produit. Les frustrations que vous venez de décrire sont les specs.',
    email_title: 'Vous voulez voir ce qu\'on construit à partir de ça ?',
    email_sub: 'Laissez votre email et on vous montrera l\'infrastructure qu\'on dessine d\'après vos mots — avant tout le monde.',
    email_ph: 'votre@email.com',
    email_btn: 'Me tenir informé·e',
    email_note: 'Pas de spam. Un seul email au lancement. C\'est tout.',
    footer: 'On est une petite équipe qui construit quelque chose qui aurait dû exister il y a cinq ans.\nSi vous connaissez un enseignant ou un élève avec des choses à dire — envoyez-les ici.',
  },
};
