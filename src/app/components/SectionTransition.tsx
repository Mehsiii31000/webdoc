import { motion } from 'motion/react';

interface SectionTransitionProps {
  text: string;
}

export function SectionTransition({ text }: SectionTransitionProps) {
  return (
    <div className="py-8 px-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 6 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <p className="text-xl font-semibold text-[#3ECFCF] flex items-center gap-2 cursor-default">
          {text}
        </p>
      </motion.div>
    </div>
  );
}
