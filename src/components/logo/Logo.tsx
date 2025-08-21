import styles from './Logo.module.css';
import LogoMark from '@/assets/logo.svg';
interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: styles.logoSmall,
  medium: styles.logoMedium,
  large: styles.logoLarge,
};
export default function Logo({ size = 'medium' }: LogoProps) {
  const sizeClass = sizeMap[size];

  return (
    <div className={`${styles.logo} ${sizeClass}`}>
      <LogoMark className={styles.logoImage} fill="var(--colors-primary)" />
    </div>
  );
}
