import Collapse from '@/components/collapse/Collapse';
import styles from './ISO50001.module.css';
import { Methodology } from '@/components/methodology/Methodology';
import Image from 'next/image';
import accompagnement from '@/assets/nos-prestations/accompagnement.png';
import Link from 'next/link';

export const ISO50001: React.FC = () => {
  return (
    <Collapse
      title="Norme ISO 50001"
      subtitle="Accompagnement à la mise en place d'un Système de Management de l'Energie"
      defaultOpen={false}
      titleTag="h2"
    >
      <div className={styles.content}>
        <div>
          <label>Objectif</label>
          <p>
            L&apos;objectif de l&apos;ISO 50001 est de guider les organismes dans une démarche structurée et continue
            d&apos;amélioration de leur performance énergétique, afin de réduire leurs consommations, leurs coûts et
            leurs émissions de gaz à effet de serre.
          </p>
        </div>
        <div>
          <label>Qu&apos;est-ce qu&apos;un Système de Management de l&apos;Énergie ?</label>
          <p>
            Un Système de Management de l&apos;Énergie (SMÉ) intègre la gestion active de l&apos;énergie dans les
            procédures et les systèmes opérationnels au quotidien. Cela permet aux organismes de mieux gérer leur
            consommation d&apos;énergie, de réaliser des économies sur les coûts d&apos;exploitation et d&apos;améliorer
            continuellement leur efficacité énergétique.
            <br />
            La gestion active se traduit par la mise en œuvre continue de mesures énergétiques.
          </p>
        </div>
        <div>
          <label>PLAN DO CHECK ACT</label>
          <Methodology />
        </div>
        <div>
          <label>Notre accompagnement</label>
          <div>
            <p>
              L&apos;accompagnement vers la certification de la norme ISO 50001 s&apos;étend entre 6 et 12 mois sur les
              étapes suivantes :
            </p>
            <Image src={accompagnement} alt="Notre accompagnement" width={640} height={415} />
          </div>
        </div>
        <div className={styles.accompagnement}>
          <label>Quels avantages ?</label>
          <div>
            <div>
              <label>Réglementaire</label>
              <span>Dispense de l&apos;audit énergétique obligatoire</span>
            </div>
            <div>
              <label>Managérial</label>
              <span>Structure efficacement la démarche</span>
            </div>
            <div>
              <label>Vie d&apos;entreprise</label>
              <span>Fédère les collaborateurs</span>
            </div>
            <div>
              <label>Environnemental</label>
              <span>Participe à la réduction des émissions de CO2</span>
            </div>
            <div>
              <label>Opérationnel</label>
              <span>Maitrise des coûts énergétique</span>
            </div>
          </div>
        </div>
        <div>
          <label>Qui peut mettre en place un SMÉ ?</label>
          <p>Toutes les entreprises peuvent mettre en place un Système de Management de l&apos;Énergie.</p>
        </div>
        <div>
          <label>La réglementation évolue</label>
          <div>
            <p className={styles.danger}>Réglementation a partir sur 1er octobre 2025</p>
            <p className={styles.center}>
              Si la consommation d&apos;énergie annuelle moyenne sur 3 ans est supérieure à{' '}
              <strong>
                23,6 GWh, nouvelle obligation de mise en place d&apos;un système de management de l&apos;Énergie
              </strong>{' '}
              avant le 11 octobre 2027.
              <br />
              <br />
              Le texte mentionnant cette réglementation est l&apos;article 25 de la LOI n° 2025-391 du 30 avril 2025 que
              l&apos;on peut retrouver{' '}
              <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051538879" target="_blank">
                ici
              </Link>
              . On notera la mention :{' '}
              <i>
                « 1° Mettre en œuvre un système de management de l&apos;énergie lorsque leur consommation annuelle
                moyenne d&apos;énergie finale est supérieure ou égale à 23,6 gigawattheures »
              </i>
              .
            </p>
          </div>
        </div>
        <div>
          <label>Aide au financement de la certification</label>
          <p>
            Porté par l&apos;ATEE (Association Technique de l&apos;Energie et de l&apos;Environnement), le programme
            PRO-SMEn permet l&apos;obtention d&apos;une prime conditionnée au passage de la certification ISO 50001. Un
            fond d&apos;environ 11 M€ est en effet dédié à l&apos;incitation pour la certification ISO 50001 par le{' '}
            <strong>versement d&apos;une prime égale à 20% des dépenses énergétiques annuelles (HT)</strong> des sites
            certifiés. L&apos;aide est plafonnée à 40 000 € HT.
            <br />
            Ce programme est actuellement ouvert jusqu&apos;au 31 décembre 2027, plus d&apos;informations sont
            directement disponibles sur le site suivant :{' '}
            <Link href="https://pro-smen.org/" target="_blank">
              Aide Pro-Smen
            </Link>
            .
          </p>
        </div>
      </div>
    </Collapse>
  );
};
