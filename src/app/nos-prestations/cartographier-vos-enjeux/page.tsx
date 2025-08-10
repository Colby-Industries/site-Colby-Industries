import styles from '../page.module.css';
import Claim from '@/components/claim/Claim';

export default function CartographierVosEnjeux() {
  return (
    <section className={styles.page}>
      <h1>Cartographier vos enjeux énergie et carbone</h1>
      <div className={styles.content}>
        <Claim
          title="On ne maitrise durablement que ce que l'on ne mesure précisément."
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
      </div>
    </section>
  );
}
