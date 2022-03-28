let Mock = require("mockjs");
Mock.mock("/api/login", "post", function (config) {
    let obj = JSON.parse(config.body);
    console.log(obj.username);
    let username = obj.username;
    let password = obj.password;
    if (username === "admin" && password === 123456) {
        return {
            status: 200,
            message: "请求成功！",
            data: {
                username: "admin",
                password: 123456,
                token: "rrrrrrr"
            }
        }
    } else {
        return {
            status: 200,
            message: "失败！",
            data: {
                message: "请求失败"
            }
        }
    }


})