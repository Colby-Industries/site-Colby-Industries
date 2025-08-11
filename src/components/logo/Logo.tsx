import styles from './Logo.module.css';
import logoUrl from '@/assets/logo.svg';
import Image from 'next/image';
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
      <Image src={logoUrl} alt="Colby Industries logo" className={styles.logoImage} />
    </div>
  );
}
