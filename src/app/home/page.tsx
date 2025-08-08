import styles from './page.module.css';
import TopContainer from './components/top-container/TopContainer';

export default function Home() {
  return (
    <section className={styles.homePage}>
      <TopContainer />
      home
    </section>
  );
}
