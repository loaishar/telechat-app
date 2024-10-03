import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className }) => (
  <div className={`flex items-center justify-center bg-gray-200 rounded-full overflow-hidden ${className}`}>
    {children}
  </div>
);

export const AvatarImage: React.FC<{ src: string }> = ({ src }) => (
  <img src={src} alt="Avatar" className="w-full h-full object-cover" />
);

export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-sm text-gray-600">{children}</span>
);