// 为什么要使用命名空间？
// 避免全局变量造成的污染
/* ts与ts6一样，任何包含顶级import或者export的文件都被当成一个模块。
相反的，如果一个文件不带有顶级的import或者export声明，那么他的内容被视为全局可见的 */
// ts提供了namespace解决这个问题

// const a = 1;

// 声明
namespace A {
  export const a = 1;
}

// 使用
console.log(A.a);

// 嵌套的命名空间
namespace C {
  export namespace S {
    export const d = 5;
  }
}

console.log(C.S.d);

// 抽离命名空间: 导入了index2文件中导出的命名空间B
import { B } from "./index2";
console.log(B);

// 简化命名空间
console.log(C.S.d); // 这样取值很麻烦
import csd = C.S.d;
console.log(csd);

// 命名空间的合并

namespace Q {
  export const b = 1;
}

namespace Q {
  export const q = 3;
}
// 就相当于这样
/* namespace Q {
  export const b = 1;
  export const q = 3;
} */
