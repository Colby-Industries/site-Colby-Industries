import commonStyles from '../common.module.css';
import Claim from '@/components/claim/Claim';
import Collapse from '@/components/collapse/Collapse';
import { ISO50001 } from '@/components/ISO50001/ISO50001';
import { DevelopementEnergiesRenouvelables } from '@/components/developpement-energies-renouvelables/DevelopementEnergiesRenouvelables';

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
          content
        </Collapse>
        <ISO50001 />
        <Collapse
          title="Décret tertiaire & Décret BACS"
          subtitle="Support à la réponse aux décrets tertiaire et BACS"
          titleTag="h2"
          defaultOpen={false}
        >
          content
        </Collapse>
        <DevelopementEnergiesRenouvelables />
      </div>
    </section>
  );
}
