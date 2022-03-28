<template>
  <div>
    <el-form :model="form" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="用户名输入"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pw">
        <el-input v-model="form.pw" placeholder="密码输入"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    // 自定义正则
    let myfn = function (rule,value,callback) {
      let rg = /\d/;
      console.log(rule,value);
      if(!rg.test(value)){
        return callback(new Error("密码格式必须为数字"))
      }
    };
    return {
      form: {
        name: "",
        pw: "",
      },
      rules: {
        name: [
          {
            type: "string",
            required: true,
            // 第一种正则验证方式pattern
            pattern: /^#/,
            message: "用户名格式必须为#开头",
          },
        ],
        pw: [
          {
            type: "number",
            require: true,
            // 另一种正则验证方式：validator，属性值为自定义正则函数
            validator:myfn,
            trigger:"blur",
            // message: "密码格式必须为纯数字",
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>