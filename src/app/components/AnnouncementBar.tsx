export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-[#008080] flex items-center justify-center">
      <p className="text-white text-[13px] font-bold">
        💡 Tu peux toucher jusqu'à 6 335€/an d'aides —{' '}
        <a
          href="https://www.etudiant.gouv.fr/fr/aides-et-bourses"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#3ECFCF] transition-colors"
        >
          Vérifie maintenant →
        </a>
      </p>
    </div>
  );
}
