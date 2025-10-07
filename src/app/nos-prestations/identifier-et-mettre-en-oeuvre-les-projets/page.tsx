import commonStyles from '../common.module.css';
import styles from './styles.module.css';
import { createBreadcrumbJsonLd } from '@/lib/structured-data';
import type { Metadata } from 'next';
import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import Image from 'next/image';
import etude from '@/assets/nos-prestations/etude.png';
import analyse from '@/assets/nos-prestations/analyse.png';
import assistance from '@/assets/nos-prestations/assistance.png';
import { clsx } from 'clsx';
import Link from 'next/link';
import { ROUTE_ENTREPRISE_QUALIFICATIONS } from '@/constants/routes';

export const metadata: Metadata = {
  title: 'Identifier et mettre en œuvre les projets',
  description:
    "Études énergétiques, analyses fonctionnelles, assistance à maitrise d'ouvrage : du cadrage à la réception des travaux.",
  alternates: { canonical: '/nos-prestations/identifier-et-mettre-en-oeuvre-les-projets' },
};

export default function IdentifierMettreEnOeuvreLesProjets() {
  return (
    <section className={commonStyles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createBreadcrumbJsonLd([
            { name: 'Accueil', url: 'https://colby-industries.fr/' },
            {
              name: 'Identifier et mettre en œuvre les projets',
              url: 'https://colby-industries.fr/nos-prestations/identifier-et-mettre-en-oeuvre-les-projets',
            },
          ]),
        }}
      />
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
          titleTag="h2"
        >
          <div className={commonStyles.blocWithImage}>
            <Image className={commonStyles.image} src={etude} width={460} height={340} alt="Etudes énergétiques" />
            <div>
              <p>
                En fonction de la maturité de vos plans d&apos;action nous pouvons vous accompagner de l&apos;audit
                général jusqu&apos;aux études d&apos;avant projets. Colby Industries est{' '}
                <Link href={ROUTE_ENTREPRISE_QUALIFICATIONS}>qualifié</Link> par l&apos;AFNOR NF EN 16247-1 et NF EN
                16247-3, cette distinction permet à une partie de nos études d&apos;être{' '}
                <strong>financée partiellement par l&apos;ADEME</strong> entre 30 et 80% en fonction de la taille de
                votre entreprise.
              </p>
              <p>
                Quelques exemples ci dessous d&apos;études subventionnées. La liste complète est disponible sur le site
                de{' '}
                <Link href="https://agir.ademe.fr/" target="_blank">
                  l&apos;ADEME.
                </Link>
              </p>
              <span className={styles.studies}>
                <p>
                  <Link
                    href="https://agir.ademe.fr/aides-financieres/2025/etudes-de-faisabilite-de-performance-energetique-ou-de-decarbonation"
                    target="_blank"
                  >
                    Études de faisabilité de performance énergétique ou de décarbonation d&apos;entreprises
                    industrielles.
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://agir.ademe.fr/aides-financieres/2025/etudes-de-faisabilite-pour-linstallation-de-recuperation-de-chaleur-fatale"
                    target="_blank"
                  >
                    Études de faisabilité pour l&apos;installation de récupération de chaleur fatale.
                  </Link>
                </p>
              </span>
              <p>
                A la suite de cette première phase d&apos;étude visant à valider la{' '}
                <strong>viabilité technico-financière</strong> du projet nous vous accompagnons dans les études
                approfondies jusqu&apos;à la mise en œuvre.
              </p>
              <p>
                Le périmètre des études menées peut être aussi bien{' '}
                <strong>au niveau des utilités que du process</strong>, notre approche data-driven nous permet de
                comprendre finement les enjeux énergétiques de vos installations et ainsi d&apos;intervenir sur
                l&apos;ensemble de votre usine.
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Analyses fonctionnelles"
          subtitle="Le pilotage des installations, premier levier de la performance énergétique"
          defaultOpen={false}
          titleTag="h2"
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
                carbone… La liste peut être longue !{' '}
                <strong>L&apos;automatisme prend et doit prendre une place prépondérante</strong> dans la gestion de ces
                systèmes. La meilleure des technologies n&apos;atteindra les performances escomptées que si le pilotage
                est au niveau.
              </p>
              <p>
                Chez Colby Industries, nous vous accompagnons dans la rédaction des Analyses Fonctionnelles sur la
                brique performance énergétique afin de s&apos;assurer que{' '}
                <strong>le pilote de votre installation sera à la hauteur de la performance de vos équipements</strong>.
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Assistance maitrise d'ouvrage performance énergétique"
          subtitle="Assurer la continuité du suivi entre les études et la réception des travaux"
          defaultOpen={false}
          titleTag="h2"
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
              <div>
                <p>
                  En phase de travaux, nous sommes en mesure de vous accompagner dans le rôle d&apos;assistance à
                  maitrise d&apos;ouvrage. Ayant été impliqués sur l&apos;ensemble de la phase amont, nous nous assurons
                  de <strong>la bonne continuité des travaux par rapport aux études menées</strong>. Les aléas et
                  modifications en cours de chantier sont qualifiées et quantifiées afin d&apos;évaluer par exemple :
                </p>
                <ul>
                  <li>Les potentielles dégradations de performance par rapport aux enjeux initiaux</li>
                  <li>
                    L&apos;impact financier de ces évolutions (OPEX, Aides CEE, Taux de couverture, Engagements ADEME…).
                  </li>
                </ul>
              </div>

              <p>
                Nous intervenons en support du maître d&apos;ouvrage, ainsi le dimensionnement de cet{' '}
                <strong>accompagnement est réalisé sur mesure en fonction de vos besoins</strong>. La bonne définition
                de notre accompagnement vous permet de bénéficier au besoin d&apos;une{' '}
                <strong>ressource experte</strong> pour vous aider à conduire vos travaux en cas de ressources internes
                limitées.
              </p>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
}
