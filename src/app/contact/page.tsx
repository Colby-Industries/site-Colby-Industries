import styles from './page.module.css';

export default function Contact() {
  return (
    <section className={styles.contactPage}>
      <h1>Envie d&apos;en savoir plus ?</h1>
      <div className={styles.content}>
        <p>
          Prenez contact avec l&apos;agence la plus proche de chez vous ou complétez le formulaire en nous indiquant
          votre projet et vos attentes, nous reviendrons vers vous rapidement.
        </p>
        <div className={styles.twoColumns}>
          <div>
            <h2>Agence Puy de Dôme</h2>
            <p>
              Corentin Colle
              <br />
              06.63.92.41.86
              <br />
              <a href="mailto:ccolle@colby-industries.fr">ccolle@colby-industries.fr</a>
            </p>
          </div>
          <div>
            <h2>Agence Seine & Marne</h2>
            <p>
              Clément Halby
              <br />
              07.45.23.09.50
              <br />
              <a href="mailto:chalby@colby-industries.fr">chalby@colby-industries.fr</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
