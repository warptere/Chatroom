// 界面展示的服务器
const express = require('express')
const app = express();
const path = require('path')
const PORT = 5050;
const HOST_NAME = 'localhost'
app.use(express.static(path.join(__dirname,'./client')))
app.listen(PORT,HOST_NAME,()=>{
    console.log(`网页的的url是：http://${HOST_NAME}:${PORT}`)
})