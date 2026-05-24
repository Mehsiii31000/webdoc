import { ReactNode } from 'react';

interface CTAButtonProps {
  variant?: 'primary' | 'outlined' | 'ghost';
  children: ReactNode;
  onClick?: () => void;
  badge?: string;
}

export function CTAButton({ variant = 'primary', children, onClick, badge }: CTAButtonProps) {
  const baseStyles = 'px-8 py-3 uppercase tracking-wider transition-all duration-300 relative';

  const variantStyles = {
    primary: 'bg-[#1A7A8A] text-white hover:bg-[#1d8a9c] hover:shadow-lg',
    outlined: 'border-2 border-[#3ECFCF] text-[#3ECFCF] hover:bg-[#3ECFCF] hover:text-[#1B2A3B]',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${variant === 'primary' && !badge ? '' : ''}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 bg-[#E63946] text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
          {badge}
        </span>
      )}
      {children}
    </button>
  );
}