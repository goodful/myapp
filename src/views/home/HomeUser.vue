<template>
    <div>
        <button @click="add(5)">点击增加</button>
        <button @click="del(10)">点击减少</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>

<script>
    export default ({
        name: "HomeUser",
        methods: {
            add(a){
                // 提交修改count的业务函数。业务函数在store
                // store.commit提交业务函数
                // this.$store.commit("increment");
                this.$store.dispatch("asyncIncrement",a)
            },
            del(b){
                this.$store.commit("increment1",b)
            }
        }
    })
</script>
<style scoped>

</style>