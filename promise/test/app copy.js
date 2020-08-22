
let obj = {
    0:1,
    1:111,
    //Symbol的元编程，可以更改js的行为
    // [Symbol.iterator](){
    //     let index = 0;
    //     //迭代器 默认是一个对象，并且具备next方法，调用返回value和done属性  
    //     return {
    //         next:()=>{
    //             return {
    //                 value:this[index],
    //                 done:this.length === index++
    //             }
    //         }
    //     }
    // },
    *[Symbol.iterator](){
        for(let i = 0;i<this.length;i++){
            yield this[i]
        }
    },
    length:2
}

console.log([...obj])