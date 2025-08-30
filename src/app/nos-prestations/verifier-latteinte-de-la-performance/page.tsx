import styles from '../common.module.css';
import Claim from '@/components/claim/Claim';

export default function VerifierLatteinteDeLaPerformance() {
  return (
    <section className={styles.page}>
      <h1>Vérifier l&apos;atteinte de la performance énergétique</h1>
      <div className={styles.content}>
        <Claim
          title="Mesurer, vérifier, garantir : la performance énergétique objectivée selon les standards industriels"
          description={
            <>
              <p>
                Notre méthodologie basée sur le protocole IPMVP a fait ses preuves et permet de s&apos;assurer que les
                gains escomptés sont bien constatés post-projet tout en tenant compte des conditions réelles
                d&apos;exploitation des installations.
              </p>
              <p>
                En compléement, l&apos;analyse énergétique approfondie des systèmes neufs ou existants permet la
                compréhension des possibles divergences entre études et réalisation et ainsi de corriger les
                défaillances identifiées.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
