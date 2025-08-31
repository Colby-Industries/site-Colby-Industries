import styles from './Steps.module.css';
import { Step } from './Step';
import clsx from 'clsx';

interface Props {
  steps: { title: string; items: string[] }[];
  compact?: boolean;
}

export const Steps: React.FC<Props> = ({ steps, compact }) => {
  return (
    <div className={clsx(styles.steps, compact && styles.compact)}>
      {steps.map((step, i) => (
        <Step {...step} key={`step-${i}`} />
      ))}
    </div>
  );
};
