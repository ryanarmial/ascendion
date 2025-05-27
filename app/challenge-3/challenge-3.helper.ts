export const twoSum = (numbers: number[], target: number):number[] | null => {
  for(let i = 0; i < numbers.length - 1; i++) {
    const restNumber = target - numbers[i]
    const getIndexSecondNumber = numbers.indexOf(restNumber, i + 1)
    if(getIndexSecondNumber >= 0) {
      return [i+1, getIndexSecondNumber+1]
    }
  }

  return null
}
