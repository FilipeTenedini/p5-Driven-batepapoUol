import { user, msgData, } from '../api/api.js';


function getData(){
    const name = document.querySelector('.user-name').value;

    return {name};
}

function setLoading(){
    document.querySelector('form').classList.add('invisible');
    document.querySelector('.loading').classList.remove('invisible');
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
    const msgTo = document.querySelector('.checked .contact-name').innerHTML;
    const thisType = document.querySelector('.selected').getAttribute('type');

    msgData.from = user.name;
    msgData.to = msgTo;
    msgData.text = msgText;
    msgData.type = thisType;
}

function clearTextArea(){
    document.querySelector('textarea').value = '';
}

function openMenu(){
    const section = document.querySelector('section');
    const timeToOpenMenu = 100;
    section.classList.remove('invisible');

    setTimeout(()=>{
        section.classList.add('section-visible');
        section.querySelector('.contacts-area').classList.add('contacts-area-visible');
    }, timeToOpenMenu);
}

function closeMenu(){
    const section = document.querySelector('section');
    const timeToCloseMenu = 500;
    section.classList.remove('section-visible');
    section.querySelector('.contacts-area').classList.remove('contacts-area-visible');

    setTimeout(()=>{
        section.classList.add('invisible');
    }, timeToCloseMenu);
}

function changeMsgInfoView(){
    const msgInfo = document.querySelector('.msgInfos');
    const [msgTo, msgType] = msgInfo.querySelectorAll('span');

    msgTo.innerHTML = msgData.to;

    if(msgData.type === 'message'){
        msgType.innerHTML = '(publicamente)';
    }else{
        msgType.innerHTML = '(reservadamente)';
    }
}

function changeSelectedContact(item){
    let contactSelected = document.querySelector('.checked');

    if (contactSelected){

        contactSelected.querySelector('.checkmark').classList.toggle('invisible');
        contactSelected.classList.toggle('checked');

        item.classList.toggle('checked');
        item.querySelector('.checkmark').classList.toggle('invisible');
        contactSelected = document.querySelector('.checked');
    } else{
        item.classList.add('checked');
        item.querySelector('.checkmark').classList.toggle('invisible');
        contactSelected = document.querySelector('.checked');
    }

    setMsgData();
    changeMsgInfoView();

}

function changeSelectedType(item){
    let typeSelected = document.querySelector('.selected');

    typeSelected.querySelector('.checkmark').classList.toggle('invisible');
    typeSelected.classList.toggle('selected');

    item.classList.toggle('selected');
    item.querySelector('.checkmark').classList.toggle('invisible');

    typeSelected = document.querySelector('.selected');

    setMsgData();
    changeMsgInfoView();
}

export { getData,
        setLoading,
        seePvtMsgCondition,
        scrollToLastMsg,
        setMsgData,
        clearTextArea,
        openMenu,
        closeMenu,
        changeSelectedContact,
        changeSelectedType
    };