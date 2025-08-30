import styles from './Steps.module.css';
import { Step } from './Step';

interface Props {
  steps: { title: string; items: string[] }[];
}

export const Steps: React.FC<Props> = ({ steps }) => {
  return (
    <div className={styles.steps}>
      {steps.map((step, i) => (
        <Step {...step} key={`step-${i}`} />
      ))}
    </div>
  );
};
