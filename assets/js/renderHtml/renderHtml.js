import { user } from '../api/api.js';
import { seePvtMsgCondition, scrollToLastMsg } from '../helpers/functions.js';
import {selectContact, selectMsgType} from '../events/click.js';

function renderOnlineContacts(response){
    const onlineContacts = response.data;
    const contactList = document.querySelector('.contacts ul');

    contactList.innerHTML = `
    <li class="checked" data-test="all">
        <ion-icon name="people"></ion-icon>
        <span class="contact-name">Todos</span>
        <ion-icon class="checkmark" name="checkmark-outline"></ion-icon>
    </li>
    `;

    for (const i of onlineContacts){
        contactList.innerHTML += `
        <li data-test="participant">
            <ion-icon name="person-circle"></ion-icon>
            <span class="contact-name">${i.name}</span>
            <ion-icon data-test="check" class="checkmark invisible" name="checkmark-outline"></ion-icon>
        </li>
        `;
    }

    selectContact();
    selectMsgType();
}

function renderStatusMsg(msg){
    return `
    <li class="statusMsg" data-test="message">
        <div class="hour">(<span>${msg.time}</span>)</div>
        <p><span class="name">${msg.from}</span> ${msg.text}</p>
    </li>
    `;
}

function renderForAllMsg(msg){
    return `
    <li class="toAllMsg" data-test="message">
        <div class="hour">(<span>${msg.time}</span>)</div>
        <p>
            <span class="name">${msg.from}</span> para <span class="name">${msg.to}</span>: <span class="text">${msg.text}</span>
        </p>
    </li>
    `;
}

function renderPvtMsg(msg){
    return `
   <li class="pvtMsg" data-test="message">
       <div class="hour">(<span>${msg.time}</span>)</div>
       <p>
       <span class="name">${msg.from}</span> reservadamente para <span class="name">${msg.to}</span>: <span class="text">${msg.text}</span>
       </p>
   </li>
  `;
}

function renderMsgs(response){
    const msgList = document.querySelector('.chat ul');
    const mesages = response.data;
    const loggedUser = user.name;

    msgList.innerHTML = '';

        for (const mesage of mesages){
            const type = mesage.type;

            if (type === 'private_message' && seePvtMsgCondition(loggedUser, mesage)){
                msgList.innerHTML += renderPvtMsg(mesage);

            } else if (type === 'message'){
                    msgList.innerHTML += renderForAllMsg(mesage);
            } else if (type === 'status'){
                    msgList.innerHTML += renderStatusMsg(mesage);
            }

        }

    scrollToLastMsg();
}




export { renderMsgs, renderOnlineContacts };