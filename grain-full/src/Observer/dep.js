export class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  // 删除
  removeSub(sub) {
    remove(this.subs, sub)
  }

  // 添加依赖
  depend() {
    // 这段不是很懂
    if (window.target) {
      console.log(window.target)
      this.addSub(window.target)
    }
  }
  // 通知所有依赖更新
  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// 临时工具方法
export function remove(subs, sub) {
  if (subs.length) {
    const index = subs.indexOf(sub)
    if (index > -1) {
      return subs.splice(index, 1)
    }
  }
}

