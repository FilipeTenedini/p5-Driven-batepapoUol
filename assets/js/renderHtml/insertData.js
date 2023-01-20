import { user } from '../api/api.js';
import { seePvtMsgCondition } from '../helpers/functions.js';

function renderMsgs(response){
    const mesages = response.data;
    const loggedUser = user.name;

    for (let mesage of mesages){
        const type = mesage.type;

        if (type === 'private_message'){
            if (seePvtMsgCondition(loggedUser, mesage)){
                console.log('pvtMsgCondition') // mensagem privada e já temos as condições.
            }
        } else {
            console.log(mesage) // todas as outras mensagens.
        }
    }
}

export { renderMsgs };