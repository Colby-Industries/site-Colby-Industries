import styles from './NavigationItem.module.css'

interface NavigationItemProps {
  href?: string
  children: React.ReactNode
  isActive?: boolean
}

export default function NavigationItem({ href, children, isActive = false }: NavigationItemProps) {
  const className = `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ''}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return <div className={className}>{children}</div>
}
