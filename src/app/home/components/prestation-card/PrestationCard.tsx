'use client';

import styles from './PrestationCard.module.css';
import { motion } from 'motion/react';
import Link from 'next/link';

export type PrestationCardProps = {
  title: string;
  subtitle: string;
  href?: string;
  index?: number;
  background?: string;
};

export default function PrestationCard({ title, subtitle, href = '#', index = 0, background }: PrestationCardProps) {
  return (
    <Link href={href} className={styles.link} aria-label={title}>
      <motion.article
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.15 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className={styles.title}>{title}</h3>
        <label className={styles.subtitle}>{subtitle}</label>
        <div
          className={styles.cardBackground}
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
      </motion.article>
    </Link>
  );
}
