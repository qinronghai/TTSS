/* 当使用第三方库时，我们需要引用它的声明文件，
才能获得对应的代码补全、接口提示等功能 */
import axios from "axios";

// axios.get  直接引入后直接可以有代码提示

import express from "express"; //报错无法找到express模块的声明文件
// express没有指定声明文件
// 解决方法：
// 1. 在根目录下建立express.d.ts文件 添加一个包含 `declare module 'express';` 的新声明(.d.ts)文件
//    express();

// 2. 使用 `npm i --save-dev @types/express`
express();
