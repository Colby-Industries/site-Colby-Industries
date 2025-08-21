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
  ROUTE_PRESTATIONS_COORDONNER_ENERGIE_DIGITAL_PERFORMANCE,
  ROUTE_PRESTATIONS_CONFORMITE,
} from '@/constants/routes';
import Icon from '@/components/icon/Icon';

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
        <div className={styles.presentation}>
          Colby Industries est un cabinet de conseil spécialisé en performance énergétique industrielle. Nous
          accompagnons les industriels dans la structuration de leur démarche énergie, l&apos;exploitation des données
          et le pilotage des gains. Notre approche est pragmatique, sur-mesure, et ancrée dans la réalité du terrain.
        </div>
        <div className={styles.values}>
          <h2>Nos valeurs</h2>
          <div>
            <div>
              <Icon type="position" size={28} color="var(--colors-primary-soft)" />
            </div>
            <label>Proximité</label>
          </div>
          <div>
            <div>
              <Icon type="person" size={42} color="var(--colors-primary-soft)" />
            </div>
            <label>Accessibilité</label>
            <span>Accompagnement simple et fluide</span>
          </div>
          <div>
            <div>
              <Icon type="wheels" size={42} color="var(--colors-primary-soft)" />
            </div>
            <label>Expertise engagée</label>
            <span>Au service de vos enjeux</span>
          </div>
          <div>
            <div>
              <Icon type="coins" size={42} color="var(--colors-primary-soft)" />
            </div>
            <label>Collaboration</label>
            <span>gagnante - gagnante</span>
          </div>
          <div>
            <div>
              <Icon type="chart" size={42} color="var(--colors-primary-soft)" />
            </div>
            <label>Partenaire</label>
            <span>En croissance... qui s&apos;investit</span>
          </div>
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
            <PrestationCard
              index={4}
              title="Coordonner énergie, digital et performance"
              href={ROUTE_PRESTATIONS_COORDONNER_ENERGIE_DIGITAL_PERFORMANCE}
            />
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
