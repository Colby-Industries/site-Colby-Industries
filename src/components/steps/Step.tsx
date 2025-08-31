import styles from './Steps.module.css';
import clsx from 'clsx';

interface Props {
  title: string;
  items?: string[];
}

export const Step: React.FC<Props> = ({ title, items }) => {
  const hasItems = items && items.length > 0;
  return (
    <div className={clsx(styles.step, !hasItems && styles.noItems)}>
      <div className={styles.title}>
        <div>{title}</div>
      </div>
      {hasItems && (
        <div className={styles.items}>
          <ul>
            {items.map((item, i) => (
              <li key={`item-${i}`}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
