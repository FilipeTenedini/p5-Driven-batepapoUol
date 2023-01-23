import { apiRequests } from '../api/api.js';
import { setMsgData, clearTextArea, getData, openMenu, closeMenu } from '../helpers/functions.js';

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





export {};