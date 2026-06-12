export interface Task {
  id: string;
  title: string;
  completed: boolean;
  url?: string;
}

export interface Resource {
  title: string;
  url: string;
  category: string;
  type: 'course' | 'docs' | 'tutorial' | 'video' | 'tool' | 'book';
}

export interface Week {
  id: number;
  weekNumber: number;
  month: number;
  phase: string;
  learn: string[];
  practice: string[];
  courses: string[];
  hours: string;
  milestone?: string;
  tasks: Task[];
}

export interface Month {
  month: number;
  name: string;
  description: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  week: number;
  completed: boolean;
  icon: string;
}

export interface Skill {
  category: string;
  name: string;
  mastered: boolean;
}

export interface ProgressState {
  completedTasks: Record<string, boolean>;
  hoursLogged: Record<number, number>;
  milestonesCompleted: Record<string, boolean>;
  milestoneUrls: Record<string, string>;
  currentWeek: number;
  startDate: string;
  weeklySchedule: Record<string, boolean>;
  masteredSkills: Record<string, boolean>;
}

export type ViewType = 'dashboard' | 'roadmap' | 'week' | 'milestones' | 'schedule' | 'skills' | 'resources';
