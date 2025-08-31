import styles from './Methodology.module.css';
import Icon from '@/components/icon/Icon';

export const Methodology: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.methodology}>
        <div className={styles.inner}>
          <div>Planifier</div>
          <div>Faire</div>
          <div>Vérifier</div>
          <div>Agir</div>
          <Icon type="arrow" size={24} />
          <Icon type="arrow" size={24} />
          <Icon type="arrow" size={24} />
          <Icon type="arrow" size={24} />
        </div>
      </div>
      <div className={styles.outer}>
        <strong>Un système de management de l&apos;énergie, c&apos;est :</strong>
        <ul>
          <li>Dire ce que vous faites</li>
          <li>Faire ce que vous dites</li>
          <li>Le prouver</li>
          <li>L&apos;améliorer</li>
        </ul>
      </div>
    </div>
  );
};
