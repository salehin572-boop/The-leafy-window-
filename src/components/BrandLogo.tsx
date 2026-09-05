interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showText?: boolean;
  textColor?: 'dark' | 'light';
  variant?: 'full' | 'emblem-only';
}

export default function BrandLogo({
  size = 'md',
  className = '',
  showText = false,
  textColor = 'dark',
  variant = 'full',
}: BrandLogoProps) {
  const sizeClasses = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36',
  }[size];

  const emblem = (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105 ${sizeClasses} ${className}`}
      style={{ aspectRatio: '1 / 1' }}
    >
      <img
        src="/logo.svg"
        alt="The Leafy Window Logo"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );

  if (!showText || variant === 'emblem-only') {
    return emblem;
  }

  const isDark = textColor === 'light';

  return (
    <div className="flex items-center gap-3">
      {emblem}
      <div className="flex flex-col">
        <span
          className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${
            isDark ? 'text-[#f9f8f4]' : 'text-[#1a3c34]'
          }`}
        >
          The Leafy{' '}
          <span className="font-script text-[#c56d44] text-2xl sm:text-3xl font-normal tracking-normal -ml-0.5">
            Window
          </span>
        </span>
        <span
          className={`text-[9px] sm:text-[10px] tracking-[2.5px] uppercase font-bold mt-0.5 ${
            isDark ? 'text-[#66bb6a]' : 'text-[#c56d44]'
          }`}
        >
          Grow • Care • Thrive
        </span>
      </div>
    </div>
  );
}
