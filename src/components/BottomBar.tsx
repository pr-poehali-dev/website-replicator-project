
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
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6"
        onClick={handleDownload}
      >
        <Download className="mr-2 h-5 w-5" />
        СКАЧАТЬ
      </Button>
      
      <Button 
        variant="outline" 
        className="border-slate-600 text-white hover:bg-slate-700 px-6 py-6"
        onClick={handleChooseFolder}
      >
        <Folder className="mr-2 h-5 w-5" />
        Выбрать папку
      </Button>
    </div>
  );
};

export default BottomBar;
