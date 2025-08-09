import styles from './page.module.css';
import TopContainer from './components/top-container/TopContainer';
import LinkButton from '@/components/link-button/LinkButton';
import { ROUTE_CONTACT } from '@/constants/routes';
import PrestationCard from './components/prestation-card/PrestationCard';
import {
  ROUTE_PRESTATIONS_CARTOGRAPHIER,
  ROUTE_PRESTATIONS_AMELIORATION_CONTINUE,
  ROUTE_PRESTATIONS_IDENTIFIER_PROJETS,
  ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE,
  ROUTE_PRESTATIONS_ANIMER_DEMARCHE,
  ROUTE_PRESTATIONS_CONFORMITE,
} from '@/constants/routes';

export default function Home() {
  return (
    <section className={styles.homePage}>
      <TopContainer />
      <div className={styles.content}>
        <div className={styles.contact}>
          <LinkButton href={ROUTE_CONTACT} size="extra-large">
            Demandez un échange
          </LinkButton>
        </div>
        <div className={styles.prestations}>
          <h2>Nos prestations</h2>
          <div className={styles.prestationsList}>
            <PrestationCard index={0} title="Cartographier vos enjeux" href={ROUTE_PRESTATIONS_CARTOGRAPHIER} />
            <PrestationCard
              index={1}
              title="Développer l'amélioration continue"
              href={ROUTE_PRESTATIONS_AMELIORATION_CONTINUE}
            />
            <PrestationCard
              index={2}
              title="Identifier et mettre en oeuvre les projets"
              href={ROUTE_PRESTATIONS_IDENTIFIER_PROJETS}
            />
            <PrestationCard
              index={3}
              title="Vérifier l'atteinte de la performance"
              href={ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE}
            />
            <PrestationCard index={4} title="Animer la démarche" href={ROUTE_PRESTATIONS_ANIMER_DEMARCHE} />
            <PrestationCard
              index={5}
              title="Accompagner vers la conformité réglementaire"
              href={ROUTE_PRESTATIONS_CONFORMITE}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
