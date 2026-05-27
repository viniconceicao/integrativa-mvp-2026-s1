// Mock Data - Perguntas para partidas
export const mockQuestions = [
  {
    id: 1,
    pergunta: 'Qual é a segunda Lei de Newton?',
    alternativas: [
      'F = ma (Força = massa × aceleração)',
      'F = m/v (Força = massa / velocidade)',
      'F = ma² (Força = massa × aceleração²)',
      'F = a/m (Força = aceleração / massa)',
    ],
    correta: 0,
    dificuldade: 'médio',
    categoria: 'Física',
  },
  {
    id: 2,
    pergunta: 'Qual material é mais adequado para fabricar molas resistentes?',
    alternativas: [
      'Alumínio puro',
      'Aço inoxidável',
      'Plástico reforçado',
      'Cobre',
    ],
    correta: 1,
    dificuldade: 'médio',
    categoria: 'Materiais',
  },
  {
    id: 3,
    pergunta: 'O que é torque em mecânica?',
    alternativas: [
      'A velocidade de rotação de um objeto',
      'O produto de força pela distância perpendicular ao eixo de rotação',
      'A aceleração angular de um corpo',
      'A força aplicada em um ponto',
    ],
    correta: 1,
    dificuldade: 'fácil',
    categoria: 'Mecânica',
  },
  {
    id: 4,
    pergunta: 'Qual é a unidade SI de torque?',
    alternativas: [
      'Newton (N)',
      'Newton-metro (N·m)',
      'Quilograma-força (kgf)',
      'Pascal (Pa)',
    ],
    correta: 1,
    dificuldade: 'médio',
    categoria: 'Unidades',
  },
  {
    id: 5,
    pergunta: 'Em um motor elétrico, qual é a função do rotor?',
    alternativas: [
      'Gerar campo magnético fixo',
      'Girar e produzir trabalho mecânico',
      'Apenas conduzir corrente elétrica',
      'Dissipar calor',
    ],
    correta: 1,
    dificuldade: 'médio',
    categoria: 'Eletromecânica',
  },
  {
    id: 6,
    pergunta: 'Qual teorema relaciona trabalho, energia cinética e potencial?',
    alternativas: [
      'Teorema de Pitágoras',
      'Teorema da Conservação de Energia',
      'Teorema de Arquimedes',
      'Teorema de Bernoulli',
    ],
    correta: 1,
    dificuldade: 'difícil',
    categoria: 'Energia',
  },
  {
    id: 7,
    pergunta: 'O que é deformação plástica em um material?',
    alternativas: [
      'Deformação reversível após remover a força',
      'Deformação permanente que não desaparece após remover a força',
      'Ruptura completa do material',
      'Aumento de resistência',
    ],
    correta: 1,
    dificuldade: 'médio',
    categoria: 'Materiais',
  },
  {
    id: 8,
    pergunta: 'Qual é o limite elástico de um material?',
    alternativas: [
      'Ponto onde o material se quebra',
      'Maior tensão que o material pode suportar sem sofrer deformação permanente',
      'Temperatura mínima do material',
      'Ponto onde o material muda de cor',
    ],
    correta: 1,
    dificuldade: 'médio',
    categoria: 'Materiais',
  },
  {
    id: 9,
    pergunta: 'Em um sistema de polias, qual é a vantagem mecânica teórica?',
    alternativas: [
      'Sempre 1',
      'Relacionada ao número de segmentos de corda que suportam a carga',
      'Sempre 2',
      'Depende apenas do diâmetro da polia',
    ],
    correta: 1,
    dificuldade: 'difícil',
    categoria: 'Mecânica',
  },
  {
    id: 10,
    pergunta: 'Qual é o nome do processo de aquecimento controlado de um metal?',
    alternativas: [
      'Temperagem',
      'Recozimento',
      'Forjamento',
      'Laminação',
    ],
    correta: 1,
    dificuldade: 'médio',
    categoria: 'Processos',
  },
];

// Função para obter perguntas para uma partida
export function getQuestionsForMatch(quantidade = 5) {
  const shuffled = [...mockQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, quantidade);
}
