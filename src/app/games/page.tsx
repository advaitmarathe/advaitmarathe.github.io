import Link from "next/link";
import { games } from "@/data/games";
import styles from "./page.module.css";

export default function GamesPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          &larr; home
        </Link>
        <h1 className={styles.title}>games</h1>
      </header>
      <ul className={styles.list}>
        {games.map((game) => {
          const content = (
            <>
              <span className={styles.cardTitle}>{game.title}</span>
              {game.status === "coming-soon" ? (
                <span className={styles.badge}>coming soon</span>
              ) : (
                <span className={styles.badge}>play &rarr;</span>
              )}
            </>
          );

          return (
            <li key={game.slug}>
              {game.url ? (
                <a href={game.url} className={styles.card}>
                  {content}
                </a>
              ) : (
                <div className={styles.card}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
