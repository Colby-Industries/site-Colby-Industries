import styles from './TopContainer.module.css';

export default function TopContainer() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topContainerBackground}>
        <div className={styles.topContainerContent}>
          <h1>VOTRE PARTENAIRE EN PERFORMANCE ÉNERGÉTIQUE INDUSTRIELLE</h1>
          <div className={styles.topContainerSubtitle}>
            EFFICACITÉ ÉNERGÉTIQUE | PERFORMANCE INDUSTRIELLE | MESURES | AMÉLIORATION CONTINUE ISO 50001 | INDUSTRIES
            4.0
          </div>
        </div>
      </div>
    </div>
  );
}
