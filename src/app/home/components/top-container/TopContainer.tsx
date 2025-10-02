import styles from './TopContainer.module.css';
import LinkButton from '@/components/link-button/LinkButton';
import { ROUTE_CONTACT } from '@/constants/routes';

export default function TopContainer() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topContainerBackground} />
      <div className={styles.topContainerContent}>
        <h1>Votre partenaire en performance énergétique industrielle</h1>
        <span className={styles.contact}>
          <LinkButton href={ROUTE_CONTACT} size="extra-large">
            Demandez un échange
          </LinkButton>
        </span>
        <div className={styles.topContainerSubtitle}>
          Efficacité énergétique | Performance industrielle | Mesures | Amélioration continue ISO 50001 | Industries 4.0
        </div>
      </div>
    </div>
  );
}
