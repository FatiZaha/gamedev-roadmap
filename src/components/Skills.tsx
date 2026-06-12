import { 
  BarChart3, 
  Star, 
  TrendingUp, 
  Zap,
  CheckCircle2,
  Circle
} from 'lucide-react';
import { skills, skillMilestoneMap, skillWeeksMap, weeks } from '../data/roadmapData';
import { ProgressState } from '../types';

interface SkillsProps {
  progress: ProgressState;
  toggleSkillMastered: (skillName: string) => void;
}

// Calculate if a skill should be "in progress" based on completed weeks
function isSkillInProgress(skillName: string, progress: ProgressState): boolean {
  const milestoneId = skillMilestoneMap[skillName];
  if (milestoneId && progress.milestonesCompleted[milestoneId]) {
    return true;
  }
  
  const weekNums = skillWeeksMap[skillName];
  if (weekNums) {
    // Check if all tasks in any of the mapped weeks are completed
    return weekNums.some(weekNum => {
      const week = weeks[weekNum - 1];
      if (!week) return false;
      return week.tasks.every(t => progress.completedTasks[t.id]);
    });
  }
  
  return false;
}

export default function Skills({ progress, toggleSkillMastered }: SkillsProps) {
  // Group skills by category
  const categoryColors: Record<string, string> = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-emerald-500 to-teal-500',
    'Game Dev': 'from-violet-500 to-purple-500',
    Portfolio: 'from-amber-500 to-orange-500',
  };

  const categoryIcons: Record<string, string> = {
    Frontend: '🎨',
    Backend: '⚙️',
    'Game Dev': '🎮',
    Portfolio: '💼',
  };

  const skillCategories = Array.from(new Set(skills.map(s => s.category)));

  const masteredCount = skills.filter(s => 
    progress.masteredSkills[s.name] || isSkillInProgress(s.name, progress)
  ).length;
  const manualMasteredCount = skills.filter(s => progress.masteredSkills[s.name]).length;
  const totalSkills = skills.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <BarChart3 size={24} className="text-violet-400" />
          Skills Progress
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Track your skill development &middot; Mark skills as mastered when you feel confident
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Star size={18} className="text-violet-400" />
            <span className="text-sm text-gray-400">Total Skills</span>
          </div>
          <div className="text-3xl font-bold text-white">{totalSkills}</div>
          <div className="text-xs text-gray-500 mt-1">across 4 categories</div>
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={18} className="text-amber-400" />
            <span className="text-sm text-gray-400">In Progress</span>
          </div>
          <div className="text-3xl font-bold text-white">{masteredCount}</div>
          <div className="text-xs text-gray-500 mt-1">skills unlocked</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-emerald-400" />
            <span className="text-sm text-gray-400">Mastered</span>
          </div>
          <div className="text-3xl font-bold text-white">{manualMasteredCount}</div>
          <div className="text-xs text-gray-500 mt-1">marked as mastered</div>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="space-y-6">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter(s => s.category === category);
          const masteredInCategory = categorySkills.filter(s => 
            progress.masteredSkills[s.name] || isSkillInProgress(s.name, progress)
          ).length;
          const percentage = Math.round((masteredInCategory / categorySkills.length) * 100);

          return (
            <div key={category} className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              {/* Category Header */}
              <div className="p-5 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{categoryIcons[category]}</span>
                    <div>
                      <h2 className="text-lg font-semibold text-white">{category}</h2>
                      <div className="text-sm text-gray-400">{categorySkills.length} skills</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{percentage}%</div>
                    <div className="text-xs text-gray-500">{masteredInCategory}/{categorySkills.length} unlocked</div>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${categoryColors[category]} rounded-full transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* Skills List */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {categorySkills.map((skill) => {
                  const manuallyMastered = progress.masteredSkills[skill.name];
                  const autoUnlocked = isSkillInProgress(skill.name, progress);

                  return (
                    <div
                      key={skill.name}
                      onClick={() => toggleSkillMastered(skill.name)}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all group ${
                        manuallyMastered
                          ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20'
                          : autoUnlocked
                            ? 'bg-amber-500/5 border-amber-500/20 hover:bg-amber-500/10'
                            : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        manuallyMastered
                          ? 'bg-emerald-500 text-white'
                          : autoUnlocked
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-gray-700 text-gray-500'
                      }`}>
                        {manuallyMastered ? (
                          <CheckCircle2 size={16} />
                        ) : autoUnlocked ? (
                          <Zap size={14} />
                        ) : (
                          <Circle size={14} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium ${
                          manuallyMastered ? 'text-emerald-300' : 'text-gray-300'
                        }`}>
                          {skill.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {manuallyMastered ? 'Mastered' : autoUnlocked ? 'Unlocked' : 'Not yet'}
                        </div>
                      </div>
                      {autoUnlocked && !manuallyMastered && (
                        <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                          Ready
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <h3 className="text-sm font-medium text-gray-300 mb-3">How Skills Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gray-700 flex items-center justify-center">
              <Circle size={12} className="text-gray-500" />
            </div>
            <span className="text-gray-400">Not yet started</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Zap size={12} className="text-amber-400" />
            </div>
            <span className="text-gray-400">Auto-unlocked via progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center">
              <CheckCircle2 size={12} className="text-white" />
            </div>
            <span className="text-gray-400">Manually marked as mastered</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
          Click any skill to manually mark it as mastered. Skills auto-unlock when you complete their associated weeks or milestones.
        </div>
      </div>
    </div>
  );
}
