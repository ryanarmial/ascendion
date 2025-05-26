import styles from './styles.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Adding Two Numbers</h2>
        <input type="text" placeholder="First Number" />
        <input type="number" placeholder="Second Number" />
        <button>Add Two Number</button>
        <p>Total:</p>
      </div>
    </div>
  );
}
