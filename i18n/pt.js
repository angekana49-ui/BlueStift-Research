const LANG_PT = {
  code: 'pt',
  name: 'Português',
  flag: '🇧🇷',
  dir: 'ltr',

  nav: { tag: 'research.thebluestift.com' },

  hero: {
    badge: 'Estudo Post-Mortem 2025–2026',
    h1_line1: 'Chega de pitch.',
    h1_em: 'Agora ouvimos.',
    p1: 'Estamos realizando um estudo qualitativo sobre o que realmente aconteceu nas salas de aula este ano — as fricções reais, os contornos, os momentos que funcionaram. Sem múltipla escolha. Sem agenda oculta. Apenas a sua experiência honesta.',
    note: '5 perguntas abertas · Anônimo · ~4 minutos',
    meta_time: 'Cerca de 4 minutos',
    meta_anon: 'Anônimo por padrão',
    meta_who: 'Professores e Alunos',
  },

  segment: {
    teacher: 'Sou Professor/a',
    student: 'Sou Aluno/a',
  },

  start_btn: 'Começar — é rápido',

  progress: { label: (n, t) => `Pergunta ${n} de ${t}` },

  nav_btn: { back: 'Voltar', next: 'Próximo', submit: 'Enviar' },

  counter: (n, t) => `${n} / ${t}`,

  teachers: [
    {
      number: 'Pergunta 01', label: 'O ralo de tempo',
      q: 'Olhando para este ano letivo como um todo. Fora do ensino em si, qual tarefa consumiu mais consistentemente o seu tempo no computador — e quantas horas por semana aproximadamente?',
      ph: 'Seja específico se puder. "Lançar notas no sistema por 45 min toda tarde" vale mais que uma resposta vaga.',
    },
    {
      number: 'Pergunta 02', label: 'O vazio',
      q: 'Quando um aluno está perdido e você não consegue alcançá-lo no momento — o que acontece depois? O que ele faz, e o que você gostaria que ele tivesse disponível?',
      ph: 'O que seus alunos fazem às 22h quando estão travados?',
    },
    {
      number: 'Pergunta 03', label: 'O ponto cego dos dados',
      q: 'Quando você olha os dados dos alunos no seu LMS, qual é a coisa que você gostaria que ele te dissesse — e que nunca diz?',
      ph: 'A informação que mudaria de verdade como você ensina no dia seguinte.',
    },
    {
      number: 'Pergunta 04', label: 'A realidade da IA',
      q: 'Algum aluno entregou trabalho gerado por IA este ano? Como você lidou com isso — e do que você realmente precisava naquele momento?',
      ph: 'Sem julgamentos. Só o que aconteceu de verdade e o que estava faltando.',
    },
    {
      number: 'Pergunta 05', label: 'O único ajuste real',
      q: 'Se você pudesse mudar uma única coisa em como a tecnologia funciona na sua sala — não uma lista de desejos, só uma coisa real — o que seria?',
      ph: 'A coisa que, se fosse resolvida amanhã, tornaria a segunda-feira visivelmente melhor.',
    },
  ],

  students: [
    {
      number: 'Pergunta 01', label: 'O momento do clique',
      q: 'Olhando para trás neste ano letivo. Qual é o tema ou conceito que finalmente fez sentido pra você — e o que realmente fez isso acontecer?',
      ph: 'Aprendizado de verdade, não só memorizar pra prova.',
    },
    {
      number: 'Pergunta 02', label: 'Quando você trava',
      q: 'Quando você trava à noite e não pode perguntar pro professor — o que você faz de verdade? Me conta como é.',
      ph: 'YouTube, ChatGPT, um amigo no Discord? Seja honesto — ninguém está te avaliando.',
    },
    {
      number: 'Pergunta 03', label: 'A verdade sobre a IA',
      q: 'Você usou IA pra escola este ano? Esquece as regras — me conta de verdade como usou e se realmente te ajudou a aprender.',
      ph: 'A história real, não a que você contaria pro seu professor.',
    },
    {
      number: 'Pergunta 04', label: 'O app inútil',
      q: 'Ao longo deste ano letivo, qual é o app ou ferramenta que sua escola te obrigou a usar e que pareceu a maior perda de tempo? O que o tornava inútil?',
      ph: 'Pode nomear se quiser. O que o tornava um desastre concretamente?',
    },
    {
      number: 'Pergunta 05', label: 'A ferramenta ideal',
      q: 'Se você tivesse um app que realmente te ajudasse a aprender — sem te avaliar, sem te vigiar — o que ele faria primeiro?',
      ph: 'Não funcionalidades. Como você se sentiria? Que problema resolveria desde o primeiro dia?',
    },
  ],

  thankyou: {
    h2_line1: 'É exatamente',
    h2_em: 'o que precisávamos.',
    p: 'Suas respostas vão diretamente para como construímos o Bluestift — não um relatório, não um deck. O produto real. As frustrações que você acabou de descrever são as especificações.',
    email_title: 'Quer ver o que vamos construir a partir disso?',
    email_sub: 'Deixe seu email e vamos te mostrar a infraestrutura que projetamos a partir das suas palavras — antes de todo mundo.',
    email_ph: 'seu@email.com',
    email_btn: 'Me avisa quando sair',
    email_note: 'Sem spam. Um único email no lançamento. Só isso.',
    footer: 'Somos uma equipe pequena construindo algo que deveria ter existido há cinco anos.\nSe você conhece um professor ou aluno com coisas a dizer — manda pra cá.',
  },
};
