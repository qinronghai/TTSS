class Person {
  // public 内部外部都能访问，不写默认public
  public name: string;
  // private 私有变量只能在类内部访问
  private age: number;
  // protected 内部和子类中访问
  protected sub: boolean;
  // 静态属性
  static aaa: string = "1";
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;
    // this.run 也调不了run
  }
  static run() {
    // this.aaa; 只能访问static 定义的属性
    this.dev(); // 静态函数之间可以互相调用
    return "789";
  }
  static dev() {
    return "dev";
  }
}

// 子类
/* class Man extends Person {
  constructor() {
    super("小海", 18, false);
    // this.sub  可以访问
  }
} */

// 静态属性不需要通过实例属性去访问，只需要通过类点属性去访问
console.log(Person.aaa);

let p = new Person("小海", 18, false);

// 通过接口去约束类
interface Person1 {
  run(type: boolean): boolean;
}

class Man1 implements Person1 {
  run(type: boolean): boolean {
    return type;
  }
}
