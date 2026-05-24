import { motion } from 'motion/react';

export function VideoTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Samy Massri',
      age: 19,
      field: 'BTS SIO',
      city: 'Toulouse',
      videoUrl: '/interview-samy.mp4',
      thumbnail: '/samy.png',
    },
    {
      id: 2,
      name: 'jsp',
      age: 'jsp',
      field: 'jsp',
      city: 'jsp',
      videoUrl: '/interview-jsp.mp4',
      thumbnail: '/jsp.png',
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ils ont vécu ce que tu vis.{' '}
            <span className="text-[#3ECFCF]">Ils en parlent.</span>
          </h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            Des témoignages authentiques d'étudiants qui ont traversé les mêmes difficultés
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-[#161b22] rounded-2xl overflow-hidden border border-[#30363d] hover:border-[#008080] transition-all duration-300"
            >
              {/* Video Container */}
<div className="relative aspect-video bg-black">
  <video
    src={testimonial.videoUrl}
    poster={testimonial.thumbnail}
    controls
    className="w-full h-full object-cover"
  />
</div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {testimonial.name}, {testimonial.age} ans
                </h3>
                <p className="text-[#8b949e]">
                  {testimonial.field} • {testimonial.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
