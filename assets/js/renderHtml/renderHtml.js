import { user } from '../api/api.js';
import { seePvtMsgCondition } from '../helpers/functions.js';


function statusMsg(msg){
    return `
    <li class="statusMsg">
        <div class="hour">(<span>${msg.time}</span>)</div>
        <p><span class="name">${msg.from}</span> ${msg.text}</p>
    </li>
    `;
}

function forAllMsg(msg){
    return `
    <li class="toAllMsg">
        <div class="hour">(<span>${msg.time}</span>)</div>
        <p><span class="name">${msg.from}</span> para <span class="name">${msg.to}</span>: <span class="text">Bom dia</span></p>
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

    for (let mesage of mesages){
        const type = mesage.type;

        if (type === 'private_message' && seePvtMsgCondition(loggedUser, mesage)){
            msgList.innerHTML += renderPvtMsg(mesage);
            
        } else if (type === 'message'){
                msgList.innerHTML += forAllMsg(mesage);
        } else{
                msgList.innerHTML += statusMsg(mesage);
        }
        
    }
}




export { renderMsgs };