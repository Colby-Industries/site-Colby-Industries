import Icon, { IconName } from '@/components/icon/Icon';
import styles from './Card.module.css';

interface Props {
  icon: IconName;
  title: string;
  text: React.ReactNode;
}

export const Card: React.FC<Props> = ({ icon, text, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon type={icon} size={60} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
