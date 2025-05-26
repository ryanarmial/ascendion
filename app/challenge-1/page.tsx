import { useState } from 'react';
import styles from './styles.module.css';

export default function Page() {
  const [numbers, setNumbers] = useState<number[]>([0, 0]);
  const [total, setTotal] = useState<number>(0);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Adding Two Numbers</h2>
        <input value={numbers[0]} type="text" placeholder="First Number" />
        <input value={numbers[1]} type="number" placeholder="Second Number" />
        <button>Add Two Number</button>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}
