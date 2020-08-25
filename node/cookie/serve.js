
const http = require('http');
const fs = require('fs');
const path = require('path')

//http://127.0.0.1:3000/icon.jpg
//http://127.0.0.1:3000/test.html
const port = 3000;
http.createServer((req,res)=>{
    if(req.url.includes('html')){
        const file = req.url.replace('/','') || 'test.html'
        fs.readFile(path.resolve(__dirname,file), (err, data)=>{
            if(err){
                res.writeHead(404);
                res.end('404 not found')
            }
            res.end(data)
        })
    }
    if(req.url.includes('set')){
        res.setHeader('Set-Cookie', ["testcokie123=panada11111;","hangzhou=uuuu;"])
        res.end('set cookie ok')
    }
    if(req.url.includes('test')){
        //查看cookie
        console.log(req.headers.cookie)//注意不要使用req.getHeader
        res.end('9999')
    }
}).listen(port, ()=>console.log(`open port ${port}`))