import React, { useEffect, useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import styles from './styles.module.css';

interface Props {
  /** Chapter path prefix, e.g. "chapter-01-intro" */
  chapter: string;
  /** Total articles in this chapter */
  total: number;
}

export default function ChapterProgress({ chapter, total }: Props): React.ReactElement {
  const { progress } = useProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  const completed = Object.keys(progress).filter((id) =>
    id.startsWith(chapter)
  ).length;

  const isAllDone = completed >= total;

  return (
    <span className={`${styles.badge} ${isAllDone ? styles.badgeComplete : ''}`}>
      {completed}/{total}
    </span>
  );
}
