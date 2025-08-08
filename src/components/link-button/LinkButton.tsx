import styles from './LinkButton.module.css';
import Link from 'next/link';
import { clsx } from 'clsx';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
}

const variantMap = {
  primary: styles.linkButtonPrimary,
  secondary: styles.linkButtonSecondary,
} as const;

const sizeMap = {
  small: styles.linkButtonSmall,
  medium: styles.linkButtonMedium,
  large: styles.linkButtonLarge,
  'extra-large': styles.linkButtonExtraLarge,
} as const;

export default function LinkButton({ href, children, variant = 'primary', size = 'medium' }: LinkButtonProps) {
  return (
    <Link href={href} className={clsx(styles.linkButton, variantMap[variant], sizeMap[size])}>
      {children}
    </Link>
  );
}
