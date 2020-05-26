// 获取服务端信息，展示在界面上
import { client } from "./index.js";
const ul = document.querySelector('ul');
let getInfo = function(){
    client.onmessage = function(msg){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML =window.userName + ' - ' +filterDate(Date.now());
        li.innerHTML = msg.data;
        li.appendChild(p);
        ul.appendChild(li);
    }
}
function filterDate(val){ 
    const date = new Date(val);
    return date.getFullYear() + '/' + (date.getMonth() +1) + '/'+ date.getDate()
}
export {
    getInfo
}
