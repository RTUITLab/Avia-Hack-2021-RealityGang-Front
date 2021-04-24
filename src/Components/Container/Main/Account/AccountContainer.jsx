import React, {useEffect, useState} from "react";
import Account from "./Account";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../../../redux/message-reducer";

const AccountContainer = (props) => {

    const dispatch = useDispatch();
    const [findByLetters, setFindByLetters] = useState('')

    useEffect(()=> {
        dispatch(getMessages(findByLetters))
    }, [])

    const messages = useSelector(state => state.messages.messages);

    return (
        <Account messages={messages} setFindByLetters={setFindByLetters} findByLetters={findByLetters} />
    )
}

export default AccountContainer
