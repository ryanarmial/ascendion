'use client'

import { useState } from 'react';
import styles from '../form.module.css';
import { twoSum } from './challenge-3.helper';

export default function Page() {
  const [inputNumbers, setInputNumbers] = useState<string>('');
  const [inputTarget, setInputTarget] = useState<number>(0);
  const [indexNumbers, setIndexNumbers] = useState<number[] | null>(null);

  const handleGetIndexNumber = () => {
    if(!inputNumbers) return
    const numbers = inputNumbers.split(',').map(num => Number(num.trim()));
    const indexResult = twoSum(numbers, inputTarget);
    setIndexNumbers(indexResult);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Two Sum Numbers</h2>
        <label htmlFor="">use comma as a separator. e.g: 1,2,3</label>
        <input value={inputNumbers} onChange={(e) => setInputNumbers(e.target.value)} type="text" placeholder="Array of Number" />
        <input value={inputTarget} onChange={(e) => setInputTarget(Number(e.target.value))} type="number" placeholder="Target Number" />
        <button onClick={handleGetIndexNumber}>Get Two Number Index</button>
        <p>Index Number: {indexNumbers ? `[${indexNumbers.join(', ')}]`: 'index not found'}</p>
      </div>
    </div>
  );
}
