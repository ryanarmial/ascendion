import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Index Challenge</h1>
        <ol>
          <li>
            <Link href="/challenge-1">Challenge 1: Adding Two Numbers</Link>
          </li>
          <li>
            <Link href="/challenge-2">Challenge 2: Navigation Bar</Link>
          </li>
          <li>
            <Link href="/challenge-3">Challenge 3: Two Sum Number</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
