
import React from 'react';
import { Card } from '@/components/ui/card';

interface Game {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface GameItemProps {
  game: Game;
}

const GameItem: React.FC<GameItemProps> = ({ game }) => {
  return (
    <Card className="flex items-center space-x-4 p-4 bg-[#1e1e2e] border-transparent hover:bg-[#252538] transition-colors cursor-pointer">
      <img 
        src={game.image} 
        alt={game.title} 
        className="w-10 h-10 object-cover rounded"
      />
      <div>
        <h3 className="text-white font-medium">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.subtitle}</p>
      </div>
    </Card>
  );
};

export default GameItem;
