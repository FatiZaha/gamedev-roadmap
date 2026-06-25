import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  Target, 
  TrendingUp,
  Calendar,
  ArrowRight,
  Zap,
  BookOpen,
  Code,
  GraduationCap
} from 'lucide-react';
import { weeks, months, milestones, phaseColors, resources, phaseResources } from '../data/roadmapData';
import { ProgressState } from '../types';
import TaskItem from './TaskItem';

interface DashboardProps {
  progress: ProgressState;
  onNavigateToWeek: (week: number) => void;
  onNavigateToMilestones: () => void;
  toggleTask: (taskId: string) => void;
}

export default function Dashboard({ 
  progress, 
  onNavigateToWeek, 
  onNavigateToMilestones,
  toggleTask,
}: DashboardProps) {
  const currentWeekData = weeks[progress.currentWeek - 1];
  const totalTasks = weeks.flatMap(w => w.tasks).length;
  const completedTasks = Object.values(progress.completedTasks).filter(Boolean).length;
  const totalHours = Object.values(progress.hoursLogged).reduce((sum, h) => sum + h, 0);
  const completedMilestones = milestones.filter(m => progress.milestonesCompleted[m.id]).length;
  
  // Calculate month progress
  const monthProgress = months.map(month => {
    const monthWeeks = weeks.filter(w => w.month === month.month);
    const monthTasks = monthWeeks.flatMap(w => w.tasks);
    const completed = monthTasks.filter(t => progress.completedTasks[t.id]).length;
    return {
      ...month,
      total: monthTasks.length,
      completed,
      percentage: monthTasks.length > 0 ? Math.round((completed / monthTasks.length) * 100) : 0,
    };
  });

  // Upcoming tasks
  const upcomingTasks = currentWeekData.tasks
    .filter(t => !progress.completedTasks[t.id])
    .slice(0, 4);

  const scheduleDays = Object.values(progress.weeklySchedule).filter(Boolean).length;

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 break-words">
              Game Dev Roadmap Tracker
            </h1>
            <p className="text-sm sm:text-base text-gray-400 break-words">
              Week {progress.currentWeek} of 24 &middot; Month {currentWeekData.month}: {months[currentWeekData.month - 1].name}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-violet-500/20 rounded-xl border border-violet-500/30">
            <Zap size={18} className="text-violet-400" />
            <span className="text-violet-300 font-medium">{scheduleDays}/7 days this week</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          icon={<CheckCircle2 size={20} />}
          label="Tasks Done"
          value={`${completedTasks}/${totalTasks}`}
          color="emerald"
          percentage={totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}
        />
        <StatCard
          icon={<Clock size={20} />}
          label="Hours Logged"
          value={`${totalHours}h`}
          color="blue"
          subtitle={`of ~${24 * 15}h target`}
        />
        <StatCard
          icon={<Trophy size={20} />}
          label="Milestones"
          value={`${completedMilestones}/5`}
          color="amber"
          subtitle="projects completed"
        />
        <StatCard
          icon={<Target size={20} />}
          label="Week"
          value={`${progress.currentWeek}/24`}
          color="violet"
          percentage={Math.round((progress.currentWeek / 24) * 100)}
        />
      </div>

      {/* Month Progress */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <TrendingUp size={18} className="text-violet-400" />
            Monthly Progress
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monthProgress.map((mp, idx) => (
            <div
              key={mp.month}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-sm font-medium text-gray-300 min-w-0 break-words">M{mp.month}: {mp.name}</span>
                <span className="text-sm font-mono text-gray-400">{mp.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${phaseColors[weeks[idx * 4]?.phase || 'Fundamentals']} rounded-full transition-all duration-500`}
                  style={{ width: `${mp.percentage}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">{mp.completed}/{mp.total} tasks</div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Week & Upcoming Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Current Week Focus */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-white flex items-start gap-2 min-w-0">
              <Calendar size={18} className="text-violet-400 flex-shrink-0 mt-0.5" />
              <span className="min-w-0 break-words">Week {currentWeekData.weekNumber}: {currentWeekData.phase}</span>
            </h2>
            <button
              onClick={() => onNavigateToWeek(progress.currentWeek)}
              className="text-violet-400 hover:text-violet-300 transition-colors flex-shrink-0"
              aria-label={`Open week ${progress.currentWeek}`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Learn Section */}
          {currentWeekData.learn.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={14} className="text-blue-400" />
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Learn</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentWeekData.learn.map((topic, i) => (
                  <span key={i} className="px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs border border-blue-500/20 max-w-full break-words">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Practice Section */}
          {currentWeekData.practice.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Code size={14} className="text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Practice</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentWeekData.practice.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs border border-emerald-500/20 max-w-full break-words">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Courses */}
          {currentWeekData.courses.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={14} className="text-purple-400" />
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Courses</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentWeekData.courses.map((course, i) => (
                  <span key={i} className="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs border border-purple-500/20 max-w-full break-words">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-gray-800 text-sm text-gray-400">
            Target: <span className="text-gray-300 font-medium">{currentWeekData.hours}</span>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6 min-w-0">
          <h2 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target size={18} className="text-emerald-400 flex-shrink-0" />
            Upcoming Tasks
          </h2>
          {upcomingTasks.length > 0 ? (
            <div className="space-y-1">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-violet-500/30 transition-colors"
                >
                  <TaskItem
                    task={task}
                    isCompleted={!!progress.completedTasks[task.id]}
                    onToggle={toggleTask}
                  />
                </div>
              ))}
              {currentWeekData.tasks.filter(t => !progress.completedTasks[t.id]).length > 4 && (
                <button
                  onClick={() => onNavigateToWeek(progress.currentWeek)}
                  className="w-full mt-2 py-2 text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center justify-center gap-1"
                >
                  View all tasks <ArrowRight size={14} />
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CheckCircle2 size={32} className="mx-auto mb-2 text-emerald-500/50" />
              <p className="text-sm">All tasks completed for this week!</p>
            </div>
          )}
        </div>
      </div>

      {/* Milestones Overview */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2 min-w-0">
            <Trophy size={18} className="text-amber-400 flex-shrink-0" />
            Portfolio Milestones
          </h2>
          <button
            onClick={onNavigateToMilestones}
            className="text-violet-400 hover:text-violet-300 text-sm transition-colors flex items-center gap-1 flex-shrink-0"
          >
            View All <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-5 gap-3">
          {milestones.map((ms) => (
            <div
              key={ms.id}
              className={`p-3 sm:p-4 rounded-xl border text-center transition-all min-w-0 ${
                progress.milestonesCompleted[ms.id]
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-gray-800/50 border-gray-700/50'
              }`}
            >
              <div className="text-3xl mb-2">{ms.icon}</div>
              <div className={`text-xs mb-1 ${
                progress.milestonesCompleted[ms.id] ? 'text-emerald-400' : 'text-gray-500'
              }`}>
                Week {ms.week}
              </div>
              <p className="text-xs text-gray-300 font-medium break-words">{ms.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-start gap-2 min-w-0">
          <Zap size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
          <span className="min-w-0 break-words">Resources for {currentWeekData.phase}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {phaseResources[currentWeekData.phase]?.map((resourceTitle, i) => {
            const resource = resources.find(r => r.title === resourceTitle);
            if (!resource) return null;
            return (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-yellow-500/30 hover:bg-gray-800 transition-all group"
              >
                <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 flex-shrink-0">
                  {resource.type === 'course' && <BookOpen size={14} />}
                  {resource.type === 'docs' && <Code size={14} />}
                  {resource.type === 'tutorial' && <GraduationCap size={14} />}
                  {resource.type === 'video' && <Target size={14} />}
                  {resource.type === 'tool' && <Zap size={14} />}
                  {resource.type === 'book' && <BookOpen size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white group-hover:text-yellow-300 transition-colors break-words">
                    {resource.title}
                  </div>
                  <div className="text-xs text-gray-500 capitalize">{resource.type}</div>
                </div>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-yellow-400 transition-colors flex-shrink-0 mt-0.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ 
  icon, 
  label, 
  value, 
  color, 
  percentage, 
  subtitle 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  color: string;
  percentage?: number;
  subtitle?: string;
}) {
  const colorClasses: Record<string, string> = {
    emerald: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
    blue: 'from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-400',
    amber: 'from-amber-500/10 to-amber-500/5 border-amber-500/20 text-amber-400',
    violet: 'from-violet-500/10 to-violet-500/5 border-violet-500/20 text-violet-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={colorClasses[color].split(' ').pop()}>{icon}</span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {percentage !== undefined && (
        <div className="mt-2 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-current transition-all duration-500"
            style={{ width: `${percentage}%`, opacity: 0.7 }}
          />
        </div>
      )}
      {subtitle && (
        <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
      )}
    </div>
  );
}
