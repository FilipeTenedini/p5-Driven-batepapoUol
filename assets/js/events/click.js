import { apiRequests } from '../api/api.js';
import { setMsgData, clearTextArea, getData } from '../helpers/functions.js';

document.querySelector('.sendBtn ion-icon').addEventListener('click',()=>{

    setMsgData();
    clearTextArea();
    apiRequests.sendMsgs();

});




document.querySelector('.form-submit').addEventListener('click', (e)=> {
    e.preventDefault();

    getData();


    apiRequests.userLogin();
})

export {};