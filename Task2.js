const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const findCommonDivisors = (arr) => {
  let result = arr[0];
  for(let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
  } 

  let commonDivisors = [];
  for(let i = 2; i <= result; i++) {
    if (result % i === 0) {
        commonDivisors.push(i);
    }
  }

  return commonDivisors;
};

console.log(findCommonDivisors([42, 12, 18]));
