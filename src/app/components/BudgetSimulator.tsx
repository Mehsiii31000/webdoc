import { useState } from 'react';

export function BudgetSimulator() {
  const [monthlyIncome, setMonthlyIncome] = useState(500);
  const [isScholarship, setIsScholarship] = useState(false);
  const [hasJob, setHasJob] = useState(false);

  const calculateAids = () => {
    let totalAids = 0;
    if (isScholarship) totalAids += 528; // Moyenne bourse
    if (monthlyIncome < 600) totalAids += 200; // APL estimé
    if (hasJob) totalAids += 100; // Aides complémentaires
    return totalAids;
  };

  const estimatedAids = calculateAids();
  const totalBudget = monthlyIncome + estimatedAids;

  return (
    <div className="bg-gradient-to-br from-[#1B2A3B] to-[#0F1419] rounded-3xl p-8 shadow-2xl">
      <h3 className="text-white text-2xl font-bold mb-6 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        💰 Simulateur d'aides
      </h3>

      <div className="space-y-6">
        {/* Income Slider */}
        <div>
          <label className="text-white font-semibold mb-2 block">
            Revenus mensuels : <span className="text-[#3ECFCF]">{monthlyIncome}€</span>
          </label>
          <input
            type="range"
            min="0"
            max="1500"
            step="50"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#008080]"
          />
        </div>

        {/* Toggles */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isScholarship}
              onChange={(e) => setIsScholarship(e.target.checked)}
              className="w-5 h-5 rounded accent-[#008080]"
            />
            <span className="text-white">Je suis boursier(ère)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={hasJob}
              onChange={(e) => setHasJob(e.target.checked)}
              className="w-5 h-5 rounded accent-[#008080]"
            />
            <span className="text-white">J'ai un job étudiant</span>
          </label>
        </div>

        {/* Results */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-[#E0E0E0] text-sm mb-1">Aides estimées</p>
              <p className="text-[#3ECFCF] text-3xl font-bold">{estimatedAids}€</p>
            </div>
            <div className="bg-gradient-to-br from-[#008080] to-[#3ECFCF] rounded-xl p-4">
              <p className="text-white text-sm mb-1">Budget total</p>
              <p className="text-white text-3xl font-bold">{totalBudget}€</p>
            </div>
          </div>

          <button className="w-full mt-6 bg-[#E8731A] hover:bg-[#ff8a2e] text-white py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105">
            Découvrir mes aides personnalisées
          </button>
        </div>
      </div>
    </div>
  );
}
