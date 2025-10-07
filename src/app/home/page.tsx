import styles from './page.module.css';
import TopContainer from './components/top-container/TopContainer';
import { References } from './components/references/References';
import PrestationCard from './components/prestation-card/PrestationCard';
import Icon from '@/components/icon/Icon';
import { ROUTE_APPROCHE_EXPERTISE_DATA, ROUTE_APPROCHE_MANAGEMENT_DONNEE } from '@/constants/routes';
import {
  ROUTE_PRESTATIONS_CARTOGRAPHIER,
  ROUTE_PRESTATIONS_AMELIORATION_CONTINUE,
  ROUTE_PRESTATIONS_IDENTIFIER_PROJETS,
  ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE,
  ROUTE_PRESTATIONS_COORDONNER_ENERGIE_DIGITAL_PERFORMANCE,
  ROUTE_PRESTATIONS_CONFORMITE,
} from '@/constants/routes';
import accompagner from '../../assets/home/accompagner.png';
import amelioration from '../../assets/home/amelioration-continue.png';
import cartographie from '../../assets/home/cartographie.jpg';
import coordonner from '../../assets/home/coordonner.png';
import identifier from '../../assets/home/identifier.png';
import verifier from '../../assets/home/verifier.png';
import { clsx } from 'clsx';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={styles.homePage}>
      <TopContainer />
      <div>
        <div className={clsx(styles.presentation, styles.content)}>
          <p>
            Colby Industries est un cabinet de conseil spécialisé en performance énergétique industrielle. Nous
            accompagnons les industries dans la structuration de leur démarche énergie, de l&apos;identification
            jusqu&apos;à la mise en œuvre des projets d&apos;efficacité énergétique et de décarbonation.
          </p>
          <p>
            Notre approche, guidée par l&apos;exploitation de la donnée et ancrée dans l&apos;analyse terrain, nous
            permet d&apos;être pragmatiques, sur-mesure et alignés avec les réalités industrielles.
          </p>
        </div>
        <div className={styles.reverseBackground}>
          <div className={clsx(styles.values, styles.content)}>
            <h2>Nos valeurs</h2>
            <div>
              <div>
                <Icon type="wheels" size={42} color="var(--colors-primary-soft)" />
              </div>
              <label>Expertise engagée</label>
              <span>
                Des ingénieurs experts sur leurs sujets avec des compétences acquises sur le terrain auprès d&apos;une
                grande diversité d&apos;industries en France et à l&apos;International.
              </span>
            </div>
            <div>
              <div>
                <Icon type="person" size={42} color="var(--colors-primary-soft)" />
              </div>
              <label>Accessibilité</label>
              <span>
                Des accompagnements fluides et efficaces, une société à taille humaine permettant d&apos;avancer avec
                des interlocuteurs agiles et réactifs.
              </span>
            </div>
            <div>
              <div>
                <Icon type="coins" size={42} color="var(--colors-primary-soft)" />
              </div>
              <label>Équilibre</label>
              <span>
                La mise à disposition d&apos;une ressource experte sans les coûts internes d&apos;une grosse structure.
                Une relation gagnant - gagnant !
              </span>
            </div>
            <div>
              <div>
                <Icon type="position" size={28} color="var(--colors-primary-soft)" />
              </div>
              <label>Proximité</label>
              <span>
                Proche des industriels accompagnés garantissant réactivité et connaissance du tissu économique ainsi que
                les acteurs locaux.
              </span>
            </div>
            <div>
              <div>
                <Icon type="chart" size={42} color="var(--colors-primary-soft)" />
              </div>
              <label>Partenariat</label>
              <span>
                Chaque mission compte, la satisfaction client est notre préoccupation principale garantissant ainsi une
                implication sans faille des équipes.
              </span>
            </div>
          </div>
        </div>
        <div className={clsx(styles.prestations, styles.content)}>
          <h2>Nos prestations</h2>
          <div className={styles.prestationsList}>
            <PrestationCard
              index={0}
              title="Cartographier vos enjeux"
              subtitle="Plan de comptage | Campagnes de mesures multifluides | NF EN 17267 | Système EMS"
              href={ROUTE_PRESTATIONS_CARTOGRAPHIER}
              background={cartographie.src}
            />
            <PrestationCard
              index={5}
              title="Accompagner vers la conformité réglementaire"
              subtitle="Audit réglementaire NF EN 16247 | Fit For 55 | Décret tertiaire et BACS | Développement des énergies renouvelables"
              href={ROUTE_PRESTATIONS_CONFORMITE}
              background={accompagner.src}
            />
            <PrestationCard
              index={1}
              title="Développer l'amélioration continue"
              subtitle="Système de Management de l'Énergie certifié | ISO 50001 | Déploiement d'indicateurs de performance"
              href={ROUTE_PRESTATIONS_AMELIORATION_CONTINUE}
              background={amelioration.src}
            />
            <PrestationCard
              index={2}
              title="Identifier et mettre en oeuvre les projets"
              subtitle="Récupération de chaleur | Études de faisabilité et d'avant projets | Analyses fonctionnelles & Automatisme | Assistance Maitrise d'Ouvrage"
              href={ROUTE_PRESTATIONS_IDENTIFIER_PROJETS}
              background={identifier.src}
            />
            <PrestationCard
              index={3}
              title="Vérifier l'atteinte de la performance"
              subtitle="Protocole IPMVP | Situations de référence énergétique | Analyses approfondies des installations"
              href={ROUTE_PRESTATIONS_VERIFIER_PERFORMANCE}
              background={verifier.src}
            />
            <PrestationCard
              index={4}
              title="Coordonner énergie, digital et performance"
              subtitle="Energy Manager | Product Owner | Industrie 4.0 | Formation professionnelle et scolaire"
              href={ROUTE_PRESTATIONS_COORDONNER_ENERGIE_DIGITAL_PERFORMANCE}
              background={coordonner.src}
            />
          </div>
        </div>
        <div className={styles.reverseBackground}>
          <div className={clsx(styles.references, styles.content)}>
            <h2>Nos références</h2>
            <p>
              Au cours des nombreuses années à travailler dans l&apos;industrie, nous avons pu développer un véritable
              savoir-faire restranscrit dans nos retours d&apos;expérience ci-dessous.
            </p>
            <References />
          </div>
        </div>
        <div className={clsx(styles.content, styles.approche)}>
          <h2>Notre approche</h2>
          <div>
            <h3>Expertise data et mesures énergétiques</h3>
            <p>Chez Colby industries nous considérons que l&apos;on ne maitrise que ce que l&apos;on mesure.</p>
            <Link href={ROUTE_APPROCHE_EXPERTISE_DATA}>Envie d&apos;en savoir plus ?</Link>
          </div>
          <div>
            <h3>Management de la donnée énergétique</h3>
            <p>
              Le management de la donnée énergétique c&apos;est transformer les données brutes en leviers
              d&apos;efficacité.
            </p>
            <Link href={ROUTE_APPROCHE_MANAGEMENT_DONNEE}>Envie d&apos;en savoir plus ?</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
