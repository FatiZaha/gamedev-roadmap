import { 
  Clock, 
  CheckCircle2, 
  Circle, 
  RotateCcw,
  Sun,
  Moon,
  Coffee
} from 'lucide-react';
import { dailySchedule } from '../data/roadmapData';
import { ProgressState } from '../types';

interface ScheduleProps {
  progress: ProgressState;
  toggleScheduleDay: (day: string) => void;
  resetSchedule: () => void;
}

const dayColors: Record<string, string> = {
  Monday: 'from-blue-500 to-cyan-500',
  Tuesday: 'from-emerald-500 to-teal-500',
  Wednesday: 'from-emerald-500 to-teal-500',
  Thursday: 'from-blue-500 to-cyan-500',
  Friday: 'from-emerald-500 to-teal-500',
  Saturday: 'from-violet-500 to-purple-500',
  Sunday: 'from-amber-500 to-orange-500',
};

export default function Schedule({ progress, toggleScheduleDay, resetSchedule }: ScheduleProps) {
  const completedDays = dailySchedule.filter(d => progress.weeklySchedule[d.day]).length;
  const totalHours = dailySchedule.reduce((sum, d) => sum + parseInt(d.hours), 0);
  const completedHours = dailySchedule.filter(d => progress.weeklySchedule[d.day]).reduce((sum, d) => sum + parseInt(d.hours), 0);
  const percentage = Math.round((completedDays / 7) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Clock size={24} className="text-blue-400" />
          Weekly Schedule
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          15 hours per week &middot; Track your daily progress
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📅</span>
            <span className="text-sm text-gray-400">Days Completed</span>
          </div>
          <div className="text-3xl font-bold text-white">{completedDays}/7</div>
          <div className="text-xs text-gray-500 mt-1">this week</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">⏱️</span>
            <span className="text-sm text-gray-400">Hours This Week</span>
          </div>
          <div className="text-3xl font-bold text-white">{completedHours}h</div>
          <div className="text-xs text-gray-500 mt-1">of {totalHours}h target</div>
        </div>

        <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">✅</span>
            <span className="text-sm text-gray-400">Progress</span>
          </div>
          <div className="text-3xl font-bold text-white">{percentage}%</div>
          <div className="text-xs text-gray-500 mt-1">weekly completion</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-300">Weekly Progress</span>
          <span className="text-sm text-gray-400">{completedHours}h / {totalHours}h</span>
        </div>
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="space-y-3">
        {dailySchedule.map((schedule) => {
          const isCompleted = progress.weeklySchedule[schedule.day];
          
          return (
            <div
              key={schedule.day}
              onClick={() => toggleScheduleDay(schedule.day)}
              className={`bg-gray-900/50 border rounded-xl p-4 cursor-pointer transition-all group ${
                isCompleted 
                  ? 'border-emerald-500/30 bg-emerald-500/5' 
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dayColors[schedule.day]} flex items-center justify-center flex-shrink-0 text-2xl ${
                  isCompleted ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                } transition-opacity`}>
                  {schedule.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-lg font-semibold ${isCompleted ? 'text-emerald-300' : 'text-white'}`}>
                      {schedule.day}
                    </h3>
                    {isCompleted && (
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                        Done
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-400">{schedule.focus}</span>
                    <span className="text-sm text-gray-500">&middot;</span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock size={12} />
                      {schedule.hours}
                    </span>
                  </div>
                </div>

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isCompleted 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-800 text-gray-500 group-hover:bg-gray-700 group-hover:text-gray-300'
                }`}>
                  {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Button */}
      <div className="flex justify-center">
        <button
          onClick={resetSchedule}
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
        >
          <RotateCcw size={16} />
          Reset Weekly Schedule
        </button>
      </div>

      {/* Tips */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-3">Schedule Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
            <Sun size={18} className="text-amber-400 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-white">Morning Focus</div>
              <div className="text-xs text-gray-400 mt-1">Use morning hours for learning new concepts when your mind is fresh</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
            <Coffee size={18} className="text-orange-400 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-white">Take Breaks</div>
              <div className="text-xs text-gray-400 mt-1">Use the Pomodoro technique: 25min focus, 5min break</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
            <Moon size={18} className="text-blue-400 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-white">Evening Review</div>
              <div className="text-xs text-gray-400 mt-1">Review what you learned before bed to improve retention</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
