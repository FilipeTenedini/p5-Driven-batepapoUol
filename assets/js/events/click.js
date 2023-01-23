import { apiRequests } from '../api/api.js';
import { setMsgData, clearTextArea, getData, openMenu, closeMenu, changeSelectedContact, changeSelectedType } from '../helpers/functions.js';

document.querySelector('.sendBtn ion-icon').addEventListener('click',()=>{

    setMsgData();
    clearTextArea();
    apiRequests.sendMsgs();

});


document.querySelector('.form-submit').addEventListener('click', (e)=> {
    e.preventDefault();

    getData();
    apiRequests.userLogin();
});

document.querySelector('.menu').addEventListener('click', openMenu);

document.querySelector('.contactsbg').addEventListener('click', closeMenu);


function selectContact(){
    const contactsList = document.querySelectorAll('.contacts ul li');

    contactsList.forEach((item)=>{
        item.addEventListener('click', ()=>{
            changeSelectedContact(item);
        });
    });
}

function selectMsgType(){
    const msgTypesList = document.querySelectorAll('.visible-choice .mode');

    msgTypesList.forEach((item)=>{
        item.addEventListener('click', ()=>{
            changeSelectedType(item);
        });
    });
}

export { selectContact, selectMsgType };