let mutations ={
    increment(state,payload){
        state.count+=payload
    },
    decrement(state,payload){
        state.count-=payload

    }
}
export default mutations;