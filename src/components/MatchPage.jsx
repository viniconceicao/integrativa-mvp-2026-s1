import { useState, useEffect, useCallback } from 'react';
import { useMatch } from '../hooks/useMatch';
import { useTimer } from '../hooks/useTimer';
import { getQuestionsForMatch } from '../data/mockQuestions';
import { getAdversarioAleatorio, getCampeonatoAtivo, mockJogadorAtual } from '../data/mockMatches';
import QuestionCard from './QuestionCard';
import MatchResults from './MatchResults';

export default function MatchPage({ setPage }) {
  const campeonatoData = getCampeonatoAtivo();
  const perguntas = getQuestionsForMatch(10);
  const adversario = getAdversarioAleatorio();

  // Usar o hook de partida
  const match = useMatch(perguntas, adversario);

  if (!match || !adversario || !campeonatoData) {
    return <div className="match-loading">Carregando partida...</div>;
  }

  if (match.estadoPartida === 'preparando') {
    return (
      <MatchPreparation 
        campeonato={campeonatoData}
        jogador={mockJogadorAtual}
        adversario={adversario}
        match={match}
      />
    );
  }

  if (match.estadoPartida === 'em-andamento') {
    return (
      <MatchInProgress
        campeonato={campeonatoData}
        jogador={mockJogadorAtual}
        adversario={adversario}
        match={match}
      />
    );
  }

  if (match.estadoPartida === 'finalizada') {
    return (
      <MatchCompleted
        campeonato={campeonatoData}
        jogador={mockJogadorAtual}
        adversario={adversario}
        match={match}
        setPage={setPage}
      />
    );
  }
}

/* ========== PREPARAÇÃO DA PARTIDA ========== */
function MatchPreparation({ campeonato, jogador, adversario, match }) {
  return (
    <div className="match-preparation">
      <div className="match-prep-container">
        <div className="match-prep-header">
          <h1>{campeonato.nome}</h1>
          <p className="match-prep-rodada">Rodada {campeonato.rodada} de {campeonato.totalRodadas}</p>
        </div>

        <div className="match-prep-content">
          {/* Vs Design */}
          <div className="match-vs-container">
            <div className="match-player">
              <div className="match-avatar">{jogador.nome.charAt(0)}</div>
              <div className="match-player-info">
                <strong>{jogador.nome}</strong>
                <small>#{jogador.ranking}</small>
              </div>
            </div>

            <div className="match-vs-badge">
              <span className="vs-text">VS</span>
              <span className="vs-icon">⚡</span>
            </div>

            <div className="match-player opponent">
              <div className="match-avatar">{adversario.nome.charAt(0)}</div>
              <div className="match-player-info">
                <strong>{adversario.nome}</strong>
                <small>#{adversario.ranking}</small>
              </div>
            </div>
          </div>

          {/* Match Info */}
          <div className="match-info-grid">
            <div className="match-info-card">
              <div className="info-label">Seu Nível</div>
              <div className="info-value">{jogador.nível}</div>
            </div>
            <div className="match-info-card">
              <div className="info-label">Nível Adversário</div>
              <div className="info-value">{adversario.nível}</div>
            </div>
            <div className="match-info-card">
              <div className="info-label">Perguntas</div>
              <div className="info-value">10 Questões</div>
            </div>
            <div className="match-info-card">
              <div className="info-label">Tempo</div>
              <div className="info-value">30s por pergunta</div>
            </div>
          </div>

          {/* Rules */}
          <div className="match-rules">
            <h3>Regras da Partida</h3>
            <ul>
              <li>✓ Responda 10 perguntas</li>
              <li>⏱ 30 segundos por pergunta</li>
              <li>🎯 Acertos ganham pontos</li>
              <li>🏆 Vitória = +3 pontos no ranking</li>
              <li>➖ Empate = +1 ponto</li>
              <li>❌ Derrota = sem pontos</li>
            </ul>
          </div>

          <button className="btn-primary btn-lg" onClick={() => match.iniciarPartida()}>
            ⚡ Iniciar Partida
          </button>
        </div>
      </div>
    </div>
  );
}

