import { getData } from '../helpers/functions.js';
import { renderMsgs } from '../renderHtml/insertData.js';

const BASE = "https://mock-api.driven.com.br/api/v6/uol";


let user;

const apiFunc = {

    userLogin: () => {
        user = getData();
        
        axios
        .post(`${BASE}/participants`, user)
        .then( () => apiFunc.viewMsgs() )
        .catch( (e) => console.log(e) ); //descobrir qual tipo de erro e tratar
    },

    keepLoggedIn: () => {
        axios
        .post(`${BASE}/status`, user)
        .catch(); // se o usuario ficar offline descobrir o tipo de erro e tratar.
    },

    viewMsgs: () => {
        axios
        .get(`${BASE}/messages`)
        .then(renderMsgs)
        .catch(seeMsgFail); // descobrir o tipo de erro e tratar. 
    },

}


function seeMsgFail(response){
    console.log(response)
}

function holdLogin (){
    const timeToConfirmStatus = 5000; 
    setInterval(apiFunc.keepLoggedIn, timeToConfirmStatus);

}



apiFunc.userLogin();
holdLogin();

export { user };