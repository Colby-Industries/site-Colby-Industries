'use client';

import styles from './PrestationCard.module.css';
import { motion } from 'motion/react';
import Link from 'next/link';

export type PrestationCardProps = {
  title: string;
  href?: string;
  index?: number;
};

export default function PrestationCard({ title, href = '#', index = 0 }: PrestationCardProps) {
  return (
    <Link href={href} className={styles.link} aria-label={title}>
      <motion.article
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.15 } }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.12, ease: 'easeOut' } }}
      >
        <h3 className={styles.title}>{title}</h3>
      </motion.article>
    </Link>
  );
}
