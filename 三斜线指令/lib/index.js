"use strict";
var A;
(function (A) {
    A.a = 1;
})(A || (A = {}));
var B;
(function (B) {
    B.b = 1;
})(B || (B = {}));
var A;
(function (A) {
    A.c = 666;
})(A || (A = {}));
console.log(A);
