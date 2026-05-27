import { useState, useCallback } from 'react';

// Hook para gerenciar o estado de uma partida completa
export function useMatch(perguntas, adversario) {
  const [estadoPartida, setEstadoPartida] = useState('preparando'); // preparando, em-andamento, finalizada
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState([]); // Respostas do jogador
  const [respostasAdversario, setRespostasAdversario] = useState([]);
  const [tempoDecorrido, setTempoDecorrido] = useState(0);

  // Scores
  const [scoreJogador, setScoreJogador] = useState(0);
  const [scoreAdversario, setScoreAdversario] = useState(0);

  // Acertos
  const [acertosJogador, setAcertosJogador] = useState(0);
  const [acertosAdversario, setAcertosAdversario] = useState(0);

  // Feedback da resposta
  const [feedbackResposta, setFeedbackResposta] = useState(null);
  const [respostaClicada, setRespostaClicada] = useState(null);

  const totalPerguntas = perguntas.length;
  const percentualProgresso = ((perguntaAtual + 1) / totalPerguntas) * 100;

  // Iniciar partida
  const iniciarPartida = useCallback(() => {
    setEstadoPartida('em-andamento');
  }, []);

  // Finalizar partida (sem dependências)
  const finalizarPartida = useCallback(() => {
    setEstadoPartida('finalizada');
    setTempoDecorrido(Math.floor(Date.now() / 1000));
  }, []);

  // Avançar para próxima pergunta (depende de finalizarPartida e estado)
  const proximaPergunta = useCallback(() => {
    if (perguntaAtual + 1 < totalPerguntas) {
      setPerguntaAtual((prev) => prev + 1);
      setFeedbackResposta(null);
      setRespostaClicada(null);
    } else {
      finalizarPartida();
    }
  }, [perguntaAtual, totalPerguntas, finalizarPartida]);

  // Simular resposta do adversário (depende de proximaPergunta)
  const simularRespostaAdversario = useCallback((pergunta) => {
    const chance = Math.random();
    const nivelAdversario = Math.random();
    const acertou = chance < 0.65 + nivelAdversario * 0.15; // 65-80% de acerto

    setRespostasAdversario((prev) => [
      ...prev,
      { perguntaId: pergunta.id, acertou },
    ]);

    if (acertou) {
      setScoreAdversario((prev) => prev + 1);
      setAcertosAdversario((prev) => prev + 1);
    }

    // Avançar para próxima pergunta após delay
    setTimeout(() => {
      proximaPergunta();
    }, 1200);
  }, [proximaPergunta]);

  // Responder pergunta (depende de simularRespostaAdversario)
  const responderPergunta = useCallback(
    (indiceAlternativa) => {
      if (feedbackResposta) return; // Evitar múltiplas respostas

      setRespostaClicada(indiceAlternativa);
      const pergunta = perguntas[perguntaAtual];
      const acertou = indiceAlternativa === pergunta.correta;

      setFeedbackResposta({
        acertou,
        alternativaCorreta: pergunta.correta,
        resposta: indiceAlternativa,
      });

      // Atualizar respostas do jogador
      setRespostas((prev) => [...prev, { perguntaId: pergunta.id, resposta: indiceAlternativa, acertou }]);

      if (acertou) {
        setScoreJogador((prev) => prev + 1);
        setAcertosJogador((prev) => prev + 1);
      }

      // Simular resposta do adversário (após 800ms)
      setTimeout(() => {
        simularRespostaAdversario(pergunta);
      }, 800);
    },
    [perguntaAtual, perguntas, feedbackResposta, simularRespostaAdversario]
  );

  // Calcular resultado final
  const calcularResultado = useCallback(() => {
    if (scoreJogador > scoreAdversario) {
      return {
        resultado: 'vitoria',
        titulo: 'Você Venceu! 🎉',
        pontos: 3,
        mensagem: `Parabéns! Você venceu por ${scoreJogador} a ${scoreAdversario}`,
      };
    } else if (scoreJogador < scoreAdversario) {
      return {
        resultado: 'derrota',
        titulo: 'Você Perdeu 😢',
        pontos: 0,
        mensagem: `Não desista! Próximo será melhor`,
      };
    } else {
      return {
        resultado: 'empate',
        titulo: 'Empate!',
        pontos: 1,
        mensagem: `Que confronto emocionante!`,
      };
    }
  }, [scoreJogador, scoreAdversario]);

  return {
    // Estado
    estadoPartida,
    perguntaAtual,
    pergunta: perguntas[perguntaAtual],
    totalPerguntas,
    percentualProgresso,

    // Scores
    scoreJogador,
    scoreAdversario,
    acertosJogador,
    acertosAdversario,

    // Feedback
    feedbackResposta,
    respostaClicada,

    // Ações
    iniciarPartida,
    responderPergunta,
    proximaPergunta,
    finalizarPartida,
    calcularResultado,

    // Respostas
    respostas,
    respostasAdversario,
  };
}
