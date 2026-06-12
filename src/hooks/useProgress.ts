import { useState, useEffect, useCallback } from 'react';
import { ProgressState } from '../types';

const STORAGE_KEY = 'gamedev-roadmap-progress';

const defaultState: ProgressState = {
  completedTasks: {},
  hoursLogged: {},
  milestonesCompleted: {},
  milestoneUrls: {},
  currentWeek: 1,
  startDate: new Date().toISOString().split('T')[0],
  weeklySchedule: {},
  masteredSkills: {},
};

function loadProgress(): ProgressState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultState, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return defaultState;
}

function saveProgress(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const toggleTask = useCallback((taskId: string) => {
    setProgress(prev => ({
      ...prev,
      completedTasks: {
        ...prev.completedTasks,
        [taskId]: !prev.completedTasks[taskId],
      },
    }));
  }, []);

  const logHours = useCallback((week: number, hours: number) => {
    setProgress(prev => ({
      ...prev,
      hoursLogged: {
        ...prev.hoursLogged,
        [week]: Math.max(0, (prev.hoursLogged[week] || 0) + hours),
      },
    }));
  }, []);

  const toggleMilestone = useCallback((milestoneId: string) => {
    setProgress(prev => ({
      ...prev,
      milestonesCompleted: {
        ...prev.milestonesCompleted,
        [milestoneId]: !prev.milestonesCompleted[milestoneId],
      },
    }));
  }, []);

  const setMilestoneUrl = useCallback((milestoneId: string, url: string) => {
    setProgress(prev => ({
      ...prev,
      milestoneUrls: {
        ...prev.milestoneUrls,
        [milestoneId]: url,
      },
    }));
  }, []);

  const setCurrentWeek = useCallback((week: number) => {
    setProgress(prev => ({
      ...prev,
      currentWeek: week,
    }));
  }, []);

  const toggleScheduleDay = useCallback((day: string) => {
    setProgress(prev => ({
      ...prev,
      weeklySchedule: {
        ...prev.weeklySchedule,
        [day]: !prev.weeklySchedule[day],
      },
    }));
  }, []);

  const resetSchedule = useCallback(() => {
    setProgress(prev => ({
      ...prev,
      weeklySchedule: {},
    }));
  }, []);

  const toggleSkillMastered = useCallback((skillName: string) => {
    setProgress(prev => ({
      ...prev,
      masteredSkills: {
        ...prev.masteredSkills,
        [skillName]: !prev.masteredSkills[skillName],
      },
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress(defaultState);
  }, []);

  return {
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
  };
}
