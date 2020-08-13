
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
        }else{
            res.writeHead(200,{
                // "Content-Type":"text/plain;charset=utf-8"//作为txt文件返回
                "Content-Type":"text/html;charset=utf-8"//作为html文件返回
            });
            res.end(data)
        }
      
    })
}).listen(port, ()=>console.log(`open port ${port}`))