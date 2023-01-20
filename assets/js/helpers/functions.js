function getData(){
    const name = prompt('Qual seu nome?');

    return {name: name}
}

function seePvtMsgCondition(loggedUser, msg){
    if (loggedUser === msg.to || loggedUser === msg.from){
        return true;
    } return false;
}


export { getData, seePvtMsgCondition };