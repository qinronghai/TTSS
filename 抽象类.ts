abstract class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 抽象函数不能有具体实现
  abstract getName(): string;
  // 具体实现的函数
  setName(name: string) {
    this.name = name;
  }
}

// 抽象类的派生类才能具体实现抽象函数
class B extends A {
  constructor() {
    super("小满");
  }
  getName() {
    return this.name;
  }
}

// !抽象类不能被实例化
// new A()

let b = new B(); // 派生类是可以实例化的
