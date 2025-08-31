import commonStyles from '../common.module.css';
import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import { ISO50001 } from '@/components/ISO50001/ISO50001';
import { DevelopementEnergiesRenouvelables } from '@/components/developpement-energies-renouvelables/DevelopementEnergiesRenouvelables';
import { Steps } from '@/components/steps/Steps';
import Icon from '@/components/icon/Icon';
import Link from 'next/link';
import { ROUTE_ENTREPRISE_QUALIFICATIONS } from '@/constants/routes';

export default function AccompagnerConformiteReglementaire() {
  return (
    <section className={commonStyles.page}>
      <h1>Accompagner vers la conformité réglementaire</h1>
      <div className={commonStyles.content}>
        <Claim
          title="Des évolutions réglementaires qui s'orientent vers la réduction des émissions de CO2 et le passage à l'action"
          description={
            <>
              <p>
                Face aux ambitions climatiques portées par la France (SNBC) et l&apos;Europe (Fit for 55),
                l&apos;industrie est appelée à réduire drastiquement ses émissions de gaz à effet de serre : -35%
                d&apos;ici 2030, jusqu&apos;à -81% en 2050.
              </p>
              <p>
                Pour répondre à ces objectifs, les entreprises doivent engager des démarches concrètes : audits
                énergétiques, mise en place de systèmes de management de l&apos;énergie, comptage, plans d&apos;actions…
              </p>
            </>
          }
        />
        <Collapse
          title="Audit énergétique"
          subtitle="Réalisation d'audit réglementaire des procédés industriels NF EN 16247-1 et NF EN 16247-3"
          titleTag="h2"
          defaultOpen={false}
        >
          <div className={commonStyles.collapseContent}>
            <div className={commonStyles.labelAndBloc}>
              <label>Objectif</label>
              <p>
                L&apos;objectif d&apos;un audit énergétique selon la norme NF EN 16247 est de fournir une analyse
                structurée, fiable et documentée des consommations énergétiques d&apos;un site industriel afin de
                cartographier les usages énergétiques et de mettre en évidence les gisements d&apos;économies
                d&apos;énergie.
              </p>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <label>Qu&apos;est-ce qu&apos;un audit énergétique ?</label>
              <p>
                C&apos;est une étude approfondie des flux d&apos;énergie au sein d&apos;un site, visant à comprendre
                comment l&apos;énergie est consommée, à repérer les sources de gaspillage, et à proposer des solutions
                concrètes pour améliorer l&apos;efficacité énergétique.
              </p>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <label>Méthodologie en 3 phases</label>
              <div className={commonStyles.center}>
                <Steps
                  className={commonStyles.center}
                  compact
                  steps={[
                    { title: 'Analyse documentaire' },
                    { title: 'Visite sur site et mesures' },
                    { title: 'Analyse et restitution' },
                  ]}
                />
              </div>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <label>L&apos;audit énergétique réglementaire</label>
              <div>
                <p>
                  L&apos;assujettissement à l&apos;audit énergétique réglementaire évolue.
                  <br />
                  L&apos;article L233-1 du code de l&apos;énergie prévoit, à compter du 01/10/2025, des évolutions
                  concernant l&apos;assujettissement des entreprises aux audits énergétiques réglementaires et à la mise
                  en place d&apos;un Système de Management de l&apos;Énergie.
                </p>
                <label>Réglementation jusqu&apos;au 30 Septembre 2025 :</label>
                <p>
                  L&apos;audit énergétique est obligatoire tous les 4 ans pour les entreprises selon un critère de
                  taille :
                </p>
                <div>
                  <span>
                    <Icon type="group" size={20} /> &gt; 250 salariés
                  </span>
                  <label>&nbsp; OU &nbsp;</label>
                  <span>
                    <Icon type="coins" size={20} />
                    &nbsp; CA &gt; 50M€ et bilan &gt; 43M€
                  </span>
                </div>
                <p>Entreprise au sens du SIREN | Les entreprises certifiées ISO 50001 sont exemptées de l&apos;audit</p>
                <p className={commonStyles.danger}>
                  <br />
                  Réglementation à partir du 1er octobre 2025 :
                </p>
                <p>
                  Changement des seuils d&apos;obligation d&apos;audit énergétique.
                  <br />
                  Critère de consommation finale uniquement par entreprise au sens du SIREN :
                </p>
                <p>
                  Si la consommation d&apos;énergie annuelle moyenne sur 3 ans est supérieure à{' '}
                  <strong>2,75 GWh, l&apos;audit énergétique réglementaire</strong>
                  est à réaliser avant le 11 octobre 2026.
                </p>
                <p>
                  Si la consommation d&apos;énergie annuelle moyenne sur 3 ans est supérieure à{' '}
                  <strong>
                    23,6 GWh, nouvelle obligation de mise en place d&apos;un système de management de l&apos;Énergie
                  </strong>
                  avant le 11 octobre 2027.
                </p>
                <p>
                  Les actions préconisées ayant un TRI inférieur à 5 ans doivent être mise œuvre ou l&apos;industriel
                  doit justifier de leur non-déploiement.
                </p>
              </div>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <label>Nos qualifications</label>
              <p>
                Colby Industries est qualifié par l&apos;Afnor NF EN 16247-1 et NF EN 16247-3 Procédés industriels.
                <br />
                <Link href={ROUTE_ENTREPRISE_QUALIFICATIONS}>En savoir plus</Link>
              </p>
            </div>
          </div>
        </Collapse>
        <ISO50001 />
        <Collapse
          title="Décret tertiaire & Décret BACS"
          subtitle="Support à la réponse aux décrets tertiaire et BACS"
          titleTag="h2"
          defaultOpen={false}
        >
          <div className={commonStyles.collapseContent}>
            <div className={commonStyles.labelAndBloc}>
              <label>Objectif</label>
              <p>
                Un objectif commun : améliorer la performance énergétique des bâtiments tertiaires.
                <br />
                Les décrets <strong>Tertiaire et BACS</strong> s&apos;inscrivent dans la stratégie nationale de
                réduction des consommations d&apos;énergie et des émissions de gaz à effet de serre. Ils imposent des
                actions concrètes aux acteurs du secteur tertiaire.
              </p>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <label>Ce qu&apos;il faut savoir</label>
              <div className={commonStyles.splitColumn}>
                <div>
                  <label className={commonStyles.underline}>
                    Décret Tertiaire : Réduction des consommations d&apos;énergie
                  </label>
                  <label>Qui est concerné ?</label>
                  <p>Tout bâtiment ou partie de bâtiment à usage tertiaire de plus de 1 000 m².</p>
                  <label>Ce qui est demandé</label>
                  <p>
                    Réduction progressive de la consommation d&apos;énergie finale :
                    <br />
                    -40 % d&apos;ici 2030
                    <br />
                    -50 % d&apos;ici 2040
                    <br />
                    -60 % d&apos;ici 2050
                    <br />
                    Ou valeur absolue
                  </p>
                  <p>
                    Choix d&apos;une <strong>année de référence Déclaration annuelle obligatoire</strong> sur la
                    plateforme OPERAT (ADEME).
                  </p>
                </div>
                <div>
                  <label className={commonStyles.underline}>Décret BACS : Automatiser pour mieux piloter</label>
                  <label>Qui est concerné ?</label>
                  <p>
                    Bâtiments tertiaires équipés d’un système de chauffage, de climatisation ou de ventilation :
                    <br />
                    &gt; 290 kW → obligation au 1er janvier 2025
                    <br />
                    &gt; 70 kW → obligation au 1er janvier 2027
                  </p>
                  <label>Ce qui est demandé</label>
                  <p>
                    Installer un <strong>système d’automatisation et de contrôle du bâtiment (GTB)</strong>.
                    <br />
                    Le système doit :
                    <br />
                    - Surveiller et enregistrer les consommations
                    <br />
                    - Analyser les données
                    <br />
                    - Ajuster automatiquement les équipements
                    <br />- Permettre une exploitation énergétique optimisée
                  </p>
                </div>
              </div>
            </div>
            <div className={commonStyles.labelAndBloc}>
              <label>Méthodologie en 3 phases</label>
              <div>
                <Steps
                  compact
                  steps={[
                    {
                      title: 'Diagnostic et conformité réglementaire',
                      items: [
                        'Identification du périmètre assujetti',
                        'Analyse des consommations énergétique',
                        "Définition de l'année de référence",
                        'Évaluation de la conformité vis-à-vis du décret BACS',
                      ],
                    },
                    {
                      title: "Construction de la trajectoire et plan d'actions",
                      items: [
                        "Élaboration d'une trajectoire décret Tertiaire",
                        "Priorisation des actions d'économie d'énergie",
                        "Préconisation de solutions d'automatisation (GTB)",
                      ],
                    },
                    {
                      title: 'Suivi, déclaration et valorisation',
                      items: [
                        'Aide à la déclaration sur la plateforme OPERAT',
                        "Mise en place d'indicateurs de suivi",
                        'Suivi des gains, mise à jour de la feuille de route',
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </Collapse>
        <DevelopementEnergiesRenouvelables />
      </div>
    </section>
  );
}
