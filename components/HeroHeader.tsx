import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroHeaderProps {
  variant?: 'main' | 'secondary' | 'image';
  roundedText?: string;
  icon?: LucideIcon;
  image?: string;
  title: string;
  subtitle: string;
}

const HeroHeader = ({
  variant = 'main',
  roundedText = 'PEER-TO-PEER GAMING',
  icon: Icon,
  image,
  title,
  subtitle
}: HeroHeaderProps) => {
  const getTitleSize = () => {
    if (variant === 'main') {
      return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-5 md:mt-6';
    }
    return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-2.5 md:mt-3';
  };

  const getSubtitleSize = () => {
    return variant === 'main' 
      ? 'text-base sm:text-lg md:text-xl'
      : 'text-sm sm:text-base md:text-lg';
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
      {variant !== 'image' ? (
        <div className="relative mb-2 sm:mb-3">
          <button className="relative px-2 sm:px-3 py-1 sm:py-1.5 border border-transparent rounded-full bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#C6F7E4] before:to-[#74F6C4] before:content-[''] before:-m-[1px] bg-black">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {Icon && <Icon className="text-white w-3 h-3 sm:w-4 sm:h-4" />}
              <h3 className="text-white text-[10px] sm:text-xs whitespace-nowrap">{roundedText}</h3>
            </div>
          </button>
        </div>
      ) : (
        <img
          src={image || "/api/placeholder/100/40"}
          alt="Header image"
          className="h-48 sm:h-64 md:h-80 w-auto"
        />
      )}
      <h1 
        className={`${getTitleSize()} font-bold text-center text-white leading-tight max-w-4xl mx-auto`}
      >
        {title}
      </h1>
      <p 
        className={`${getSubtitleSize()} text-center text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default HeroHeader;