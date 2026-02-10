
import React from 'react';

interface Props {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionHeading: React.FC<Props> = ({ children, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
        {children}
      </h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full"></div>
    </div>
  );
};
