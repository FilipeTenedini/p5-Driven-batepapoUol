import { getData } from '../helpers/functions.js';
import { renderMsgs, renderOnlineContacts } from '../renderHtml/renderHtml.js';
import {} from '../events/click.js';

const BASE = "https://mock-api.driven.com.br/api/v6/uol";


let user;
const msgData = {};

const apiRequests = {

    userLogin: () => {
        user = getData();

        axios
        .post(`${BASE}/participants`, user)
        .then(()=>{
            const timeToConfirmStatus = 5000;
            setInterval(apiRequests.keepLoggedIn, timeToConfirmStatus);
            
            document.querySelector('.modal').classList.add('invisible');

            const timeToUpdateChatMsgs = 3000;
            setInterval(apiRequests.viewMsgs, timeToUpdateChatMsgs);

            const timeToGetOnlineContacts = 10000;
            setInterval(apiRequests.getOnlineContacts, timeToGetOnlineContacts);

            apiRequests.viewMsgs();
            apiRequests.getOnlineContacts();
        })
        .catch(()=>{
            const existentUserError = 400;
            const timeToReload = 1000;

            if (error.response.status === existentUserError){
                alert('Nome de usuario já existe. Tente outro!');
                setTimeout(window.location.reload(), timeToReload);
            } else {
                alert('Ocorreu um errinho aqui. A culpa foi nossa, apenas tente recarregar a página <3');
            }
        });
    },

    keepLoggedIn: () => {
        axios
        .post(`${BASE}/status`, user)
        .catch(()=>{
            window.confirm('Usuário deslogado.');
            window.location.reload();
        });
    },

    viewMsgs: () => {
        axios
        .get(`${BASE}/messages`)
        .then(renderMsgs)
        .catch(()=>{
            alert('Ocorreu um errinho no nosso servidor. Por favor recarregue a página <3')
        });
    },

    sendMsgs: () => {
        axios
        .post(`${BASE}/messages`, msgData)
        .then(apiRequests.viewMsgs)
        .catch(()=>{
            const error = document.querySelector('.error');
            const timeToView = 100;
            const timeToHidden = 2000;

            error.classList.remove('invisible');
            setTimeout(()=>{
                error.style.opacity = '1'
            }, timeToView);

            setTimeout(()=>{
                error.style.opacity = '0'
            }, timeToHidden);
            error.classList.add('invisible');        
        });
    },

    getOnlineContacts: () => {
        axios
        .get(`${BASE}/participants`)
        .then(renderOnlineContacts)
        .catch((e)=>console.log(e));
    }

};

export { user, apiRequests, msgData };