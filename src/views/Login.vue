<template>
  <div id="box">
    <div class="box1">
      <h3>SEEC3后台管理系统</h3>
    </div>
    <div class="box2">
      <el-form :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitfn">登录</el-button>
        </el-form-item>
      </el-form>
      <p>温馨提示</p>
      <p>未登录过的新用户：自动注册</p>
      <p>注册过的用户可凭借账号密码登录</p>
    </div>
  </div>
</template>

<script>
import instance from "./../api/index";
export default {
  name: "Login",
  data() {
    let usernamefn = function (rule, value, callback) {
      console.log(rule);
      let reg = /admin/;
      console.log(reg.test(value));
      if (reg.test(value)) {
        return;
      } else {
        return callback(new Error("用户名要为admin"));
      }
    };
    let passwordfn = function (rule, value, callback) {
      console.log(rule);
      let reg = /\d/g;
      if (reg.test(value)) return;
      return callback(new Error("密码格式要求5-7位的纯数字，而且开头是1或者2"));
    };
    return {
      form: {
        username: "admin",
        password: "11111",
      },
      rules: {
        username: [
          {
            validator: usernamefn,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: passwordfn,
            trigger: "blur",
          },
        ],
      },
      newdebouncefn: null,
    };
  },

  methods: {
    submitfn() {
      //   提交业务
      this.newdebouncefn();
    },
    async loginfn() {
      //   登录业务
      let username = this.form.username;
      let password = this.form.password;
      let { data } = await instance
        .post("/api/login", { username, password })
        .then((res) => console.log(res.data));
      // console.log(data);
      localStorage.setItem("token",data.data.token);
      if (data.message === "fail") return this.$message.error("【登录失败】");
      if (data.message === "success") {
        return this.$message.success({
          type: "success",
          message: "登录成功",
          onClose: () => {
            this.$router.push({ name: "home" });
          },
        });
      }
    },
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 0);
  },
};
</script>
<style scoped>
#box {
  box-sizing: border-box;
  background: #324057;
  width: 100vw;
  height: 100vh;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  color: white;
  text-align: center;
  font-size: 30px;
  margin: 30px 0;
}
.box2 {
  background: #bdbdbd;
  padding: 50px 50px 20px 50px;
}
.el-input {
  width: 550px;
  outline: none;
}
.el-button {
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-family: "微软雅黑";
}
p {
  color: red;
}
</style>