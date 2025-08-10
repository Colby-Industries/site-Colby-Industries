import styles from './Footer.module.css';
import Link from 'next/link';
import {
  ROUTE_CONTACT,
  ROUTE_ENTREPRISE_QUI_SOMMES_NOUS,
  ROUTE_ENTREPRISE_CONVICTIONS,
  ROUTE_ENTREPRISE_POSITIONNEMENT,
  ROUTE_ENTREPRISE_QUALIFICATIONS,
  ROUTE_PRESTATIONS_CARTOGRAPHIER,
  ROUTE_PRESTATIONS_AMELIORATION_CONTINUE,
  ROUTE_PRESTATIONS_IDENTIFIER_PROJETS,
  ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE,
  ROUTE_PRESTATIONS_ANIMER_DEMARCHE,
  ROUTE_PRESTATIONS_CONFORMITE,
  ROUTE_APPROCHE_EXPERTISE_DATA,
  ROUTE_APPROCHE_MANAGEMENT_DONNEE,
  ROUTE_MENTIONS_LEGALES,
  ROUTE_POLITIQUE_CONFIDENTIALITE,
} from '@/constants/routes';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>L&apos;entreprise</h3>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} href={ROUTE_ENTREPRISE_QUI_SOMMES_NOUS}>
                  Qui sommes-nous?
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_ENTREPRISE_CONVICTIONS}>
                  Nos convictions
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_ENTREPRISE_POSITIONNEMENT}>
                  Notre positionnement
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_ENTREPRISE_QUALIFICATIONS}>
                  Nos qualifications
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Nos prestations</h3>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} href={ROUTE_PRESTATIONS_CARTOGRAPHIER}>
                  Cartographier vos enjeux
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_PRESTATIONS_AMELIORATION_CONTINUE}>
                  Développer l&apos;amélioration continue
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_PRESTATIONS_IDENTIFIER_PROJETS}>
                  Identifier et mettre en oeuvre les projets
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE}>
                  Vérifier l&apos;atteinte de la performance
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_PRESTATIONS_ANIMER_DEMARCHE}>
                  Animer la démarche
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_PRESTATIONS_CONFORMITE}>
                  Accompagner vers la conformité réglementaire
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Notre approche</h3>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} href={ROUTE_APPROCHE_EXPERTISE_DATA}>
                  Expertise data & mesures énergétiques
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_APPROCHE_MANAGEMENT_DONNEE}>
                  Management de la donnée
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Informations légales</h3>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} href={ROUTE_MENTIONS_LEGALES}>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={ROUTE_POLITIQUE_CONFIDENTIALITE}>
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <Link className={styles.link} href={ROUTE_CONTACT}>
              <h3 className={styles.columnTitle}>Nous contacter</h3>
            </Link>
          </div>
        </div>
        <div className={styles.footerNote}>COLBY INDUSTRIES, 2025 tous droits réservés</div>
      </div>
    </footer>
  );
}
