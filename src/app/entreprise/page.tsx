import styles from './page.module.css';

export default function Entreprise() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>L&apos;entreprise</h1>

      <section id="qui-sommes-nous" className={styles.section}>
        <h2 className={styles.sectionTitle}>Qui sommes-nous?</h2>
      </section>

      <section id="nos-convictions" className={styles.section}>
        <h2 className={styles.sectionTitle}>Nos convictions</h2>
      </section>

      <section id="notre-positionnement" className={styles.section}>
        <h2 className={styles.sectionTitle}>Notre positionnement</h2>
      </section>

      <section id="nos-qualifications" className={styles.section}>
        <h2 className={styles.sectionTitle}>Nos qualifications</h2>
      </section>
    </main>
  );
}
