import styles from './Steps.module.css';

interface Props {
  title: string;
  items: string[];
}

export const Step: React.FC<Props> = ({ title, items }) => {
  return (
    <div className={styles.step}>
      <div className={styles.title}>
        <div>{title}</div>
      </div>
      <div className={styles.items}>
        <ul>
          {items.map((item, i) => (
            <li key={`item-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
