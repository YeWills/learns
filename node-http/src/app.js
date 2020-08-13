
const http = require('http');
const fs = require('fs');
const path = require('path')

//http://127.0.0.1:3000/icon.jpg
//http://127.0.0.1:3000/test.html
const port = 3000;
http.createServer((req,res)=>{
    const file = req.url.replace('/','') || 'test.html'
    fs.readFile(path.resolve(__dirname,file), (err, data)=>{
        if(err){
            res.writeHead(404);
            res.end('404 not found')
        }
        res.end(data)
    })
}).listen(port, ()=>console.log(`open port ${port}`))