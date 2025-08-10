import styles from './Claim.module.css';

interface ClaimsProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function Claim({ title, description }: ClaimsProps) {
  return (
    <div className={styles.claim}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}
