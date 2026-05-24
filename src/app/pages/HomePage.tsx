import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CTAButton } from '../components/CTAButton';
import { StatsCounter } from '../components/StatsCounter';
import { InteractiveThemeCard } from '../components/InteractiveThemeCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { RotatingPhrases } from '../components/RotatingPhrases';
import { SectionTransition } from '../components/SectionTransition';
import { NewsletterSection } from '../components/NewsletterSection';
import { VideoTestimonials } from '../components/VideoTestimonials';

export function HomePage() {
  const themes = [
    {
      id: 1,
      slug: 'budget',
      title: 'Financement & Budget',
      description: "900€/mois - Comment gérer son budget sans sacrifier l'essentiel",
      icon: '💰',
      gradient: 'from-[#008080] to-[#006666]',
      duration: '~8 min',
      episodeCount: 2
    },
    {
      id: 2,
      slug: 'logement',
      title: 'Logement Étudiant',
      description: 'CROUS, résidences privées, colocation - le guide complet du logement',
      icon: '🏠',
      gradient: 'from-[#E8731A] to-[#CC5F10]',
      duration: '~6 min',
      episodeCount: 2
    },
    {
      id: 3,
      slug: 'sante-mentale',
      title: 'Santé & Bien-être',
      description: "Tu n'as pas à faire semblant que tout va bien - ressources et soutien",
      icon: '💚',
      gradient: 'from-[#3fb950] to-[#2ea043]',
      duration: '~7 min',
      episodeCount: 2
    },
    {
      id: 4,
      slug: 'alimentation',
      title: 'Alimentation',
      description: 'Manger équilibré pour 3€/jour - RU, épiceries solidaires, astuces',
      icon: '🍽️',
      gradient: 'from-[#d29922] to-[#b87d1a]',
      duration: '~5 min',
      episodeCount: 2
    },
    {
      id: 5,
      slug: 'reussite',
      title: 'Études & Réussite',
      description: 'Étudier, bosser, survivre - techniques pour tout concilier',
      icon: '📚',
      gradient: 'from-[#8957e5] to-[#6e40c9]',
      duration: '~9 min',
      episodeCount: 2
    },
    {
      id: 6,
      slug: 'aides',
      title: 'Aides Financières',
      description: '6 335€/an disponibles - découvre toutes les aides accessibles',
      icon: '💸',
      gradient: 'from-[#0969da] to-[#0550ae]',
      duration: '~10 min',
      episodeCount: 2
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBncm91cCUyMGhhcHB5fGVufDF8fHx8MTc3NjQyMTA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Étudiants heureux sur le campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0d1117]/90 to-[#008080]/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-6 px-6 py-3 bg-[#E8731A]/20 backdrop-blur-sm border border-[#E8731A]/40 rounded-full"
          >
            <p className="text-[#E8731A] font-bold tracking-wide animate-bounce">
              ⚡ 1 étudiant sur 2 renonce à se soigner faute d'argent
            </p>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-[72px] font-extrabold mb-8 leading-[1.1]">
            Ta vie étudiante mérite mieux
            <br />
            <span className="bg-gradient-to-r from-[#3ECFCF] to-[#E8731A] bg-clip-text text-transparent">
              que la survie.
            </span>
          </h1>

          <p className="text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            6 thématiques vraies. Des histoires vraies. Des aides concrètes.
          </p>

          <RotatingPhrases />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link to="#themes">
              <CTAButton
                text="→ Explore ta réalité étudiante"
                onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="large"
              />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <StatsCounter value={6} label="thèmes" suffix="" />
            <StatsCounter value={12} label="épisodes" suffix="" />
            <StatsCounter value={2000} label="étudiants informés" suffix="+" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-[#3ECFCF] text-sm font-semibold animate-bounce">
              ↓ 6 thématiques t'attendent
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Intro */}
      <section className="py-24 px-6 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              6 réalités. 6 histoires.{' '}
              <span className="text-[#3ECFCF]">La tienne en fait partie.</span>
            </h2>
            <p className="text-lg text-[#8b949e] max-w-3xl mx-auto">
              Explore dans l'ordre ou saute directement au sujet qui te parle - tout est libre,
              tout est gratuit, aucune inscription requise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Vidéo Témoignages */}
      <VideoTestimonials />

      <SectionTransition text="Découvre les 6 thématiques essentielles →" />

      {/* Section Thématiques */}
      <section id="themes" className="py-24 px-6 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Choisis ton{' '}
              <span className="bg-gradient-to-r from-[#3ECFCF] to-[#E8731A] bg-clip-text text-transparent">
                parcours
              </span>
            </h2>
            <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
              Chaque thématique est un épisode complet avec témoignages, données et solutions concrètes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <Link key={theme.id} to={`/${theme.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <InteractiveThemeCard
                    icon={theme.icon}
                    title={theme.title}
                    description={theme.description}
                    gradient={theme.gradient}
                    duration={theme.duration}
                    episodeCount={theme.episodeCount}
                    onClick={() => {}}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition text="Tu veux rester informé·e ? →" />

      {/* Section Newsletter */}
      <NewsletterSection />
    </div>
  );
}
