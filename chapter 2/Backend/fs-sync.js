const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('chapter 2/Backend/first.txt','utf8');
const second = readFileSync('chapter 2/Backend/second.txt','utf8');

// console.log(first, second);

writeFileSync('chapter 2/Backend/result-sync.txt',
`Here is the reslt: ${first}, ${second}`
,{flag: 'a'});