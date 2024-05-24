import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.Intro}>
        <h1>
          <span className={styles.big}>Hello</span>, I&apos;m Patrick.
        </h1>
        <h1>I&apos;m a Frontend Developer.</h1>
        <h4 className={styles.stay}>- stay tuned -</h4>
      </div>
    </main>
  );
}
