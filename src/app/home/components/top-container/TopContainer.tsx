import styles from './TopContainer.module.css';

export default function TopContainer() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topContainerBackground} />
      <div className={styles.topContainerContent}>
        <h1>Votre partenaire en performance énergétique industrielle</h1>
        <div className={styles.topContainerSubtitle}>
          Efficaté énergétique | Performance industrielle | Mesures | Amélioration continue ISO 50001 | Industries 4.0
        </div>
      </div>
    </div>
  );
}
