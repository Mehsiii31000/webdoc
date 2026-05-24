import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function StressQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "À quelle fréquence te sens-tu dépassé·e par tes obligations ?",
      options: [
        { text: "Rarement ou jamais", score: 0 },
        { text: "Parfois", score: 1 },
        { text: "Souvent", score: 2 },
        { text: "Presque toujours", score: 3 }
      ]
    },
    {
      question: "As-tu des difficultés à t'endormir ou à dormir suffisamment ?",
      options: [
        { text: "Non, je dors bien", score: 0 },
        { text: "Occasionnellement", score: 1 },
        { text: "Régulièrement", score: 2 },
        { text: "Presque chaque nuit", score: 3 }
      ]
    },
    {
      question: "Te sens-tu anxieux·se ou stressé·e sans raison apparente ?",
      options: [
        { text: "Jamais", score: 0 },
        { text: "Rarement", score: 1 },
        { text: "Souvent", score: 2 },
        { text: "Très souvent", score: 3 }
      ]
    },
    {
      question: "As-tu perdu l'intérêt pour des activités que tu aimais avant ?",
      options: [
        { text: "Non, pas du tout", score: 0 },
        { text: "Un peu", score: 1 },
        { text: "Oui, pour plusieurs activités", score: 2 },
        { text: "Oui, pour presque tout", score: 3 }
      ]
    },
    {
      question: "Comment évalues-tu ta capacité à te concentrer actuellement ?",
      options: [
        { text: "Très bonne", score: 0 },
        { text: "Correcte", score: 1 },
        { text: "Difficile", score: 2 },
        { text: "Très difficile", score: 3 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  const getResultMessage = () => {
    if (totalScore <= 3) {
      return {
        level: "Niveau de stress faible",
        color: "#3fb950",
        message: "Tu gères bien ton stress actuellement. Continue à prendre soin de toi et maintiens tes bonnes habitudes.",
        resources: [
          "Garde une routine de sommeil régulière",
          "Continue tes activités qui te font du bien",
          "N'hésite pas à demander de l'aide si la situation change"
        ]
      };
    } else if (totalScore <= 7) {
      return {
        level: "Niveau de stress modéré",
        color: "#d29922",
        message: "Tu ressens du stress, ce qui est normal en période d'études. Quelques ajustements pourraient t'aider.",
        resources: [
          "Essaye des techniques de relaxation (respiration, méditation)",
          "Parle-en à un ami ou proche",
          "Consulte le service santé de ton université si besoin"
        ]
      };
    } else {
      return {
        level: "Niveau de stress élevé",
        color: "#f85149",
        message: "Ton niveau de stress semble important. Il est temps de demander de l'aide.",
        resources: [
          "Contacte PSY-Étudiant : 8 séances gratuites (santepsy.etudiant.gouv.fr)",
          "Appelle Nightline France : écoute nocturne par étudiants (nightline.fr)",
          "Fil Santé Jeunes : 0800 235 236 (gratuit, anonyme)",
          "Prends RDV avec le service santé de ton IUT"
        ]
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        🧠 Quiz : Évalue ton niveau de stress
      </h3>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#8b949e]">Question {currentQuestion + 1} / {questions.length}</span>
                <div className="flex gap-2">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-8 h-1 rounded ${
                        index <= currentQuestion ? 'bg-[#008080]' : 'bg-[#30363d]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xl text-white mb-6">{questions[currentQuestion].question}</p>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left px-6 py-4 bg-[#0d1117] hover:bg-[#008080]/20 border border-[#30363d] hover:border-[#008080] rounded-lg text-white transition-all duration-200 hover:scale-[1.02]"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="border-2 rounded-xl p-8 mb-6"
              style={{ borderColor: getResultMessage().color }}
            >
              <h4
                className="text-2xl font-bold mb-4"
                style={{ color: getResultMessage().color }}
              >
                {getResultMessage().level}
              </h4>
              <p className="text-white text-lg mb-6">{getResultMessage().message}</p>

              <h5 className="text-white font-bold mb-3">Ressources et conseils :</h5>
              <ul className="space-y-2">
                {getResultMessage().resources.map((resource, index) => (
                  <li key={index} className="text-[#8b949e] flex gap-3">
                    <span className="text-[#3ECFCF]">•</span>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={resetQuiz}
              className="w-full px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors"
            >
              Refaire le quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
