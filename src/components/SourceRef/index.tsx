import React from 'react';
import styles from './styles.module.css';

interface Props {
  file: string;
  lines?: string;
}

const GITHUB_BASE = 'https://github.com/wzf1997/claude-code-source/tree/master';

export default function SourceRef({ file, lines }: Props): React.ReactElement {
  const href = lines
    ? `${GITHUB_BASE}/${file}#L${lines}`
    : `${GITHUB_BASE}/${file}`;

  return (
    <div className={styles.card}>
      <span className={styles.icon}>📄</span>
      <span className={styles.path}>{file}</span>
      {lines && <span className={styles.lines}>L{lines}</span>}
      <a
        className={styles.link}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        查看源码 →
      </a>
    </div>
  );
}
