const correctSpelling = (number) => {
  let lastDigit = number % 10;
  let lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return number + ' компьютер';
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return number + ' компьютера';
  } else {
    return number + ' компьютеров';
  }
};



