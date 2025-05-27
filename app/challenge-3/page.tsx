// export default function Page() {

//   const twoSum = (numbers: number[], target: number):number[] | null => {
//     for(let r = 0; r < numbers.length - 1; r++) {
//       const restNumber = target - numbers[r]
//       const getIndexSecondNumber = numbers.indexOf(restNumber, r + 1)
//       if(getIndexSecondNumber < 0) {
//         return [r+1, getIndexSecondNumber+1]
//       }
//     }

//     return null
//   }

//   console.log(twoSum([4,11,17,25], 21));
//   console.log(twoSum([0,1,2,2,3,5], 4));
//   console.log(twoSum([-1, 0], -1));

//   return <h1>Challenge 3</h1>
// }

'use client'

import { useState } from 'react';
import styles from '../form.module.css';

export default function Page() {
  const [inputNumbers, setInputNumbers] = useState<string>('');
  const [inputTarget, setInputTarget] = useState<number|undefined>(undefined);
  const [indexNumbers, setIndexNumbers] = useState<number[]>(0);

  const handleGetIndexNumber = () => {
    const numbers = inputNumbers.split(',').map(num => Number(num.trim()));
    console.log(numbers, inputTarget);
    // setTotal(Number(inputNumbers[0]) + Number(inputNumbers[1])) ;
    // setInputNumbers(['', '']);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Two Sum Numbers</h2>
        <label htmlFor="">use comma as a separator. e.g: 1,2,3</label>
        <input value={inputNumbers} onChange={(e) => setInputNumbers(e.target.value)} type="text" placeholder="Array of Number" />
        <input value={inputTarget} onChange={(e) => setInputTarget(Number(e.target.value))} type="number" placeholder="Target Number" />
        <button onClick={handleGetIndexNumber}>Get Two Number Index</button>
        <p>Index Number: {indexNumbers}</p>
      </div>
    </div>
  );
}
