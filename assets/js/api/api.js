import { getData } from '../helpers/functions.js';
import { renderMsgs } from '../renderHtml/renderHtml.js';

const BASE = "https://mock-api.driven.com.br/api/v6/uol";


let user;

const apiRequests = {

    userLogin: () => {
        user = getData();
        
        axios
        .post(`${BASE}/participants`, user)
        .then(apiFunctions.userLogged)
        .catch(apiFunctions.newLogin);
    },

    keepLoggedIn: () => {
        axios
        .post(`${BASE}/status`, user)
        .catch(apiFunctions.loggedOutUser); // se o usuario ficar offline descobrir o tipo de erro e tratar.
    },

    viewMsgs: () => {
        axios
        .get(`${BASE}/messages`)
        .then(renderMsgs)
        .catch(apiFunctions.seeMsgFail);
    },

}

const apiFunctions = {

    newLogin: function newLogin(error){
                const existentUserError = 400;
                const timeToReload = 1000;
            
                if (error.response.status === existentUserError){
                    alert('Nome de usuario já existe. Tente outro!');
                    setTimeout(apiRequests.userLogin, timeToReload)
                } else {
                    alert('Ocorreu um errinho aqui do nosso lado, tente recarregar a página <3')
                }
    
    },

    holdLogin: function holdLogin (){
                    const timeToConfirmStatus = 5000; 
                    setInterval(apiRequests.keepLoggedIn, timeToConfirmStatus);
    },

    userLogged: function userLogged(response){
                    apiFunctions.holdLogin();
                    apiRequests.viewMsgs();
    },
    
    loggedOutUser: function loggedOutUser(response){
                        alert('Usuário deslogado.')
    },
    seeMsgFail: function seeMsgFail(response){
                    alert('Ocorreu um errinho no nosso servidor, por favor recarregue a página <3');
    }


}

apiRequests.userLogin();


export { user };