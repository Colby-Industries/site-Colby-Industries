import styles from './Steps.module.css';
import { Step } from './Step';
import clsx from 'clsx';

interface Props {
  steps: { title: string; items?: string[] }[];
  compact?: boolean;
  className?: string;
}

export const Steps: React.FC<Props> = ({ steps, compact, className }) => {
  return (
    <div className={clsx(styles.steps, compact && styles.compact, className)}>
      {steps.map((step, i) => (
        <Step {...step} key={`step-${i}`} />
      ))}
    </div>
  );
};
