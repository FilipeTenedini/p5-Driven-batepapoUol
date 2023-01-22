import { user } from '../api/api.js';
import { seePvtMsgCondition, scrollToLastMsg } from '../helpers/functions.js';


function renderStatusMsg(msg){
    return `
    <li class="statusMsg">
        <div class="hour">(<span>${msg.time}</span>)</div>
        <p><span class="name">${msg.from}</span> ${msg.text}</p>
    </li>
    `;
}

function renderForAllMsg(msg){
    return `
    <li class="toAllMsg">
        <div class="hour">(<span>${msg.time}</span>)</div>
        <p><span class="name">${msg.from}</span> para <span class="name">${msg.to}</span>: <span class="text">${msg.text}</span></p>
    </li>
    `;
}

function renderPvtMsg(msg){
    return `
   <li class="pvtMsg">
       <div class="hour">(<span>${msg.time}</span>)</div>
       <p><span class="name">${msg.from}</span> reservadamente para <span class="name">${msg.to}</span>: <span class="text">${msg.text}</span></p>
   </li>
  `;
}

function renderMsgs(response){
    const msgList = document.querySelector('.chat ul');
    const mesages = response.data;
    const loggedUser = user.name;

    msgList.innerHTML = '';
    
        for (let mesage of mesages){
            const type = mesage.type;

            if (type === 'private_message' && seePvtMsgCondition(loggedUser, mesage)){
                msgList.innerHTML += renderPvtMsg(mesage);
                
            } else if (type === 'message'){
                    msgList.innerHTML += renderForAllMsg(mesage);
            } else{
                    msgList.innerHTML += renderStatusMsg(mesage);
            }
            
        }
        
    scrollToLastMsg();
}




export { renderMsgs };