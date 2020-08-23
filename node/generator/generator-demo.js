function* test(){
    const a = yield 'hel'
    console.log('step one',a);//1
    const b = yield 'wol'
    console.log('step two',b);//66
}
let it = test();
console.log(it.next())//第一次next传参是没有任何意义的//{ value: 'hel', done: false }
console.log(it.next(1))//传递上一次的yield返回值{ value: 'wol', done: false }
console.log(it.next(66))//{ value: undefined, done: false }