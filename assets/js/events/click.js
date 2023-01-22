import { apiRequests } from '../api/api.js';
import { setMsgData, clearTextArea } from '../helpers/functions.js';

document.querySelector('.sendBtn ion-icon').addEventListener('click',()=>{

    setMsgData();
    clearTextArea();
    apiRequests.sendMsgs();

});

export {};