/* ========== PARTIDA EM ANDAMENTO ========== */
function MatchInProgress({ campeonato, jogador, adversario, match }) {
  const pergunta = match.pergunta;

  // Se não há pergunta, a partida está finalizando
  if (!pergunta) {
    return <div className="match-loading">Finalizando partida...</div>;
  }

  return (
    <div className="match-in-progress">
      <MatchHeader 
        campeonato={campeonato} 
        perguntaAtual={match.perguntaAtual}
        totalPerguntas={match.totalPerguntas}
        scoreJogador={match.scoreJogador}
        scoreAdversario={match.scoreAdversario}
      />

      <div className="match-container">
        <QuestionCard
          pergunta={pergunta}
          perguntaAtual={match.perguntaAtual}
          totalPerguntas={match.totalPerguntas}
          onResposta={match.responderPergunta}
          feedback={match.feedbackResposta}
          respostaClicada={match.respostaClicada}
          adversarioRespondendo={match.feedbackResposta !== null && !match.feedbackResposta.adversarioRespondeu}
        />

        <MatchSidebar
          jogador={jogador}
          adversario={adversario}
          scoreJogador={match.scoreJogador}
          scoreAdversario={match.scoreAdversario}
          acertosJogador={match.acertosJogador}
          acertosAdversario={match.acertosAdversario}
          perguntaAtual={match.perguntaAtual}
          totalPerguntas={match.totalPerguntas}
          percentualProgresso={match.percentualProgresso}
        />
      </div>
    </div>
  );
}

/* ========== HEADER DA PARTIDA ========== */
function MatchHeader({ campeonato, perguntaAtual, totalPerguntas, scoreJogador, scoreAdversario }) {
  return (
    <div className="match-header">
      <div className="match-header-content">
        <div className="match-title">
          <h2>{campeonato.nome}</h2>
          <span className="match-rodada">Rodada {campeonato.rodada}</span>
        </div>

        <div className="match-score-display">
          <div className="score-item">
            <span className="score-number">{scoreJogador}</span>
          </div>
          <div className="score-vs">vs</div>
          <div className="score-item opponent">
            <span className="score-number">{scoreAdversario}</span>
          </div>
        </div>

        <div className="match-progress">
          <span className="progress-text">Pergunta {perguntaAtual + 1} de {totalPerguntas}</span>
        </div>
      </div>
    </div>
  );
}

/* ========== SIDEBAR COM STATUS ========== */
function MatchSidebar({
  jogador,
  adversario,
  scoreJogador,
  scoreAdversario,
  acertosJogador,
  acertosAdversario,
  perguntaAtual,
  totalPerguntas,
  percentualProgresso,
}) {
  return (
    <aside className="match-sidebar">
      <div className="sidebar-section">
        <h3>Progresso</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${percentualProgresso}%` }}></div>
        </div>
        <div className="progress-stats">
          <span>{perguntaAtual + 1}/{totalPerguntas}</span>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Seu Desempenho</h3>
        <div className="player-stats">
          <div className="stat-item">
            <span className="stat-icon">✓</span>
            <span className="stat-value">{acertosJogador} acertos</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{scoreJogador} pontos</span>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Adversário</h3>
        <div className="player-stats opponent-stats">
          <div className="stat-item">
            <span className="stat-icon">✓</span>
            <span className="stat-value">{acertosAdversario} acertos</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{scoreAdversario} pontos</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ========== PARTIDA FINALIZADA ========== */
function MatchCompleted({ campeonato, jogador, adversario, match, setPage }) {
  const resultado = match.calcularResultado();

  return (
    <MatchResults
      campeonato={campeonato}
      jogador={jogador}
      adversario={adversario}
      resultado={resultado}
      scoreJogador={match.scoreJogador}
      scoreAdversario={match.scoreAdversario}
      acertosJogador={match.acertosJogador}
      totalPerguntas={match.totalPerguntas}
      setPage={setPage}
    />
  );
}
