import styles from './page.module.css';
import { createBreadcrumbJsonLd } from '@/lib/structured-data';
import type { Metadata } from 'next';
import commonStyles from '../common.module.css';
import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import { Steps } from '@/components/steps/Steps';
import Image from 'next/image';
import comptage from '@/assets/nos-prestations/comptage.png';

export const metadata: Metadata = {
  title: 'Cartographier vos enjeux énergie et carbone',
  description:
    "Plan de comptage, monitoring temporaire et permanent, méthodologie NF EN 17267 et KPI pour cartographier vos flux d'énergie.",
  alternates: { canonical: '/nos-prestations/cartographier-vos-enjeux' },
};

export default function CartographierVosEnjeux() {
  return (
    <section className={commonStyles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createBreadcrumbJsonLd([
            { name: 'Accueil', url: 'https://colby-industries.fr/' },
            {
              name: 'Cartographier vos enjeux',
              url: 'https://colby-industries.fr/nos-prestations/cartographier-vos-enjeux',
            },
          ]),
        }}
      />
      <h1>Cartographier vos enjeux énergie et carbone</h1>
      <div className={commonStyles.content}>
        <Claim
          title="On ne maitrise durablement que ce que l'on mesure précisément."
          description={
            <>
              <p>
                Chacun de nos accompagnements intègre une gestion aboutie de la donnée afin de s&apos;assurer des enjeux
                énergétiques réels de nos clients et ainsi qualifier le plus fiablement possible les projets.
              </p>
              <p>
                Suivant les missions sur lesquelles nous vous accompagnons, deux approches sont possibles si aucun
                système de sous-comptage n&apos;est présent sur votre site industriel.
              </p>
            </>
          }
        />
        <Collapse
          title="Comptage temporaire"
          subtitle="Dans le cadre d'un projet, un monitoring temporaire doit être déployé pour valider les hypothèses théoriques"
          defaultOpen={false}
          titleTag="h2"
        >
          <div className={styles.temporary}>
            <Image className={styles.comptage} src={comptage} width={460} height={340} alt="Comptage temporaire" />
            <div>
              <p>
                Dans le cadre où un projet est déjà identifié et qu&apos;il est nécessaire de mieux qualifier les enjeux
                énergétiques de celui-ci nous sommes en mesure de proposer les solutions de monitoring temporaires
                adaptées permettant de fiabiliser les données physiques des installations.
              </p>
              <p>
                Etant propriétaires de notre matériel de mesure nous maitrisons leur installation, leur mode de
                communication et la précision des mesures effectuées. Notre approche privilégie le mesurage indirect et
                non intrusif permettant ainsi de limiter les interactions avec votre activité pour un déploiement rapide
                et efficace.
              </p>
              <p className={styles.center}>
                <strong>
                  Nous avons fait du mesurage une de nos expertises majeures ! Plus de détails sur notre approche
                  disponible ici.
                </strong>
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Comptage permanent"
          subtitle="Dans une démarche d'amélioration continue, un monitoring permanent doit être déployé pour suivre l'évolution de la performance"
          defaultOpen={false}
          titleTag="h2"
        >
          <div className={styles.permanent}>
            <p>
              Dans le cadre où l&apos;industriel souhaite maitriser sur le long terme la cartographie énergétique de son
              site, un système de comptage fixe devra être déployé sur l&apos;usine. Ce déploiement ne se fait en
              général pas sans contrainte d&apos;exploitation : consignation BT des transformateurs, purges des réseaux
              fluides (vapeur, eau froide, eau glacée), inertage des tuyauteries gaz… La pose de comptage doit être
              structurée et planifiée !
            </p>
            <p>
              Le cout d&apos;une telle installation est également loin d&apos;être neutre, en cas d&apos;incertitude il
              est recommandé de réaliser en amont une cartographie à l&apos;aide d&apos;un comptage mobile non intrusif
              afin d&apos;éviter la pose de compteurs ne mesurant que quelques kWh.
            </p>
            <p className={styles.center}>
              <strong>
                Notre accompagnement sur l&apos;ensemble de cette phase vous permet de vous affranchir des mauvaises
                surprises.
              </strong>
            </p>
            <h3>Avant les travaux</h3>
            <p>La définition et l&apos;expression de besoin en terme de monitoring est le socle de la démarche.</p>
            <Steps
              steps={[
                {
                  title: 'Etablissement du plan de comptage',
                  items: [
                    'Etude documentaire',
                    'Cartographie réelle',
                    'Priorisation du déploiement',
                    'Budgets',
                    'KPI',
                    'Aides disponibles',
                    'Méthodologie NF-EN 17267',
                  ],
                },
                {
                  title: 'Rédaction cahier des charges - Hardware',
                  items: [
                    'Allotissement',
                    'Spécificités clients',
                    'Contraintes industrielles',
                    'Remontées de données',
                    'Standardisation',
                  ],
                },
                {
                  title: 'Rédaction cahier des charges - Software',
                  items: [
                    'Connextivités existantes',
                    'Données process',
                    'Eligibilité CEE',
                    'Interfaçage ERP existant',
                    'Règles cyber industrielles',
                  ],
                },
              ]}
            />
            <h3>Pendant les travaux</h3>
            <p>Assurer la continuité de service entre l&apos; et la mise en oeuvre du projet de comptage.</p>
            <Steps
              steps={[
                {
                  title: 'Consultation et co-sélection des entreprises',
                  items: ['Panel de consultation', 'Visites de sites', 'DPGF', 'Confirmité cahier des charges'],
                },
                {
                  title: "Suivi des travaux dans le rôle d'AMO",
                  items: [
                    'Planning prévisionnel',
                    'Réunion de chantier',
                    'Suivi des travaux',
                    'Sécurité',
                    'Limite de prestations des lots',
                  ],
                },
                {
                  title: 'Co-réception des travaux',
                  items: ['Conformité des travaux', 'Suivi mise en service', 'Coordination hardware/software'],
                },
              ]}
            />
            <h3>Après les travaux</h3>
            <p>Exploiter les données afin de consolider la démarche d&apos;amélioration continue.</p>
            <Steps
              steps={[
                {
                  title: 'Montage des dossiers financements',
                  items: ['Etude conforme NF17267', 'CEE', 'Autres fonds'],
                },
                {
                  title: "Aide à l'exploitation",
                  items: [
                    'Analyse des données',
                    'Situation de référence',
                    'IPE / KPI',
                    "Plans d'action",
                    'Quick Wins',
                    'Benchmark',
                  ],
                },
              ]}
            />
          </div>
        </Collapse>
      </div>
    </section>
  );
}
