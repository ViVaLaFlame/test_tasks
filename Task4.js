const printMultiplicationTable = (num) => {
  let table = '';
  for(let i = 1; i <= num; i++) {
    for(let j = 1; j <= num; j++) {
        table += (i * j) + ' ';
    }
    table += '\n';
  }
  
  console.log(table);
}

printMultiplicationTable(5);
