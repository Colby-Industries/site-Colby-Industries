import styles from './page.module.css';
import TopContainer from './components/top-container/TopContainer';
import LinkButton from '@/components/link-button/LinkButton';
import PrestationCard from './components/prestation-card/PrestationCard';

export default function Home() {
  return (
    <section className={styles.homePage}>
      <TopContainer />
      <div className={styles.content}>
        <div className={styles.contact}>
          <LinkButton href="/contact" size="extra-large">
            Demandez un échange
          </LinkButton>
        </div>
        <div className={styles.prestations}>
          <h2>Nos prestations</h2>
          <div className={styles.prestationsList}>
            <PrestationCard index={0} title="Cartographier vos enjeux" />
            <PrestationCard index={1} title="Développer l'amélioration continue" />
            <PrestationCard index={2} title="Identifier et mettre en oeuvre les projets" />
            <PrestationCard index={3} title="Vérifier l'atteinte de la performance" />
            <PrestationCard index={4} title="Animer la démarche" />
            <PrestationCard index={5} title="Accompagner vers la conformité réglementaire" />
          </div>
        </div>
      </div>
    </section>
  );
}
