let fn = function (num: number | string): void {
  console.log((num as string).length); // 因为number上没有length属性
};
fn("123344");

(window as any).abc = 123; // 断言成any后是可以访问任何对象的
