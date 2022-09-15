"use strict";
exports.__esModule = true;
// console.log("hello ts");
// -ts类型注解-原始类型
var age = 2;
var name = "小海";
var isLoading = false;
var un = undefined;
var timer = null;
// let uniKey: symbol = Symbol();
console.log(age);
// -ts的类型推论机制会自动提供类型
// 1. 声明变量并初始化时
var a = 1;
// 2. 决定函数返回值时
function add(num1, num2) {
    return num1 + num2;
}
//-联合类型
// 定义一个变量可以是多种类型，比如可以是null或者number
var timer1 = null;
var str1 = "abc";
var test = "1";
var test1 = 1;
//-数组类型
// 写法1：
var arr1 = [1, 3, 4, 5]; // 每个元素必须是数字
// 写法2：
var arr2 = ["1", "2"];
//-函数
// 1. 函数声明，小括号后面是返回值类型
function sum(num1, num2) {
    return num1 + num2;
}
// 2. 箭头函数，同样是可以写默认值
var sum2 = function (a, b) {
    if (a === void 0) { a = 100; }
    if (b === void 0) { b = 200; }
    return a + b;
};
var sum3 = function (a, b) {
    return a + b;
};
// 4. 函数返回值类型void
/* 如果一个函数没有返回值，应该使用void类型
  用void的几种情况：
  · 函数没写return
  · 只写了return，没有具体的返回值
  · return的是undefined
*/
function greet(name) {
    console.log("Hello", name);
}
var sum5 = function () {
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
function slice(a, b) {
    // `?` 跟在参数名字的后面，表示可选的参数
    // 注意：可选参数只能在 必须参数的后面
    // 如果可选参数在必选参数的前面，会报错
    console.log(111);
}
//-对象类型-单独使用
var person = { name: "小海", age: 18, sayHi: function () { } };
console.log(person);
// 使用类型别名作为对象的类型
var person1 = {
    name: "小海",
    age: 18,
    sayHi: function () { }
};
// 声明接口后，直接使用接口名称作为变量的类型
var good1 = {
    name: "手表",
    price: 2000,
    func: function () {
        return "看时间";
    }
};
//-字面量类型
var str3 = "hello TS"; // string 类型
var str4 = "hello TS"; // hello TS 类型
console.log(str4);
