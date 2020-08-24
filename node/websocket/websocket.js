// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 6003
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        if(message === 'price'){
            console.log(`开始向客服端发送实时股票信息: ${message}`);
            let num=0;
           const setmsg = ()=>{
            ws.send(`实时涨停股票个数: ${num++}`, (err, res) => {
                console.log(err, res)
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
           }
            const index = setInterval(() => {
                setmsg();
            }, 1500);
            ws.on('close', function close() {
                console.log('close')
                clearInterval(index)
              });
        }
        if(message === 'tickets'){
            console.log(`开始向客服端发送实时火车票信息: ${message}`);
            let num=0;
           const setmsg = ()=>{
            ws.send(`火车票信息票数余额: ${num++}`, (err, res) => {
                console.log(err, res)
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
           }
            const index = setInterval(() => {
                setmsg();
            }, 1500);

            ws.on('close', function close() {
                console.log('close')
                clearInterval(index)
              });
        }
       
    })

   
});