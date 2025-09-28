'use client';

import React from 'react';
import styles from './References.module.css';
import Icon from '@/components/icon/Icon';
import { motion } from 'motion/react';

type ReferenceItem = {
  quote: string;
  author: string;
  company: string;
};

const REFERENCES: ReferenceItem[] = [
  {
    author: 'Agroalimentaire',
    company: 'Cartographie vapeur et air comprimé.',
    quote:
      'Bien produire la vapeur et l’air comprimé est une première étape. Cartographier ces fluides pour baisser leur consommation côté process a été l’objectif de cette mission !',
  },
  {
    author: 'Oil & Gas',
    company: 'ISO 50001',
    quote:
      'Accompagnement à la mise en place de Systèmes de Management de l’Énergie pour plusieurs filiales dans le monde. Contexte international et règles d’un grand groupe ont été les enjeux de la mission.',
  },
  {
    author: 'Caoutchouc',
    company: 'Etude ADEME - Récupération de chaleur',
    quote:
      'Sortir du contrat de cogénération en 2026 avec quelles alternatives? Validation des futurs besoins vapeur et eau chaude, optimisation des process, récupération de chaleur interne et externe…. Un projet structurant pour planifier une décarbonation pragmatique sur les 5 prochaines années.',
  },
  {
    author: 'Pharmaceutique',
    company: 'Energy Manager',
    quote:
      'Renfort externe sur plusieurs années à l’équipe énergie en place pour l’animation et le maintient du Système de Management ISO 50001 du site R&D. Présence durant les audits et les revues de management.',
  },
  {
    author: 'Plasturgie',
    company: 'Audit approfondi process',
    quote:
      'Fours, presses, étuves, quels enjeux énergies et quelle performance pour chaque équipement? Un monitoring précis de l’énergie consommée croisé avec le rythme de la production pour cibler toutes les phases de gaspillage énergétique.',
  },
  {
    author: 'Nucléaire',
    company: 'Audit approfondi utilités',
    quote:
      'Production de froid sur compresseurs centrifuges, gestion de la cascade de production, réactivité des vannes de régulation, performance des PID. Une Analyse Fonctionnelle retravaillée pour des performances énergétiques retrouvées.',
  },
  {
    author: 'Manufacture',
    company: 'Product Owner',
    quote:
      'Intégration de l’équipe Industrie 4.0 de l’industriel pour concevoir et déployer la solution de monitoring énergétique sur les 40 usines dans le monde. Coordination des équipes développeurs et des référents énergies des sites.',
  },
  {
    author: 'Manufacture',
    company: 'Décret Tertiaire',
    quote:
      'Accompagnement à la stratégie de réponse aux enjeux du décret tertiaire sur 18 usines en France. Récolte et répartition des consommations tertiaire et process pour intégration dans la plateforme OPERAT.',
  },
  {
    author: 'Automobile',
    company: 'CPE',
    quote:
      'La récupération de chaleur sur process alimentant des PAC haute température pour chauffer le bâtiment l’hiver permet une décarbonation de 80% du site. Un CPE de 5 ans a été mis en place pour valider les performances et garantir ce résultat!',
  },
  {
    author: 'Métallurgie',
    company: 'AMO Comptage',
    quote:
      'Evaluer le besoin, maitriser les budgets, rédiger les cahiers des charges, suivre les travaux, réceptionner les installations. Par manque de ressources internes, l’externalisation de la prestation de monitoring permet d’avancer sur ces sujets sans perdre de temps !',
  },
  {
    author: 'Plasturgie',
    company: 'Faisabilité récupération de chaleur',
    quote:
      'Les rejets de chaleur au niveau des groupes froid, des drys et de l’air comprimé présentent un gisement thermique notable pour rénover les aérothermes gaz et décarboner le site. L’intégration de la rénovation des presses dans les scénarios est primordiale pour dimensionner au mieux les installations.',
  },
  {
    author: 'Bois',
    company: 'Plan de mesurage & CEE Spécifiques',
    quote:
      'La récupération de chaleur sur des buées de séchoir à sciure pour la confection de granulés bois permet d’importantes économies d’énergie et donc l’ouverture à des primes CEE spécifiques. Les études préalables approfondies permettent de fiabiliser les subventions post période de mesurage.',
  },
  {
    author: 'Négociant vin',
    company: 'ISO 50001 & audit réglementaire',
    quote:
      'Accompagnement à la mise en conformité par la mise en place de Systèmes de Management et d’audit énergétique réglementaire sur plusieurs usines d’embouteillage en France​',
  },
  {
    author: 'Textile',
    company: 'Cartographie  & Récupération de chaleur',
    quote:
      'Cartographier les usages afin d’identifier les enjeux énergétique et financier du process et étude récupération de chaleur sur incinérateur et four process',
  },
  {
    author: 'Pharmaceutique',
    company: 'Audit interne ISO 50001',
    quote:
      'Principe de l’amélioration continue respecté pour ce site de R&D et production par la réalisation d’audit interne pluriannuelle',
  },
];

export const References = () => {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  const updateButtons = React.useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    // Use small epsilon to avoid floating point issues
    const EPS = 2;
    setCanPrev(scrollLeft > EPS);
    setCanNext(scrollLeft + clientWidth < scrollWidth - EPS);
  }, []);

  React.useEffect(() => {
    updateButtons();
    const el = viewportRef.current;
    if (!el) return;
    const handle = () => updateButtons();
    el.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle, { passive: true });
    return () => {
      el.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [updateButtons]);

  const scrollBySlides = (direction: 1 | -1) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const firstSlide = track.querySelector<HTMLElement>(`[data-slide="true"]`);
    if (!firstSlide) return;

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const styles = getComputedStyle(track);
    // Prefer column-gap for flex gap retrieval
    const gapValue = styles.getPropertyValue('column-gap') || styles.getPropertyValue('gap');
    const gap = parseFloat(gapValue) || 0;

    const delta = direction * (slideWidth + gap);
    viewport.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.viewport}
        ref={viewportRef}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.track} ref={trackRef}>
          {REFERENCES.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.slide}
              data-slide="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <figure className={styles.card}>
                <figcaption className={styles.meta}>
                  <span className={styles.author}>{item.author}</span>
                  <span className={styles.company}>{item.company}</span>
                </figcaption>
                <blockquote className={styles.quote}>{item.quote}</blockquote>
              </figure>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className={styles.controls} aria-hidden={false}>
        <motion.button
          type="button"
          className={styles.navButton}
          onClick={() => scrollBySlides(-1)}
          aria-label="Référence précédente"
          disabled={!canPrev}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <Icon type="arrow" size={24} rotation={90} />
        </motion.button>

        <motion.button
          type="button"
          className={styles.navButton}
          onClick={() => scrollBySlides(1)}
          aria-label="Référence suivante"
          disabled={!canNext}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <Icon type="arrow" size={24} rotation={270} />
        </motion.button>
      </div>
    </div>
  );
};
