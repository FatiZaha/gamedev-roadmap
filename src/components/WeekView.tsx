import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Code, 
  GraduationCap, 
  Plus,
  Minus,
  Target,
  Trophy,
  ExternalLink
} from 'lucide-react';
import { weeks, months, phaseColors, phaseBgColors, resources, phaseResources } from '../data/roadmapData';
import { ProgressState } from '../types';
import { useState } from 'react';
import TaskItem from './TaskItem';

interface WeekViewProps {
  progress: ProgressState;
  setCurrentWeek: (week: number) => void;
  toggleTask: (taskId: string) => void;
  logHours: (week: number, hours: number) => void;
}

export default function WeekView({ progress, setCurrentWeek, toggleTask, logHours }: WeekViewProps) {
  const week = weeks[progress.currentWeek - 1];
  const [hoursToAdd, setHoursToAdd] = useState(1);
  
  const completedTasks = week.tasks.filter(t => progress.completedTasks[t.id]).length;
  const totalTasks = week.tasks.length;
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const hoursLogged = progress.hoursLogged[week.weekNumber] || 0;

  const goToPrevWeek = () => {
    if (progress.currentWeek > 1) setCurrentWeek(progress.currentWeek - 1);
  };

  const goToNextWeek = () => {
    if (progress.currentWeek < 24) setCurrentWeek(progress.currentWeek + 1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button
          onClick={goToPrevWeek}
          disabled={progress.currentWeek <= 1}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} /> Previous
        </button>
        <div className="text-center flex-1 min-w-0">
          <div className="text-sm text-gray-400">Month {week.month}: {months[week.month - 1].name}</div>
          <h1 className="text-2xl font-bold text-white">Week {week.weekNumber}: {week.phase}</h1>
          <div className={`inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full border ${phaseBgColors[week.phase]}`}>
            {week.phase} Phase
          </div>
        </div>
        <button
          onClick={goToNextWeek}
          disabled={progress.currentWeek >= 24}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>

      {/* Milestone Banner */}
      {week.milestone && (
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Trophy size={18} className="text-amber-400" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wide mb-0.5">Milestone Week</div>
            <div className="text-sm text-white font-medium">{week.milestone}</div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Task Progress */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target size={18} className="text-violet-400" />
            <span className="text-sm text-gray-400">Task Progress</span>
          </div>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-3xl font-bold text-white">{percentage}%</span>
            <span className="text-sm text-gray-500 mb-1">{completedTasks}/{totalTasks} tasks</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${phaseColors[week.phase]} rounded-full transition-all duration-500`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Hours */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} className="text-blue-400" />
            <span className="text-sm text-gray-400">Hours Logged</span>
          </div>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-3xl font-bold text-white">{hoursLogged}h</span>
            <span className="text-sm text-gray-500 mb-1">target: {week.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => logHours(week.weekNumber, -hoursToAdd)}
              className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 flex items-center justify-center transition-colors"
            >
              <Minus size={14} />
            </button>
            <select
              value={hoursToAdd}
              onChange={(e) => setHoursToAdd(Number(e.target.value))}
              className="flex-1 h-8 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm text-center focus:outline-none focus:border-violet-500"
            >
              {[0.5, 1, 1.5, 2, 2.5, 3, 4].map(h => (
                <option key={h} value={h}>{h}h</option>
              ))}
            </select>
            <button
              onClick={() => logHours(week.weekNumber, hoursToAdd)}
              className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-400 hover:bg-violet-500/30 flex items-center justify-center transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <span className="text-sm text-gray-400">Status</span>
          </div>
          <div className="text-3xl font-bold text-white mb-3">
            {percentage === 100 ? 'Complete!' : percentage >= 50 ? 'In Progress' : 'Getting Started'}
          </div>
          <button
            onClick={() => {
              const allCompleted = week.tasks.every(t => progress.completedTasks[t.id]);
              week.tasks.forEach(t => {
                if (allCompleted) {
                  if (progress.completedTasks[t.id]) toggleTask(t.id);
                } else {
                  if (!progress.completedTasks[t.id]) toggleTask(t.id);
                }
              });
            }}
            className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
          >
            {percentage === 100 ? 'Reset All Tasks' : 'Mark All Complete'}
          </button>
        </div>
      </div>

      {/* Learn Section */}
      {week.learn.length > 0 && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
              <BookOpen size={16} />
            </span>
            <h3 className="text-white font-medium">What to Learn</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {week.learn.map((topic, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-lg text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Practice Section */}
      {week.practice.length > 0 && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Code size={16} />
            </span>
            <h3 className="text-white font-medium">What to Build / Practice</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {week.practice.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-lg text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Courses Section */}
      {week.courses.length > 0 && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
              <GraduationCap size={16} />
            </span>
            <h3 className="text-white font-medium">Courses / Resources</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {week.courses.map((course, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-lg text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Resources Section */}
      {phaseResources[week.phase] && phaseResources[week.phase].length > 0 && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400">
              <BookOpen size={16} />
            </span>
            <h3 className="text-white font-medium">Learning Resources</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {phaseResources[week.phase].map((resourceTitle, i) => {
              const resource = resources.find(r => r.title === resourceTitle);
              if (!resource) return null;
              return (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-yellow-500/30 hover:bg-gray-800 transition-all group"
                >
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 flex-shrink-0">
                    {resource.type === 'course' && <GraduationCap size={14} />}
                    {resource.type === 'docs' && <BookOpen size={14} />}
                    {resource.type === 'tutorial' && <BookOpen size={14} />}
                    {resource.type === 'video' && <GraduationCap size={14} />}
                    {resource.type === 'tool' && <BookOpen size={14} />}
                    {resource.type === 'book' && <BookOpen size={14} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white group-hover:text-yellow-300 transition-colors truncate">
                      {resource.title}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">{resource.type}</div>
                  </div>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-yellow-400 transition-colors flex-shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Tasks Checklist */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
              <CheckCircle2 size={16} />
            </span>
            <h3 className="text-white font-medium">Tasks Checklist</h3>
          </div>
          <span className="text-sm text-gray-400">{completedTasks}/{totalTasks} complete</span>
        </div>
        <div className="space-y-1">
          {week.tasks.map((task) => (
            <div
              key={task.id}
              className={`rounded-lg border transition-all ${
                progress.completedTasks[task.id]
                  ? 'bg-emerald-500/5 border-emerald-500/20'
                  : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600'
              }`}
            >
              <div className="px-3 py-2">
                <TaskItem
                  task={task}
                  isCompleted={!!progress.completedTasks[task.id]}
                  onToggle={toggleTask}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
