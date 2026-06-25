import { useEffect, useState } from 'react';
import { ViewType } from './types';
import { useProgress } from './hooks/useProgress';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Roadmap from './components/Roadmap';
import WeekView from './components/WeekView';
import Milestones from './components/Milestones';
import Schedule from './components/Schedule';
import Skills from './components/Skills';
import ResourcesView from './components/ResourcesView';
import { Menu, X, RotateCcw, AlertTriangle } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const {
    progress,
    toggleTask,
    logHours,
    toggleMilestone,
    setMilestoneUrl,
    setCurrentWeek,
    toggleScheduleDay,
    resetSchedule,
    toggleSkillMastered,
    resetAllProgress,
  } = useProgress();

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const closeMobileMenuOnDesktop = () => {
      if (desktopQuery.matches) {
        setMobileMenuOpen(false);
      }
    };

    closeMobileMenuOnDesktop();
    desktopQuery.addEventListener('change', closeMobileMenuOnDesktop);

    return () => {
      desktopQuery.removeEventListener('change', closeMobileMenuOnDesktop);
    };
  }, []);

  const handleNavigateToWeek = (week: number) => {
    setCurrentWeek(week);
    setCurrentView('week');
    setMobileMenuOpen(false);
  };

  const handleNavigateToMilestones = () => {
    setCurrentView('milestones');
    setMobileMenuOpen(false);
  };

  const handleSetCurrentView = (view: ViewType) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const handleResetClick = () => {
    setMobileMenuOpen(false);
    setShowResetConfirm(true);
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setShowResetConfirm(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard
            progress={progress}
            onNavigateToWeek={handleNavigateToWeek}
            onNavigateToMilestones={handleNavigateToMilestones}
            toggleTask={toggleTask}
          />
        );
      case 'roadmap':
        return (
          <Roadmap
            progress={progress}
            onNavigateToWeek={handleNavigateToWeek}
            toggleTask={toggleTask}
          />
        );
      case 'week':
        return (
          <WeekView
            progress={progress}
            setCurrentWeek={setCurrentWeek}
            toggleTask={toggleTask}
            logHours={logHours}
          />
        );
      case 'milestones':
        return (
          <Milestones
            progress={progress}
            toggleMilestone={toggleMilestone}
            setMilestoneUrl={setMilestoneUrl}
            onNavigateToWeek={handleNavigateToWeek}
          />
        );
      case 'schedule':
        return (
          <Schedule
            progress={progress}
            toggleScheduleDay={toggleScheduleDay}
            resetSchedule={resetSchedule}
          />
        );
      case 'skills':
        return (
          <Skills 
            progress={progress} 
            toggleSkillMastered={toggleSkillMastered}
          />
        );
      case 'resources':
        return <ResourcesView />;
      default:
        return null;
    }
  };

  const viewLabels: Record<ViewType, { label: string; icon: React.ReactNode }> = {
    dashboard: { label: 'Dashboard', icon: '📊' },
    roadmap: { label: 'Roadmap', icon: '🗺️' },
    week: { label: 'Current Week', icon: '📅' },
    milestones: { label: 'Milestones', icon: '🏆' },
    schedule: { label: 'Schedule', icon: '⏰' },
    skills: { label: 'Skills', icon: '📈' },
    resources: { label: 'Resources', icon: '📚' },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          currentView={currentView}
          setCurrentView={handleSetCurrentView}
          currentWeek={progress.currentWeek}
          onResetProgress={handleResetClick}
        />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">G</span>
            </div>
            <span className="font-bold text-white">GameDev Roadmap</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-gray-950/95 backdrop-blur-xl pt-16 overflow-y-auto">
          <div className="p-4 space-y-2 pb-24">
            {(Object.keys(viewLabels) as ViewType[]).map((view) => (
              <button
                key={view}
                onClick={() => handleSetCurrentView(view)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  currentView === view
                    ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span>{viewLabels[view].icon}</span>
                <span className="font-medium">{viewLabels[view].label}</span>
                {view === 'week' && (
                  <span className="ml-auto text-xs bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full">
                    Week {progress.currentWeek}
                  </span>
                )}
              </button>
            ))}
            
            {/* Reset Button for Mobile */}
            <div className="pt-4 mt-4 border-t border-gray-800">
              <button
                onClick={handleResetClick}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all border border-rose-500/20"
              >
                <RotateCcw size={16} />
                <span className="font-medium">Reset Progress</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowResetConfirm(false)}
          />
          <div className="relative w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-rose-500 to-orange-500" />
            
            <div className="flex items-start justify-between p-6 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} className="text-rose-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Reset All Progress?</h2>
                  <p className="text-xs text-gray-400 mt-0.5">This cannot be undone</p>
                </div>
              </div>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-800"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 pb-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                All your progress will be permanently deleted, including:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  '✅  All completed tasks',
                  '⏱️  All logged hours',
                  '🏆  All milestone completions & URLs',
                  '📅  Weekly schedule check-ins',
                  '⭐  Mastered skills',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 rounded-lg px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 px-6 pb-6">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-700 text-gray-300 text-sm font-medium hover:bg-gray-800 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2"
              >
                <RotateCcw size={15} />
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-4 md:p-6 lg:p-8 pt-20 lg:pt-8 max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;
