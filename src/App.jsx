import { useState } from 'react'

const navigation = [
  { id: 'inicio', label: 'Início', description: 'Tela inicial' },
  { id: 'ranking', label: 'Ranking', description: 'Top da galera' },
  { id: 'perfil', label: 'Perfil', description: 'Seu histórico' },
]

const recentMatches = [
  { id: 1, opponent: 'Lucas M.', result: 'Vitória', status: 'win', score: '8 x 6', time: 'há 12 min' },
  { id: 2, opponent: 'Rafaela S.', result: 'Empate', status: 'draw', score: '6 x 6', time: 'há 1 h' },
  { id: 3, opponent: 'Pedro A.', result: 'Vitória', status: 'win', score: '9 x 4', time: 'ontem' },
  { id: 4, opponent: 'Marina T.', result: 'Vitória', status: 'win', score: '7 x 6', time: 'ontem' },
  { id: 5, opponent: 'João P.', result: 'Derrota', status: 'loss', score: '4 x 8', time: '2 dias' },
]

const rankingPosition = '3º'

export default function App() {
  const [page, setPage] = useState('inicio')
  const [isSearching, setIsSearching] = useState(false)

  const handleFindMatch = () => {
    setIsSearching(true)
    setPage('inicio')
  }

  const summary = recentMatches.reduce(
    (accumulator, match) => {
      if (match.status === 'win') {
        accumulator.wins += 1
        accumulator.points += 3
      }

      if (match.status === 'draw') {
        accumulator.draws += 1
        accumulator.points += 1
      }

      if (match.status === 'loss') {
        accumulator.losses += 1
      }

      return accumulator
    },
    {
      wins: 0,
      draws: 0,
      losses: 0,
      points: 0,
    },
  )

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">TQ</span>
          <div>
            <strong>Torque Quiz</strong>
            <p>Arena de quiz</p>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </button>
          ))}
        </nav>

        <button type="button" className="profile-pill" onClick={() => setPage('perfil')}>
          <span className="avatar">V</span>
          <span>
            <strong>Vinicius</strong>
            <small>Perfil</small>
          </span>
        </button>
      </aside>

      <main className="content">
        {page === 'inicio' && (
          <Dashboard
            isSearching={isSearching}
            onFindMatch={handleFindMatch}
            summary={summary}
            rankingPosition={rankingPosition}
          />
        )}
        {page === 'ranking' && (
          <PlaceholderPage
            title="Ranking"
            text="Espaço para líderes, pontuação e evolução da turma."
          />
        )}
        {page === 'perfil' && (
          <PlaceholderPage
            title="Perfil"
            text="Resumo do jogador, partidas recentes e estatísticas."
          />
        )}
      </main>
    </div>
  )
}

function Dashboard({ isSearching, onFindMatch, rankingPosition, summary }) {
  return (
    <section className="dashboard-layout">
      <div className="dashboard-hero">
        <h1>Torque Quiz</h1>

        <div className="stats-grid" aria-label="Resumo da conta">
          <article className="stat-card highlight">
            <span className="stat-label">Pontos</span>
            <strong>{summary.points} pts</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Ranking</span>
            <strong>{rankingPosition}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Vitórias</span>
            <strong>{summary.wins}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Empates</span>
            <strong>{summary.draws}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Derrotas</span>
            <strong>{summary.losses}</strong>
          </article>
        </div>

        <div className="hero-actions hero-actions-centered">
          <button type="button" className={`cta-button cta-button-large ${isSearching ? 'searching' : ''}`} onClick={onFindMatch}>
            {isSearching ? 'Buscando...' : 'Buscar partida'}
          </button>
        </div>
      </div>

      <section className="history-card">
        <div className="section-header">
          <h2>Últimas partidas</h2>
        </div>

        <div className="history-list">
          {recentMatches.map((match) => (
            <article key={match.id} className="history-item">
              <div>
                <strong>{match.opponent}</strong>
                <p>{match.time}</p>
              </div>
              <div className="history-meta">
                <span className={`match-result ${match.status}`}>{match.result}</span>
                <strong>{match.score}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

function PlaceholderPage({ title, text }) {
  return (
    <section className="placeholder-card">
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="placeholder-box">Página base pronta para receber conteúdo futuro.</div>
    </section>
  )
}