import { user, msgData, } from '../api/api.js';


function getData(){
    const name = prompt('Qual seu nome?');

    return {name: name};
}

function seePvtMsgCondition(loggedUser, msg){
    if (loggedUser === msg.to || loggedUser === msg.from){
        return true;
    } return false;
}

function scrollToLastMsg(){
    const lastMsg = document.querySelector('ul').lastElementChild;

    lastMsg.scrollIntoView();
}

function setMsgData(){
    const msgText = document.querySelector('textarea').value;

    msgData.from = user.name;
    msgData.to = 'Todos';
    msgData.text = msgText;
    msgData.type = "message";
}

function clearTextArea(){
    document.querySelector('textarea').value = '';
}
export { getData, seePvtMsgCondition, scrollToLastMsg, setMsgData, clearTextArea };