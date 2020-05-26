//弹框
import { client } from './index.js'
const nameBox = document.querySelector('.name-box');
const cancel = document.querySelector('#cancel');
const confirm = document.querySelector('#confirm');
const user = document.querySelector('#username');
function closeNameBox() {
    nameBox.style.display = 'none';
}
let close = function () {
    cancel.onclick = closeNameBox;
    confirm.onclick = function () {
        window.userName = user.value;
        // 第一次连接服务器之后的发送
        client.send(`${window.userName}进入聊天室`)
        closeNameBox()
    }
}
export { close }