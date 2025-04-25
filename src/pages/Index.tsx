
import { Link } from 'react-router-dom';
import GameItem from '@/components/GameItem';
import Header from '@/components/Header';
import BottomBar from '@/components/BottomBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const games = [
  {
    id: 1,
    title: 'The War Within',
    subtitle: 'Нажмите для настроек',
    image: 'https://i.imgur.com/XhT3Mj0.png'
  },
  {
    id: 2,
    title: 'Mists of Pandaria',
    subtitle: 'Нажмите для настроек',
    image: 'https://i.imgur.com/iMC0MkO.png'
  },
  {
    id: 3,
    title: 'Soon',
    subtitle: 'Нажмите для настроек',
    image: 'https://i.imgur.com/9HJvuQm.png'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a26] bg-opacity-90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/4jKLtPg.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      
      <div className="z-10 flex-1 flex flex-col">
        <Header />
        
        <Tabs defaultValue="games" className="flex-1">
          <TabsList className="bg-transparent border-b border-slate-700 px-8 justify-start gap-8">
            <TabsTrigger value="games" className="text-yellow-400 data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none">
              ВАШИ ИГРЫ
            </TabsTrigger>
            <TabsTrigger value="news" className="text-slate-400 data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none">
              НОВОСТИ
            </TabsTrigger>
            <TabsTrigger value="shop" className="text-slate-400 data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none">
              МАГАЗИН
            </TabsTrigger>
            <TabsTrigger value="forum" className="text-slate-400 data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none">
              ФОРУМ
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="games" className="p-8 flex-1">
            <div className="w-full max-w-md">
              <h2 className="text-xl font-bold text-white mb-6">ВАШИ ИГРЫ</h2>
              <div className="space-y-4">
                {games.map(game => (
                  <GameItem key={game.id} game={game} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="news" className="p-8">
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-6">НОВОСТИ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">Обновление 10.2.6</h3>
                  <p className="text-gray-300 mt-2">Узнайте о последних изменениях и новом контенте в патче 10.2.6</p>
                  <Link to="#" className="text-blue-400 text-sm mt-4 inline-block">Подробнее</Link>
                </div>
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">Специальное событие</h3>
                  <p className="text-gray-300 mt-2">Присоединяйтесь к специальному событию и получите уникальные награды</p>
                  <Link to="#" className="text-blue-400 text-sm mt-4 inline-block">Подробнее</Link>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shop" className="p-8">
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-6">МАГАЗИН</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <div className="h-40 bg-[#252538] rounded mb-4"></div>
                  <h3 className="text-lg font-semibold text-yellow-400">Питомец: Небесный котенок</h3>
                  <p className="text-gray-300 mt-2">500 руб.</p>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded text-sm font-medium">Купить</button>
                </div>
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <div className="h-40 bg-[#252538] rounded mb-4"></div>
                  <h3 className="text-lg font-semibold text-yellow-400">Маунт: Небесный скакун</h3>
                  <p className="text-gray-300 mt-2">1200 руб.</p>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded text-sm font-medium">Купить</button>
                </div>
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <div className="h-40 bg-[#252538] rounded mb-4"></div>
                  <h3 className="text-lg font-semibold text-yellow-400">Трансмогрификация: Набор доспехов</h3>
                  <p className="text-gray-300 mt-2">800 руб.</p>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded text-sm font-medium">Купить</button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="forum" className="p-8">
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-6">ФОРУМ</h2>
              <div className="space-y-4">
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">Общие обсуждения</h3>
                  <p className="text-gray-300 mt-2">Обсуждение игры, патчей и новостей.</p>
                  <div className="flex justify-between mt-3">
                    <span className="text-sm text-gray-400">Тем: 1,234</span>
                    <Link to="#" className="text-blue-400 text-sm">Перейти</Link>
                  </div>
                </div>
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">Поддержка игроков</h3>
                  <p className="text-gray-300 mt-2">Помощь с проблемами и вопросами по игре.</p>
                  <div className="flex justify-between mt-3">
                    <span className="text-sm text-gray-400">Тем: 567</span>
                    <Link to="#" className="text-blue-400 text-sm">Перейти</Link>
                  </div>
                </div>
                <div className="bg-[#1e1e2e] rounded-md p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">Гильдии</h3>
                  <p className="text-gray-300 mt-2">Поиск гильдии и набор участников.</p>
                  <div className="flex justify-between mt-3">
                    <span className="text-sm text-gray-400">Тем: 890</span>
                    <Link to="#" className="text-blue-400 text-sm">Перейти</Link>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <BottomBar />
      </div>
    </div>
  );
};

export default Index;
