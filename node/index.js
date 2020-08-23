const axios = require('axios');
//在read函数内，实现了将异步代码使用同步的方式编写
function* read(){
    try {
        let content1 = yield axios.get('http://127.0.0.1:3000').then(e=>{console.log('先执行');return e})
        console.log('step one',content1.data)
        let content2 = yield axios.get('http://127.0.0.1:3000');
        console.log('step two',content2.data)
    } catch (e) {
        console.log('err', e)
    }
}

function co(it){
    return new Promise((resolve, reject)=>{
        function next(data){
            let { value, done} = it.next(data);
            if(!done){
                Promise.resolve(value).then(data=>{
                    next(data);
                })
            }else{
                resolve(data);
            }
        }
        next();
    })
}


co(read()).then(data=>{
    console.log('result',data.data)
})


//测试 async的时候放开
// async function asyncRead(){
//     try {
//         let content1 = await axios.get('http://127.0.0.1:3000')
//         console.log('async step one',content1.data)
//         let content2 = await axios.get('http://127.0.0.1:3000');
//         console.log('async step two',content2.data)
//     } catch (e) {
//         console.log('err', e)
//     }
// }

// asyncRead()