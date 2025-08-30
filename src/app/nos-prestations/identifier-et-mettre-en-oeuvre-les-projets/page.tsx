import styles from '../common.module.css';
import Claim from '@/components/claim/Claim';

export default function IdentifierMettreEnOeuvreLesProjets() {
  return (
    <section className={styles.page}>
      <h1>Identifier et mettre en oeuvre les projets</h1>
      <div className={styles.content}>
        <Claim
          title="De l’idée à l’impact concret: vos projets d’efficacité énergétique, maîtrisés de bout en bout."
          description={
            <>
              <p>
                Colby Industries vous accompagne dans l&apos;identification, la structuration puis le déploiement de vos
                plans d&apos;actions. Les projets confiés sont caractérisés selon les volets financiers, énergie et
                carbone puis priorisés en intégrant systématiquement les prochaines étapes de la feuille de route.
              </p>
              <p>
                La prise de hauteur sur les plans d&apos;actions permet sur chaque phase travaux d&apos;anticiper les
                besoins futurs des chantiers à venir.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}
