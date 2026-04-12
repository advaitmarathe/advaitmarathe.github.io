import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>advait marathe</h1>
      <p className={styles.bio}>
        I&apos;m currently working on agents at sierra. I also like making{" "}
        <Link href="/games">games</Link>.
      </p>
      <nav className={styles.links}>
        <a
          href="https://www.linkedin.com/in/advaitumarathe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <span className={styles.separator}>/</span>
        <a
          href="https://github.com/advaitmarathe"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <span className={styles.separator}>/</span>
        <Link href="/games">games</Link>
      </nav>
    </main>
  );
}
