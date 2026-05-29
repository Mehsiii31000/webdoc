import { useState } from 'react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('⚠ Veuillez entrer votre email');
      return;
    }

    // Simulation d'inscription
    setTimeout(() => {
      setIsSubmitted(true);

      // Confetti animation
      confetti({
        particleCount: 15,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#008080', '#3ECFCF', '#E8731A']
      });

      toast.success(`✓ Parfait ! Tu recevras les prochaines actus sur ${email}`);
    }, 500);
  };

  return (
    <section id="newsletter" className="py-24 px-6 bg-[#111827]">
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reste informé·e des aides{' '}
            <span className="text-[#3ECFCF]">qui te concernent.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Rappels de bourses, nouvelles aides, actus étudiantes - dans ta boîte mail.
            <br />
            Sans spam. Sans compte requis. Désabonnement en 1 clic.
          </p>
        </div>

        <div
          className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 md:p-12"
        >
          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#008080]/20 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Rappel dépôt DSE</p>
                <p className="text-sm text-[#8b949e]">Chaque année (janvier–mai)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#008080]/20 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Alerte nouvelles aides</p>
                <p className="text-sm text-[#8b949e]">Dès qu'elles sont disponibles</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#008080]/20 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Actus vie étudiante</p>
                <p className="text-sm text-[#8b949e]">Sélectionnées et vérifiées</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#008080]/20 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Conseils pratiques</p>
                <p className="text-sm text-[#8b949e]">Budget, logement, santé</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="ton.prenom@univ-tlse3.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:border-[#008080] focus:outline-none transition-colors"
                  required
                />

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full h-12 px-4 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:border-[#008080] focus:outline-none transition-colors"
                >
                  <option value="">Je suis...</option>
                  <option value="boursier">Boursier</option>
                  <option value="non-boursier">Non boursier</option>
                  <option value="alternant">Alternant</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Je m'inscris gratuitement →
              </button>
            </form>
          ) : (
            <div
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-[#3fb950]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#3fb950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white mb-2">
                ✓ Parfait ! Tu recevras les prochaines actus sur {email}
              </p>
              <a
                href="#"
                className="text-[#008080] hover:text-[#3ECFCF] text-sm underline"
              >
                Modifier ou se désinscrire à tout moment ↗
              </a>
            </div>
          )}

          {/* RGPD Notice */}
          <p className="text-xs text-[#8b949e] mt-6 text-center">
            Tes données sont utilisées uniquement pour l'envoi de la newsletter. Aucune revente.
            Aucun partenaire commercial. Conforme RGPD.
          </p>
        </div>
      </div>
    </section>
  );
}
