// 泛型
// 使用泛型来创建可重用的组件,一个组件可以支持多种类型,用户可以以自己的数据类型来使用组件
// 看下面的例子：需传入数字，函数返回number类型的数组
function sum(a: number, b: number): Array<number> {
  return [a, b];
}
// 如果我们还想使用上面这个函数，但传入参数的类型不一样，想传入string 类型，只能再写一个函数
function str(a: string, b: string): Array<string> {
  return [a, b];
}
// 这就很麻烦，违背了重用性的原则，为什么不用any类型呢，比如下面的例子
function str1(a: any, b: any): Array<any> {
  return [a, b];
}
// 如果使用any类型，你可能知道参入参数是什么类型的，但是不一定知道返回的类型
// 即如果我们传入一个数字，我们只知道任何类型的值都有可能被返回
// 所以就需要使用到 泛型
function str2<T>(a: T, b: T): Array<T> {
  return [a, b];
}
// 泛型定义时，在函数名之后写泛型名，名字随意，这里写成T
// 泛型的意思是在定义的时候，不知道参数是什么类型的，所以很泛
// 在使用时：传了两个number类型的参数，就可以明确的知道返回的一定是number类型的数组，如下：
str2<number>(3, 4);
str2<string>("小海", "很大");
// 泛型的好处：在你定义的时候不明确它的类型，在你使用的时候才明确它的类型
// 也可以简写
str2(3, 4); // 会触发ts的类型推论

// 定义多个类型的泛型
function sub<T, U>(a: T, b: U): Array<T | U> {
  let arr: Array<T | U> = [a, b];
  return arr;
}
sub<string, boolean>("a", false);

// 泛型约束
interface Len {
  length: number;
}
function getLength<T extends Len>(arg: T) {
  return arg.length;
}

// getLength(1); number 1 上没有length属性
console.log(getLength("sfdf"));

// -使用keyof约束对象
// 为什么要使用keyof去约束对象？看下面的例子：
function prop<T>(obj: T, key) {
  // 传入一个任意类型的对象和属性，返回这个属性的值
  return obj[key];
}
let o = { a: 1, b: 2, c: 3 };
prop(o, "b"); // 可以正常取到值的
prop(o, "d"); // 对象中没有d属性，显然是取不到其value的，但是ts并没有报错，所以应该使用keyof去解决这种情况

function prop2<T, K extends keyof T>(obj: T, key: K) {
  // 传入一个任意类型的对象和属性，返回这个属性的值
  return obj[key];
}
let p = { a: 1, b: 2, c: 3 };
prop2(p, "b"); // 可以正常取到值的
// prop2(p, "d"); // 会报错，因为已经被约束了
// K extends keyof T中的T是穿过类的对象的类型，用keyof 去分割成 "a|b|c"这种联合类型
// 然后利用extend 关键字的约束K类型必须为 "a|b|c"这种联合类型

// -泛型类
// 泛型类和泛型函数差不多
class Sub<T> {
  attr: T[] = [];
  add(a: T): T[] {
    return [a];
  }
}

let subu = new Sub<number>();
subu.attr = [1, 2, 3];
subu.add(2);
