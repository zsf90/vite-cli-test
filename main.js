import _ from 'lodash';
import { count } from "./counter.js";
import "./variable.css"
import "./reqqq"

import "./base.css"
import "./style.module.css" // 导入 css

import "@/imageLoader"; // 在vite.base.config.js 中配置了 alias

import {name, age} from "./src/assets/json/test.json";


console.log("Count: ", count);
console.log("testJsonFile->name:", name, "testJsonFile->age:", age);