'use client';

import styles from './Header.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import { motion, mapValue, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

const FULL_HEADER_HEIGHT = 138;
const REDUCED_HEADER_HEIGHT = 80;

export default function Header() {
  const { scrollY } = useScroll();
  const [, setY] = useState(scrollY.get());
  const headerHeight = mapValue(scrollY, [0, REDUCED_HEADER_HEIGHT], [FULL_HEADER_HEIGHT, REDUCED_HEADER_HEIGHT]);
  useMotionValueEvent(scrollY, 'change', (latestValue) => {
    setY(latestValue);
  });

  return (
    <header className={styles.header}>
      <div
        className={clsx(
          styles.headerContentWrapper,
          headerHeight.get() !== FULL_HEADER_HEIGHT && styles.headerContentWrapperOnScroll,
        )}
      >
        <motion.div
          className={styles.headerContent}
          animate={{ height: headerHeight.get(), transition: { duration: 0 } }}
        >
          <Link href="/" className={styles.logoLink}>
            <Logo size="medium" />
          </Link>
          <Navigation />
        </motion.div>
      </div>
    </header>
  );
}
