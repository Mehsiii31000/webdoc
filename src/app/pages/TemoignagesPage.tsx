import { useState } from 'react';

interface TestimonialData {
  id: string; // ID unique pour React (ex: 'samy-1', 'samy-2')
  name: string;
  age: number;
  field: string;
  initial: string;
  quote: string;
  tags: { text: string; colorClass: string }[];
  videoId: string; // UNIQUEMENT l'identifiant YouTube (ex: '1WecfoOej9E')
  color: string;
}

export function TemoignagesPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const testimonials: TestimonialData[] = [
    {
      id: 'samy-1', // ID unique changé
      name: 'Massri',
      age: 19,
      field: 'Alternance BTS SIO 1er Année',
      initial: 'S',
      quote: "Actuellement en BTS SIO en alternance, Samy nous explique les coulisses de son quotidien et comment il concilie théorie et pratique en entreprise",
      videoId: '1WecfoOej9E', // ID extrait de https://youtu.be/1WecfoOej9E
      color: '#008080',
      tags: [
        { text: 'Alternance', colorClass: 'bg-[#3fb950]/20 text-[#3fb950]' }
      ]
    },
    {
      id: 'samy-2', // ID unique changé
      name: 'Samy',
      age: 19,
      field: 'Alternance BTS SIO 1er Année',
      initial: 'M',
      quote: "Partie 2",
      videoId: 'tBeaaH_i3is', // ID extrait de https://youtu.be/tBeaaH_i3is
      color: '#E8731A',
      tags: [
        { text: 'Alternance', colorClass: 'bg-[#3fb950]/20 text-[#3fb950]' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-32 pt-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Témoignages
          </h1>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Découvrez les expériences réelles d'étudiants à Toulouse
          </p>
        </div>

        {/* Liste des Témoignages */}
        <div className="space-y-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#008080] transition-all"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Zone Vidéo ou Placeholder */}
                <div className="relative bg-[#0d1117] aspect-video md:aspect-square flex items-center justify-center group cursor-pointer overflow-hidden">
                  {activeVideoId === item.id ? (
                    <iframe
                      className="w-full h-full absolute inset-0"
                      src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                      title={`Témoignage de ${item.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      className="w-full h-full flex flex-col items-center justify-center relative"
                      onClick={() => setActiveVideoId(item.id)}
                    >
                      {/* Gradients de fond colorés */}
                      <div 
                        className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30" 
                        style={{
                          backgroundImage: `linear-gradient(to bottom right, ${item.color}, #0d1117)`
                        }}
                      />
                      
                      <div className="relative z-10 text-center">
                        <div 
                          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-xl"
                          style={{ backgroundColor: item.color }}
                        >
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-white font-semibold">Témoignage vidéo</p>
                        <p className="text-[#8b949e] text-sm">Cliquez pour lire</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contenu écrit */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.initial}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{item.name}, {item.age} ans</p>
                        <p className="text-[#8b949e] text-sm">{item.field}</p>
                      </div>
                    </div>
                  </div>

                  <blockquote 
                    className="border-l-4 pl-4 mb-4"
                    style={{ borderColor: item.color }}
                  >
                    <p className="text-[#8b949e] italic text-lg leading-relaxed">
                      "{item.quote}"
                    </p>
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.colorClass}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation inspirante */}
        <div className="mt-12 bg-gradient-to-r from-[#008080]/10 to-[#E8731A]/10 border border-[#008080] rounded-xl p-8 text-center">
          <p className="text-2xl md:text-3xl text-white font-semibold italic mb-4">
            "Les études supérieures, c'est difficile. Mais avec les bonnes informations et les bonnes aides, c'est possible."
          </p>
          <p className="text-[#8b949e]">
            Message des étudiants de BUT Informatique - IUT Paul Sabatier
          </p>
        </div>
      </div>
    </div>
  );
}