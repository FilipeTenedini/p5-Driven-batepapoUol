import { getData } from '../helpers/functions.js';
import { renderMsgs, renderOnlineContacts } from '../renderHtml/renderHtml.js';
import {} from '../events/click.js';

const BASE = "https://mock-api.driven.com.br/api/v6/uol";


let user;
let msgData = {}

const apiRequests = {

    userLogin: () => {
        user = getData();
        
        axios
        .post(`${BASE}/participants`, user)
        .then(apiFunctions.setUserConfig)
        .catch(apiFunctions.newLogin);
    },

    keepLoggedIn: () => {
        axios
        .post(`${BASE}/status`, user)
        .catch(apiFunctions.logoffUser);
    },

    viewMsgs: () => {
        axios
        .get(`${BASE}/messages`)
        .then(renderMsgs)
        .catch(apiFunctions.loadMsgsFail);
    },

    sendMsgs: () => {
        axios
        .post(`${BASE}/messages`, msgData)
        .then(apiRequests.viewMsgs)
        .catch( (error) => console.log(error) );
    },

    getOnlineContacts: () => {
        axios
        .get(`${BASE}/participants`)
        .then(renderOnlineContacts)
        .catch((e)=>console.log(e))
    }

};
 

const apiFunctions = {

    setUserConfig: function setUserConfig(response){
        apiFunctions.ping();
        document.querySelector('.modal').classList.add('invisible');
        apiFunctions.updateChat();
        apiRequests.viewMsgs();
        apiRequests.getOnlineContacts();
        apiFunctions.updateOnlineContacts();
    },

    ping: function ping (){
                    const timeToConfirmStatus = 5000; 
                    setInterval(apiRequests.keepLoggedIn, timeToConfirmStatus);
    },

    newLogin: function newLogin(error){
                const existentUserError = 400;
                const timeToReload = 1000;
            
                if (error.response.status === existentUserError){
                    alert('Nome de usuario já existe. Tente outro!');
                    setTimeout(apiRequests.userLogin, timeToReload);
                } else {
                    alert('ERROR USER AREA Ocorreu um errinho aqui do nosso lado, tente recarregar a página <3');
                }
    
    },
    
    logoffUser: function logoffUser(response){
                    window.confirm('Usuário deslogado.');
                    window.location.reload();
    },
    
    loadMsgsFail: function loadMsgsFail(response){
                    alert('MSG ERROR AREA Ocorreu um errinho no nosso servidor, por favor recarregue a página <3');
    },

    updateChat: function updateChat(response){
        const timeToUpdateChatMsgs = 3000;
        setInterval(apiRequests.viewMsgs, timeToUpdateChatMsgs);
    },

    updateOnlineContacts: function updateOnlineContacts(){
        const timeToGetOnlineContacts = 10000;
        
        setInterval(apiRequests.getOnlineContacts, timeToGetOnlineContacts);
    }

};



export { user, apiRequests, msgData };