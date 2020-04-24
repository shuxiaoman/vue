import {Observer} from './Observer/index.js'
//
let car = new Observer({
  name: "xiaoman",
  age: 1,
  body: {
    head: 'big',
    height: '200m'
  }
})

// console.log(car)
// console.log(car.value.name)
// car.value.age = 3
// console.log(car.value.age)
// console.log(car.value.body)
// console.log(car.value.body.height)

// Proxy with a get handler
var x = {p: 1};
let y = {x:33}
var obj = new Proxy(x, {
  get(t, k, r) {
    console.log(t)
    console.log(r)
    return k + "bar";
  }
},y);
Reflect.get(obj, "p"); // "foobar"
