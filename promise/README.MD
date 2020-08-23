## promise 手写

### 手写源码要点
- 定义一个构造函数
 - 构造函数内三个状态：pending resolved rejected
 - 定义内部resolve与reject方法
 - reject时候存储value，以便给下个then使用，以此类推reject
- 定义一个原型方法then
- then方法内递归构造函数实现链式调用
- 定义静态方法all、race、resolve等等
- 基于发布订阅模式

### 注意点
#### setTimeout内需要重新try catch
尽管,这里已经做了try catch。
```js
  try{
        // 立即同步执行executor
        executor(resolve,reject)
    }catch (e) { // 如果执行器抛出异常，promise对象变为rejected状态
        reject(e)
    }
```
但是setTimeout内还必须加try，因为try catch无法捕捉一个定时器内部函数的错误，因此有定时器时，必须这样：
```js
  try{
        setTimeout(()=>{
                try{
                
                }catch (e) {
                    
                }
                })
    }catch (e) { 
        reject(e)
    }
```
#### 建议使用class而非function原型来做继承
class可以避免原型的浅拷贝问题。
#### reslove\reject是异步因为用了setTimeout
```js
 setTimeout(()=>{
        handle(onResolved)
    })


     function handle(callback) {
                 resolve(result)
            }
```


### 参考
[珠峰公开课（手写promise - 上）](https://www.bilibili.com/video/BV1AA411h75Q/?spm_id_from=333.788.videocard.0)
[珠峰公开课（手写promise - 下）](https://www.bilibili.com/video/BV1sZ4y1j71K/?spm_id_from=333.788.videocard.1)
[promise 同学笔记）](https://juejin.im/post/6856213486633304078)
[同学源码 ](https://github.com/Sunny-lucking/howToBuildMyPromise)