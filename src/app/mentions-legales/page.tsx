import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de Colby Industries : coordonnées, statut juridique et hébergeur.',
  alternates: { canonical: '/mentions-legales' },
};

export default function MentionsLegales() {
  return (
    <section className={styles.page}>
      <h1>Mentions légales</h1>
      <div className={styles.content}>
        <div className={styles.twoColumns}>
          <div>
            <h2>COLBY INDUSTRIES</h2>
            <p className={styles.subtitle}>SAS, société par actions simplifiée</p>
            <p>
              09 Chemin de Pubereau
              <br />
              63550 PALLADUC
              <br />
              FRANCE
            </p>
            <p>
              Tél : <a href="tel:+33663924186">06.63.92.41.86</a>
              <br />
              Tél : <a href="tel:+33745230950">07.45.23.09.50</a>
              <br />
              Mail : <a href="mailto:contact@colby-industries.fr">contact@colby-industries.fr</a>
              <br />
              Site :{' '}
              <a href="https://www.colby-industries.fr" target="_blank" rel="noreferrer noopener">
                www.colby-industries.fr
              </a>
            </p>
            <p>
              SAS au capital social de 1000€
              <br />
              R.C.S. Clermont-ferrand 942 492 752
              <br />
              SIRET 94249275200012
              <br />
              APE 7490B
              <br />
              N° TVA FR48942492752
            </p>
            <p>
              Président : Clément Halby
              <br />
              Directeur Général : Corentin Colle
            </p>
          </div>

          <div>
            <h2>HEBERGEMENTS</h2>
            <p>
              SAS OVH
              <br />
              SAS au capital de 10 059 500 €
              <br />
              RCS Lille Métropole 424 761 419 00045
              <br />
              Code APE 6202A
              <br />
              N° TVA : FR 22 424 761 419
              <br />
              Siège social : 2 rue Kellermann – 59100 Roubaix
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
