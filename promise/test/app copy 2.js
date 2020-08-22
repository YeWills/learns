function* test(){
    const a = yield 'hel'
    console.log('1111',a);
    const b = yield 'wol'
    console.log('1111',b);
}
let it = test();
console.log(it.next())//第一次next传参是没有任何意义的
console.log(it.next(1))//传递上一次的yield返回值
console.log(it.next(55))