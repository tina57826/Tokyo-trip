
import React, { useState } from 'react';
import { ITINERARY_DATA } from './constants';
import DaySection from './components/DaySection';
import UtilitiesView from './components/UtilitiesView';
import { Wallet, TentTree, AlignLeft } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'utils'>('itinerary');
  const [expandedDay, setExpandedDay] = useState<string>('day1');

  const toggleDay = (id: string) => {
    setExpandedDay(expandedDay === id ? '' : id);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'utils':
        return <UtilitiesView />;
      case 'itinerary':
      default:
        return (
          <div className="pt-6 pb-24">
            {ITINERARY_DATA.map((day) => (
              <DaySection 
                key={day.id} 
                day={day} 
                isExpanded={expandedDay === day.id} 
                onToggle={() => toggleDay(day.id)} 
              />
            ))}
            <div className="p-10 text-center text-gray-300">
                <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <p className="text-sm font-bold opacity-60">素敵な旅を！</p>
                <p className="text-[10px] mt-1 opacity-40 uppercase tracking-widest">Have a nice trip</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] pb-24 max-w-md mx-auto relative shadow-2xl overflow-hidden font-sans text-japan-black">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-gray-100/50">
        <div>
           <h1 className="text-2xl font-black tracking-tighter text-indigo-japan flex items-center gap-2">
             <span>TOKYO</span>
             <span className="text-japan-red text-sm">●</span>
             <span>FUJI</span>
           </h1>
           <p className="text-[10px] text-gray-400 font-bold tracking-[0.25em] uppercase mt-1">Travel Companion</p>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-sakura/30 flex items-center justify-center text-japan-red shadow-inner-soft border border-white">
            <TentTree size={20} />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="no-scrollbar overflow-y-auto h-full scroll-smooth">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[70%] max-w-sm bg-white/95 backdrop-blur-xl border border-white/50 text-gray-400 rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex items-center justify-between p-2 z-50">
         
         <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-[1.5rem] transition-all duration-300 ${activeTab === 'itinerary' ? 'bg-indigo-50 text-indigo-japan' : 'hover:bg-gray-50 hover:text-gray-600'}`}
         >
            <AlignLeft size={20} strokeWidth={activeTab === 'itinerary' ? 2.5 : 2} />
            <span className="text-[9px] font-bold uppercase tracking-wider">每日行程</span>
         </button>

         <button 
            onClick={() => setActiveTab('utils')}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-[1.5rem] transition-all duration-300 ${activeTab === 'utils' ? 'bg-indigo-50 text-indigo-japan' : 'hover:bg-gray-50 hover:text-gray-600'}`}
         >
            <Wallet size={20} strokeWidth={activeTab === 'utils' ? 2.5 : 2} />
            <span className="text-[9px] font-bold uppercase tracking-wider">工具箱</span>
         </button>
      </nav>

    </div>
  );
};

export default App;
