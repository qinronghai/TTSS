"use strict";
// 为什么要使用命名空间？
// 避免全局变量造成的污染
/* ts与ts6一样，任何包含顶级import或者export的文件都被当成一个模块。
相反的，如果一个文件不带有顶级的import或者export声明，那么他的内容被视为全局可见的 */
// ts提供了namespace解决这个问题
Object.defineProperty(exports, "__esModule", { value: true });
// const a = 1;
// 声明
var A;
(function (A) {
    A.a = 1;
})(A || (A = {}));
// 使用
console.log(A.a);
// 嵌套的命名空间
var C;
(function (C) {
    let B;
    (function (B) {
        B.d = 5;
    })(B = C.B || (C.B = {}));
})(C || (C = {}));
console.log(C.B.d);
// 抽离命名空间: 导入了index2文件中导出的命名空间B
const index2_1 = require("./index2");
console.log(index2_1.B);
