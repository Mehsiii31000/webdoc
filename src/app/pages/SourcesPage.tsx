import { motion } from 'motion/react';
import { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageNavigation } from '../components/PageNavigation';

export function SourcesPage() {
  const [sectionsOuvertes, setSectionsOuvertes] = useState<string[]>(['criteres']);

  const toggleSection = (section: string) => {
    setSectionsOuvertes(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sources = {
    budget: [
      {
        auteur: 'OVE - Observatoire de la Vie Étudiante',
        titre: 'Enquête nationale conditions de vie des étudiants 2021',
        date: '2021',
        url: 'https://www.ove-national.education.fr'
      },
      {
        auteur: 'LMDE - La Mutuelle Des Étudiants',
        titre: 'Baromètre santé étudiante 2023',
        date: '2023',
        url: 'https://www.lmde.fr'
      },
      {
        auteur: 'INSEE - Institut National de la Statistique',
        titre: 'Niveau de vie des étudiants en France 2022',
        date: '2022',
        url: 'https://www.insee.fr'
      }
    ],
    logement: [
      {
        auteur: 'CROUS Toulouse',
        titre: 'Chiffres clés des résidences universitaires 2023',
        date: '2023',
        url: 'https://www.crous-toulouse.fr'
      },
      {
        auteur: 'Action Logement',
        titre: 'Rapport annuel Visale - Garantie locative étudiants 2023',
        date: '2023',
        url: 'https://www.visale.fr'
      },
      {
        auteur: 'OVE - Observatoire de la Vie Étudiante',
        titre: 'Conditions de logement des étudiants 2022',
        date: '2022',
        url: 'https://www.ove-national.education.fr'
      }
    ],
    santeMentale: [
      {
        auteur: 'LMDE - La Mutuelle Des Étudiants',
        titre: 'Baromètre santé mentale des étudiants 2023',
        date: '2023',
        url: 'https://www.lmde.fr'
      },
      {
        auteur: 'INSERM - Institut National de la Santé et de la Recherche Médicale',
        titre: 'Santé mentale des jeunes adultes 18-25 ans 2022',
        date: '2022',
        url: 'https://www.inserm.fr'
      },
      {
        auteur: 'OMS / WHO',
        titre: 'Mental Health Atlas 2022',
        date: '2022',
        url: 'https://www.who.int'
      },
      {
        auteur: 'Ministère de l\'Enseignement Supérieur',
        titre: 'PSY-Étudiant - Dispositif d\'accompagnement psychologique',
        date: '2023',
        url: 'https://santepsy.etudiant.gouv.fr'
      }
    ],
    alimentation: [
      {
        auteur: 'IFOP',
        titre: 'Précarité alimentaire étudiante en France 2022',
        date: '2022',
        url: 'https://www.ifop.com'
      },
      {
        auteur: 'Linkee',
        titre: 'Rapport d\'activité épiceries solidaires 2023',
        date: '2023',
        url: 'https://www.linkee.com'
      },
      {
        auteur: 'Fédération Française des Banques Alimentaires',
        titre: 'Aide alimentaire aux étudiants - Bilan 2023',
        date: '2023',
        url: 'https://www.banquealimentaire.org'
      }
    ],
    reussite: [
      {
        auteur: 'APEC - Association Pour l\'Emploi des Cadres',
        titre: 'Insertion professionnelle BUT Informatique 2023',
        date: '2023',
        url: 'https://www.apec.fr'
      },
      {
        auteur: 'Ministère de l\'Enseignement Supérieur et de la Recherche',
        titre: 'Taux de réussite BUT par filière 2022',
        date: '2022',
        url: 'https://www.enseignementsup-recherche.gouv.fr'
      },
      {
        auteur: 'OVE - Observatoire de la Vie Étudiante',
        titre: 'Travail salarié et études : impact sur la réussite 2021',
        date: '2021',
        url: 'https://www.ove-national.education.fr'
      }
    ],
    aides: [
      {
        auteur: 'Service étudiant.gouv - Ministère ESRI',
        titre: 'Portail des aides financières aux étudiants',
        date: '2024',
        url: 'https://www.etudiant.gouv.fr'
      },
      {
        auteur: 'MesServices.etudiant - CNOUS',
        titre: 'Dossier Social Étudiant et bourses CROUS',
        date: '2024',
        url: 'https://www.messervices.etudiant.gouv.fr'
      },
      {
        auteur: 'CAF - Caisse d\'Allocations Familiales',
        titre: 'Simulateur APL et aides au logement',
        date: '2024',
        url: 'https://www.caf.fr'
      },
      {
        auteur: 'Action Logement',
        titre: 'Garantie Visale pour étudiants',
        date: '2024',
        url: 'https://www.visale.fr'
      }
    ]
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Sources' }]} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos sources -{' '}
            <span className="bg-gradient-to-r from-[#3ECFCF] to-[#E8731A] bg-clip-text text-transparent">
              des informations vérifiées et fiables
            </span>
          </h1>
          <p className="text-xl text-[#8b949e] max-w-3xl">
            Conformément aux critères de validation des sources de l'Université Paul Sabatier,
            chaque information de ce site est issue d'une source identifiée, datée et vérifiable.
          </p>
        </motion.div>

        {/* Critères de validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <button
            onClick={() => toggleSection('criteres')}
            className="w-full bg-[#008080]/10 border-2 border-[#008080] rounded-xl p-6 text-left hover:bg-[#008080]/20 transition-all"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#3ECFCF]">
                📋 Critères de validation des sources
              </h2>
              <span className="text-[#3ECFCF] text-2xl">
                {sectionsOuvertes.includes('criteres') ? '▾' : '▸'}
              </span>
            </div>
          </button>

          {sectionsOuvertes.includes('criteres') && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 bg-[#161b22] border border-[#30363d] rounded-xl p-8"
            >
              <p className="text-[#8b949e] mb-6">
                Ce webdocumentaire respecte les 6 critères de fiabilité des sources définis par
                ABCdoc - Université Paul Sabatier Toulouse III :
              </p>

              <div className="space-y-6">
                {[
                  {
                    numero: 1,
                    critere: 'Expertise et notoriété de l\'auteur ou de l\'organisation',
                    explication: 'Organismes publics reconnus (INSEE, INSERM, Ministères), mutuelles étudiantes, observatoires nationaux.'
                  },
                  {
                    numero: 2,
                    critere: 'Institution clairement nommée avec coordonnées précisées',
                    explication: 'Chaque source indique l\'organisme émetteur, son domaine d\'expertise et un lien direct vers le site officiel.'
                  },
                  {
                    numero: 3,
                    critere: 'Date de publication et de dernière mise à jour',
                    explication: 'Toutes les sources sont datées entre 2021 et 2024, avec priorité aux données les plus récentes.'
                  },
                  {
                    numero: 4,
                    critere: 'Objectif informatif (non commercial, non militant)',
                    explication: 'Sources gouvernementales, universitaires ou associatives reconnues d\'utilité publique uniquement.'
                  },
                  {
                    numero: 5,
                    critere: 'Qualité rédactionnelle (syntaxe et orthographe correctes)',
                    explication: 'Publications officielles relues et validées par les organismes émetteurs.'
                  },
                  {
                    numero: 6,
                    critere: 'Sources croisées (recoupement sur plusieurs sites indépendants)',
                    explication: 'Chaque thématique s\'appuie sur au moins 3 sources différentes pour garantir la fiabilité des informations.'
                  }
                ].map(item => (
                  <div key={item.numero} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#008080] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.numero}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">{item.critere}</p>
                      <p className="text-[#8b949e] text-sm">{item.explication}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#30363d]">
                <p className="text-sm text-[#8b949e]">
                  <strong className="text-white">Source du cadre méthodologique :</strong>{' '}
                  ABCdoc - Bibliothèque Universitaire Paul Sabatier Toulouse III
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Table des matières */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">📑 Table des matières</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'budget', label: 'Budget & Financement' },
              { id: 'logement', label: 'Logement Étudiant' },
              { id: 'santeMentale', label: 'Santé Mentale' },
              { id: 'alimentation', label: 'Alimentation' },
              { id: 'reussite', label: 'Études & Réussite' },
              { id: 'aides', label: 'Aides Financières' }
            ].map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[#3ECFCF] hover:text-[#008080] transition-colors font-semibold"
              >
                → {section.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Sources par thématique */}
        <div className="space-y-12">
          {/* Budget */}
          <motion.section
            id="budget"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">💰 Budget & Financement</h2>
            <div className="space-y-4">
              {sources.budget.map((source, index) => (
                <div key={index} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#008080] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#3ECFCF] font-bold mb-1">{source.auteur}</p>
                      <p className="text-white mb-2">{source.titre}</p>
                      <p className="text-[#8b949e] text-sm">Date : {source.date}</p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Consulter ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Logement */}
          <motion.section
            id="logement"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">🏠 Logement Étudiant</h2>
            <div className="space-y-4">
              {sources.logement.map((source, index) => (
                <div key={index} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#008080] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#3ECFCF] font-bold mb-1">{source.auteur}</p>
                      <p className="text-white mb-2">{source.titre}</p>
                      <p className="text-[#8b949e] text-sm">Date : {source.date}</p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Consulter ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Santé Mentale */}
          <motion.section
            id="santeMentale"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">💚 Santé Mentale</h2>
            <div className="space-y-4">
              {sources.santeMentale.map((source, index) => (
                <div key={index} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#008080] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#3ECFCF] font-bold mb-1">{source.auteur}</p>
                      <p className="text-white mb-2">{source.titre}</p>
                      <p className="text-[#8b949e] text-sm">Date : {source.date}</p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Consulter ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Alimentation */}
          <motion.section
            id="alimentation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">🍽️ Alimentation</h2>
            <div className="space-y-4">
              {sources.alimentation.map((source, index) => (
                <div key={index} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#008080] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#3ECFCF] font-bold mb-1">{source.auteur}</p>
                      <p className="text-white mb-2">{source.titre}</p>
                      <p className="text-[#8b949e] text-sm">Date : {source.date}</p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Consulter ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Réussite */}
          <motion.section
            id="reussite"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">📚 Études & Réussite</h2>
            <div className="space-y-4">
              {sources.reussite.map((source, index) => (
                <div key={index} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#008080] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#3ECFCF] font-bold mb-1">{source.auteur}</p>
                      <p className="text-white mb-2">{source.titre}</p>
                      <p className="text-[#8b949e] text-sm">Date : {source.date}</p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Consulter ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Aides */}
          <motion.section
            id="aides"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">💸 Aides Financières</h2>
            <div className="space-y-4">
              {sources.aides.map((source, index) => (
                <div key={index} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#008080] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[#3ECFCF] font-bold mb-1">{source.auteur}</p>
                      <p className="text-white mb-2">{source.titre}</p>
                      <p className="text-[#8b949e] text-sm">Date : {source.date}</p>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Consulter ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#d29922]/10 border border-[#d29922] rounded-xl p-8"
        >
          <p className="text-white text-center">
            <strong className="text-[#d29922]">⚠️ Avertissement académique</strong>
            <br />
            <span className="text-[#8b949e]">
              Ce site est un projet académique étudiant réalisé dans le cadre du module R2.13 (Expression et Communication)
              du BUT Informatique 1re année à l'IUT Paul Sabatier de Toulouse.
              <br />
              En cas de doute sur une information, consultez systématiquement les sites officiels référencés ci-dessus.
            </span>
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="mt-16">
          <PageNavigation
            previousPage={{ title: 'Aides Financières', href: '/aides' }}
            nextPage={{ title: 'Accueil', href: '/' }}
          />
        </div>
      </div>
    </div>
  );
}
