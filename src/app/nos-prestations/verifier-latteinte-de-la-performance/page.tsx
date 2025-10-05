import styles from '../common.module.css';
import { createBreadcrumbJsonLd } from '@/lib/structured-data';
import type { Metadata } from 'next';

import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import commonStyles from '@/app/nos-prestations/common.module.css';
import Image from 'next/image';
import commissioning from '@/assets/nos-prestations/commissioning.png';
import analyseApprofondie from '@/assets/nos-prestations/analyse-approfondie.png';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: "Vérifier l'atteinte de la performance énergétique",
  description:
    "Commissioning énergie, IPMVP et analyses approfondies : mesurer, vérifier et garantir l'impact des projets.",
  alternates: { canonical: '/nos-prestations/verifier-latteinte-de-la-performance' },
};

export default function VerifierLatteinteDeLaPerformance() {
  return (
    <section className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createBreadcrumbJsonLd([
            { name: 'Accueil', url: 'https://colby-industries.fr/' },
            {
              name: "Vérifier l'atteinte de la performance énergétique",
              url: 'https://colby-industries.fr/nos-prestations/verifier-latteinte-de-la-performance',
            },
          ]),
        }}
      />
      <h1>Vérifier l&apos;atteinte de la performance énergétique</h1>
      <div className={styles.content}>
        <Claim
          title="Mesurer, vérifier, garantir : la performance énergétique objectivée selon les standards industriels"
          description={
            <>
              <p>
                Notre méthodologie basée sur le protocole IPMVP a fait ses preuves et permet de s&apos;assurer que les
                gains escomptés sont bien constatés post-projet tout en tenant compte des conditions réelles
                d&apos;exploitation des installations.
              </p>
              <p>
                En complément, l&apos;analyse énergétique approfondie des systèmes neufs ou existants permet la
                compréhension des possibles divergences entre théorie et pratique et ainsi de corriger les défaillances
                identifiées.
              </p>
            </>
          }
        />
        <Collapse
          title="Commissioning énergie des installations & IPMVP"
          subtitle="Valider l'impact énergétique, carbone et financier de vos projets"
          defaultOpen={false}
          titleTag="h2"
        >
          <div className={commonStyles.blocWithImage}>
            <Image
              className={commonStyles.image}
              src={commissioning}
              width={460}
              height={340}
              alt="Analyse approfondie des installations techniques"
            />
            <div>
              <p>
                Le <strong>protocole IPMVP (International Performance Measurement and Verification Protocol</strong> –
                Evo World) est aujourd&apos;hui la référence pour mesurer et vérifier les économies d&apos;énergie
                réalisées après un projet d&apos;efficacité énergétique. Dans l&apos;industrie, son application permet
                de comparer objectivement la situation réelle post-travaux à une situation de référence, en neutralisant
                les effets de contexte (production, météo…). Cette rigueur méthodologique est essentielle pour garantir
                la crédibilité des gains affichés, qu&apos;ils soient énergétiques, carbone ou financiers.
              </p>
              <p>
                Dans le cadre des <strong>CEE spécifiques</strong> ou des subventions{' '}
                <strong>Fonds Chaleur de l&apos;ADEME</strong>, l&apos;IPMVP est souvent exigé pour{' '}
                <strong>justifier les économies auprès du PNCEE et de l&apos;Etat post période de mesurage</strong>.
                Cette étape est cruciale car elle permet alors le déblocage du reste à payer des subventions
                prévisionnelles. En amont, il est donc capital d&apos;anticiper ces éléments et d&apos;établir un plan
                de mesurage abouti ainsi que des modèles mathématiques fiables pour éviter la non-obtention partielle ou
                totale des aides demandées.
              </p>
              <p>
                L&apos;intérêt dépasse le simple contrôle du retour sur investissement : c&apos;est un levier
                stratégique pour piloter durablement les consommations, respecter les trajectoires bas carbones, et
                valoriser les démarches environnementales dans les bilans RSE ou extra-financiers.
              </p>
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Analyse approfondie des installations techniques"
          subtitle="Identifier, comprendre puis améliorer vos utilités & process"
          defaultOpen={false}
          titleTag="h2"
        >
          <div className={clsx(commonStyles.blocWithImage, commonStyles.blocWithImageReverse)}>
            <Image
              className={clsx(commonStyles.image, commonStyles.imageVertical)}
              src={analyseApprofondie}
              width={460}
              height={340}
              alt="Analyse approfondie des installations techniques"
            />
            <div>
              <p>
                Dans les installations industrielles complexes et énergivores, souvent vieillissantes, une régulation
                gérée par un automate vétuste « boite noire » est l&apos;une des principales causes de surconsommation.
                Vannes toujours ouvertes, boucles de régulation mal paramétrées, PID des automates non optimisés,
                temporisations absentes ou mal configurées : autant de petits{' '}
                <strong>dysfonctionnements invisibles</strong> qui, cumulés, entraînent des{' '}
                <strong>pertes significatives</strong> d&apos;énergie. Ces écarts passent généralement inaperçus dans le
                quotidien de l&apos;exploitation, d&apos;où l&apos;intérêt d&apos;une analyse énergétique approfondie
                couplée à une campagne de mesure.
              </p>
              <p>
                En instrumentant les systèmes, notre objectif est de{' '}
                <strong>valider le mode de fonctionnement réel par rapport au fonctionnement théorique</strong> ou
                attendu. L&apos;étude fine des régulations permet de cibler des{' '}
                <strong>actions à fort retour sur investissement</strong> : reparamétrage des automates pilotant la
                cascade de production, installation de vannes motorisées pilotées, optimisation des séquences de
                démarrage/arrêt, etc. Ces ajustements, souvent peu coûteux, peuvent générer des économies importantes
                sans modifier l&apos;outil de production. En résumé,{' '}
                <strong>
                  la mesure ne sert pas qu&apos;à constater : elle révèle, corrige, et guide la rénovation
                </strong>
                .
              </p>
              <p>Ces analyses font échos aux accompagnements que nous proposons sur les analyses fonctionnelles ici.</p>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
}
