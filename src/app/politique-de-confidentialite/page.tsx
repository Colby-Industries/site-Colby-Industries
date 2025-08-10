import styles from './page.module.css';

export default function PolitiqueDeConfidentialite() {
  return (
    <section className={styles.page}>
      <h1>Politique de confidentialité</h1>
      <div className={styles.content}>
        <h2>1. Identification du responsable du traitement</h2>
        <ul>
          <li>COLBY INDUSTRIES (SAS)</li>
          <li>Adresse du siège social : 9 chemin de Pubereau, 63550 Palladuc, France</li>
          <li>SIREN : 942 492 752 • SIRET : 942 492 752 00012</li>
          <li>Numéro de TVA intracommunautaire : FR48942492752</li>
          <li>Inscription au RCS de Clermont-Ferrand depuis le 26 mars 2025</li>
          <li>Président : Clément Halby</li>
          <li>Directeur général : Corentin Colle</li>
        </ul>

        <h2>2. Données personnelles collectées</h2>
        <p>
          Nous collectons uniquement les données nécessaires au fonctionnement du site et à la gestion de la relation
          avec nos visiteurs et clients, notamment via un formulaire de contact :
        </p>
        <ul>
          <li>Nom, prénom</li>
          <li>Adresse e‑mail</li>
          <li>Numéro de téléphone</li>
          <li>Société et fonction</li>
          <li>Toute information facultative que vous choisissez de nous transmettre</li>
          <li>Données techniques (adresse IP, cookies, logs) pour la navigation et l’analyse statistique</li>
        </ul>

        <h2>3. Finalités du traitement & bases légales</h2>
        <ul>
          <li>Formulaire de contact / demandes → fondé sur votre consentement ou intérêt légitime</li>
          <li>
            Devis, propositions commerciales, relation client → fondé sur l’exécution d’un contrat ou de mesures
            précontractuelles
          </li>
          <li>Statistiques anonymes (via cookies analytiques) → fondé sur votre consentement</li>
          <li>
            Conservation des données facturation, obligations légales → pour satisfaire une obligation légale
            (comptabilité, fiscalité)
          </li>
        </ul>

        <h2>4. Destinataires des données</h2>
        <p>Les données peuvent être partagées avec :</p>
        <ul>
          <li>Nos collaborateurs ou sous-traitants internes, dans le cadre de l’exécution de nos prestations</li>
          <li>Prestataires techniques (hébergement, maintenance)</li>
          <li>Autorités compétentes si requis par la loi</li>
        </ul>

        <h2>5. Transferts hors de l’Union européenne</h2>
        <p>
          Aucun transfert de données personnelles hors de l’Union européenne n’est prévu. Si cela devait changer, des
          garanties appropriées (clauses contractuelles types, etc.) seraient mises en place.
        </p>

        <h2>6. Durée de conservation</h2>
        <ul>
          <li>Données issues du formulaire de contact : conservées jusqu’à 3 ans après le dernier contact</li>
          <li>Données de facturation : conservées 10 ans conformément aux obligations légales</li>
          <li>Cookies analytiques : conservés pour une durée maximale de 13 mois (ou selon votre consentement)</li>
        </ul>

        <h2>7. Sécurité des données</h2>
        <p>
          Nous appliquons des mesures techniques et organisationnelles adéquates : chiffrement, pare-feu, contrôle
          d&apos;accès, sauvegarde régulière, pour protéger vos données contre tout accès non autorisé ou perte.
        </p>

        <h2>8. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d’accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l’effacement (droit à l’oubli)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d’opposition</li>
          <li>Droit à la portabilité des données</li>
          <li>
            Droit d’introduire une réclamation auprès de la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noreferrer noopener">
              www.cnil.fr
            </a>
            )
          </li>
        </ul>
        <p>
          Pour exercer vos droits, contactez-nous à : [email de contact à compléter] ou par courrier au siège social
          indiqué ci‑dessus.
        </p>

        <h2>9. Cookies</h2>
        <p>Nous utilisons :</p>
        <ul>
          <li>Cookies techniques nécessaires au fonctionnement du site</li>
          <li>
            Cookies analytiques (par ex. Google Analytics) pour améliorer l’expérience utilisateur, soumis à votre
            consentement via un bandeau visible dès la première visite
          </li>
        </ul>
        <p>Une politique spécifique aux cookies est accessible (lien à prévoir).</p>

        <h2>10. Modifications de la politique</h2>
        <p>
          Cette politique peut évoluer. La version en ligne fera foi.
          <br />
          Dernière mise à jour : 7 août 2025.
        </p>
      </div>
    </section>
  );
}
