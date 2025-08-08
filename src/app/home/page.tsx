import styles from './page.module.css';
import TopContainer from './components/top-container/TopContainer';
import LinkButton from '@/components/link-button/LinkButton';

export default function Home() {
  return (
    <section className={styles.homePage}>
      <TopContainer />
      <div className={styles.content}>
        <div className={styles.contact}>
          <LinkButton href="/contact" size="extra-large">
            Demandez un échange
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
