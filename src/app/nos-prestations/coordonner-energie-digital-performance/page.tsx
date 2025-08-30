import styles from '../common.module.css';
import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import commonStyles from '@/app/nos-prestations/common.module.css';
import Image from 'next/image';
import energyManager from '@/assets/nos-prestations/energy-manager.png';
import productOwner from '@/assets/nos-prestations/product-owner.png';
import animateur from '@/assets/nos-prestations/animateur.png';
import { clsx } from 'clsx';

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
        <Collapse
          title="Energy Manager"
          subtitle="Diagnostiquer, maitriser et améliorer la performance énergétique des usines"
          defaultOpen={false}
        >
          <div className={clsx(commonStyles.blocWithImage, commonStyles.blocWithImageReverse)}>
            <Image className={commonStyles.image} src={energyManager} width={460} height={340} alt="Energy Manager" />
            <div>
              <p>
                L&apos;Energy Manager connait et maitrise les consommations énergétiques du site industriel qu&apos;il
                gère. Cette fonction est régulièrement assurée par les équipes internes de l&apos;usine (maintenance,
                HSE, environnement, travaux neufs…) en plus des différentes tâches déjà menées !
              </p>
              <p>
                En fonction des profils et des ressources allouées, le management de l&apos;énergie peut être délaissé
                pour diverses raisons : manque de temps, manque de compétences… Nous pouvons vous accompagner sur cette
                thématique en allouant une ressource experte pour animer ces sujets et ainsi faire le lien entre chaque
                entité de l&apos;usine: des équipes de production à la direction. Les missions pouvant être menées sont
                variées et recoupent l&apos;ensemble de nos prestations en passant de la création du plan d&apos;action,
                au suivi des travaux, à la création et à l&apos;animation des reportings interne…
              </p>
              <div>
                Externaliser tout ou partie cette compétence c&apos;est s&apos;assurer :
                <br />
                <ul>
                  <li>D&apos;une régularité des suivis de vos indicateurs avec les bons outils</li>
                  <li>De l&apos;animation de votre politique d&apos;amélioration continue</li>
                  <li>De maitriser les enjeux réglementaires énergétique de votre site</li>
                  <li>
                    De profiter d&apos;une ressource bénéficiant d&apos;une expertise solide acquise auprès de
                    différents industriels
                  </li>
                  <li>
                    D&apos;allouer le bon niveau de ressources en phase avec vos enjeux, vos budgets et la taille de vos
                    équipes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Product Owner"
          subtitle="Coordonner vos projets Industrie 4.0 attenant aux sujets de l'énergie et de la décarbonation"
          defaultOpen={false}
        >
          <div className={commonStyles.blocWithImage}>
            <Image className={commonStyles.image} src={productOwner} width={460} height={340} alt="Product Owner" />
            <div>
              <p>
                En tant qu&apos;ingénieurs énergéticiens convaincus de l&apos;apport de la donnée dans une démarche de
                performance énergétique, nous avons développé une réelle expertise sur ces sujets. Nous sommes en mesure
                de vous accompagner dans la coordination de vos projets de monitoring énergétique.
              </p>
              <p>
                Le rôle du Product Owner est de faire le lien entre différentes équipes ne parlant pas forcément le
                langage: techniciens de maintenance, automaticiens, développeurs informatiques, contrôleurs de gestions,
                service environnement, direction de site, énergéticiens... La liste est longue et chaque personne peut
                et doit amener sa pierre à l&apos;édifice ! L&apos;objectif final étant que les outils déployés
                répondent aux besoins de chacun sans oublier l&apos;uniformisation des méthodes.
              </p>
              <p className={commonStyles.center}>
                <strong>
                  Un travail de chef d&apos;orchestre permettant de coconstruire une base solide pour structurer et
                  déployer sa propre démarche de performance énergétique durable.
                </strong>
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Animateur Performance Énergétique"
          subtitle="Former et sensibiliser les professionnels & scolaires aux enjeux de l’énergie dans l’industrie"
          defaultOpen={false}
        >
          <div className={clsx(commonStyles.blocWithImage, commonStyles.blocWithImageReverse)}>
            <Image
              className={commonStyles.image}
              src={animateur}
              width={460}
              height={340}
              alt="Animateur Performance Énergétique"
            />
            <div>
              <p>
                Le marché de l&apos;efficacité énergétique évolue très rapidement, que ce soit au niveau technologique,
                réglementaire ou économique, avec une demande croissante pour des solutions durables et rentables. Nous
                sommes convaincus que le développement et le déploiement à grande échelle des solutions
                d&apos;efficacité énergétique dans le milieu industriel passe par la formation, aussi bien au niveau
                professionnel que scolaire.
              </p>
              <p>
                C&apos;est pourquoi nous proposons des prestations de formation adaptées, conçues pour répondre aux
                besoins des entreprises, des établissements d&apos;enseignement, et des acteurs du territoire.
              </p>
              <p className={commonStyles.center}>
                <strong>
                  Notre objectif : transmettre des compétences concrètes, actualisées et directement applicables sur le
                  terrain, pour accompagner la transition énergétique de manière efficace et durable dans les
                  industries.
                </strong>
              </p>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
}
