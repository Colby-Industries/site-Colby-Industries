import styles from './DevelopementEnergiesRenouvelables.module.css';
import Collapse from '@/components/collapse/Collapse';
import { Steps } from '@/components/steps/Steps';

export const DevelopementEnergiesRenouvelables: React.FC = () => {
  return (
    <Collapse
      title="Dévelopement des Energies Renouvelables"
      subtitle="Aide à la prise en compte des réglementations ENR"
      defaultOpen={false}
      titleTag="h2"
    >
      <div className={styles.collapseContent}>
        <div className={styles.labelAndBloc}>
          <label>Objectif</label>
          <p>
            Entre mobilités électriques et énergies renouvelables, les <strong>lois LOM et APER</strong> transforment
            vos parkings, toitures et terrains en leviers de performance durable et de conformité réglementaire.
            <br />
            Ces lois imposent aux acteurs de l&apos;industrie de se doter d&apos;infrastructures de recharge pour
            véhicules électriques et d&apos;intégrer des installations d&apos;énergies renouvelables, dans une logique
            d&apos;anticipation réglementaire et de décarbonation des usages.
          </p>
        </div>
        <div className={styles.labelAndBloc}>
          <label>Ce qu&apos;il faut savoir</label>
          <div className={styles.splitColumn}>
            <div>
              <label className={styles.underline}>
                Loi LOM – Anticiper l’électrification de vos mobilités industrielles
              </label>
              <label>Qui est concerné ?</label>
              <p>
                Sites industriels disposant d’un parking ≥ 20 places
                <br />
                Flottes d’entreprise incluant des véhicules légers
                <br />
                Bâtiments industriels neufs ou lourdement rénovés
              </p>
              <label>Ce qui est demandé</label>
              <p>
                Installation ou pré-équipement d’IRVE (bornes de recharge électrique) sur les parkings salariés ou
                visiteurs : 5 % à 10 % des places équipées selon la configuration
                <br />
                Précâblage obligatoire pour faciliter les extensions futures
                <br />
                Intégration de la mobilité électrique dans les plans de déplacement entreprise (PDE) ou stratégie bas
                carbone
                <br />
                Respect des échéances réglementaires (obligations dès 2025 pour les sites existants)
              </p>
            </div>
            <div>
              <label className={styles.underline}>
                Loi APER : Valoriser vos toitures, parkings et fonciers inexploités
              </label>
              <label>Qui est concerné ?</label>
              <p>
                Sites industriels avec grandes toitures, parkings extérieurs ≥ 1 500 m², ou terrains disponibles
                <br />
                Acteurs implantés dans des zones d’accélération ENR définies par les collectivités
              </p>
              <label>Ce qui est demandé</label>
              <p>
                Obligation de couverture solaire :
                <br />
                Toitures : obligation pour les bâtiments neufs ou rénovés à partir d’un certain seuil de surface
                <br />
                Parkings extérieurs ≥ 1 500 m² : obligation de couverture solaire à hauteur de 50 %
                <br />
                Incitation à développer des projets photovoltaïques ou thermiques en autoconsommation ou injection
                <br />
                Facilitation des procédures en zones d’accélération : gain de temps sur les autorisations
              </p>
            </div>
          </div>
        </div>
        <div className={styles.labelAndBloc}>
          <label>Méthodologie en 3 phases</label>
          <Steps
            compact
            steps={[
              {
                title: 'Décryptage réglementaire',
                items: [
                  'Analyse des textes appliqués à vos activités',
                  'Revue de vos sites: typologie de bâtiments, parkings, foncier disponible',
                  'Identification des obligations par site et les échéances à venir',
                ],
              },
              {
                title: 'Diagnostique de conformité & positionnement',
                items: [
                  'Cartographie des points de conformité (IRVE, couverture solaire, zones ENR)',
                  'Priorisation actions à engager selon vos enjeux',
                ],
              },
              {
                title: "Feuille de route & plan d'actions",
                items: ["Élaboration d'un plan d'actions", "Recommandation d'approches organisationnelles"],
              },
            ]}
          />
        </div>
        <div className={styles.labelAndBloc}>
          <label>Notre positionnement</label>
          <p>
            Notre accompagnement se limite la définition de vos enjeux de conformité et aux études initiales. Pour la
            réalisation des études détaillées ainsi que la mise en place des projets, nous faisons appel à notre réseau
            de partenaires experts sur ces thématiques spécifiques.
          </p>
        </div>
      </div>
    </Collapse>
  );
};
