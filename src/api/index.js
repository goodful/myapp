// 封装api
import axios from "axios";
let instance = new axios.create({
    baseUrl:"/api",
    timeout:3000
})
export default instance