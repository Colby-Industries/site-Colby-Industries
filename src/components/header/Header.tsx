import styles from './Header.module.css'
import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo size="medium" />
        <Navigation />
      </div>
    </header>
  )
}
