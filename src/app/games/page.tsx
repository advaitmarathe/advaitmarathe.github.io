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
        {games.map((game) => (
          <li key={game.slug} className={styles.card}>
            <span className={styles.cardTitle}>{game.title}</span>
            {game.status === "coming-soon" && (
              <span className={styles.badge}>coming soon</span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
