
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Folder } from 'lucide-react';

const BottomBar: React.FC = () => {
  const handleDownload = () => {
    console.log('Download clicked');
  };

  const handleChooseFolder = () => {
    console.log('Choose folder clicked');
  };

  return (
    <div className="p-4 bg-[#0f0f1a] border-t border-slate-800 flex justify-between items-center z-20">
      <Button 
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 transition-all duration-300 hover:scale-105"
        onClick={handleDownload}
      >
        <Download className="mr-2 h-5 w-5" />
        СКАЧАТЬ
      </Button>
      
      <Button 
        variant="outline" 
        className="border-yellow-400 bg-[#1a1a2a] text-yellow-400 hover:bg-[#252538] hover:text-yellow-300 px-6 py-6 transition-all duration-300 relative overflow-hidden group"
        onClick={handleChooseFolder}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        <Folder className="mr-2 h-5 w-5" />
        <span className="font-medium text-base">Выбрать папку</span>
      </Button>
    </div>
  );
};

export default BottomBar;
