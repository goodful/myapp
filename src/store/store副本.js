import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

// 未优化的store.js文件（应该分别创建各自文件夹分类管理才最合理化）
let store = new Vuex.Store({
    state:{count:0},//存放数据
    mutations:{
        increment(state,payload){//修改state的业务函数，第一个参数必须为state,第二个参数是payload
            console.log(state,payload);
            // state.count++
            state.count+=payload;
        },
        increment1(state,payload){
            console.log(state,payload);
            // state.count--
            state.count-=payload;

        }
    },//存放用户提交的方法
    actions:{
        asyncIncrement(context,payload){
            // 存放异步的，提交mutations
            // 第一个参数必须为context:上下文对象，也指store
            setTimeout(function(){
                context.commit("increment",payload);
            },2000)
        }
    }


})
export default store;