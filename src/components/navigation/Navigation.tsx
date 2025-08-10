'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem';
import { clsx } from 'clsx';
import Link from 'next/link';
import {
  ROUTE_CONTACT,
  ROUTE_ENTREPRISE_QUI_SOMMES_NOUS,
  ROUTE_ENTREPRISE_CONVICTIONS,
  ROUTE_ENTREPRISE_POSITIONNEMENT,
  ROUTE_ENTREPRISE_QUALIFICATIONS,
  ROUTE_PRESTATIONS_CARTOGRAPHIER,
  ROUTE_PRESTATIONS_AMELIORATION_CONTINUE,
  ROUTE_PRESTATIONS_IDENTIFIER_PROJETS,
  ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE,
  ROUTE_PRESTATIONS_COORDONNER_ENERGIE_DIGITAL_PERFORMANCE,
  ROUTE_PRESTATIONS_CONFORMITE,
  ROUTE_APPROCHE_EXPERTISE_DATA,
  ROUTE_APPROCHE_MANAGEMENT_DONNEE,
} from '@/constants/routes';

type MenuChildItem = { label: string; href: string };
type MenuItem = { label: string; href?: string; children?: MenuChildItem[] };

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Record<string, boolean>>({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMobileSubmenu = (key: string) => {
    setOpenMobileSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const mobileMenuItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15 + 0.1 },
    }),
  };

  // Helper for stable submenu IDs on mobile (not for URLs)
  const submenuId = (label: string) =>
    label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const navigationItems: MenuItem[] = [
    {
      label: "L'entreprise",
      children: [
        { label: 'Qui somme-nous?', href: ROUTE_ENTREPRISE_QUI_SOMMES_NOUS },
        { label: 'Nos convictions', href: ROUTE_ENTREPRISE_CONVICTIONS },
        { label: 'Notre positionnement', href: ROUTE_ENTREPRISE_POSITIONNEMENT },
        { label: 'Nos Qualifications', href: ROUTE_ENTREPRISE_QUALIFICATIONS },
      ],
    },
    {
      label: 'Nos prestations',
      children: [
        { label: 'Cartographier vos enjeux', href: ROUTE_PRESTATIONS_CARTOGRAPHIER },
        { label: "Développer l'amélioration continue", href: ROUTE_PRESTATIONS_AMELIORATION_CONTINUE },
        { label: 'Identifier et mettre en oeuvre les projets', href: ROUTE_PRESTATIONS_IDENTIFIER_PROJETS },
        { label: "Vérifier l'atteinte de la performance", href: ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE },
        {
          label: 'Coordonner énergie, digital et performance',
          href: ROUTE_PRESTATIONS_COORDONNER_ENERGIE_DIGITAL_PERFORMANCE,
        },
        { label: 'Accompagner vers la conformité réglementaire', href: ROUTE_PRESTATIONS_CONFORMITE },
      ],
    },
    {
      label: 'Notre approche',
      children: [
        { label: 'Expertise data & mesures énergétiques', href: ROUTE_APPROCHE_EXPERTISE_DATA },
        { label: 'Management de la donnée', href: ROUTE_APPROCHE_MANAGEMENT_DONNEE },
      ],
    },
    { href: ROUTE_CONTACT, label: 'Nous contacter' },
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
              {navigationItems.map((item, index) => {
                const key = item.label;
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                const isOpen = !!openMobileSubmenus[key];

                return (
                  <motion.div
                    key={key}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    variants={mobileMenuItemVariants}
                  >
                    {hasChildren ? (
                      <div className={styles.mobileParent}>
                        <button
                          className={styles.mobileParentButton}
                          onClick={() => toggleMobileSubmenu(key)}
                          aria-expanded={isOpen}
                          aria-controls={`submenu-${submenuId(key)}`}
                        >
                          <span>{item.label}</span>
                          <span className={clsx(styles.caret, isOpen && styles.caretOpen)} aria-hidden>
                            ▾
                          </span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              id={`submenu-${submenuId(key)}`}
                              className={styles.mobileSubmenu}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                              {item.children!.map((child) => (
                                <NavigationItem key={child.href} href={child.href} onClick={closeMenu}>
                                  {child.label}
                                </NavigationItem>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavigationItem href={item.href} onClick={closeMenu}>
                        {item.label}
                      </NavigationItem>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.desktopNavigation}>
        {navigationItems.map((item) => {
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;
          if (!hasChildren) {
            return (
              <NavigationItem key={item.label} href={item.href}>
                {item.label}
              </NavigationItem>
            );
          }

          return (
            <div key={item.label} className={styles.menu}>
              <div className={styles.menuTrigger} aria-haspopup="true">
                {item.label}
              </div>
              <div className={styles.dropdown} role="menu">
                {item.children!.map((child) => (
                  <Link key={child.href} href={child.href} className={styles.dropdownItem} role="menuitem">
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
