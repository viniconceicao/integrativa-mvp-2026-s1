import { useState } from 'react'

const navigation = [
  { id: 'inicio', label: 'Início', icon: '🏠' },
  { id: 'ranking', label: 'Ranking', icon: '🏆' },
  { id: 'perfil', label: 'Perfil', icon: '👤' },
]

export default function App() {
  const [page, setPage] = useState('inicio')

  const userData = {
    name: 'João Silva',
    course: 'Engenharia Mecânica',
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">⚙️</span>
          <div className="brand-text">
            <strong>TorqueQuiz</strong>
            <small>Campeonato de Conhecimento</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="profile-pill" onClick={() => setPage('perfil')}>
            <span className="avatar">{userData.name.charAt(0)}</span>
            <div className="profile-info">
              <strong>{userData.name}</strong>
              <small>{userData.course}</small>
            </div>
          </button>
        </div>
      </aside>

      <main className="content">
        {page === 'inicio' && <HomePage />}
        {page === 'ranking' && <RankingPage />}
        {page === 'perfil' && <ProfilePage />}
      </main>
    </div>
  )
}

/* ================================================================ */
/* HOME PAGE - CAMPEONATO UNIVERSITÁRIO */
/* ================================================================ */

function HomePage() {
  const topPlayers = [
    { rank: 1, name: 'Marina Costa', course: 'Engenharia Mecânica', points: 2480, wins: 28 },
    { rank: 2, name: 'Rafael Mendes', course: 'Engenharia Mecânica', points: 2320, wins: 26 },
    { rank: 3, name: 'Luccas Pereira', course: 'Engenharia Mecânica', points: 2150, wins: 24 },
    { rank: 4, name: 'Ana Silva', course: 'Engenharia Mecânica', points: 1980, wins: 22 },
    { rank: 5, name: 'Carlos Oliveira', course: 'Engenharia Mecânica', points: 1850, wins: 20 },
  ]

  const upcomingMatches = [
    { id: 1, player1: 'João', player2: 'Marina', date: 'Hoje às 14:00', status: 'upcoming' },
    { id: 2, player1: 'Rafael', player2: 'Ana', date: 'Amanhã às 16:00', status: 'upcoming' },
    { id: 3, player1: 'Carlos', player2: 'Luccas', date: 'Amanhã às 17:30', status: 'upcoming' },
  ]

  const champions = [
    { name: 'Marina Costa', semester: '2025 S1', points: 2480, medal: '🥇' },
    { name: 'Pedro Mendes', semester: '2024 S2', points: 2350, medal: '🥇' },
    { name: 'Julia Ferreira', semester: '2024 S1', points: 2200, medal: '🥇' },
  ]

  const platformStats = [
    { icon: '👥', value: '145', label: 'Participantes' },
    { icon: '⚡', value: '1,230', label: 'Disputas' },
    { icon: '📊', value: '5,640', label: 'Questões' },
    { icon: '🔥', value: '98%', label: 'Atividade Semanal' },
  ]

  const howItWorks = [
    { step: 1, title: 'Acesse o Campeonato', desc: 'Compete contra outros alunos em disputa de conhecimento' },
    { step: 2, title: 'Responda Perguntas', desc: 'Resolva questões criadas por professores' },
    { step: 3, title: 'Ganhe Pontos', desc: 'Acumule pontos e suba no ranking' },
    { step: 4, title: 'Seja Campeão', desc: 'Domine o campeonato e lidere a classificação' },
  ]

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🚀 Campeonato Ativo 2025 S1</span>
          <h1>Domine o Conhecimento, Vença a Competição</h1>
          <p>Desafie seus colegas em disputas de conhecimento. Acumule pontos, suba no ranking e conquiste o título de campeão da Engenharia Mecânica.</p>
          <div className="hero-cta">
            <button className="btn-primary">⚡ Iniciar Disputa</button>
            <button className="btn-secondary">📖 Ver Regras</button>
          </div>
        </div>
      </section>

      {/* PLATFORM STATS */}
      <section className="stats-grid">
        {platformStats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* TOP RANKING */}
      <section className="section">
        <div className="section-header">
          <h2>🏆 Top 5 Competidores</h2>
          <button className="btn-secondary" style={{ marginLeft: 'auto' }}>Ver Ranking Completo</button>
        </div>
        <div className="ranking-table">
          {topPlayers.map((player) => (
            <div key={player.rank} className={`ranking-item ${player.rank === 1 ? 'gold' : player.rank === 2 ? 'silver' : player.rank === 3 ? 'bronze' : ''}`}>
              <div className="rank-position">
                {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : player.rank}
              </div>
              <div className="rank-info">
                <div className="rank-name">{player.name}</div>
                <div className="rank-course">{player.course}</div>
              </div>
              <div className="rank-stats">
                <div className="rank-points">
                  <div className="rank-points-value">{player.points}</div>
                  <div className="rank-points-label">Pontos</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING MATCHES */}
      <section className="section">
        <div className="section-header">
          <h2>⚡ Próximas Disputas</h2>
          <span className="section-subtitle">{upcomingMatches.length} confrontos agendados</span>
        </div>
        <div className="matches-grid">
          {upcomingMatches.map((match) => (
            <div key={match.id} className="match-card-home">
              <div className="match-header">
                <span className="match-date">{match.date}</span>
                <span className={`match-status ${match.status}`}>Próximo</span>
              </div>
              
              <div className="match-competitors">
                <div className="competitor">
                  <div className="competitor-avatar">{match.player1.charAt(0)}</div>
                  <div className="competitor-info">
                    <div className="competitor-name">{match.player1}</div>
                    <div className="competitor-course">Eng. Mecânica</div>
                  </div>
                </div>
              </div>

              <div className="match-vs">vs</div>

              <div className="match-competitors">
                <div className="competitor">
                  <div className="competitor-avatar">{match.player2.charAt(0)}</div>
                  <div className="competitor-info">
                    <div className="competitor-name">{match.player2}</div>
                    <div className="competitor-course">Eng. Mecânica</div>
                  </div>
                </div>
              </div>

              <button className="match-action">Acompanhar</button>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="section-header">
          <h2>📋 Como Funciona</h2>
        </div>
        <div className="how-works">
          <div className="how-works-grid">
            {howItWorks.map((item) => (
              <div key={item.step} className="how-step">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMPIONS HISTORY */}
      <section className="section">
        <div className="section-header">
          <h2>🏅 Histórico de Campeões</h2>
        </div>
        <div className="champions-list">
          {champions.map((champ, idx) => (
            <div key={idx} className="champion-card">
              <div className="champion-medal">{champ.medal}</div>
              <div className="champion-info">
                <div className="champion-name">{champ.name}</div>
                <div className="champion-meta">Semestre {champ.semester}</div>
              </div>
              <div className="champion-score">
                <div className="champion-score-value">{champ.points}</div>
                <div className="champion-score-label">Pontos</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder">
      <div className="placeholder-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="placeholder-box">Página base pronta para receber conteúdo futuro</div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* RANKING PAGE - CLASSIFICAÇÃO GERAL */
/* ================================================================ */

function RankingPage() {
  const [filterSemester, setFilterSemester] = useState('all')
  const [filterPeriod, setFilterPeriod] = useState('season')

  const allRankings = [
    { rank: 1, name: 'Marina Costa', semester: '5º', wins: 28, draws: 2, losses: 3, points: 2480, streak: 7, movement: 'up', movementAmount: 2 },
    { rank: 2, name: 'Rafael Mendes', semester: '5º', wins: 26, draws: 3, losses: 4, points: 2320, streak: 5, movement: 'up', movementAmount: 1 },
    { rank: 3, name: 'Luccas Pereira', semester: '6º', wins: 24, draws: 2, losses: 5, points: 2150, streak: 4, movement: 'stable', movementAmount: 0 },
    { rank: 4, name: 'Ana Silva', semester: '5º', wins: 22, draws: 4, losses: 7, points: 1980, streak: 3, movement: 'down', movementAmount: 1 },
    { rank: 5, name: 'Carlos Oliveira', semester: '7º', wins: 20, draws: 5, losses: 8, points: 1850, streak: 2, movement: 'stable', movementAmount: 0 },
    { rank: 6, name: 'Beatriz Lima', semester: '5º', wins: 19, draws: 3, losses: 11, points: 1720, streak: 1, movement: 'down', movementAmount: 2 },
    { rank: 7, name: 'Diego Santos', semester: '4º', wins: 18, draws: 6, losses: 9, points: 1640, streak: 6, movement: 'up', movementAmount: 3 },
    { rank: 8, name: 'Fernanda Rocha', semester: '5º', wins: 17, draws: 4, losses: 12, points: 1520, streak: 2, movement: 'stable', movementAmount: 0 },
    { rank: 9, name: 'Gabriel Martins', semester: '6º', wins: 16, draws: 5, losses: 14, points: 1450, streak: 3, movement: 'up', movementAmount: 1 },
    { rank: 10, name: 'Helena Costa', semester: '5º', wins: 15, draws: 7, losses: 13, points: 1380, streak: 1, movement: 'down', movementAmount: 1 },
    { rank: 11, name: 'Igor Souza', semester: '3º', wins: 14, draws: 4, losses: 15, points: 1310, streak: 2, movement: 'stable', movementAmount: 0 },
    { rank: 12, name: 'Julia Ferreira', semester: '5º', wins: 13, draws: 8, losses: 14, points: 1250, streak: 4, movement: 'up', movementAmount: 2 },
    { rank: 13, name: 'Kevin Alves', semester: '2º', wins: 12, draws: 6, losses: 17, points: 1170, streak: 1, movement: 'down', movementAmount: 1 },
    { rank: 14, name: 'Larissa Gomes', semester: '5º', wins: 11, draws: 5, losses: 19, points: 1100, streak: 3, movement: 'up', movementAmount: 1 },
    { rank: 15, name: 'Mateus Ribeiro', semester: '4º', wins: 10, draws: 7, losses: 18, points: 1050, streak: 2, movement: 'stable', movementAmount: 0 },
    { rank: 16, name: 'Nadia Santos', semester: '5º', wins: 9, draws: 6, losses: 20, points: 980, streak: 1, movement: 'down', movementAmount: 2 },
    { rank: 17, name: 'Otavio Dias', semester: '6º', wins: 8, draws: 4, losses: 23, points: 900, streak: 2, movement: 'up', movementAmount: 1 },
    { rank: 18, name: 'Patricia Lima', semester: '5º', wins: 7, draws: 5, losses: 23, points: 830, streak: 1, movement: 'stable', movementAmount: 0 },
    { rank: 19, name: 'Quincy Brown', semester: '3º', wins: 6, draws: 3, losses: 26, points: 750, streak: 0, movement: 'down', movementAmount: 1 },
    { rank: 20, name: 'Ronaldo Silva', semester: '5º', wins: 5, draws: 4, losses: 26, points: 680, streak: 1, movement: 'up', movementAmount: 1 },
  ]

  const quickStats = [
    { icon: '🔥', value: '7', label: 'Maior Sequência', player: 'Marina Costa' },
    { icon: '⚡', value: 'Marina Costa', label: 'Aluno Mais Ativo', player: '33 confrontos' },
    { icon: '📊', value: '96%', label: 'Melhor Taxa', player: 'Rafael Mendes' },
    { icon: '💪', value: '33', label: 'Mais Confrontos', player: 'Marina Costa' },
  ]

  const championsTimeline = [
    { year: 2026, champion: 'Marina Costa', semester: '5º Sem.', points: 2480, matches: 33 },
    { year: 2025, champion: 'Pedro Mendes', semester: 'Anterior', points: 2350, matches: 31 },
    { year: 2024, champion: 'Julia Ferreira', semester: 'Anterior', points: 2200, matches: 29 },
  ]

  const filteredRankings = filterSemester === 'all' ? allRankings : allRankings.filter(r => r.semester === filterSemester + 'º')

  return (
    <div className="ranking-container">
      {/* RANKING HEADER */}
      <section className="ranking-header">
        <h1 className="ranking-header-title">🏆 Ranking Geral</h1>
        <p className="ranking-header-subtitle">Posição de todos os competidores do campeonato universitário</p>
        
        <div className="ranking-info">
          <div className="ranking-info-item">
            <div className="ranking-info-label">Próxima Atualização</div>
            <div className="ranking-info-value">00:00 (6h)</div>
          </div>
          <div className="ranking-info-item">
            <div className="ranking-info-label">Rodada Atual</div>
            <div className="ranking-info-value">8</div>
          </div>
          <div className="ranking-info-item">
            <div className="ranking-info-label">Temporada</div>
            <div className="ranking-info-value">2026 S1</div>
          </div>
          <div className="ranking-info-item">
            <div className="ranking-info-label">Total Participantes</div>
            <div className="ranking-info-value">145</div>
          </div>
        </div>
      </section>

      {/* PODIUM - TOP 3 */}
      <section className="podium-section">
        <h2 className="podium-title">🥇 Podium dos Melhores</h2>
        <div className="podium">
          {[
            { ...allRankings[1], medal: '🥈', class: 'silver' },
            { ...allRankings[0], medal: '🥇', class: 'gold' },
            { ...allRankings[2], medal: '🥉', class: 'bronze' },
          ].map((player, idx) => (
            <div key={idx} className={`podium-item ${player.class}`}>
              <div className="podium-medal">{player.medal}</div>
              <div className="podium-position">#{player.rank}</div>
              <div className="podium-name">{player.name}</div>
              <div className="podium-semester">{player.semester}</div>
              <div className="podium-points">
                <div className="podium-points-label">Pontos</div>
                <div>{player.points}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERS */}
      <section className="filter-section">
        <h3 className="filter-title">🔍 Filtros</h3>
        <div className="filter-controls">
          <div className="filter-group">
            <label className="filter-label">Semestre</label>
            <div className="filter-select">
              <select value={filterSemester} onChange={(e) => setFilterSemester(e.target.value)}>
                <option value="all">Todos os Semestres</option>
                <option value="2">2º Semestre</option>
                <option value="3">3º Semestre</option>
                <option value="4">4º Semestre</option>
                <option value="5">5º Semestre</option>
                <option value="6">6º Semestre</option>
                <option value="7">7º Semestre</option>
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Período</label>
            <div className="filter-buttons">
              <button 
                className={`filter-button ${filterPeriod === '7days' ? 'active' : ''}`}
                onClick={() => setFilterPeriod('7days')}
              >
                Últimos 7 dias
              </button>
              <button 
                className={`filter-button ${filterPeriod === 'season' ? 'active' : ''}`}
                onClick={() => setFilterPeriod('season')}
              >
                Temporada Atual
              </button>
              <button 
                className={`filter-button ${filterPeriod === 'history' ? 'active' : ''}`}
                onClick={() => setFilterPeriod('history')}
              >
                Histórico
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="leaderboard-section">
        <h2 className="leaderboard-title">📊 Ranking Completo</h2>
        <div className="leaderboard-list">
          {filteredRankings.map((player) => (
            <div key={player.rank} className="leaderboard-row">
              <div className={`rank-position-badge ${player.rank <= 3 ? 'top-3 ' + ['', 'gold', 'silver', 'bronze'][player.rank] : ''}`}>
                {player.rank}
              </div>
              <div className="rank-player-info">
                <div className="rank-player-avatar">{player.name.charAt(0)}</div>
                <div className="rank-player-details">
                  <div className="rank-player-name">{player.name}</div>
                  <div className="rank-player-semester">{player.semester} semestre</div>
                </div>
              </div>
              <div className="rank-record">
                <span className="rank-record-win">{player.wins}V</span>
                <span>•</span>
                <span className="rank-record-draw">{player.draws}E</span>
                <span>•</span>
                <span className="rank-record-loss">{player.losses}D</span>
              </div>
              <div className="rank-points">{player.points}</div>
              <div className="rank-streak">
                <div className="rank-streak-count">{player.streak}</div>
                <div className="rank-streak-label">seq.</div>
              </div>
              <div className="rank-movement">
                <div className={`rank-movement-indicator rank-movement-${player.movement}`}>
                  {player.movement === 'up' ? '↑' : player.movement === 'down' ? '↓' : '—'}
                </div>
                <div className="rank-movement-amount">{player.movementAmount}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="quick-stats-section">
        <h2 className="quick-stats-title">⭐ Estatísticas Rápidas</h2>
        <div className="quick-stats-grid">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="quick-stat-card">
              <div className="quick-stat-icon">{stat.icon}</div>
              <div className="quick-stat-value">{stat.value}</div>
              <div className="quick-stat-name">{stat.label}</div>
              <div className="quick-stat-player">{stat.player}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAMPIONS TIMELINE */}
      <section className="champions-timeline-section">
        <h2 className="champions-timeline-title">👑 Histórico de Campeões</h2>
        <div className="champions-timeline">
          {championsTimeline.map((champ, idx) => (
            <div key={idx} className="champion-timeline-item">
              <div className="champion-timeline-year">
                <div className="champion-timeline-year-label">{champ.year}</div>
                <div className="champion-timeline-year-value">{champ.year === 2026 ? '🔴 Atual' : '✓'}</div>
              </div>
              <div className="champion-timeline-info">
                <div className="champion-timeline-name">👑 {champ.champion}</div>
                <div className="champion-timeline-details">
                  <div className="champion-detail-item">
                    <div className="champion-detail-label">Semestre</div>
                    <div className="champion-detail-value">{champ.semester}</div>
                  </div>
                  <div className="champion-detail-item">
                    <div className="champion-detail-label">Pontos</div>
                    <div className="champion-detail-value">{champ.points}</div>
                  </div>
                  <div className="champion-detail-item">
                    <div className="champion-detail-label">Confrontos</div>
                    <div className="champion-detail-value">{champ.matches}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ================================================================ */
/* PROFILE PAGE - PERFIL DO ALUNO */
/* ================================================================ */

function ProfilePage() {
  const profileData = {
    name: 'João Silva',
    course: 'Engenharia Mecânica',
    semester: '5º',
    avatar: 'J',
    ranking: 23,
    points: 1850,
    level: 12,
    levelXp: 2850,
    levelXpMax: 3000,
    status: 'Em Ascensão',
  }

  const stats = [
    { icon: '🎯', value: '24', label: 'Vitórias', detail: '56% aproveitamento' },
    { icon: '🤝', value: '8', label: 'Empates', detail: '18% dos confrontos' },
    { icon: '❌', value: '11', label: 'Derrotas', detail: '26% dos confrontos' },
    { icon: '📊', value: '84%', label: 'Acertos', detail: 'Em respostas' },
    { icon: '⚡', value: '43', label: 'Disputas', detail: 'Total realizadas' },
    { icon: '🔥', value: '7', label: 'Sequência', detail: 'Vitórias em sequência' },
  ]

  const achievements = [
    { id: 1, icon: '🥇', name: 'Primeiro Lugar', unlocked: false },
    { id: 2, icon: '🔟', name: '10 Vitórias', unlocked: true },
    { id: 3, icon: '💯', name: '100 Respostas', unlocked: true },
    { id: 4, icon: '🏆', name: 'Top Semestre', unlocked: false },
    { id: 5, icon: '👑', name: 'Campeão', unlocked: false },
    { id: 6, icon: '⚡', name: '100% Semana', unlocked: true },
  ]

  const recentMatches = [
    { id: 1, result: 'win', opponent: 'Marina Costa', points: 3, date: 'há 2 horas' },
    { id: 2, result: 'win', opponent: 'Rafael Mendes', points: 3, date: 'ontem' },
    { id: 3, result: 'draw', opponent: 'Ana Silva', points: 1, date: 'ontem' },
    { id: 4, result: 'loss', opponent: 'Carlos Oliveira', points: 0, date: '2 dias' },
    { id: 5, result: 'win', opponent: 'Luccas Pereira', points: 3, date: '2 dias' },
  ]

  return (
    <div className="profile-container">
      {/* PROFILE HEADER */}
      <section className="profile-header">
        <div className="profile-hero">
          <div className="profile-avatar-large">{profileData.avatar}</div>
          
          <div className="profile-info">
            <h1 className="profile-name">{profileData.name}</h1>
            <p className="profile-course">{profileData.semester}º semestre • {profileData.course}</p>
            <div className="profile-status-badge">✨ {profileData.status}</div>
          </div>

          <div className="profile-rank-badge">
            <div className="rank-badge-number">#{profileData.ranking}</div>
            <div className="rank-badge-label">Posição</div>
          </div>
        </div>

        {/* STATS HEADER */}
        <div className="profile-stats-header">
          <div className="stat-header-item">
            <div className="stat-header-label">Pontos Totais</div>
            <div className="stat-header-value">{profileData.points}</div>
          </div>
          <div className="stat-header-item">
            <div className="stat-header-label">Nível</div>
            <div className="stat-header-value">{profileData.level}</div>
          </div>
          <div className="stat-header-item">
            <div className="stat-header-label">Ranking Global</div>
            <div className="stat-header-value">#{profileData.ranking}</div>
          </div>
        </div>

        {/* PROGRESS BARS */}
        <div className="profile-progress">
          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-title">Progresso do Nível</span>
              <span className="progress-value">{profileData.levelXp} / {profileData.levelXpMax}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(profileData.levelXp / profileData.levelXpMax) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS GRID */}
      <section className="section">
        <div className="section-header">
          <h2>📈 Estatísticas de Desempenho</h2>
        </div>
        <div className="profile-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="profile-stat-card">
              <div className="stat-card-icon">{stat.icon}</div>
              <div className="stat-card-value">{stat.value}</div>
              <div className="stat-card-label">{stat.label}</div>
              <div className="stat-card-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <div className="section-header">
          <h2>🏅 Conquistas Desbloqueadas</h2>
          <span className="section-subtitle">3 de 6 desbloqueadas</span>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`achievement-badge ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              title={achievement.unlocked ? `Desbloqueado: ${achievement.name}` : `Bloqueado: ${achievement.name}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-name">{achievement.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT MATCHES */}
      <section className="section">
        <div className="section-header">
          <h2>⚡ Histórico Recente</h2>
          <span className="section-subtitle">Últimas 5 disputas</span>
        </div>
        <div className="recent-matches-list">
          {recentMatches.map((match) => (
            <div key={match.id} className="recent-match-item">
              <div className={`match-result-badge ${match.result}`}>
                {match.result === 'win' ? '✓' : match.result === 'draw' ? '=' : '✕'}
              </div>
              <div className="match-info">
                <div className="match-players">
                  {match.result === 'win' ? '🎯 Vitória' : match.result === 'draw' ? '🤝 Empate' : '❌ Derrota'} • {match.opponent}
                </div>
                <div className="match-date">{match.date}</div>
              </div>
              <div className="match-points">+{match.points} pts</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section">
        <div className="comparison-section">
          <div className="section-header">
            <h2>📊 Comparação com a Turma</h2>
          </div>
          
          <div className="comparison-content">
            <div className="comparison-item">
              <div className="comparison-label">Taxa de Aprovação</div>
              <div className="comparison-bars">
                <div className="comparison-bar">
                  <div className="comparison-bar-label">
                    <span className="comparison-bar-name">Seu desempenho</span>
                    <span className="comparison-bar-value">84%</span>
                  </div>
                  <div className="comparison-bar-track">
                    <div className="comparison-bar-fill" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div className="comparison-bar">
                  <div className="comparison-bar-label">
                    <span className="comparison-bar-name">Média da turma</span>
                    <span className="comparison-bar-value">68%</span>
                  </div>
                  <div className="comparison-bar-track">
                    <div className="comparison-bar-fill" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-item">
              <div className="comparison-label">Pontos por Disputa</div>
              <div className="comparison-bars">
                <div className="comparison-bar">
                  <div className="comparison-bar-label">
                    <span className="comparison-bar-name">Sua média</span>
                    <span className="comparison-bar-value">2.3 pts</span>
                  </div>
                  <div className="comparison-bar-track">
                    <div className="comparison-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="comparison-bar">
                  <div className="comparison-bar-label">
                    <span className="comparison-bar-name">Média da turma</span>
                    <span className="comparison-bar-value">1.8 pts</span>
                  </div>
                  <div className="comparison-bar-track">
                    <div className="comparison-bar-fill" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="comparison-insight above">
            <span>✨ Você está acima da média em ambas as métricas!</span>
          </div>
        </div>
      </section>
    </div>
  )
}