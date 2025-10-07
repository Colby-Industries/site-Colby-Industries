import styles from './page.module.css';
import { createBreadcrumbJsonLd } from '@/lib/structured-data';
import type { Metadata } from 'next';
import Image from 'next/image';
import monitoring from '@/assets/notre-approche/monitoring.png';
import restitution from '@/assets/notre-approche/restitution.png';
import ISO50001 from '@/assets/notre-approche/ISO50001.png';
import { Steps } from '@/components/steps/Steps';

export const metadata: Metadata = {
  title: 'Management de la donnée',
  description:
    "Structuration du monitoring, restitution d'études et tableaux de bord ISO 50001 pour une performance énergétique pilotée.",
  alternates: { canonical: '/notre-approche/management-de-la-donnee' },
};

export default function ManagementDeLaDonnee() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createBreadcrumbJsonLd([
            { name: 'Accueil', url: 'https://colby-industries.fr/' },
            {
              name: 'Management de la donnée',
              url: 'https://colby-industries.fr/notre-approche/management-de-la-donnee',
            },
          ]),
        }}
      />
      <h1>Management de la donnée</h1>
      <section>
        <h2>Définition de la stratégie de monitoring</h2>
        <div>
          <p>Un accompagnement de la conception à l&apos;exploitation.</p>
          <p>
            <strong>CONCEVOIR</strong> : Tout commence par l&apos;expression du besoin afin de comprendre vos enjeux.
            Quelle est la finalité de votre besoin de monitoring ? Quel <strong>budget</strong> y consacrer en CAPEX
            puis OPEX ? Quelles sont les stratégies corporate d&apos;harmonisation de la démarche ? Autant de questions
            essentielles à cadrer en amont de se lancer. Une fois ces éléments appréhendés, nous pouvons alors les
            retranscrire au travers des différents éléments techniques : définition du <strong>plan de comptage</strong>{' '}
            adapté (énergétique, contextuel, données de production) pour finalement les partager au travers des{' '}
            <strong>cahier des charges techniques</strong> (matériel, soft...).
            <br />
            <strong>ACCOMPAGNER</strong> : Nous assurons ensuite la mise en place du projet pour un{' '}
            <strong>gain de temps</strong> pour vos ressources internes associé à notre{' '}
            <strong>connaissance pointue des acteurs</strong>. Résultat, consultation et co-sélection des entreprises,
            suivi des travaux en assistance à maîtrise d&apos;ouvrage et réception des installations conforme aux
            exigences du CCTP.
            <br />
            <strong>EXPLOITER</strong> : Enfin, nous vous accompagnons à la valorisation les résultats grâce au montage
            de dossiers CEE <strong>IND-UT-134</strong>, à l&apos;exploitation des données de comptage et au pilotage
            continu de la performance énergétique avec un <strong>Energy Manager</strong>.
          </p>
          <p>
            Un accompagnement complet et adapté au besoin, du cadrage initial à l&apos;exploitation des données, pour
            transformer vos projets en véritables leviers de performance.
          </p>
        </div>
        <div>
          <Image src={monitoring} alt="monitoring" width={450} />
          <Steps
            compact
            steps={[
              {
                title: 'Concevoir',
              },
              {
                title: 'Accompagner',
              },
              {
                title: 'Exploiter',
              },
            ]}
          />
        </div>
      </section>
      <section>
        <h2>Restitution d&apos;étude par via des outils de data visualisation</h2>
        <div>
          <p>Une restitution claire et exploitable de nos études grâce à des outils de data visualisation.</p>
          <p>
            <strong>MESURER</strong> : Quelles consommations mesurer ? Quels outils ? Combien de temps ? Nous savons
            vous accompagner pour mettre en avant les consommations d&apos;énergie de vos usages ou process. Avec nos
            propres solutions de comptage temporaire, nous mettons à votre disposition du comptage énergétique ou de
            contextualisation, simples et non intrusives.
            <br />
            <strong>ANALYSER</strong> : Comment analyser cette valeur mesurée et en faire ressortir des informations
            importantes ? Nous comparons, croisons et corrigeons les données afin d&apos;identifier avec précision les
            axes d&apos;amélioration. Cette étape d&apos;analyse se veut dynamique, des sessions de travail avec les
            équipes internes sont organisées afin de comprendre ensemble les comportements observés et coconstruire les
            solutions envisagées.
            <br />
            <strong>IDENTIFIER</strong> L&apos;analyse détaillée est présentée via des outils de data visualisation,
            facilitant la compréhension et l&apos;appropriation. Graphique semaine type, analyse de puissance 10 min,
            cartographie énergétique de l&apos;usage et autres indicateurs autant d&apos;éléments permettant de
            structurer un plan d&apos;actions chiffré, précis et pragmatique.
          </p>
          <p>
            Les données sont fournies à l&apos;issue de l&apos;étude, pour garantir transparence et autonomie dans
            l&apos;appropriation des résultats. Une approche qui transforme la donnée brute en décisions concrètes et en
            leviers d&apos;action mesurables.
          </p>
        </div>
        <div>
          <Image src={restitution} alt="restitution" width={450} />
          <Steps
            compact
            steps={[
              {
                title: 'Mesurer',
              },
              {
                title: 'Analyser',
              },
              {
                title: 'Identifier',
              },
            ]}
          />
        </div>
      </section>
      <section>
        <h2>Co-construction de tableaux de bords ISO 50001 pour suivi d&apos;IPE</h2>
        <div>
          <p>
            Nous accompagnons vous accompagnons dans la co-construction de tableaux de bord conformes à l&apos;ISO 50001
            pour le suivi de leurs indicateurs.
          </p>
          <p>
            <strong>STRUCTURER</strong> : Quels sont les indicateurs en place ? A qui sont-ils destinés ? D&apos;où
            proviennent les données ? Sont-ils appropriés ? Cette étape de structuration est essentielle pour la
            compréhension des besoins en indicateurs, du choix des supports et visuels pour qu&apos;ils soient adaptés à
            leurs utilisations finales. Nous coconstruisons ensuite lors d&apos;ateliers avec les parties intéressées la
            mise en forme des IPE en fonction de la complexité de l&apos;organisation et de leurs finalités.
            <br />
            <strong>EVALUER</strong> : Dérive ou juste un évènement prévu impactant la consommation ? Cette étape
            d&apos;évaluation de la performance énergétique se tient conjointe avec les équipes concernées. Nous vous
            aidons à mettre en avant l&apos;impact du fonctionnement de votre site à travers les indicateurs.
            <br />
            <strong>COMMUNIQUER</strong> : Choisir la bonne périodicité de communication, les bons canaux de diffusion
            afin que les tableaux de bords assurent la diffusion des résultats, la remontée d&apos;informations auprès
            de la direction et la sensibilisation des équipes.
          </p>
          <p>
            Des tableaux de bord conçus avec vous et pour vos parties intéressées, pour piloter efficacement la
            performance énergétique et mobiliser l&apos;ensemble de l&apos;organisation.
          </p>
        </div>
        <div>
          <Image src={ISO50001} alt="Tableaux de bords ISO50001" width={450} />
          <Steps
            compact
            steps={[
              {
                title: 'Structurer',
              },
              {
                title: 'Evaluer',
              },
              {
                title: 'Communiquer',
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
