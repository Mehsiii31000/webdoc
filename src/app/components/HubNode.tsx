export function HubNode() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[#1A7A8A]/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="relative w-32 h-32 bg-[#1B2A3B] rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(62,207,207,0.4)]"
      >
        <span
          className="text-white uppercase tracking-wider"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '16px' }}
        >
          ACCUEIL
        </span>
      </div>
    </div>
  );
}
