import { useState, useEffect } from 'react';
import { useTimer } from '../hooks/useTimer';

export default function QuestionCard({
  pergunta,
  perguntaAtual,
  totalPerguntas,
  onResposta,
  feedback,
  respostaClicada,
  adversarioRespondendo,
}) {
  const [podeResponder, setPodeResponder] = useState(true);
  const timer = useTimer(30, () => {
    if (!feedback) {
      onResposta(-1); // Timeout = não respondida
    }
  }, podeResponder);

  // Resetar timer e estado quando muda a pergunta
  useEffect(() => {
    if (pergunta) {
      timer.resetarTimer();
      setPodeResponder(true);
    }
  }, [perguntaAtual]);

  // Desabilitar respostas após feedback
  useEffect(() => {
    if (feedback) {
      setPodeResponder(false);
    }
  }, [feedback]);

  if (!pergunta) return null;

  const handleRespostaClick = (index) => {
    if (podeResponder && !feedback) {
      onResposta(index);
    }
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-info">
          <span className="question-number">Pergunta {perguntaAtual + 1} de {totalPerguntas}</span>
          <span className="question-difficulty">Dificuldade: {pergunta.dificuldade}</span>
        </div>
        <div className={`timer-display ${timer.cor}`}>
          <div className={`timer-circle ${timer.cor}`}>
            <svg viewBox="0 0 100 100" className="timer-svg">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${(timer.percentualTempo / 100) * 283} 283`}
                className="timer-arc"
              />
            </svg>
            <div className="timer-text">{timer.tempoRestante}s</div>
          </div>
        </div>
      </div>

      <div className="question-content">
        <h3 className="question-text">{pergunta.pergunta}</h3>

        <div className="alternatives-container">
          {pergunta.alternativas.map((alternativa, index) => (
            <button
              key={index}
              className={`alternative-btn ${
                respostaClicada === index ? 'selected' : ''
              } ${
                feedback && index === feedback.alternativaCorreta ? 'correct' : ''
              } ${
                feedback && respostaClicada === index && !feedback.acertou ? 'incorrect' : ''
              }`}
              onClick={() => handleRespostaClick(index)}
              disabled={!podeResponder || feedback !== null}
            >
              <span className="alternative-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="alternative-text">{alternativa}</span>
              {feedback && index === feedback.alternativaCorreta && (
                <span className="alternative-icon">✓</span>
              )}
              {feedback && respostaClicada === index && !feedback.acertou && (
                <span className="alternative-icon">✕</span>
              )}
            </button>
          ))}
        </div>

        {feedback && (
          <div className={`feedback-container ${feedback.acertou ? 'success' : 'error'}`}>
            <div className="feedback-icon">{feedback.acertou ? '✓' : '✕'}</div>
            <div className="feedback-text">
              {feedback.acertou ? 'Resposta Correta!' : 'Resposta Incorreta'}
            </div>
          </div>
        )}

        {adversarioRespondendo && (
          <div className="adversario-respondendo">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>Adversário respondendo...</span>
          </div>
        )}
      </div>

      <div className="question-category">
        <span className="category-badge">{pergunta.categoria}</span>
      </div>
    </div>
  );
}
