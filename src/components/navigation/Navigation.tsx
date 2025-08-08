'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem';
import { clsx } from 'clsx';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const mobileMenuItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15 + 0.1 },
    }),
  };

  const navigationItems = [
    { href: '/', label: "L'entreprise" },
    { href: '/nos-prestations', label: 'Nos prestations' },
    { href: '/notre-approche', label: 'Notre approche' },
    { href: '/contact', label: 'Nous contacter' },
  ];

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <motion.span
          className={clsx(styles.hamburgerLine, isMenuOpen && styles.hamburgerLineOpen)}
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.15, ease: 'easeInOut' }}
        />
        <motion.span
          className={clsx(styles.hamburgerLine, isMenuOpen && styles.hamburgerLineOpen)}
          animate={
            isMenuOpen ? { rotate: 45, translateX: 0, translateY: 5 } : { rotate: 0, translateX: 0, translateY: 0 }
          }
          transition={{ duration: 0.15, ease: 'easeInOut' }}
        />
        <motion.span
          className={clsx(styles.hamburgerLine, isMenuOpen && styles.hamburgerLineOpen)}
          animate={
            isMenuOpen ? { rotate: -45, translateX: 0, translateY: -5 } : { rotate: 0, translateX: 0, translateY: 0 }
          }
          transition={{ duration: 0.15, ease: 'easeInOut' }}
        />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  variants={mobileMenuItemVariants}
                >
                  <NavigationItem href={item.href} onClick={closeMenu}>
                    {item.label}
                  </NavigationItem>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.desktopNavigation}>
        <NavigationItem href="/">L&apos;entreprise</NavigationItem>
        <NavigationItem href="/nos-prestations">Nos prestations</NavigationItem>
        <NavigationItem href="/notre-approche">Notre approche</NavigationItem>
        <NavigationItem href="/contact">Nous contacter</NavigationItem>
      </div>
    </nav>
  );
}
