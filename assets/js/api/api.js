import { getData } from '../functions/functions.js';

const BASE = "https://mock-api.driven.com.br/api/v6/uol";

const apiFunc = {

    userLogin: () => {
        const obj = getData();

        const response = axios.post(`${BASE}/participants`, obj);

        response.then( () => apiFunc.viewMsgs() )
        response.catch( () => apiFunc.userLogin() )
    },


}




apiFunc.userLogin();

export {};