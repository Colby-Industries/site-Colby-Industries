import styles from './NavigationItem.module.css';
import Link from 'next/link';

interface NavigationItemProps {
  href?: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavigationItem({ href, children, isActive = false, onClick }: NavigationItemProps) {
  const className = `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ''}`;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
