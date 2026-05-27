import { useState, useEffect } from 'react';

export default function MatchResults({
  campeonato,
  jogador,
  adversario,
  resultado,
  scoreJogador,
  scoreAdversario,
  acertosJogador,
  totalPerguntas,
  setPage,
}) {
  const [novoRanking, setNovoRanking] = useState(jogador.ranking);
  const [animarResultado, setAnimarResultado] = useState(false);

  useEffect(() => {
    // Simular alteração no ranking
    setTimeout(() => {
      setAnimarResultado(true);
      // Simular mudança de ranking
      if (resultado.resultado === 'vitoria') {
        setNovoRanking(jogador.ranking - 1); // Subiu no ranking
      } else if (resultado.resultado === 'derrota' && jogador.ranking < 8) {
        setNovoRanking(jogador.ranking + 1); // Desceu no ranking
      }
    }, 500);
  }, [resultado, jogador.ranking]);

  const percentualAcerto = ((acertosJogador / totalPerguntas) * 100).toFixed(0);
  const novospontos = jogador.pontos + resultado.pontos;
  const mudancaRanking = novoRanking - jogador.ranking;

  return (
    <div className={`match-results ${resultado.resultado}`}>
      <div className="results-container">
        {/* RESULTADO PRINCIPAL */}
        <div className={`result-header ${animarResultado ? 'animated' : ''}`}>
          <div className="result-icon">
            {resultado.resultado === 'vitoria' && '🎉'}
            {resultado.resultado === 'derrota' && '😢'}
            {resultado.resultado === 'empate' && '⚖️'}
          </div>
          <h1 className="result-title">{resultado.titulo}</h1>
          <p className="result-message">{resultado.mensagem}</p>
        </div>

        {/* SCORECARD */}
        <div className="results-scorecard">
          <div className="scorecard-section">
            <h3>Resultado Final</h3>
            <div className="final-score">
              <div className="score-you">
                <div className="score-avatar">{jogador.nome.charAt(0)}</div>
                <div className="score-info">
                  <strong>{jogador.nome}</strong>
                  <span className="score-value">{scoreJogador}</span>
                </div>
              </div>
              <div className="score-separator">vs</div>
              <div className="score-opponent">
                <div className="score-avatar">{adversario.nome.charAt(0)}</div>
                <div className="score-info">
                  <strong>{adversario.nome}</strong>
                  <span className="score-value">{scoreAdversario}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scorecard-section">
            <h3>Seu Desempenho</h3>
            <div className="performance-grid">
              <div className="performance-card">
                <div className="perf-icon">✓</div>
                <div className="perf-label">Acertos</div>
                <div className="perf-value">{acertosJogador}</div>
              </div>
              <div className="performance-card">
                <div className="perf-icon">📊</div>
                <div className="perf-label">Taxa de Acerto</div>
                <div className="perf-value">{percentualAcerto}%</div>
              </div>
              <div className="performance-card">
                <div className="perf-icon">⭐</div>
                <div className="perf-label">Pontos Ganhos</div>
                <div className="perf-value highlight">+{resultado.pontos}</div>
              </div>
              <div className="performance-card">
                <div className="perf-icon">🏆</div>
                <div className="perf-label">Tempo</div>
                <div className="perf-value">~2 min</div>
              </div>
            </div>
          </div>

          <div className="scorecard-section">
            <h3>Ranking</h3>
            <div className="ranking-update">
              <div className="ranking-card">
                <div className="rank-label">Posição Anterior</div>
                <div className="rank-display">#{jogador.ranking}</div>
              </div>
              <div className="rank-arrow">
                {mudancaRanking > 0 && <span>↓</span>}
                {mudancaRanking < 0 && <span>↑</span>}
                {mudancaRanking === 0 && <span>→</span>}
              </div>
              <div className="ranking-card new">
                <div className="rank-label">Nova Posição</div>
                <div className="rank-display">#{novoRanking}</div>
              </div>
            </div>
            <div className="ranking-points">
              <span className="old-points">{jogador.pontos} pts</span>
              <span className="arrow">→</span>
              <span className="new-points">{novospontos} pts</span>
            </div>
          </div>
        </div>

        {/* ESTATÍSTICAS COMPARATIVAS */}
        <div className="comparison-section">
          <h3>Comparação</h3>
          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="comp-label">Você Acertou</div>
              <div className="comp-bar">
                <div
                  className="comp-bar-fill you"
                  style={{ width: `${(acertosJogador / totalPerguntas) * 100}%` }}
                ></div>
              </div>
              <div className="comp-value">{acertosJogador}/{totalPerguntas}</div>
            </div>
            <div className="comparison-card">
              <div className="comp-label">{adversario.nome} Acertou</div>
              <div className="comp-bar">
                <div
                  className="comp-bar-fill opponent"
                  style={{ width: `${(scoreAdversario / totalPerguntas) * 100}%` }}
                ></div>
              </div>
              <div className="comp-value">{scoreAdversario}/{totalPerguntas}</div>
            </div>
          </div>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="results-actions">
          <button
            className="btn-secondary"
            onClick={() => setPage('historico')}
          >
            📜 Ver Histórico
          </button>
          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            ⚡ Próxima Partida
          </button>
          <button
            className="btn-tertiary"
            onClick={() => setPage('ranking')}
          >
            🏆 Ver Ranking
          </button>
        </div>

        {/* DICAS DE MELHORA */}
        <div className="improvement-tips">
          <h4>💡 Dicas para Próxima Partida</h4>
          {percentualAcerto < 50 && (
            <p>
              Você acertou menos de 50% das questões. Dedique mais tempo ao estudo antes da
              próxima partida!
            </p>
          )}
          {percentualAcerto >= 50 && percentualAcerto < 80 && (
            <p>
              Ótimo desempenho! Você está progredindo bem. Continue estudando para melhorar
              ainda mais.
            </p>
          )}
          {percentualAcerto >= 80 && (
            <p>
              Excelente trabalho! Você está entre os melhores. Mantenha esse nível e continue
              conquistando vitórias!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
