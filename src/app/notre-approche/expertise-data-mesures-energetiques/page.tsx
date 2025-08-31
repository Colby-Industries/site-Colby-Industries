import styles from './page.module.css';
import Icon from '@/components/icon/Icon';
import { Card } from '@/components/card/Card';

export default function ExpertiseDataMesuresEnergetiques() {
  return (
    <section className={styles.page}>
      <div className={styles.topContainer}>
        <h1>Expertise data & mesures énergétiques</h1>
        <div>
          <Icon type="measurements" size={180} />
        </div>
        <div>
          <p>
            <strong>
              La mesure des différents vecteurs énergétiques et leur contextualisation fait partie des piliers de Colby
              Industries.
            </strong>
          </p>
          <p>
            Nous avons développé une expertise aboutie sur cette thématique afin de s&apos;assurer que les données
            d&apos;entrée de nos projets soient basées sur les conditions réelles d&apos;exploitation des installations.
          </p>
          <p>
            Nous privilégions la mesure indirecte afin de limiter autant que possible les interactions avec les équipes
            de l&apos;usine. Nos équipements remontent l&apos;ensemble des informations sur notre cloud en total
            autonomie et nous permettent de surveiller à distance le bon déroulé des campagnes de mesure. En fonction
            des besoins du projet et de votre maturité de comptage nous proposerons au besoin une approche mesurage
            dédiée après la visite de vos installations.
          </p>
          <p>
            La consommation d&apos;énergie seule est un premier pas vers la performance énergétique, elle se doit
            néanmoins d&apos;être rapidement contextualisée que ce soit par la production ou bien les facteurs
            influents. Cette contextualisation permet alors la création d&apos;indicateurs précis sur lesquels il est
            pertinent de se baser pour construire son plan d&apos;action.
          </p>
        </div>
      </div>
      <div className={styles.cardsAndText}>
        <h2>Générer les données énergétiques pour cartographier les flux d&apos;énergie.</h2>
        <div>
          <div>
            <Card
              title="Electricité BT"
              icon="electricity"
              text={
                <p>
                  230 - 400V
                  <br />
                  Mesure à la seconde et intégration des Cos Phi.
                </p>
              }
            />
            <Card
              title="Hydraulique"
              icon="water"
              text={
                <p>
                  DN15 – DN300
                  <br />
                  Mesure à la seconde en débit et flux thermique.
                </p>
              }
            />
            <Card title="Air comprimé" icon="air" text={<p>Sur tuyauterie flexible, dédié aux analyses process.</p>} />
          </div>
          <div>
            <p>
              La cartographie de ces flux d&apos;énergie est une première étape pour identifier et qualifier les profils
              de consommations de vos process & utilités.
            </p>
            <p>
              L&apos;installation de notre matériel est simple et rapide, nous avons fait le choix d&apos;investir dans
              un nombre notable d&apos;équipements de comptage vous permettant alors d&apos;évaluer la coactivité de vos
              installations.
            </p>
            <p>
              <strong>Le profil de puissance est beaucoup explicite que la simple consommation d&apos;énergie.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardsAndText}>
        <h2>Intégrer les données existantes pour comprendre les installations.</h2>
        <div>
          <div>
            <Card
              title="Signaux Analogiques"
              icon="signals"
              text={<p>0-10V, 4-20mA la retranscription de ces signaux est une mine d&apos;or d&apos;informations.</p>}
            />
            <Card
              title="Signal impulsionnel"
              icon="signal"
              text={<p>Faites parler vos compteurs existants pour suivre les profils de puissance.</p>}
            />
            <Card
              title="Entrée TOR"
              icon="signal"
              text={<p>Suivi des changements d&apos;états, idéal pour créer les premiers KPI.</p>}
            />
          </div>
          <div>
            <p>
              Les différents signaux existants émis ou reçus par vos compteurs, automates, sondes, vannes sont une
              véritable source d&apos;informations!
            </p>
            <p>
              La mesure indirecte est en général simple à mettre en œuvre et se révèle très efficace pour comprendre les
              régulations, vérifier le bon fonctionnement des PID, estimer les enjeux énergétiques d&apos;un fluide
              (vapeur, air comprimé...).
            </p>
            <p>
              <strong>La donnée est disponible il ne reste plus qu&apos;à savoir l&apos;exploiter.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardsAndText}>
        <h2>Contextualiser vos consommations d&apos;énergie par vos données de production.</h2>
        <div>
          <div>
            <Card
              title="Approche indirecte"
              icon="path"
              text={<p>Un moteur, un signal peuvent être utiliser pour qualifier l&apos;état de la production.</p>}
            />
            <Card
              title="Approche directe"
              icon="arrows"
              text={
                <p>Compteurs de pièces ou de batch, détection pour qualifier l&apos;état ou le volume de production.</p>
              }
            />
            <Card
              title="Export données ERP"
              icon="datacenter"
              text={
                <p>Export des données de production depuis l&apos;ERP + Nomenclature / BOM disponible à l&apos;OF.</p>
              }
            />
          </div>
          <div>
            <p>
              La contextualisation des données énergétiques par le process est régulièrement un casse tête pour les
              Energy Manager.
            </p>
            <p>
              Des moyens simples existent pourtant pour caractériser la consommation selon un état la production. Rien
              qu&apos;avec cette information on peut alors déceler de nombreuses phases énergivores sur des presses, des
              fours, des lignes d&apos;assemblage, des étuves... Les indicateurs suivants peuvent alors être créés pour
              faire la chasse au gaspillage: pourcentage de consommation en marche à vide, temps de chauffe, attente
              entre deux ordres de fabrications…
            </p>
            <p>
              Tous ces KPI permettent l&apos;identification d&apos;actions facile à déployer et à ROI rapides. Des
              compteurs non intrusifs peuvent être déployés pour intégrer des informations de cadence de production ou
              des activités spécifiques sur vos lignes de productions. En fonction de l&apos;impact du mix de production
              sur une même ligne, il est également possible de compléter les analyses avec un export de la base de
              données ERP et de la nomenclature produit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
