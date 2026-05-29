import { CrousMap } from '../components/CrousMap';

export function CarteCrousPage() {
  return (
    <div className="min-h-screen pt-20 pb-32 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Carte des CROUS en France
          </h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Retrouvez tous les centres régionaux des œuvres universitaires et scolaires
          </p>
        </div>

        {/* Composant CrousMap */}
        <CrousMap />

        {/* Info supplémentaire */}
        <div className="mt-12 bg-[#008080]/10 border border-[#008080] rounded-xl p-6 text-center">
          <p className="text-[#8b949e]">
            <strong className="text-[#3ECFCF]">Total national :</strong> 175 000 logements étudiants et plus de 300 restaurants universitaires répartis sur l'ensemble du territoire.
          </p>
        </div>
      </div>
    </div>
  );
}
