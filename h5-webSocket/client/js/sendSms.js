import {client} from './index.js';
import {getInfo} from './getInfo.js';
import {close} from './getName.js'


//获取
const btn = document.querySelector('button');
const stin = document.querySelector('input')


getInfo()
close()


// 点击发送输出内容
btn.onclick = sendSMS
// 回车发送内容
document.onkeydown = function( e ) {
    if ( e.keyCode == 13 ){
        sendSMS ()
    }
}
function sendSMS(){
    const val = stin.value;
    if( val ){
        client.send( val );
        stin.value = ''
    }else{
        alert( '不能发送空白信息' )
    }
    
}


