import {Observer} from './Observer/index.js'
//
let car = new Observer({
  name: "xiaoman",
  age: 1
})

console.log(car)
console.log(car.value.name)
car.value.age = 3
console.log(car.value.age)
