import styles from './page.module.css';
import corentin from '@/assets/entreprise/corentin.png';
import clement from '@/assets/entreprise/clement.png';
import inLogo from '@/assets/entreprise/in.png';
import target from '@/assets/entreprise/target.png';
import coverage from '@/assets/entreprise/coverage.png';
import handshake from '@/assets/entreprise/handshake.png';
import chain from '@/assets/entreprise/chain.png';
import afnor from '@/assets/entreprise/afnor.png';
import afnor2 from '@/assets/entreprise/afnor2.png';
import cmvp from '@/assets/entreprise/cmvp.png';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Entreprise() {
  return (
    <main className={styles.page}>
      <section id="qui-sommes-nous" className={styles.section}>
        <h2 className={styles.sectionTitle}>Qui sommes-nous ?</h2>
        <div>
          <p>
            Colby Industries a été cofondée en avril 2025 par Corentin Colle et Clément Halby. Forts de plus de dix
            années d&apos;expérience auprès de grands groupes énergéticiens, en France comme à l&apos;international,
            nous avons choisi de mettre notre savoir-faire au service des industriels de nos territoires. Ingénieurs de
            formation et convaincus que l&apos;efficacité énergétique est l&apos;un des leviers les plus puissants pour
            relever les défis environnementaux, nous accompagnons nos clients dans la conception et la mise en œuvre de
            solutions sur mesure, performantes et durables.
          </p>
          <div className={styles.founders}>
            <div>
              <div className={styles.founderName}>
                <Link
                  href="https://www.linkedin.com/in/corentin-colle-6091abb7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Corentin COLLE</h3>
                  <Image src={inLogo} alt="LinkedIn logo" width={20} />
                </Link>
              </div>

              <Image src={corentin} alt="Corentin COLLE" className={styles.founderPicture} width={220} />
              <p className={styles.founderDescription}>
                Profil technique orienté terrain, Corentin accompagne les industriels dans la mise en œuvre concrète de
                projets d&apos;efficacité énergétique, avec une approche technique centrée sur la faisabilité, le
                mesurage et la performance. Ingénieur diplômé de Polytech Montpellier, fort de plus de 10 ans
                d&apos;expérience, notamment chez Engie en Suisse et GreenFlex à Lyon, avant de co-fonder Colby
                Industries. Spécialiste des utilités industrielles, du suivi de performance et des systèmes de pilotage,
                il est certifié CMVP.
              </p>
            </div>
            <div>
              <div className={styles.founderName}>
                <Link
                  href="https://www.linkedin.com/in/cl%C3%A9ment-halby-a31952aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Clément HALBY</h3>
                  <Image src={inLogo} alt="LinkedIn logo" width={20} />
                </Link>
              </div>
              <Image src={clement} alt="Clément HALBY" className={styles.founderPicture} width={220} />
              <p className={styles.founderDescription}>
                Spécialiste de la performance énergétique, Clément met son expertise technique et stratégique au service
                des industriels pour améliorer durablement leur performance énergétique. Il bénéficie de près de 10 ans
                d&apos;expérience en France et à l&apos;international, il a accompagné de nombreux sites à forts enjeux,
                de l&apos;audit à la mise en œuvre. Diplômé des Arts et Métiers et certifié ICA ISO 50001 / CMVP, il est
                également co-fondateur de Colby Industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="notre-positionnement" className={clsx(styles.section, styles.positioning)}>
        <h2 className={styles.sectionTitle}>Notre positionnement</h2>
        <div>
          <h3>Colby Industries se met au service de votre performance énergétique industrielle.</h3>
          <div>
            <h4>Une structure agile, experte et proche du terrain</h4>
            <p>
              Notre taille est notre force : elle nous permet d&apos;intervenir avec réactivité, tout en vous
              garantissant l&apos;implication d&apos;un expert confirmé sur les thématiques énergétiques ciblées.
            </p>
            <Image src={target} alt="" height={200} />
          </div>
          <div>
            <h4>Une présence locale pour un ancrage territorial fort</h4>
            <p>
              Nous accompagnons principalement les industriels des régions Auvergne-Rhône-Alpes, Centre-Val de Loire et
              Île-de-France, au plus près de nos agences. Cette proximité géographique favorise une meilleure : tissu
              industriel, prestataires, partenaires publics, clubs d&apos;industriels...
            </p>
            <Image src={coverage} alt="" height={200} />
          </div>
          <div>
            <h4>Des partenariats solides et des moyens techniques autonomes</h4>
            <p>
              Nous collaborons avec des bureaux d&apos;études locaux et de grands groupe nationaux, en sous-traitance
              partielle ou totale. Nous disposons également de notre propre matériel de mesurage, ce qui nous permet de
              réaliser en toute autonomie les mesures nécessaires aux études d&apos;efficacité énergétique.
            </p>
            <Image src={handshake} alt="" height={200} />
          </div>
          <div>
            <h4>Transmettre pour agir durablement</h4>
            <p>
              Convaincus que la transition énergétique passe par la montée en compétence, nous développons
              progressivement des formations dédiées à l&apos;efficacité énergétique, à destination des professionnels
              comme des publics scolaires.
            </p>
            <Image src={chain} alt="" height={200} />
          </div>
        </div>
      </section>

      <section id="nos-qualifications" className={clsx(styles.section, styles.qualifications)}>
        <h2 className={styles.sectionTitle}>Nos qualifications</h2>
        <div>
          <div>
            <h3>Nos qualifications métiers</h3>
            <div>
              <h4>AFNOR</h4>
              <p>
                Colby Industries est qualifié selon la norme NF EN 16247-1 et NF EN 16247-3 qui définit les exigences,
                la méthodologie et les bonnes pratiques pour réaliser des audits énergétiques des procédés industriels.
              </p>
            </div>
            <div>
              <Image src={afnor} alt="" width={200} />
            </div>
          </div>
          <div>
            <h3>Nos qualifications personnelles</h3>
            <div>
              <h4>ICA ISO 50001</h4>
              <p>
                Clément est certifié auditeur ICA ISO 50001, cette certification lui permet de réaliser des audits de
                certification tierce partie pour le compte d&apos;organisme de certificateur accrédité COFRAC. Cette
                certification personnelle confirme le positionnement de Clément dans son expertise sur les Systèmes de
                Management de l&apos;Energie.
              </p>
              <Image src={afnor2} alt="" width={200} />
            </div>
            <div>
              <h4>CMVP</h4>
              <p>
                Corentin et Clément sont tout les deux certifié CMVP® (Certification Professionnelle de Mesure et
                Vérification®) par l&apos;AEE (The Association of Energy Engineers). Un professionnel certifié de la
                mesure et de la vérification® est une personne qui gère ou applique des méthodes internationalement
                reconnues pour quantifier l&apos;impact des activités de gestion de l&apos;énergie sur la consommation
                d&apos;énergie (Protocole IPMVP). Ils appliquent les concepts fondamentaux de la vérification des
                performances et des économies.
              </p>
              <Image src={cmvp} alt="" width={200} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
