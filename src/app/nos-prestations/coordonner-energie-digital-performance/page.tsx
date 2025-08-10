import styles from '../page.module.css';
import Claim from '@/components/claim/Claim';

export default function CoordonnerEnergieDigitalPerformancePage() {
  return (
    <section className={styles.page}>
      <h1>Coordonner énergie, digital et performance</h1>
      <div className={styles.content}>
        <Claim
          title="Une approche globale de l'énergie : pilotage, digitalisation et mobilisation."
          description={
            <>
              <p>
                Face aux enjeux de compétitivité et de transition énergétique, l&apos;industrie a besoin d&apos;actions
                concrètes et coordonnées. Nous intervenons à tous les niveaux : pilotage stratégique de l&apos;énergie
                avec une vision data-driven , déploiement de solutions digitales ciblées, et animation terrain pour
                embarquer les équipes.
              </p>
              <p>
                Résultat : des économies mesurables, des équipes engagées et une industrie plus sobre, agile et
                performante.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
