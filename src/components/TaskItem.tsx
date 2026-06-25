import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  isCompleted: boolean;
  onToggle: (taskId: string) => void;
  showUrl?: boolean;
  size?: 'sm' | 'md';
}

export default function TaskItem({ task, isCompleted, onToggle, showUrl = true, size = 'md' }: TaskItemProps) {
  const sizeClasses = size === 'sm' 
    ? { icon: 14, padding: 'py-1', text: 'text-sm' }
    : { icon: 18, padding: 'py-2 px-1', text: 'text-sm' };

  return (
    <div className={`flex items-center gap-2 ${sizeClasses.padding} group min-w-0`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle(task.id);
        }}
        className="flex-shrink-0"
        aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {isCompleted ? (
          <CheckCircle2 size={sizeClasses.icon} className="text-emerald-400" />
        ) : (
          <Circle size={sizeClasses.icon} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
        )}
      </button>
      
      <span className={`flex-1 min-w-0 break-words ${sizeClasses.text} ${
        isCompleted ? 'text-gray-500 line-through' : 'text-gray-300'
      }`}>
        {task.title}
      </span>

      {showUrl && task.url && (
        <a
          href={task.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0 p-1 text-gray-600 hover:text-violet-400 transition-colors opacity-60 group-hover:opacity-100"
          title="Open resource"
          aria-label={`Open resource for: ${task.title}`}
        >
          <ExternalLink size={sizeClasses.icon - 2} />
        </a>
      )}
    </div>
  );
}
