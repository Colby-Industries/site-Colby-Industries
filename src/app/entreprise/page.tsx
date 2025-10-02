import styles from './page.module.css';
import corentin from '@/assets/entreprise/corentin.png';
import clement from '@/assets/entreprise/clement.png';
import inLogo from '@/assets/entreprise/in.png';
import target from '@/assets/entreprise/target.png';
import coverage from '@/assets/entreprise/coverage.png';
import Handshake from '@/assets/entreprise/handshake.svg';
import chain from '@/assets/entreprise/chain.png';
import afaq from '@/assets/entreprise/afaq.png';
import cmvp from '@/assets/entreprise/cmvp.png';
import job from '@/assets/entreprise/job.jpg';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Entreprise() {
  return (
    <main className={styles.page}>
      <section id="qui-sommes-nous" className={clsx(styles.section, styles.content)}>
        <h2 className={styles.sectionTitle}>Qui sommes-nous ?</h2>
        <div>
          <p className={styles.aboutUs}>
            Colby Industries a été cofondée en 2025 par Corentin Colle et Clément Halby. Forts de plus de dix années
            d&apos;expérience auprès de grands groupes énergéticiens, en France comme à l&apos;international, nous avons
            choisi de mettre notre savoir-faire au service des industriels de nos territoires. Ingénieurs de formation
            et convaincus que l&apos;efficacité énergétique est l&apos;un des leviers les plus puissants pour relever
            les défis environnementaux, nous accompagnons nos clients dans la conception et la mise en œuvre de
            solutions sur mesure, performantes et durables.
            <Image src={job} alt="Qui sommes nous ?" width={480} />
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
                Profil technique orienté terrain, Corentin accompagne les industries dans la mise en œuvre concrète de
                projets d&apos;efficacité énergétique avec une approche pragmatique centrée sur la faisabilité, le
                mesurage et la performance. Ingénieur diplômé de Polytech Montpellier en Énergétique et énergies
                renouvelables en 2015, il a ensuite travaillé en Suisse et en région lyonnaise avant de revenir en
                Auvergne et de co-fonder Colby Industries.
                <br />
                Spécialiste des utilités industrielles, du suivi de performance et des systèmes de pilotage il est
                certifié CMVP en 2021.
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
                Spécialiste de l&apos;amélioration continue et de l&apos;efficacité énergétique, Clément met son
                expertise technique et stratégique au service des industriels pour améliorer durablement leurs
                consommations à travers le suivi d&apos;indicateurs de performance énergétique. Fort de ses expériences
                en France et à l&apos;international, il a accompagné de nombreux sites à enjeux, de l&apos;audit à la
                mise en œuvre en passant diverses études.
                <br />
                Diplômé des Arts et Métiers et certifié ICA ISO 50001 / CMVP, il est également co-fondateur de Colby
                Industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={clsx(styles.reverseBackground)}>
        <section id="notre-positionnement" className={clsx(styles.section, styles.positioning, styles.content)}>
          <h2 className={styles.sectionTitle}>Notre positionnement</h2>
          <div>
            <h3>Colby Industries se met au service de votre performance énergétique industrielle.</h3>
            <div>
              <Image src={target} alt="" height={200} />
              <h4>Une structure agile, experte et proche du terrain</h4>
              <p>
                Notre taille est notre force : elle nous permet d&apos;intervenir avec réactivité, tout en vous
                garantissant l&apos;implication d&apos;un expert confirmé sur les thématiques énergétiques ciblées.
              </p>
            </div>
            <div>
              <Image src={coverage} alt="" height={200} />
              <h4>Une présence locale pour un ancrage territorial fort</h4>
              <p>
                Nous accompagnons principalement les industriels des régions Auvergne-Rhône-Alpes, Centre-Val de Loire
                et Île-de-France, au plus près de nos agences. Cette proximité géographique favorise une meilleure :
                tissu industriel, prestataires, partenaires publics, clubs d&apos;industriels...
              </p>
            </div>
            <div>
              <Handshake height={120} />
              <h4>Des partenariats solides et des moyens techniques autonomes</h4>
              <p>
                Nous collaborons avec des bureaux d&apos;études locaux et de grands groupe nationaux, en sous-traitance
                partielle ou totale. Nous disposons également de notre propre matériel de mesurage, ce qui nous permet
                de réaliser en toute autonomie les mesures nécessaires aux études d&apos;efficacité énergétique.
              </p>
            </div>
            <div>
              <Image src={chain} alt="" height={200} />
              <h4>Transmettre pour agir durablement</h4>
              <p>
                Convaincus que la transition énergétique passe par la montée en compétence, nous développons
                progressivement des formations dédiées à l&apos;efficacité énergétique, à destination des professionnels
                comme des publics scolaires.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section id="nos-qualifications" className={clsx(styles.section, styles.qualifications, styles.content)}>
        <h2 className={styles.sectionTitle}>Nos qualifications</h2>
        <div>
          <div>
            <h4>AFNOR</h4>
            <p>
              Colby Industries est qualifié selon la norme NF EN 16247-1 et NF EN 16247-3 qui définit les exigences, la
              méthodologie et les bonnes pratiques pour réaliser des audits énergétiques des procédés industriels.
            </p>
            <Image src={afaq} alt="" width={150} />
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
            <Image src={cmvp} alt="" width={180} />
          </div>
          <div>
            <h4>ICA ISO 50001</h4>
            <p>
              Clément est certifié auditeur ICA ISO 50001, cette certification lui permet de réaliser des audits de
              certification tierce partie pour le compte d&apos;organisme de certificateur accrédité COFRAC. Cette
              certification personnelle confirme le positionnement de Clément dans son expertise sur les Systèmes de
              Management de l&apos;Energie.
            </p>
            <label>Certification en cours</label>
          </div>
        </div>
      </section>
    </main>
  );
}
