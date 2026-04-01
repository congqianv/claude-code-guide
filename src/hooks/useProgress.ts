import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'claude-code-guide:progress';
const TOTAL_ARTICLES = 84;

type ProgressMap = Record<string, boolean>;

function readStorage(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function writeStorage(progress: ProgressMap): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    setProgress(readStorage());
  }, []);

  const markComplete = useCallback((articleId: string) => {
    setProgress((prev) => {
      const next = { ...prev, [articleId]: true };
      writeStorage(next);
      return next;
    });
  }, []);

  const markIncomplete = useCallback((articleId: string) => {
    setProgress((prev) => {
      const next = { ...prev };
      delete next[articleId];
      writeStorage(next);
      return next;
    });
  }, []);

  const toggle = useCallback((articleId: string) => {
    setProgress((prev) => {
      const isComplete = !!prev[articleId];
      const next = isComplete
        ? (() => { const n = { ...prev }; delete n[articleId]; return n; })()
        : { ...prev, [articleId]: true };
      writeStorage(next);
      return next;
    });
  }, []);

  const isComplete = useCallback(
    (articleId: string) => !!progress[articleId],
    [progress]
  );

  const completedCount = Object.keys(progress).length;

  return {
    progress,
    completedCount,
    totalArticles: TOTAL_ARTICLES,
    markComplete,
    markIncomplete,
    toggle,
    isComplete,
  };
}
