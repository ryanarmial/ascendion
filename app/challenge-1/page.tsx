'use client'

import { useState } from 'react';
import styles from '../form.module.css';

export default function Page() {
  const [inputNumbers, setInputNumbers] = useState<Array<number | string>>(['', '']);
  const [total, setTotal] = useState<number>(0);

  const onChangeNumber = (index: number, value: string | number) => {
    setInputNumbers((prev) => {
      const newNumbers = [...prev];
      const isNumber = !isNaN(Number(value));
      if(isNumber) newNumbers[index] = value;
      return newNumbers;
    });
  }

  const handleAddNumbers = () => {
    setTotal(Number(inputNumbers[0]) + Number(inputNumbers[1])) ;
    setInputNumbers(['', '']);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Adding Two Numbers</h2>
        <input value={inputNumbers[0]} onChange={(e) => onChangeNumber(0, e.target.value)} type="text" placeholder="First Number" />
        <input value={inputNumbers[1]} onChange={(e) => onChangeNumber(1, e.target.value)} type="number" placeholder="Second Number" />
        <button onClick={handleAddNumbers}>Add Two Number</button>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}
