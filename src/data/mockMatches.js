// Mock Data - Campeonatos e Partidas

export const mockCampeonatos = [
  {
    id: 1,
    nome: 'Liga Mecânica 2026',
    curso: 'Engenharia Mecânica',
    rodada: 4,
    totalRodadas: 8,
    dataInicio: '2026-01-15',
    dataFim: '2026-06-30',
    ativa: true,
    descricao: 'Campeonato principal de conhecimento em Engenharia Mecânica',
  },
  {
    id: 2,
    nome: 'Quiz de Materiais',
    curso: 'Engenharia Mecânica',
    rodada: 2,
    totalRodadas: 5,
    dataInicio: '2026-03-01',
    dataFim: '2026-05-31',
    ativa: true,
    descricao: 'Desafio especializado sobre ciência dos materiais',
  },
];

export const mockAdversarios = [
  {
    id: 1,
    nome: 'Marina Costa',
    ranking: 1,
    pontos: 2480,
    nível: 'Expert',
    winrate: 0.85,
    avatar: 'M',
  },
  {
    id: 2,
    nome: 'Rafael Mendes',
    ranking: 2,
    pontos: 2320,
    nível: 'Master',
    winrate: 0.78,
    avatar: 'R',
  },
  {
    id: 3,
    nome: 'Luccas Pereira',
    ranking: 3,
    pontos: 2150,
    nível: 'Master',
    winrate: 0.75,
    avatar: 'L',
  },
  {
    id: 4,
    nome: 'Ana Silva',
    ranking: 4,
    pontos: 1980,
    nível: 'Pro',
    winrate: 0.72,
    avatar: 'A',
  },
  {
    id: 5,
    nome: 'Carlos Oliveira',
    ranking: 5,
    pontos: 1850,
    nível: 'Pro',
    winrate: 0.68,
    avatar: 'C',
  },
  {
    id: 6,
    nome: 'Julia Ferreira',
    ranking: 8,
    pontos: 1620,
    nível: 'Intermediário',
    winrate: 0.65,
    avatar: 'J',
  },
];

export const mockRanking = [
  { rank: 1, nome: 'Marina Costa', pontos: 2480, vitorias: 28, empates: 4, derrotas: 8 },
  { rank: 2, nome: 'Rafael Mendes', pontos: 2320, vitorias: 26, empates: 2, derrotas: 12 },
  { rank: 3, nome: 'Luccas Pereira', pontos: 2150, vitorias: 24, empates: 6, derrotas: 10 },
  { rank: 4, nome: 'Ana Silva', pontos: 1980, vitorias: 22, empates: 3, derrotas: 15 },
  { rank: 5, nome: 'Carlos Oliveira', pontos: 1850, vitorias: 20, empates: 5, derrotas: 15 },
  { rank: 6, nome: 'Pedro Santos', pontos: 1750, vitorias: 19, empates: 2, derrotas: 19 },
  { rank: 7, nome: 'Julia Ferreira', pontos: 1620, vitorias: 18, empates: 0, derrotas: 22 },
  { rank: 8, nome: 'João Silva', pontos: 1520, vitorias: 17, empates: 1, derrotas: 22 },
];

// Histórico de partidas mockadas
export const mockHistoricoPartidas = [
  {
    id: 1,
    adversario: 'Rafael Mendes',
    resultado: 'vitoria',
    pontuacaoJogador: 8,
    pontuacaoAdversario: 5,
    data: '2026-05-26',
    rodada: 3,
    campeonato: 'Liga Mecânica 2026',
  },
  {
    id: 2,
    adversario: 'Ana Silva',
    resultado: 'derrota',
    pontuacaoJogador: 6,
    pontuacaoAdversario: 9,
    data: '2026-05-24',
    rodada: 3,
    campeonato: 'Liga Mecânica 2026',
  },
  {
    id: 3,
    adversario: 'Carlos Oliveira',
    resultado: 'empate',
    pontuacaoJogador: 7,
    pontuacaoAdversario: 7,
    data: '2026-05-22',
    rodada: 2,
    campeonato: 'Liga Mecânica 2026',
  },
  {
    id: 4,
    adversario: 'Julia Ferreira',
    resultado: 'vitoria',
    pontuacaoJogador: 9,
    pontuacaoAdversario: 4,
    data: '2026-05-20',
    rodada: 2,
    campeonato: 'Quiz de Materiais',
  },
];

// Dados do jogador atual
export const mockJogadorAtual = {
  id: 'user_1',
  nome: 'João Silva',
  ranking: 8,
  pontos: 1520,
  vitorias: 17,
  empates: 1,
  derrotas: 22,
  nível: 'Intermediário',
  curso: 'Engenharia Mecânica',
};

// Função para pegar um adversário aleatório
export function getAdversarioAleatorio() {
  const adversarios = mockAdversarios.filter(a => a.nome !== mockJogadorAtual.nome);
  return adversarios[Math.floor(Math.random() * adversarios.length)];
}

// Função para obter um campeonato ativo
export function getCampeonatoAtivo() {
  return mockCampeonatos.find(c => c.ativa) || mockCampeonatos[0];
}
