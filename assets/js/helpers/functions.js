import { user, msgData, } from '../api/api.js';


function getData(){
    const name = document.querySelector('.user-name').value;

    return {name: name};
}

function seePvtMsgCondition(loggedUser, msg){
    if (loggedUser === msg.to || loggedUser === msg.from){
        return true;
    } return false;
}

function scrollToLastMsg(){
    const lastMsg = document.querySelector('.chat ul').lastElementChild;

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

function openMenu(){
    const section = document.querySelector('section');
    section.classList.remove('invisible');
    
    setTimeout(()=>{
        section.classList.add('section-visible');
        section.querySelector('.contacts-area').classList.add('contacts-area-visible');
    },100)
}

function closeMenu(){
    const section = document.querySelector('section');

    section.classList.remove('section-visible');
    section.querySelector('.contacts-area').classList.remove('contacts-area-visible');

    setTimeout(()=>{
        section.classList.add('invisible');
    }, 500);
}


export { getData, 
        seePvtMsgCondition,
        scrollToLastMsg,
        setMsgData,
        clearTextArea,
        openMenu,
        closeMenu
    };