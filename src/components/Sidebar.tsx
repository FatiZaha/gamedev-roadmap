import { 
  LayoutDashboard, 
  Map, 
  Calendar, 
  Trophy, 
  BarChart3, 
  Clock,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { ViewType } from '../types';
import { useState } from 'react';

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  currentWeek: number;
  onResetProgress: () => void;
}

const navItems: { view: ViewType; label: string; icon: React.ReactNode }[] = [
  { view: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { view: 'roadmap', label: 'Roadmap', icon: <Map size={20} /> },
  { view: 'week', label: 'Current Week', icon: <Calendar size={20} /> },
  { view: 'milestones', label: 'Milestones', icon: <Trophy size={20} /> },
  { view: 'schedule', label: 'Schedule', icon: <Clock size={20} /> },
  { view: 'skills', label: 'Skills', icon: <BarChart3 size={20} /> },
  { view: 'resources', label: 'Resources', icon: <BookOpen size={20} /> },
];

export default function Sidebar({ currentView, setCurrentView, currentWeek, onResetProgress }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`hidden lg:flex fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 z-50 transition-all duration-300 flex-col ${collapsed ? 'w-16' : 'w-64'}`}>
      
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <Gamepad2 size={22} className="text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-lg font-bold text-white truncate">GameDev</h1>
            <p className="text-xs text-gray-400">6-Month Roadmap</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setCurrentView(item.view)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
              currentView === item.view
                ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400 border border-violet-500/30'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <span className={`flex-shrink-0 ${currentView === item.view ? 'text-violet-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
              {item.icon}
            </span>
            {!collapsed && (
              <span className="text-sm font-medium truncate">{item.label}</span>
            )}
            {!collapsed && item.view === 'week' && (
              <span className="ml-auto text-xs bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full">
                W{currentWeek}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Week Progress */}
      {!collapsed && (
        <div className="px-4 pt-4 pb-2 border-t border-gray-800">
          <div className="text-xs text-gray-500 mb-2">Current Progress</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(currentWeek / 24) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 font-mono">{currentWeek}/24</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Week {currentWeek} of 24</div>
        </div>
      )}

      {/* Reset Button */}
      <div className={`p-3 ${!collapsed ? 'px-4 pb-4' : ''}`}>
        <button
          onClick={onResetProgress}
          title="Reset all progress"
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-rose-500/20 bg-rose-500/5 text-rose-400 hover:bg-rose-500/15 hover:border-rose-500/40 hover:text-rose-300 transition-all duration-200 group ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <RotateCcw size={16} className="flex-shrink-0 group-hover:rotate-[-45deg] transition-transform duration-300" />
          {!collapsed && (
            <span className="text-sm font-medium">Reset Progress</span>
          )}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-3 border-t border-gray-800 text-gray-500 hover:text-white transition-colors flex items-center justify-center"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </aside>
  );
}
