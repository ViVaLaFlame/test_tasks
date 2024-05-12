const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getRange = (start, end) => {
  return [...Array(end - start + 1).keys()].map(i => i + start).filter(isPrime);
};

console.log(getRange(11, 20)); 
