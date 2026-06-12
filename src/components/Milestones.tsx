import { 
  Trophy, 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Gamepad2,
  ArrowRight,
  Sparkles,
  Link
} from 'lucide-react';
import { milestones } from '../data/roadmapData';
import { ProgressState } from '../types';
import { useState } from 'react';

interface MilestonesProps {
  progress: ProgressState;
  toggleMilestone: (id: string) => void;
  setMilestoneUrl: (id: string, url: string) => void;
  onNavigateToWeek: (week: number) => void;
}

export default function Milestones({ 
  progress, 
  toggleMilestone, 
  setMilestoneUrl, 
  onNavigateToWeek 
}: MilestonesProps) {
  const [editingUrl, setEditingUrl] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');

  const completedCount = milestones.filter(m => progress.milestonesCompleted[m.id]).length;
  const overallPercentage = Math.round((completedCount / milestones.length) * 100);

  const handleStartEditUrl = (milestoneId: string) => {
    setEditingUrl(milestoneId);
    setUrlInput(progress.milestoneUrls[milestoneId] || '');
  };

  const handleSaveUrl = (milestoneId: string) => {
    setMilestoneUrl(milestoneId, urlInput);
    setEditingUrl(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Trophy size={24} className="text-amber-400" />
          Portfolio Milestones
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Track your major project completions &middot; {completedCount}/{milestones.length} achieved
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Overall Progress</h2>
            <p className="text-sm text-gray-400">Complete all milestones to finish your portfolio</p>
          </div>
          <div className="text-4xl font-bold text-amber-400">{overallPercentage}%</div>
        </div>
        <div className="h-4 bg-gray-700/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {milestones.map((ms) => (
            <div key={ms.id} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                progress.milestonesCompleted[ms.id]
                  ? 'bg-amber-500'
                  : 'bg-gray-700'
              }`}>
                {ms.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Cards */}
      <div className="space-y-4">
        {milestones.map((milestone) => {
          const isCompleted = progress.milestonesCompleted[milestone.id];
          const url = progress.milestoneUrls[milestone.id];
          const isEditing = editingUrl === milestone.id;

          return (
            <div
              key={milestone.id}
              className={`bg-gray-900/50 border rounded-2xl overflow-hidden transition-all ${
                isCompleted 
                  ? 'border-emerald-500/30 shadow-lg shadow-emerald-500/5' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className={`p-6 ${isCompleted ? 'bg-emerald-500/5' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${
                    isCompleted 
                      ? 'bg-emerald-500/20' 
                      : 'bg-gray-800'
                  }`}>
                    {milestone.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
                        WEEK {milestone.week}
                      </span>
                      {isCompleted && (
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <Sparkles size={10} /> COMPLETED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-400">{milestone.description}</p>
                  </div>

                  <button
                    onClick={() => toggleMilestone(milestone.id)}
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                  </button>
                </div>
              </div>

              {/* URL Section */}
              <div className="px-6 pb-4">
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://your-game-url.com"
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-violet-500"
                    />
                    <button
                      onClick={() => handleSaveUrl(milestone.id)}
                      className="px-4 py-2 bg-violet-500 text-white rounded-lg text-sm hover:bg-violet-600 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingUrl(null)}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 flex-wrap">
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-300 text-sm hover:bg-violet-500/20 transition-colors"
                      >
                        <ExternalLink size={14} />
                        View Project
                      </a>
                    ) : null}
                    <button
                      onClick={() => handleStartEditUrl(milestone.id)}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 text-sm hover:text-white hover:border-gray-600 transition-colors"
                    >
                      <Link size={14} />
                      {url ? 'Edit URL' : 'Add URL'}
                    </button>
                  </div>
                )}
              </div>

              <div className="px-6 pb-4">
                <button
                  onClick={() => onNavigateToWeek(milestone.week)}
                  className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Go to Week {milestone.week} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Portfolio Summary */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Gamepad2 size={18} className="text-violet-400" />
          Your Portfolio Will Include
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: '3 Complete 2D Games', icon: '🎮', desc: 'Snake, Platformer, + more' },
            { name: '1 Multiplayer Game', icon: '⚔️', desc: 'Real-time battle arena' },
            { name: '1 3D Browser Game', icon: '🏎️', desc: 'Three.js racing prototype' },
            { name: 'Capstone Project', icon: '🏰', desc: '2D MMORPG Prototype' },
            { name: 'Portfolio Website', icon: '💼', desc: 'Showcase all your work' },
            { name: 'Full-Stack Skills', icon: '🚀', desc: 'Phaser + Spring Boot' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-sm font-medium text-white">{item.name}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
