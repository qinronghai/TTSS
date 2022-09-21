// symbol类型
// symbol传递的参数只支持string 和 number类型，其他的参数会被toString
let s: symbol = Symbol("二蛋");
let ss: symbol = Symbol(2);

// symbol 在对象中
let obj = {
  [ss]: "value",
  [s]: "小海",
  sex: "男",
  age: 18,
};

// console.log(obj[ss]);

// for in 循环不会执行到symbol项
for (const key in obj) {
  console.log(key);
}

// Object.keys()也不会
console.log(Object.keys(obj));

// Object.getOwnPropertyNames()也不会
console.log(Object.getOwnPropertyNames(obj));

// JSON格式也不会
console.log(JSON.stringify(obj));

// 读取symbol值
console.log(Object.getOwnPropertySymbols(obj));

// 通过拦截器取值 Reflect.ownKeys()
console.log(Reflect.ownKeys(obj));
