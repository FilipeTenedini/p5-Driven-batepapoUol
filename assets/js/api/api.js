import { getData } from '../functions/functions.js';

const BASE = "https://mock-api.driven.com.br/api/v6/uol";


let obj;

const apiFunc = {

    userLogin: () => {
        obj = getData();
        
        axios
        .post(`${BASE}/participants`, obj)
        .then( () => apiFunc.viewMsgs() )
        .catch( (e) => console.log(e) ); //descobrir qual tipo de erro e tratar
    },

    keepLogedIn: () => {
        axios
        .post(`${BASE}/status`, obj)
        .then(()=>console.log('manteu'))
        .catch();
    },

    viewMsgs: () => {
        axios
        .get(`${BASE}/messages`)
        .then(seeMsgSuccess)
        .catch(seeMsgFail);
    },

}

function seeMsgSuccess(response){
    console.log(response)
}

function seeMsgFail(response){
    console.log(response)
}

const holdLogin = () => setInterval(apiFunc.keepLogedIn, 5000);



apiFunc.userLogin();
holdLogin();

export {};