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
    const msgTo = document.querySelector('.checked .contact-name').innerHTML;
    const thisType = document.querySelector('.selected').getAttribute('type')
    
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

function changeMsgInfoView(){
    const contactSelected = document.querySelector('.checked .contact-name').innerHTML;;
    const msgType = document.querySelector('.selected').getAttribute('type');
    const msgInfo = document.querySelector('.msgInfos');
    const msgTo = msgInfo.querySelectorAll('span')[0];
    const msgSetter = msgInfo.querySelectorAll('span')[1];

    msgTo.innerHTML = contactSelected;
    if(msgType === 'message'){
        msgSetter.innerHTML = '(publicamente)'
    }else{
        msgSetter.innerHTML = '(reservadamente)'
    }
}

function changeSelectedContact(item){
    let contactSelected = document.querySelector('.checked');

    contactSelected.querySelector('.checkmark').classList.toggle('invisible');
    contactSelected.classList.toggle('checked');

    item.classList.toggle('checked');
    item.querySelector('.checkmark').classList.toggle('invisible');

    contactSelected = document.querySelector('.checked');
    
    changeMsgInfoView()
}


function changeSelectedType(item){
    let typeSelected = document.querySelector('.selected');

    typeSelected.querySelector('.checkmark').classList.toggle('invisible');
    typeSelected.classList.toggle('selected');

    item.classList.toggle('selected');
    item.querySelector('.checkmark').classList.toggle('invisible');

    typeSelected = document.querySelector('.selected');

    changeMsgInfoView()
}

export { getData, 
        seePvtMsgCondition,
        scrollToLastMsg,
        setMsgData,
        clearTextArea,
        openMenu,
        closeMenu,
        changeSelectedContact,
        changeSelectedType
    };