import { useState } from 'react';

interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'APL',
    definition: 'Aide Personnalisée au Logement. Aide financière versée par la CAF pour réduire le montant du loyer.',
    example: 'Montant variable selon revenus et loyer, jusqu\'à 400€/mois en zone tendue'
  },
  {
    term: 'Bourse CROUS',
    definition: 'Aide financière sur critères sociaux versée par le CROUS aux étudiants dont les revenus familiaux sont faibles.',
    example: '7 échelons de 1 084€ à 6 335€ par an'
  },
  {
    term: 'CAF',
    definition: 'Caisse d\'Allocations Familiales. Organisme qui verse les aides au logement (APL, ALS) et autres prestations sociales.',
  },
  {
    term: 'CROUS',
    definition: 'Centre Régional des Œuvres Universitaires et Scolaires. Gère les bourses, logements étudiants, restaurants universitaires.',
  },
  {
    term: 'DSE',
    definition: 'Dossier Social Étudiant. Dossier unique pour demander une bourse et/ou un logement CROUS. À remplir entre janvier et mai.',
    example: 'Ouverture en janvier, deadline en mai'
  },
  {
    term: 'FSDIE',
    definition: 'Fonds de Solidarité et de Développement des Initiatives Étudiantes. Aide d\'urgence ponctuelle pour étudiants en difficulté.',
    example: 'De 100€ à 2 000€ selon la situation'
  },
  {
    term: 'RU',
    definition: 'Restaurant Universitaire. Resto géré par le CROUS où les étudiants peuvent manger à prix réduit.',
    example: 'Repas à 3,30€ (tarif normal) ou 1€ (boursiers)'
  },
  {
    term: 'SSAS',
    definition: 'Solidarité Santé Accès aux Soins. Dispositif permettant aux étudiants en difficulté d\'accéder aux repas à 1€.',
  },
  {
    term: 'Visale',
    definition: 'Visa pour le Logement et l\'Emploi. Garantie gratuite qui remplace le garant physique pour la location.',
    example: 'Prise en charge jusqu\'à 36 mois de loyers impayés'
  },
  {
    term: 'Échelon',
    definition: 'Niveau de bourse CROUS (de 0bis à 7) calculé selon les revenus des parents et le nombre d\'enfants à charge.',
  },
  {
    term: 'Prime d\'activité',
    definition: 'Aide de la CAF pour les travailleurs aux revenus modestes. Accessible aux étudiants salariés gagnant plus de 910€/mois.',
  },
  {
    term: 'PSY-Étudiant',
    definition: 'Dispositif national offrant 8 séances gratuites de psychologue par an aux étudiants.',
    example: 'Accessible sur santepsy.etudiant.gouv.fr'
  }
];

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredTerms = glossaryTerms
    .filter(item =>
      (selectedLetter ? item.term.charAt(0).toUpperCase() === selectedLetter : true) &&
      (searchTerm ? item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.definition.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    )
    .sort((a, b) => a.term.localeCompare(b.term));

  const letters = Array.from(new Set(glossaryTerms.map(t => t.term.charAt(0).toUpperCase()))).sort();

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
      <h2 className="text-3xl font-bold text-white mb-4">Glossaire</h2>
      <p className="text-[#8b949e] mb-6">
        Les termes essentiels à connaître pour naviguer dans le système d'aides étudiantes
      </p>

      {/* Recherche */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un terme..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:border-[#008080] focus:outline-none"
        />
      </div>

      {/* Filtres alphabétiques */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedLetter(null)}
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
            selectedLetter === null
              ? 'bg-[#008080] text-white'
              : 'bg-[#0d1117] text-[#8b949e] hover:bg-[#30363d]'
          }`}
        >
          Tous
        </button>
        {letters.map(letter => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
              selectedLetter === letter
                ? 'bg-[#008080] text-white'
                : 'bg-[#0d1117] text-[#8b949e] hover:bg-[#30363d]'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Liste des termes */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <p className="text-[#8b949e] text-center py-8">Aucun terme trouvé</p>
        ) : (
          filteredTerms.map((item, index) => (
            <div
              key={index}
              className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.term}</h3>
              <p className="text-[#8b949e] mb-2">{item.definition}</p>
              {item.example && (
                <div className="mt-2 pl-4 border-l-2 border-[#008080]">
                  <p className="text-sm text-[#8b949e]">
                    <span className="text-[#008080] font-semibold">Exemple :</span> {item.example}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
