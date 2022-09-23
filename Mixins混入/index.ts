// 对象的混入，即合并
interface Name {
  name: string;
}
interface Age {
  age: number;
}
interface Sex {
  sex: number;
}

let a: Name = { name: "小海" };
let b: Age = { age: 22 };
let c: Sex = { sex: 1 };

// 合并对象，并返回一个新的对象
let obj = Object.assign(a, b, c);
