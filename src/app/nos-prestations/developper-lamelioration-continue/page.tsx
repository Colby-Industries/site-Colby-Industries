import commonStyles from '../common.module.css';
import { createBreadcrumbJsonLd } from '@/lib/structured-data';
import type { Metadata } from 'next';
import Claim from '@/components/claim/Claim';
import { ISO50001 } from '@/components/ISO50001/ISO50001';
import Collapse from '@/components/collapse/Collapse';
import Icon from '@/components/icon/Icon';
import clsx from 'clsx';
import ipe from '@/assets/nos-prestations/ipe.png';
import Image from 'next/image';
import { DevelopementEnergiesRenouvelables } from '@/components/developpement-energies-renouvelables/DevelopementEnergiesRenouvelables';

export const metadata: Metadata = {
  title: "Développer l'amélioration continue",
  description:
    'ISO 50001, indicateurs de performance énergétique (IPE) et pilotage opérationnel : amélioration continue orientée résultats.',
  alternates: { canonical: '/nos-prestations/developper-lamelioration-continue' },
};

export default function DevelopperAmeliorationContinue() {
  return (
    <section className={commonStyles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createBreadcrumbJsonLd([
            { name: 'Accueil', url: 'https://colby-industries.fr/' },
            {
              name: "Développer l'amélioration continue",
              url: 'https://colby-industries.fr/nos-prestations/developper-lamelioration-continue',
            },
          ]),
        }}
      />
      <h1>Développer l&apos;amélioration continue</h1>
      <div className={commonStyles.content}>
        <Claim
          title="Structurer, mesurer, comparer : l'amélioration continue au service de l'efficacité énergétique"
          description={
            <p>
              Grâce à une approche méthodique, nous vous aidons à transformer vos objectifs énergétiques en résultats
              concrets. Mise en place de référentiels comme l&apos;ISO 50001, création d&apos;indicateurs de performance
              (IPE), analyse comparative de vos installations : chaque levier est activé pour faire de l&apos;énergie un
              axe de progrès durable.
            </p>
          }
        />
        <ISO50001 />
        <Collapse
          title="Déploiement et suivi d'IPE"
          subtitle="Création et mise en place d'Indicateurs de Performance Énergétique"
          defaultOpen={false}
          titleTag="h2"
        >
          <div className={commonStyles.collapseContent}>
            <div className={commonStyles.labelAndBloc}>
              <label>Après le mesurage, le pilotage</label>
              <p>
                Nous construisons avec vous des <strong>indicateurs de performance énergétique</strong> sur mesure,
                pensés pour refléter la <strong>réalité de vos usages industriels</strong>, pas pour remplir un tableur.
                <br />
                Notre approche croise <strong>consommations, données process et facteurs influents</strong> pour vous
                donner une <strong>lecture juste et exploitable</strong> de votre performance.
                <br />
                Notre approche vise à structurer les <strong>bons indicateurs</strong>, avec un souci constant de
                lisibilité pour les équipes opérationnelles comme pour les directions.
              </p>
            </div>
            <div className={clsx(commonStyles.labelAndBloc, commonStyles.reverse)}>
              <div className={commonStyles.center}>
                <Icon type="target" size={120} />
              </div>
              <div>
                <label className={commonStyles.underline}>
                  ÉTAPE 1 : Cadrage des objectifs, des usages et du périmètre
                </label>
                <p>
                  Clarification du besoin: ISO 50001, pilotage énergie, audit réglementaire, plan de progrès,
                  valorisation CEE (IND-UT-134)
                  <br />
                  Définition des périmètres (atelier, utilité, bâtiment, ligne, équipement)
                  <br />
                  Identification des facteurs de variation : volume de production, météo, organisation, etc.
                </p>
                <p>
                  <em>
                    Nous nous appuyons sur la <strong>norme NF EN 17267</strong>, qui fournit une méthodologie
                    structurée pour la création d’IPE dans le secteur industriel.
                  </em>
                </p>
              </div>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <div className={commonStyles.center}>
                <Icon type="square" size={120} />
              </div>
              <div>
                <label className={commonStyles.underline}>
                  ÉTAPE 2 : Création d’indicateurs pertinents et contextualisés
                </label>
                <div>
                  <p>Élaboration d’IPE multi-niveaux :</p>
                  <ul>
                    <li>
                      <strong>Ratios de base</strong> : énergie par unité produite, par m², par cycle
                    </li>
                    <li>
                      <strong>Indicateurs fonctionnels</strong> : consommation à vide, en charge, à l’arrêt
                    </li>
                    <li>
                      <strong>Modèles multifactoriels</strong> : intégrant plusieurs variables explicatives
                    </li>
                    <li>
                      <strong>Analyse d’efficacité énergétique</strong> réelle (rendement, déperditions, dérives)
                    </li>
                  </ul>
                </div>
                <div>
                  <p>
                    Prise en compte des exigences de la fiche CEE IND-UT-134, pour permettre une éventuelle valorisation
                    financière des actions mises en place :
                  </p>
                  <ul>
                    <li>Indicateurs suivis dans le temps</li>
                    <li>Suivi régulier</li>
                    <li>Périmètre clairement défini</li>
                    <li>Plan d’actions associé</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={clsx(commonStyles.labelAndBloc, commonStyles.reverse)}>
              <div className={commonStyles.center}>
                <Icon type="wall" size={120} />
              </div>
              <div>
                <label className={commonStyles.underline}>ÉTAPE 3 : Mise en œuvre & plan d’actions</label>
                <p>Élaboration d’une feuille de route opérationnelle :</p>
                <ul>
                  <li>Structuration du suivi (outils simples ou intégrés)</li>
                  <li>Définition des fréquences, des responsabilités, des routines de pilotage</li>
                  <li>Préparation à un déploiement multisites ou à un outillage ultérieur</li>
                </ul>
                <p>
                  Identification des actions internes à engager et des besoins éventuels en partenaires techniques
                  (instrumentation, automatisation, outils numériques)
                </p>
              </div>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <div className={commonStyles.center}>
                <Image src={ipe} alt="" width={400} />
              </div>
              <div>
                <p>
                  Vision pragmatique et opérationnelle, adaptée aux réalités du terrain. Capacité à faire parler les
                  données sans complexifier les outils.
                  <br />
                  Indépendance vis-à-vis des prestataires et outils.
                </p>
                <p>
                  <strong>
                    Des IPE bien construits permettent de piloter la performance, justifier les actions et activer des
                    leviers financiers.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </Collapse>
        <DevelopementEnergiesRenouvelables />
      </div>
    </section>
  );
}
