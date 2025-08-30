'use client';

import styles from './Collapse.module.css';
import { useId, useState } from 'react';
import { motion } from 'motion/react';
import Icon from '@/components/icon/Icon';
import { clsx } from 'clsx';

export interface CollapseProps {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
  titleTag?: React.ElementType;
}

export default function Collapse({
  title,
  subtitle,
  defaultOpen = false,
  children,
  className,
  titleTag,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const contentId = useId();

  const TitleTag = titleTag || 'div';

  return (
    <div className={clsx(styles.collapse, className)}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div className={styles.headerTexts}>
          <TitleTag className={styles.title}>{title}</TitleTag>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        <motion.span
          className={styles.iconWrapper}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Icon type="arrow" size={24} />
        </motion.span>
      </button>

      <motion.div
        id={contentId}
        className={clsx(styles.contentOuter, !isOpen && styles.contentOuterNoOverflow)}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        aria-hidden={!isOpen}
      >
        <div className={styles.contentInner}>{children}</div>
      </motion.div>
    </div>
  );
}
