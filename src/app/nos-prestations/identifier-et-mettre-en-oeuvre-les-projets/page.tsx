import commonStyles from '../common.module.css';
import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import Image from 'next/image';
import etude from '@/assets/nos-prestations/etude.png';
import analyse from '@/assets/nos-prestations/analyse.png';
import assistance from '@/assets/nos-prestations/assistance.png';
import { clsx } from 'clsx';

export default function IdentifierMettreEnOeuvreLesProjets() {
  return (
    <section className={commonStyles.page}>
      <h1>Identifier et mettre en oeuvre les projets</h1>
      <div className={commonStyles.content}>
        <Claim
          title="De l'idée à l'impact concret: vos projets d'efficacité énergétique, maîtrisés de bout en bout."
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
        <Collapse
          title="Etudes énergétiques"
          subtitle="De l'étude d'opportunité aux études d'avant projet"
          defaultOpen={false}
        >
          <div className={commonStyles.blocWithImage}>
            <Image className={commonStyles.image} src={etude} width={460} height={340} alt="Etudes énergétiques" />
            <div>
              <p>
                En fonction de la maturité de vos plans d&apos;action nous pouvons vous accompagner de l&apos;audit
                général jusqu&apos;aux études d&apos;avant projets. Colby Industries est qualifié par l&apos;AFNOR NF EN
                16247-1 et NF EN 16247-3, cette distinction permet à une partie de nos études d&apos;être financée en
                partie par l&apos;ADEME entre 30 et 80% en fonction de la taille de votre entreprise.
              </p>
              <p>
                Quelques exemples ci dessous d&apos;études subventionnées. La liste complète est disponible ici sur le
                site de l&apos;ADEME.
              </p>
              <span>
                <p>
                  Études de faisabilité de performance énergétique ou de décarbonation d&apos;entreprises industrielles.
                </p>
                <p>Études de faisabilité pour l&apos;installation de récupération de chaleur fatale.</p>
              </span>
              <p>
                A la suite de cette première phase d&apos;étude visant à valider la viabilité technico-financière du
                projet nous vous accompagnons dans les études approfondies jusqu&apos;à la mise en œuvre du projet.
              </p>
              <p>
                Le périmètre des études menées peut être aussi bien au niveau des utilités que du process, notre
                approche data-driven nous permet de comprendre finement les enjeux énergétiques de vos installations et
                ainsi intervenir sur l&apos;ensemble de votre usine.
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Analyses fonctionnelles"
          subtitle="Le pilotage des installations, premier levier de la performance énergétique"
          defaultOpen={false}
        >
          <div className={clsx(commonStyles.blocWithImage, commonStyles.blocWithImageReverse)}>
            <Image
              className={commonStyles.image}
              src={analyse}
              width={460}
              height={340}
              alt="Analyses fonctionnelles"
            />
            <div>
              <p>
                Les nouveaux projets d&apos;efficacité énergétique présentent une complexité grandissante: récupération
                de chaleur, appoint en électrification, stockage thermique, flexibilité liée aux conditions tarifaires
                du marché de l&apos;énergie, engagement d&apos;enlèvement de chaleur, équilibrage des systèmes, quotas
                carbone… La liste peut être longue ! L&apos;automatisme prend et doit prendre une place prépondérante
                dans la gestion de ces systèmes. La meilleure des technologies n&apos;atteindra les performances
                escomptées que si le pilotage est au niveau.
              </p>
              <p>
                Chez Colby Industries, nous vous accompagnons dans la rédaction des Analyses Fonctionnelles sur la
                brique performance énergétique afin de s&apos;assurer que le pilote de votre installation sera à la
                hauteur de la performance de vos équipements.
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Assistance maitrise d'ouvrage performance énergétique"
          subtitle="Assurer la continuité du suivi entre les études et la réception des travaux"
          defaultOpen={false}
        >
          <div className={commonStyles.blocWithImage}>
            <Image
              className={commonStyles.image}
              src={assistance}
              width={323}
              height={430}
              alt="Assistance maitrise d'ouvrage performance énergétique"
            />
            <div>
              <p>
                En phase de travaux, nous sommes en mesure de vous accompagner dans le rôle d&apos;assistance à maitrise
                d&apos;ouvrage. Ayant été impliqué sur l&apos;ensemble de la phase amont, nous nous assurons de la bonne
                continuité des travaux par rapport aux études menées. Les aléas et modifications en cours de chantier
                sont qualifiées et quantifiées afin d&apos;évaluer par exemple : Les potentielles dégradations de
                performance par rapport aux enjeux initiaux L&apos;impact financier de ces évolutions (OPEX, Aides CEE,
                Taux de couverture, Engagements ADEME…).
              </p>
              <p>
                Nous intervenons en support du maître d&apos;ouvrage, ainsi le dimensionnement de cet accompagnement est
                réalisé sur mesure en fonction de vos besoins. La bonne définition de notre accompagnement vous permet
                de bénéficier au besoin d&apos;une ressource experte pour vous aider à conduire vos travaux en cas de
                ressources internes limitées.
              </p>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
}
