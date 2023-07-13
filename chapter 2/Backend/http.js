const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === 'about') {
        res.end('History')
    }
    res.end('oops')
    // res.write('Welcome to our home page');
    // res.end();
});

server.listen(5000,()=>console.log('server started'));
