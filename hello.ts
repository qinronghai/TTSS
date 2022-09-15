// console.log("hello ts");
// -ts类型注解-原始类型
let age: number = 2;
let name: string = "小海";
let isLoading: boolean = false;
let un: undefined = undefined;
let timer: null = null;
// let uniKey: symbol = Symbol();
console.log(age);

// -ts的类型推论机制会自动提供类型
// 1. 声明变量并初始化时
let a = 1;
// 2. 决定函数返回值时
function add(num1: number, num2: number) {
  return num1 + num2;
}

//-联合类型
// 定义一个变量可以是多种类型，比如可以是null或者number
let timer1: number | null = null;

//-类型别名
type s = string; // 定义
const str1: s = "abc";
// 使用场景：给复杂的类型起个别名
// 别名可以是任意的合法字符串，一般首字母大写
type NewType = string | number;
let test: NewType = "1";
let test1: NewType = 1;

//-数组类型
// 写法1：
let arr1: number[] = [1, 3, 4, 5]; // 每个元素必须是数字
// 写法2：
let arr2: Array<string> = ["1", "2"];

//-元组Tuple
let x: [string, number, ...any] = ["hello", 10]; // 类型顺序必须一致，否则报错
x[3] = "world";
let y: [number, string] = [1, "1"];
// y[3] 元组声明时的数量一旦固定，就不可以再加或者访问了。

//-函数
// 1. 函数声明，小括号后面是返回值类型
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
// 2. 箭头函数，同样是可以写默认值
const sum2 = (a: number = 100, b: number = 200): number => {
  return a + b;
};
// 3. 同一定义函数格式
type Fn = (n1: number, n2: number) => number;
const sum3: Fn = (a, b) => {
  return a + b;
};
// 4. 函数返回值类型void
/* 如果一个函数没有返回值，应该使用void类型
  用void的几种情况：
  · 函数没写return
  · 只写了return，没有具体的返回值
  · return的是undefined
*/
function greet(name: string): void {
  console.log("Hello", name);
}
const sum5 = (): void => {
  return undefined;
};
// 既然return undefined，那么为什么不可以直接在返回值那里写 :undefined 呢？
// 如果函数没有指定返回值，调用结束之后，值是undefined的，但是不能直接声明返回值是undefined
// !这里会报错
/* function sum4(num1: number, num2: number): undefined {
  console.log(num1, num2);
} */

// 5. 函数可选参数，可以少传参数
// 与默认值的区别是，设置了默认值，不写就会使用默认值
function slice(a?: number, b?: number) {
  // `?` 跟在参数名字的后面，表示可选的参数
  // 注意：可选参数只能在 必须参数的后面
  // 如果可选参数在必选参数的前面，会报错
  console.log(111);
}

//-对象类型-单独使用
const person: {
  name: string;
  age?: number;
  sayHi(): void;
  // login: (time: number) => boolean;
} = { name: "小海", age: 18, sayHi() {} };
console.log(person);

//-对象类型-类型别名
// 创建类型别名
type Person = {
  name: string;
  age: number;
  sayHi(): void;
};
// 使用类型别名作为对象的类型
let person1: Person = {
  name: "小海",
  age: 18,
  sayHi() {},
};

//-接口
// 当一个对象类型被多次使用时，有如下两种方式类描述对象的类型，以达到服用的目的
// 1. 类型别名 type
// 2. 接口，interface
interface IGoodItem {
  // 接口名称一搬以I开头
  name: string;
  price: number;
  func: () => string;
}
// 声明接口后，直接使用接口名称作为变量的类型
const good1: IGoodItem = {
  name: "手表",
  price: 2000,
  func: function () {
    return "看时间";
  },
};
// interface与type不同之处：它可以继承
interface Igood extends IGoodItem {
  tab: string;
}

//-字面量类型
let str3 = "hello TS"; // string 类型
const str4 = "hello TS"; // hello TS 类型
console.log(str4);

// !str4是一个常量const，他的值不能变化只能是‘hello TS’，所以，它的类型为：‘hello TS’
// 此处的'hello TS'，就是一个字面量类型，也就是说某个特定的字符串也可以作为 TS 中的类型
// 字面量类型一般是配合联合类型一起使用的， 用来表示一组明确的可选值列表。 例如下面的例子：
type Gender = "girl" | "boy";
// 声明一个类型，他的值 是 'girl' 或者是 'boy'
let g1: Gender = "girl"; // 正确
let g2: Gender = "boy"; // 正确
// let g3: Gender = 'man' // 错误 可以看到会有提示，明确告诉你只能选这两种。妈妈再也不用担心写错啦

//-枚举
// 枚举的功能类似于字面量类型+联合类型组合的功能，在没有type式，大家用枚举比较多。
// 1. 定义
enum Dir {
  up = 2, // 数值
  down,
  left,
  right,
}

enum Dirn {
  Up = "UP", // 字符串枚举，没有自增长行为，因此字符串枚举的每个成员必须有初始值
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// 2. 使用
let d: string = Dir[2];
let d1: Dirn = Dirn.Down;

//-any类型
// any：任意的。当类型设置为any时，就去取消了类型的限制。例如：
let obj: any = {
  x: 0,
};
obj.bar = 100;
// !不推荐使用 any!这会让 TypeScript 变为 “AnyScript”(失去 TS 类型保护的优势)

// 解决“无法重新声明块范围变量”
export {};
