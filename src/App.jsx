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
        {page === 'ranking' && <PlaceholderPage title="🏆 Ranking Geral" description="Veja a posição de todos os competidores." />}
        {page === 'perfil' && <PlaceholderPage title="👤 Meu Perfil" description="Visualize seus dados, conquistas e histórico." />}
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