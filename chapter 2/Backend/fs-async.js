const {readFile, writeFile} = require('fs');

readFile('./chapter 2/Backend/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./chapter 2/Backend/second.txt','utf8',(err,result) => {
        if(err) {
            console.log(err);
            return;
        }
        // console.log(first,result);
        const second = result;
        // console.log(first,second);
        writeFile('./chapter 2/Backend/result-async.txt',
        `Here is the ${first} and ${second}`,
        (err,result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done');
        });
    });
});
console.log('starting next file');