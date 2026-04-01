import React from 'react';
import styles from './styles.module.css';

type DifficultyLevel = '入门' | '进阶' | '深度';

interface Props {
  level: DifficultyLevel;
}

const levelClass: Record<DifficultyLevel, string> = {
  '入门': styles.beginner,
  '进阶': styles.intermediate,
  '深度': styles.advanced,
};

const levelEmoji: Record<DifficultyLevel, string> = {
  '入门': '🟢',
  '进阶': '🟡',
  '深度': '🔴',
};

export default function DifficultyBadge({ level }: Props): React.ReactElement {
  return (
    <span className={`${styles.badge} ${levelClass[level]}`}>
      {levelEmoji[level]} {level}
    </span>
  );
}
