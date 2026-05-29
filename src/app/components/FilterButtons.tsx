interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  const filters = [
    { id: 'all', label: 'Toutes les aides', icon: '🎯' },
    { id: 'boursier', label: 'Boursier', icon: '🎓' },
    { id: 'non-boursier', label: 'Non boursier', icon: '💼' },
    { id: 'alternance', label: 'Alternance', icon: '⚡' },
    { id: 'difficulte', label: 'En difficulté', icon: '🆘' }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2 ${
            activeFilter === filter.id
              ? 'bg-[#008080] text-white shadow-lg scale-105'
              : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span>{filter.icon}</span>
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
