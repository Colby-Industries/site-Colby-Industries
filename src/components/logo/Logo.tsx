import styles from './Logo.module.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: styles.logoSmall,
  medium: styles.logoMedium,
  large: styles.logoSmall,
};
export default function Logo({ size = 'medium' }: LogoProps) {
  const sizeClass = sizeMap[size];

  return <div className={`${styles.logo} ${sizeClass}`}>Logo</div>;
}
