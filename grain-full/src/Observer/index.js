// 观察者
import {Dep} from "./dep.js";

export class Observer {
  constructor(value) {
    this.value = value
    def(value, '_ob_', true)
    if (Array.isArray(value)) {
      console.log('数组暂不做处理')
    } else {
      this.walk(value)
    }
  }

  walk(obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}

function def(obj, key, val) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: true,
    writable: true,
    configurable: true
  })
}

//使一个对象转化成可观测对象
function defineReactive(obj, key, val) {
  if (arguments.length === 2) {
    val = obj[key]
  }

  if (typeof val === 'object') {
    new Observer(val)
  }

  const dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`获取了${key}：${val}`)
      // 收集依赖
      dep.depend()
      return val
    },
    set(newVal) {
      if (val === newVal) {
        return
      } else {
        console.log(`修改属性：${val}->${newVal}`)
        val = newVal
        dep.notify()
      }
    }
  })
}
