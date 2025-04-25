
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold text-yellow-400 animate-fade-in relative">
        World of Warcraft Luntares
        <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
      </h1>
    </header>
  );
};

export default Header;
