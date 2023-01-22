import { apiRequests } from '../api/api.js';
import { setMsgData, clearTextArea } from '../helpers/functions.js';


document.querySelector('textarea').addEventListener('keydown',(e)=>{
    const keyToSentMsg = 'Enter';
    if (e.key === keyToSentMsg){
        setMsgData();
        e.preventDefault();
        apiRequests.sendMsgs();
        clearTextArea();
    }

});




export {};