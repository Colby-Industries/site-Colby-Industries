import styles from './Navigation.module.css'
import NavigationItem from './NavigationItem'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavigationItem>L&apos;entreprise</NavigationItem>
      <NavigationItem>Nos prestations</NavigationItem>
      <NavigationItem>Notre approche</NavigationItem>
      <NavigationItem>Nous contacter</NavigationItem>
    </nav>
  )
}
