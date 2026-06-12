import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Code,
  GraduationCap,
  Trophy
} from 'lucide-react';
import { useState } from 'react';
import { weeks, months, phaseColors, phaseBgColors } from '../data/roadmapData';
import { ProgressState } from '../types';
import TaskItem from './TaskItem';

interface RoadmapProps {
  progress: ProgressState;
  onNavigateToWeek: (week: number) => void;
  toggleTask: (taskId: string) => void;
}

export default function Roadmap({ progress, onNavigateToWeek, toggleTask }: RoadmapProps) {
  const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({
    1: true, 2: false, 3: false, 4: false, 5: false, 6: false,
  });

  const toggleMonth = (month: number) => {
    setExpandedMonths(prev => ({ ...prev, [month]: !prev[month] }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Roadmap Timeline</h1>
          <p className="text-gray-400 text-sm mt-1">24-week game development journey</p>
        </div>
        <button
          onClick={() => {
            const allExpanded = Object.values(expandedMonths).every(Boolean);
            const newState: Record<number, boolean> = {};
            [1, 2, 3, 4, 5, 6].forEach(m => { newState[m] = !allExpanded; });
            setExpandedMonths(newState);
          }}
          className="px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
        >
          Toggle All
        </button>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800" />

        {months.map((month) => {
          const monthWeeks = weeks.filter(w => w.month === month.month);
          const monthTasks = monthWeeks.flatMap(w => w.tasks);
          const completedInMonth = monthTasks.filter(t => progress.completedTasks[t.id]).length;
          const percentage = monthTasks.length > 0 ? Math.round((completedInMonth / monthTasks.length) * 100) : 0;
          const isExpanded = expandedMonths[month.month];
          const phase = monthWeeks[0]?.phase || 'Fundamentals';

          return (
            <div key={month.month} className="relative mb-4">
              <button
                onClick={() => toggleMonth(month.month)}
                className="relative z-10 w-full flex items-center gap-4 p-4 bg-gray-900/80 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phaseColors[phase]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-sm">M{month.month}</span>
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="text-white font-semibold">{month.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{month.description}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-gray-400">{monthWeeks.length} weeks</span>
                    <span className="text-xs text-gray-400">{monthTasks.length} tasks</span>
                    <span className="text-xs text-gray-400">{percentage}% complete</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-32 hidden md:block">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${phaseColors[phase]} rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
                </div>
              </button>

              {isExpanded && (
                <div className="ml-6 mt-2 space-y-2 pl-8 border-l-2 border-gray-800">
                  {monthWeeks.map((week) => {
                    const weekCompleted = week.tasks.filter(t => progress.completedTasks[t.id]).length;
                    const weekPercentage = week.tasks.length > 0 ? Math.round((weekCompleted / week.tasks.length) * 100) : 0;
                    const isCurrentWeek = week.weekNumber === progress.currentWeek;

                    return (
                      <div
                        key={week.id}
                        className={`bg-gray-900/60 border rounded-xl p-4 transition-all hover:border-gray-600 ${
                          isCurrentWeek 
                            ? 'border-violet-500/50 shadow-lg shadow-violet-500/10' 
                            : 'border-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                              isCurrentWeek 
                                ? 'bg-violet-500 text-white' 
                                : weekPercentage === 100 
                                  ? 'bg-emerald-500 text-white' 
                                  : 'bg-gray-700 text-gray-300'
                            }`}>
                              {weekPercentage === 100 ? <CheckCircle2 size={16} /> : `W${week.weekNumber}`}
                            </div>
                            <div>
                              <h4 className={`font-medium ${isCurrentWeek ? 'text-violet-300' : 'text-white'}`}>
                                Week {week.weekNumber}: {week.phase}
                              </h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className={`text-xs px-1.5 py-0.5 rounded border ${phaseBgColors[week.phase]}`}>
                                  {week.phase}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock size={10} /> {week.hours}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">{weekCompleted}/{week.tasks.length}</span>
                            <button
                              onClick={() => onNavigateToWeek(week.weekNumber)}
                              className="p-1 text-gray-400 hover:text-violet-400 transition-colors"
                            >
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Learn */}
                        {week.learn.length > 0 && (
                          <div className="mb-2">
                            <div className="flex items-center gap-1.5 mb-1">
                              <BookOpen size={12} className="text-blue-400" />
                              <span className="text-xs font-medium text-blue-400">Learn</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {week.learn.map((topic, i) => (
                                <span key={i} className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Practice */}
                        {week.practice.length > 0 && (
                          <div className="mb-2">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Code size={12} className="text-emerald-400" />
                              <span className="text-xs font-medium text-emerald-400">Practice</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {week.practice.map((item, i) => (
                                <span key={i} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-300 rounded text-xs border border-emerald-500/20">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Courses */}
                        {week.courses.length > 0 && (
                          <div className="mb-2">
                            <div className="flex items-center gap-1.5 mb-1">
                              <GraduationCap size={12} className="text-purple-400" />
                              <span className="text-xs font-medium text-purple-400">Courses</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {week.courses.map((course, i) => (
                                <span key={i} className="px-2 py-0.5 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Milestone badge */}
                        {week.milestone && (
                          <div className="mt-2 mb-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-500/10 text-amber-300 rounded text-xs border border-amber-500/20">
                              <Trophy size={10} /> {week.milestone}
                            </span>
                          </div>
                        )}

                        {/* Tasks */}
                        <div className="space-y-0.5 mt-3 pt-3 border-t border-gray-800">
                          {week.tasks.map((task) => (
                            <TaskItem
                              key={task.id}
                              task={task}
                              isCompleted={!!progress.completedTasks[task.id]}
                              onToggle={toggleTask}
                              size="sm"
                            />
                          ))}
                        </div>

                        <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${phaseColors[week.phase]} rounded-full transition-all duration-500`}
                            style={{ width: `${weekPercentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
