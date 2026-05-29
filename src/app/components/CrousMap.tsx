import { useState } from 'react';

interface CrousInfo {
  name: string;
  ville: string;
  region: string;
  website: string;
  logements: string;
  restosU: string;
}

const crousData: CrousInfo[] = [
  { name: 'CROUS Aix-Marseille', ville: 'Marseille', region: 'PACA', website: 'https://www.crous-aix-marseille.fr', logements: '7 500', restosU: '19' },
  { name: 'CROUS Amiens', ville: 'Amiens', region: 'Hauts-de-France', website: 'https://www.crous-amiens.fr', logements: '4 200', restosU: '8' },
  { name: 'CROUS Antilles-Guyane', ville: 'Fort-de-France', region: 'Martinique', website: 'https://www.crous-antilles-guyane.fr', logements: '3 100', restosU: '7' },
  { name: 'CROUS Besançon', ville: 'Besançon', region: 'Bourgogne-Franche-Comté', website: 'https://www.crous-besancon.fr', logements: '3 800', restosU: '6' },
  { name: 'CROUS Bordeaux', ville: 'Bordeaux', region: 'Nouvelle-Aquitaine', website: 'https://www.crous-bordeaux.fr', logements: '6 500', restosU: '15' },
  { name: 'CROUS Clermont-Ferrand', ville: 'Clermont-Ferrand', region: 'Auvergne-Rhône-Alpes', website: 'https://www.crous-clermont.fr', logements: '4 100', restosU: '9' },
  { name: 'CROUS Corse', ville: 'Ajaccio', region: 'Corse', website: 'https://www.crous-corse.fr', logements: '800', restosU: '3' },
  { name: 'CROUS Créteil', ville: 'Créteil', region: 'Île-de-France', website: 'https://www.crous-creteil.fr', logements: '11 200', restosU: '24' },
  { name: 'CROUS Dijon', ville: 'Dijon', region: 'Bourgogne-Franche-Comté', website: 'https://www.crous-dijon.fr', logements: '3 900', restosU: '7' },
  { name: 'CROUS Grenoble', ville: 'Grenoble', region: 'Auvergne-Rhône-Alpes', website: 'https://www.crous-grenoble.fr', logements: '5 800', restosU: '14' },
  { name: 'CROUS Lille', ville: 'Lille', region: 'Hauts-de-France', website: 'https://www.crous-lille.fr', logements: '7 000', restosU: '18' },
  { name: 'CROUS Limoges', ville: 'Limoges', region: 'Nouvelle-Aquitaine', website: 'https://www.crous-limoges.fr', logements: '2 100', restosU: '5' },
  { name: 'CROUS Lyon', ville: 'Lyon', region: 'Auvergne-Rhône-Alpes', website: 'https://www.crous-lyon.fr', logements: '11 000', restosU: '26' },
  { name: 'CROUS Montpellier', ville: 'Montpellier', region: 'Occitanie', website: 'https://www.crous-montpellier.fr', logements: '5 800', restosU: '13' },
  { name: 'CROUS Nancy-Metz', ville: 'Nancy', region: 'Grand Est', website: 'https://www.crous-nancy-metz.fr', logements: '6 200', restosU: '14' },
  { name: 'CROUS Nantes', ville: 'Nantes', region: 'Pays de la Loire', website: 'https://www.crous-nantes.fr', logements: '6 400', restosU: '16' },
  { name: 'CROUS Nice', ville: 'Nice', region: 'PACA', website: 'https://www.crous-nice.fr', logements: '4 200', restosU: '9' },
  { name: 'CROUS Normandie', ville: 'Rouen', region: 'Normandie', website: 'https://www.crous-normandie.fr', logements: '8 100', restosU: '17' },
  { name: 'CROUS Orléans-Tours', ville: 'Orléans', region: 'Centre-Val de Loire', website: 'https://www.crous-orleans-tours.fr', logements: '5 300', restosU: '11' },
  { name: 'CROUS Paris', ville: 'Paris', region: 'Île-de-France', website: 'https://www.crous-paris.fr', logements: '42 000', restosU: '35' },
  { name: 'CROUS Poitiers', ville: 'Poitiers', region: 'Nouvelle-Aquitaine', website: 'https://www.crous-poitiers.fr', logements: '3 600', restosU: '8' },
  { name: 'CROUS Reims', ville: 'Reims', region: 'Grand Est', website: 'https://www.crous-reims.fr', logements: '3 200', restosU: '7' },
  { name: 'CROUS Rennes', ville: 'Rennes', region: 'Bretagne', website: 'https://www.crous-rennes.fr', logements: '7 300', restosU: '16' },
  { name: 'CROUS La Réunion', ville: 'Saint-Denis', region: 'La Réunion', website: 'https://www.crous-reunion.fr', logements: '2 800', restosU: '6' },
  { name: 'CROUS Strasbourg', ville: 'Strasbourg', region: 'Grand Est', website: 'https://www.crous-strasbourg.fr', logements: '6 100', restosU: '13' },
  { name: 'CROUS Toulouse', ville: 'Toulouse', region: 'Occitanie', website: 'https://www.crous-toulouse.fr', logements: '8 200', restosU: '19' },
  { name: 'CROUS Versailles', ville: 'Versailles', region: 'Île-de-France', website: 'https://www.crous-versailles.fr', logements: '9 800', restosU: '22' },
];

export function CrousMap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = Array.from(new Set(crousData.map(c => c.region))).sort();

  const filteredCrous = crousData.filter(crous =>
    (selectedRegion ? crous.region === selectedRegion : true) &&
    (searchTerm ?
      crous.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crous.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crous.region.toLowerCase().includes(searchTerm.toLowerCase())
      : true)
  );

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
      <h2 className="text-3xl font-bold text-white mb-4">
        Les CROUS en France
      </h2>
      <p className="text-[#8b949e] mb-6">
        {crousData.length} CROUS répartis sur tout le territoire français
      </p>

      {/* Recherche */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher par ville, région ou nom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:border-[#008080] focus:outline-none"
        />
      </div>

      {/* Filtres par région */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
              selectedRegion === null
                ? 'bg-[#008080] text-white'
                : 'bg-[#0d1117] text-[#8b949e] hover:bg-[#30363d]'
            }`}
          >
            Toutes les régions
          </button>
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                selectedRegion === region
                  ? 'bg-[#008080] text-white'
                  : 'bg-[#0d1117] text-[#8b949e] hover:bg-[#30363d]'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des CROUS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCrous.map((crous, index) => (
          <div
            key={index}
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 hover:border-[#008080] transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-2">{crous.name}</h3>
            <div className="space-y-1 text-sm mb-3">
              <p className="text-[#8b949e]">
                <span className="text-[#008080]">📍</span> {crous.ville}
              </p>
              <p className="text-[#8b949e]">
                <span className="text-[#008080]">🏠</span> {crous.logements} logements
              </p>
              <p className="text-[#8b949e]">
                <span className="text-[#008080]">🍽️</span> {crous.restosU} restaurants U
              </p>
            </div>
            <a
              href={crous.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3ECFCF] hover:underline text-sm"
            >
              Visiter le site →
            </a>
          </div>
        ))}
      </div>

      {filteredCrous.length === 0 && (
        <p className="text-[#8b949e] text-center py-8">Aucun CROUS trouvé</p>
      )}

      <div className="mt-6 pt-6 border-t border-[#30363d]">
        <p className="text-sm text-[#8b949e] text-center">
          Total : <span className="text-white font-semibold">175 000 logements</span> et <span className="text-white font-semibold">300+ restaurants universitaires</span> en France
        </p>
      </div>
    </div>
  );
}
