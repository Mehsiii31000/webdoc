import { Glossary } from '../components/Glossary';

export function GlossairePage() {
  return (
    <div className="min-h-screen pt-20 pb-32 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Glossaire des termes
          </h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Tous les acronymes et termes essentiels pour comprendre les aides étudiantes
          </p>
        </div>

        {/* Composant Glossary */}
        <Glossary />
      </div>
    </div>
  );
}
