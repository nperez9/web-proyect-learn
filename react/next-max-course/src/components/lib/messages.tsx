import React from 'react';

export interface MessagesProps {
  title: string;
  subtitle?: string;
}

export const Messages: React.FC<MessagesProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full h-screen relative flex justify-center flex-col">
      <h1 className="text-3xl self-center block p-8">{title}</h1>
      {subtitle && <h2 className="text-2xl self-center block">{subtitle}</h2>}
    </div>
  );
};
