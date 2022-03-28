// 自定义插件
// 当是一个对象：（推荐，可以方便扩展更多插件）
// let myplugin = {
//     install(Vue){
//         // 把插件都挂载到vue原型上
//         Vue.prototype.tttplugin=function(){
//             console.log("业务函数");
//         }
//     }
// }

import Vue from "vue";

// 当是一个方法：
// let myplugin = function(){
//     Vue.prototype.tttfn=function(){
//         console.log("业务函数");
//     }
// }

// 自定义防抖插件
let myplugin = function(){
    Vue.prototype.debouncefn=function(fn,wait){
        let timer = null;
        return function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                fn()
            },wait)
        }
    }
}
export default myplugin;