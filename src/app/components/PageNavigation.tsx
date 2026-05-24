import { Link } from 'react-router';
import { motion } from 'motion/react';

interface PageLink {
  title: string;
  href: string;
}

interface PageNavigationProps {
  previousPage?: PageLink;
  nextPage?: PageLink;
}

export function PageNavigation({ previousPage, nextPage }: PageNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
      {previousPage && (
        <Link to={previousPage.href}>
          <motion.div
            whileHover={{ x: -4 }}
            className="flex items-center gap-3 p-6 bg-[#161b22] border border-[#30363d] hover:border-[#008080] rounded-xl transition-all group"
          >
            <svg
              className="w-6 h-6 text-[#8b949e] group-hover:text-[#3ECFCF] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <p className="text-sm text-[#8b949e]">Précédent</p>
              <p className="text-white font-bold group-hover:text-[#3ECFCF] transition-colors">
                {previousPage.title}
              </p>
            </div>
          </motion.div>
        </Link>
      )}

      {nextPage && (
        <Link to={nextPage.href} className={previousPage ? '' : 'md:col-start-2'}>
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center justify-end gap-3 p-6 bg-[#161b22] border border-[#30363d] hover:border-[#008080] rounded-xl transition-all group"
          >
            <div className="text-right">
              <p className="text-sm text-[#8b949e]">Suivant</p>
              <p className="text-white font-bold group-hover:text-[#3ECFCF] transition-colors">
                {nextPage.title}
              </p>
            </div>
            <svg
              className="w-6 h-6 text-[#8b949e] group-hover:text-[#3ECFCF] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </Link>
      )}
    </div>
  );
}
