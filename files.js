// const {readFileSync,writeFileSync}=require('fs')
// const first=readFileSync('./freefire/first.txt','utf8')
// const second=readFileSync('./freefire/secont.txt','utf8')
// console.log(first,second);
// writeFileSync('./freefire/result.txt',`This is the result ${first} ,${second}`);
const { readFile, writeFile } = require('fs');

readFile('./freefire/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;

  readFile('./freefire/secont.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const second = result;

    writeFile('./freefire/result.txt', `This is the result ${first} ,${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  });
});